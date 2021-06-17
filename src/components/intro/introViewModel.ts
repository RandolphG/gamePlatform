import { useEffect, useState } from "react";
import gsap from "gsap";

export const IntroViewModel = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    gsap.set(".main", {
      position: "fixed",
      background: "#fff",
      width: "100%",
      maxWidth: "1200px",
      height: "100vh",
      top: 0,
      left: "50%",
      x: "-50%",
    });
  });

  const scrollToBottom = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scrollDist",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
      .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);
  };

  const onMouseEnter = () => {
    gsap.to(".arrow", {
      y: 10,
      duration: 0.8,
      ease: "back.inOut(3)",
      overwrite: "auto",
    });
  };

  const onMouseLeave = () => {
    gsap.to(".arrow", {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  function onClick() {
    scrollToBottom();
    setTimeout(() => {
      setShow(true);
    }, 250);
  }

  return {
    onClick,
    onMouseEnter,
    onMouseLeave,
    show,
  };
};
