import React, { useEffect } from "react";
import { RENDERER } from "./RENDERER";

const HomeIngParticles = () => {
  useEffect(() => {
    const renderer = new RENDERER();
  });

  return (
    <div>
      <canvas
        id="jsi-particle-container"
        className="homingParticlesContainer"
      />
    </div>
  );
};

export default HomeIngParticles;
