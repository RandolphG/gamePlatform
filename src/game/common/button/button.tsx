import React from "react";
import { Link } from "react-router-dom";
import "./styles/_buttonStyles.scss";

const Button = ({ title, url }: any) => {
  return (
    <Link to={url} className="container">
      <a className="btn effect01">
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default Button;
