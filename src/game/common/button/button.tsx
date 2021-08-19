import React from "react";
import "./styles/_buttonStyles.scss";

const Button = ({ title }: any) => {
  return (
    <div className="container">
      <a className="btn effect01">
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Button;
