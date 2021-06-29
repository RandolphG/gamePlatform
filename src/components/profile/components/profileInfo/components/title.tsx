import React, { Fragment } from "react";

const Title = ({ onClick }: any) => {
  return (
    <span onClick={onClick}>
      <h2 className="profileInfo_title">Randi Gordon</h2>
    </span>
  );
};
export default Title;
