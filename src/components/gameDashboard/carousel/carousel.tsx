import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./styles/_carouselStyles.scss";

const Carousel = () => {
  const [draggable, setDraggable] = useState(false);
  const baseUrl = `https://picsum.photos/id/`;
  let xPos: any = 0;

  useEffect(() => {
    gsap
      .timeline()
      .set(".carouselRing", { rotationY: 180 }) //set initial rotationY so the parallax jump happens off screen
      .set(".carouselCardContainer", {
        /* apply transform rotations to each image */
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        background: "black",
        // backgroundImage: (i) => `url(${baseUrl}${i + 32}/600/400/)`,
        backgroundPosition: (i) => getBgPos(i),
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

  function mouseEnter(e: any) {
    let current = e.currentTarget;
    gsap.to(".carouselCardContainer", {
      opacity: (i, t) => (t == current ? 1 : 0.5),
      ease: "power3",
    });
  }

  function mouseLeave(e: any) {
    gsap.to(".carouselCardContainer", { opacity: 1, ease: "power2.inOut" });
    gsap.set(".carouselRing", { cursor: "grab" });
  }

  function drag(e: any) {
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
  }

  function dragStart(e: any) {
    setDraggable(true);

    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set(".carouselRing", { cursor: "grabbing" });

    xPos = Math.round(e.clientX);
    document.addEventListener("mousemove touchmove", drag);
  }

  function dragEnd(e: any) {
    setDraggable(false);

    gsap.set(".carouselRing", { cursor: "grab" });
    document.removeEventListener("mousemove touchmove", drag);
  }

  /* returns the background-position string to create parallax movement in each image */
  function getBgPos(i: any) {
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
  }

  return (
    <div className="carousel">
      <div className="carouselStage">
        <div className="carouselContainer">
          <div
            className="carouselRing"
            onMouseDown={dragStart}
            onMouseUp={dragEnd}
            onMouseMove={(e) => {
              if (draggable) {
                drag(e);
              } else return {};
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, idx) => (
              <div
                key={idx}
                className="carouselCardContainer"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <div className="carouselImg">
                  <div className="carouselImgTitle">game title</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
