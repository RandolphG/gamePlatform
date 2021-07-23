import React, { useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import "./styles/_carouselStyles.scss";
import { motion } from "framer-motion";

import image00 from "../../../images/_cliffHanger.png";
import image01 from "../../../images/_rabbitCover.png";
import image02 from "../../../images/_tiltCover.png";

const Carousel = () => {
  const [draggable, setDraggable] = useState(false);
  const baseUrl = `https://picsum.photos/id/`;
  let xPos: any = 0;

  useEffect(() => {
    gsap
      .timeline()
      // .set(".carouselRing", { rotationY: 180 }) //set initial rotationY so the parallax jump happens off screen
      .set(".carouselCardContainer", {
        /* apply transform rotations to each image */
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        background: "black",
        // backgroundImage: (i) => `url(${baseUrl}${i + 32}/600/400/)`,
        // backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
        borderRadius: 4,
      })
      .from(".carouselCardContainer", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })
      .add(() => {}, "-=0.5");

    document.addEventListener("mousedown touchstart", dragStart);
    document.addEventListener("mouseup touchend", dragEnd);

    return () => {
      document.removeEventListener("mousedown touchstart", dragStart);
      document.removeEventListener("mouseup touchend", dragEnd);
    };
  }, []);

  const mouseEnter = useCallback((e: any) => {
    let current = e.currentTarget;
    gsap.to(".carouselCardContainer", {
      opacity: (i, t) => (t == current ? 1 : 0.5),
      ease: "power3",
    });
  }, []);

  function mouseLeave(e: any) {
    gsap.to(".carouselCardContainer", { opacity: 1, ease: "power2.inOut" });
    gsap.set(".carouselRing", { cursor: "grab" });
  }

  const drag = useCallback((e: any) => {
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to(".carouselRing", {
      rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => {
        gsap.set(".carouselCardContainer", {
          backgroundPosition: (i) => getBgPos(i),
        });
      },
    });

    xPos = Math.round(e.clientX);
  }, []);

  function dragStart(e: any) {
    setDraggable(true);

    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set(".carouselRing", { cursor: "grabbing" });

    xPos = Math.round(e.clientX);
    // document.addEventListener("mousemove touchmove", drag);
  }

  function dragEnd(e: any) {
    setDraggable(false);

    gsap.set(".carouselRing", { cursor: "grab" });
    document.removeEventListener("mousemove touchmove", drag);
  }

  /* returns the background-position string to create parallax movement in each image */
  const getBgPos = useCallback((i: any) => {
    return (
      100 -
      (gsap.utils.wrap(
        0,
        360 /*@ts-ignore*/,
        gsap.getProperty(".carouselRing", "rotationY") - 180 - i * 36
      ) /
        360) *
        500 +
      "px 0px"
    );
  }, []);

  const carouselMotionSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div {...carouselMotionSettings} className="carousel">
      <div className="carouselStage">
        <div className="carouselUI">
          <div className="topUI">
            <div className="keys">x2412 +</div>
            <div className="coins">2,412,132 +</div>
            <div className="ruby">240 +</div>
            <div className="medallion">792/1000</div>
            <div className="medallion">treasure</div>
            <div className="medallion">message</div>
            <div className="medallion">settings</div>
          </div>

          <div className="countDownUI">count Down</div>
          <div className="bottomUI">
            <div className="heroes">heroes</div>
            <div className="quests">quests</div>
            <div className="content">content</div>
            <div className="shop">shop</div>
          </div>
        </div>
        <div className="carouselContainer">
          <div
            className="carouselRing"
            onMouseDown={dragStart}
            onMouseUp={dragEnd}
            onMouseMove={(e) => {
              if (draggable) {
                drag(e);
              } else {
                return {};
              }
            }}
          >
            {[
              { name: "name", image: image00 },
              { name: "name", image: image01 },
              { name: "name", image: image02 },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
              { name: "name", image: "image" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="carouselCardContainer"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <motion.div
                  className="carouselImg" /*@ts-ignore*/
                  // style={{ "--image": image02 }}
                >
                  <div className="carouselImgTitle">game title</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
