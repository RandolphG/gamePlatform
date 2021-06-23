import React, { FC } from "react";

interface IArrowBtnSelect {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const ArrowBtnSelect: ({
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IArrowBtnSelect) => JSX.Element = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IArrowBtnSelect) => (
  <rect
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    id="arrowBtn"
    width="100"
    height="100"
    opacity="0"
    x="550"
    y="220"
    style={{ cursor: "pointer" }}
  />
);

export default ArrowBtnSelect;
