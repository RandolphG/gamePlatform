import { useEffect, useRef, useState } from "react";

export const DiagonalCarouselModel = () => {
  const images = [
    { imageUrl: "https://preview.ibb.co/iHdNVn/1.jpg" },
    { imageUrl: "https://preview.ibb.co/mUm9An/2.jpg" },
    { imageUrl: "https://preview.ibb.co/hSL2Vn/3.jpg" },
    { imageUrl: "https://preview.ibb.co/jRAfGS/4.jpg" },
    { imageUrl: "https://preview.ibb.co/ksTNVn/5.jpg" },
    { imageUrl: "https://preview.ibb.co/jQhhVn/6.jpg" },
    { imageUrl: "https://preview.ibb.co/fD97wS/7.jpg" },
    { imageUrl: "https://preview.ibb.co/c9jJ37/8.jpg" },
    { imageUrl: "https://preview.ibb.co/iivEbS/9.jpg" },
    { imageUrl: "https://preview.ibb.co/fXW9An/10.jpg" },
  ];

  const [ctrl, setCtrl] = useState(false);

  let is3D = false;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  });

  function onKeyDown(e: any) {
    console.log(`KEYCODE`, e.keyCode);
    if (e.keyCode === 17) {
      setCtrl(true);
    }
  }

  function onKeyUp(e: any) {
    if (e.keyCode === 17) {
      setCtrl(false);
    }
    if (e.keyCode === 39 || e.keyCode == 40) {
      nextSlide();
      return;
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      prevSlide();
      return;
    }
  }

  function onMouseDown(e: any) {}

  function onMouseUp(e: any) {}

  function onWheel(e: any) {
    console.log(`wheel`, e);
  }

  function onClick(e: any) {
    console.log(`KEYCODE`, e.keyCode);
  }

  function nextSlide() {
    if (sliderRef && sliderRef.current) {
      let lastChildNode: any = sliderRef.current.lastChild;
      let firstChildNode: any = sliderRef.current?.firstChild;
      lastChildNode.className = "slide active";
      const oldChild: any = sliderRef.current?.removeChild(lastChildNode);

      setTimeout(() => {
        sliderRef.current?.insertBefore(oldChild, firstChildNode);

        if (sliderRef && sliderRef.current) {
          lastChildNode.className = "slide";
        }
      });
    }
  }

  function prevSlide() {
    if (sliderRef && sliderRef.current) {
      const firstChildNode: any = sliderRef.current?.firstChild;
      const oldChild: any = sliderRef.current?.removeChild(firstChildNode);
      firstChildNode.className = "slide active";

      sliderRef.current?.appendChild(oldChild);
      setTimeout(() => {
        firstChildNode.className = "slide";
      });
    }
  }

  return {
    onKeyDown,
    onKeyUp,
    onClick,
    onWheel,
    sliderRef,
    ctrl,
    images,
  };
};
