import React, { useEffect, useRef } from "react";
import "./styles/_cursorStyles.scss";

// @ts-ignore
export default function Cursor() {
  const cursorEl: any = useRef();

  useEffect(() => {
    const touch = matchMedia("(hover: none), (pointer: coarse)").matches;

    if (!touch) {
      const cursor: any = cursorEl.current;
      const mouse = { x: -100, y: -100 };
      const pos = { x: 0, y: 0 };
      const speed = 0.15;

      const updateCoordinates = (e: any) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      window.addEventListener("mousemove", updateCoordinates);

      const updatePosition = () => {
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;
        cursor.style.transform = `translate3d(${pos.x}px ,${pos.y}px, 0)`;
      };

      /* eslint-disable */
      // @ts-ignore

      function loop() {
        updatePosition();
        requestAnimationFrame(loop);
      }
      /* eslint-enable */

      requestAnimationFrame(loop);

      // Case 1: no cursors
      const noCursor = document.querySelectorAll(".no-cursor");
      noCursor.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursor.style.opacity = 0;
        });
        element.addEventListener("mouseleave", () => {
          cursor.style.opacity = 1;
        });
        element.addEventListener("click", () => {
          cursor.style.opacity = 1;
        });
      });

      // Case 2: change cursor with casestudy text
      const caseStudyImg = document.querySelectorAll(".work-card .thumb");
      caseStudyImg.forEach((element) => {
        element.addEventListener("mouseenter", (e) => {
          // @ts-ignore

          const buttonCta = e.currentTarget!.dataset.cta;
          cursor.classList.add("active", `${buttonCta}`);
        });
        element.addEventListener("mouseleave", (e) => {
          // @ts-ignore
          const buttonCta = e.currentTarget!.dataset.cta;
          cursor.classList.remove("active", `${buttonCta}`);
        });
        element.addEventListener("click", (e) => {
          // @ts-ignore
          const buttonCta = e.currentTarget!.dataset.cta;
          cursor.classList.remove("active", `${buttonCta}`);
        });
      });

      // Case 3: moreworks thumb image
      const expandCursorWithImage = document.querySelectorAll(".img-cursor");
      expandCursorWithImage.forEach((element) => {
        element.addEventListener("mouseenter", (e) => {
          cursor.classList.add("expand");
          // @ts-ignore

          if (e.currentTarget.querySelector("img")) {
            // @ts-ignore

            const imageSrc = e.currentTarget.querySelector("img").src;
            const cursorBox = cursor.querySelector(".cursor-inner");
            cursorBox.style.backgroundImage = `url(${imageSrc})`;
          }
        });
        element.addEventListener("mouseleave", () => {
          cursor.classList.remove("expand");
          const cursorBox = cursor.querySelector(".cursor-inner");
          cursorBox.style.backgroundImage = "";
        });
        element.addEventListener("click", () => {
          cursor.classList.remove("expand");
          const cursorBox = cursor.querySelector(".cursor-inner");
          cursorBox.style.backgroundImage = "";
        });
      });
    }
  }, []);

  return (
    <>
      <div ref={cursorEl} className="cursor">
        <div className="cursor-inner" />
      </div>
    </>
  );
}
