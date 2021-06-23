import React from "react";
import { Link } from "react-router-dom";
import "./styles/_button.scss";

const Button = () => {
  // const path = `${location.pathname}/${gameID}`;

  return (
    <Link className="link" to="./">
      {/* <Link className="link" to={`${location.pathname}/${gameID}`}> */}
      <div className="button">
        <span />
        <span />
        <span />
        <span />
        Play
      </div>
    </Link>
  );
};

export default Button;
