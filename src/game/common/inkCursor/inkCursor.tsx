import React from "react";
import "./styles/_inkCursorStyles.scss";
import InkCursorViewModel from "./inkCursorView.Model";

const InkCursor = () => {
  InkCursorViewModel();
  return (
    <div className="cursorContainer">
      <svg version="1.1" width="800">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="page">
        <div className="page-bg">
          <div className="noise" />
        </div>
      </div>
      <div id="cursor" className="Cursor" />
    </div>
  );
};

export default InkCursor;
