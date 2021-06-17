import React, { useEffect } from "react";
import "./styles/_styles.scss";
import { Liquid } from "./liquid";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LiquidButton = () => {
  const history = useHistory();

  useEffect(() => {
    let button = new Liquid();
    /*
    const redraw = () => {
      button.initOrigins();
    };*/
  }, []);

  const play = () => {
    history.push("/dashboard");
  };

  return (
    <Link to="./rabbit">
      <canvas
        className="canvas"
        id="canvas"
        onClick={() => {
          play();
          console.log(`clicked`);
        }}
      />
    </Link>
  );
};

export default LiquidButton;
