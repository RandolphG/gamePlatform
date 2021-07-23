import React, { useMemo } from "react";
import "./styles/_diagonalCarouselStyles.scss";
import { UI } from "../../gameDashboard/ui";
import { KeyPressAnimation } from "./components";
import { DiagonalCarouselModel } from "./diagonalCarouselModel";

const DiagonalCarousel = () => {
  const { onKeyUp, onKeyDown, onClick, onWheel, sliderRef, ctrl, images } =
    DiagonalCarouselModel();

  const Container = ({ children }: any) => (
    <div
      className="slideContainer"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onClick={onClick}
      onWheel={onWheel}
    >
      {children}
    </div>
  );

  const Image = ({ imageUrl, idx }: { imageUrl: string; idx: number }) => (
    <div key={idx} className="slide">
      <img alt="images" src={imageUrl} />
    </div>
  );

  const SlideShow = () => (
    <div id="slider-wrapp">
      <div id="slider" ref={sliderRef} className={ctrl ? undefined : `_3D`}>
        {images.map(({ imageUrl }, idx, array) => {
          return (
            <div key={idx} className="slide">
              <img alt="images" src={imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className="slideContainer"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onClick={onClick}
      onWheel={onWheel}
    >
      <KeyPressAnimation />
      <div id="slider-wrapp">
        <div id="slider" ref={sliderRef} className={ctrl ? undefined : `_3D`}>
          {images.map(({ imageUrl }, idx, array) => {
            return (
              <div key={idx} className="slide">
                <img alt="images" src={imageUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiagonalCarousel;
