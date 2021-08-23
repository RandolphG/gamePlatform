import React from "react";
import "./styles/_buttonStyles.scss";

const Button = ({ id, title, setVisible }: any) => {
  return (
    <div className="container" onClick={(e): void => setVisible(id)}>
      <div className="btn effect01">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
