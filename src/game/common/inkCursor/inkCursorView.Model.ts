import React, { useEffect } from "react";
import { Circle } from "./Circle";
import { Dot } from "./Dot";
import { HoverButton } from "./HoverButton";

const InkCursorViewModel = () => {
  useEffect(() => {
    const cursor: HTMLElement | null = document.getElementById("cursor");
    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame: any = 0;
    let mousePosition = { x: 0, y: 0 };
    let dots: Dot[] = [];
    let timeoutID: any;
    let idle = false;
    let hoverButton;

    function init() {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      hoverButton = new HoverButton("button");
      // eslint-disable-next-line no-new
      new Circle("circle-content");
      lastFrame += new Date();
      buildDots();
      render(lastFrame);
    }

    /*function limit(value, min, max) {
            return Math.min(Math.max(min, value), max);
        }*/

    function startIdleTimer() {
      timeoutID = setTimeout(goInactive, idleTimeout);
      idle = false;
    }

    function resetIdleTimer() {
      clearTimeout(timeoutID);
      startIdleTimer();
    }

    function goInactive() {
      idle = true;
      /*for (let dot of dots) {
              dot.lock();
            }
            */
      dots.forEach((dot) => dot.lock());
    }

    function buildDots() {
      for (let i = 0; i < amount; i++) {
        let dot = new Dot(i, width, cursor, idle, sineDots);
        dots.push(dot);
      }
    }

    const onMouseMove = (event: any) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const onTouchMove = (event: any) => {
      mousePosition.x = event?.touches[0].clientX - width / 2;
      mousePosition.y = event?.touches[0].clientY - width / 2;
      resetIdleTimer();
    };

    const render = (timestamp: any) => {
      const delta = timestamp - lastFrame;
      positionCursor(delta);
      lastFrame = timestamp;
      requestAnimationFrame(render);
    };

    const positionCursor = (delta: number) => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, dots) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    init();
  });
};

export default InkCursorViewModel;
