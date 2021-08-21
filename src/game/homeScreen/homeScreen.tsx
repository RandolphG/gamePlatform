import React, { useEffect } from "react";
import {
  gsap,
  TweenMax,
  TimelineMax,
  Power2,
  Circ,
  Back,
  Elastic,
  Linear,
} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import "./styles/_homeScreenStyles.scss";

const HomeScreen = () => {
  useEffect(() => {
    console.clear();
    // @ts-ignore
    TweenMax.set("line", { drawSVG: 0 });
    TweenMax.set("#details", { xPercent: -50 });

    let strips = document.querySelectorAll("#strips rect");
    let tl = new TimelineMax({ delay: 0.75 });

    tl.staggerTo(
      "line",
      0.4,
      { drawSVG: true, ease: Power2.easeIn },
      0.25
      // "lineStart"
    );
    tl.staggerTo(
      "line",
      0.4,
      { drawSVG: "100% 100%", ease: Power2.easeOut },
      0.25
      // "lineStart+=0.25"
    );
    tl.to(
      "#slide1",
      1,
      { x: -13, y: 9, ease: Circ.easeOut },
      "lineStart+=0.25"
    );
    tl.to(
      "#slide2",
      1,
      { x: 11, y: 6.5, ease: Circ.easeOut },
      "lineStart+=0.5"
    );
    tl.staggerFrom(
      strips,
      1,
      { cycle: { x: [-1000, 1000] }, ease: Back.easeOut },
      0.15
    );
    tl.staggerTo(
      strips,
      0.4,
      {
        cycle: { x: [-50, 70, -70, 120], opacity: [0.5, 0.8] },
        repeat: 5,
        repeatDelay: 0.2,
        yoyoEase: Elastic.easeOut.config(2, 0.2),
        ease: Back.easeInOut,
      },
      -0.05
      // "+=1"
    );
    tl.to(
      "#cutPattern text",
      1,
      { text: "slice it & dice it", ease: Linear.easeNone },
      "+=0.5"
    );
    tl.staggerTo(
      strips,
      0.5,
      {
        cycle: { y: [-30, -10, 10, 30] },
        repeat: 3,
        repeatDelay: 0.3,
        yoyo: true,
        ease: Circ.easeInOut,
      },
      0
      // "+=1.5"
    );
    tl.to(
      "#cutPattern text",
      1,
      { text: "it's just SVG text", ease: Linear.easeNone },
      "+=0.5"
    );
    tl.staggerTo(
      strips,
      0.5,
      {
        cycle: {
          x: [-30, -160, 120, -50],
          y: [-30, -10, 10, 30],
          rotation: [-2, 2, -4, 4],
        },
        transformOrigin: "center center",
        repeat: 3,
        repeatDelay: 0.2,
        yoyo: true,
        ease: Back.easeInOut,
      },
      0.07
      // "+=1"
    );

    // gsap.GSDevTools.create();
  });

  return (
    <div>
      <p>Be careful in the woods!!!</p>
      <h1>
        Happy Hallow<span>tween</span>!
      </h1>
      <div className="stage">
        <svg id="demo" width="2000" height="1600" viewBox="0 0 1000 800">
          <defs>
            <pattern
              id="slicePattern"
              patternUnits="userSpaceOnUse"
              width="1000"
              height="800"
              x="0"
              y="0"
            >
              <text
                transform="translate(500 360)"
                textAnchor="middle"
                fontSize="220"
                fill="#fff"
              >
                SLICE IT!
              </text>
            </pattern>

            <pattern
              id="cutPattern"
              patternUnits="userSpaceOnUse"
              width="1000"
              height="800"
              x="0"
              y="0"
            >
              <text
                transform="translate(500 500)"
                textAnchor="middle"
                fontSize="90"
                fill="#fff"
              >
                cut text into strips
              </text>
            </pattern>
          </defs>

          <g fill="url(#slicePattern)">
            <polygon id="slide1" points="0,150 551,150 201,400 0,400" />
            <polygon id="slide2" points="549,150 1000,400 999,400 1000,150" />
            <polygon points="200,400 550,150 1000,400" />
          </g>

          <g id="strips" fill="url(#cutPattern)">
            <rect x="0" y="420" width="1000" height="31" />
            <rect x="0" y="450" width="1000" height="21" />
            <rect x="0" y="470" width="1000" height="21" />
            <rect x="0" y="490" width="1000" height="51" />
          </g>

          <line
            x1="550"
            y1="150"
            x2="200"
            y2="400"
            strokeWidth="1"
            stroke="white"
          />
          <line
            x1="550"
            y1="150"
            x2="1000"
            y2="400"
            strokeWidth="1"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeScreen;
