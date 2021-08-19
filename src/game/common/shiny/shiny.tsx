import React, { useRef } from "react";
import "./styles/_shinyStyles.scss";

const Shiny = ({ children, style }: any) => {
  const wrapperRef = useRef(null);

  function onMouseMove(e: any) {
    const root = document.documentElement;
    const wrapperValue: any = wrapperRef.current;
    const shadowSize: any =
      getComputedStyle(root).getPropertyValue("--shadow-size");
    const x: any = e.clientX - wrapperValue?.getBoundingClientRect().x;
    const y: any = e.clientY - wrapperValue?.getBoundingClientRect().y;

    root.style.setProperty("--shadow-left", x - shadowSize / 2 + "px");
    root.style.setProperty("--shadow-top", y - shadowSize / 2 + "px");
  }

  return (
    <div className="container" onMouseMove={onMouseMove}>
      <div className="container-xs">
        <main ref={wrapperRef} className="wrapper">
          <div className="item" style={style}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shiny;
