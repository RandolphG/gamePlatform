import React from "react";
import "./styles/_image.scss";

const Image = (title: string, imgUrl: string) => (
  <div className="image">
    <h3 className="image_title">{title}</h3>
    <figure>
      <img src={imgUrl} alt="img18" />
      <figcaption>
        <p>the chase is on..</p>
      </figcaption>
    </figure>
  </div>
);

export default Image;
