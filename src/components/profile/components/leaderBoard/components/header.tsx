import React, { Fragment } from "react";
import "./_headerStyles.scss";

const image01 =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fvideo-games&psig=AOvVaw0K5ud9jk5wKTIkuA5Ew2LB&ust=1624914532507000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDBpb7cuPECFQAAAAAdAAAAABAO";

const Header = () => (
  <Fragment>
    <div id="base">
      <a href="/#">
        <div>
          <img
            src="https://storage.pixteller.com/designs/designs-images/2021-01-05/01/youtube-video-react-reviews-simple-minimal-banner-1-5ff44a2b7b469.png"
            className="long"
            alt="run"
          />
          <img
            src="https://medias.micromania.fr/catalog/product/cache/1/micromania_main_logo/9df78eab33525d08d6e5fb8d27136e95/l/o/logo-title_13.png"
            className="title"
            alt="nfs-payback"
          />
          <img
            src="https://i.pinimg.com/736x/3a/fb/ea/3afbeadd4fba0fb3c0b58198dc958b82.jpg"
            className="ea"
            alt="ea"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/1513/6238/products/bioshock-infinite-poster-video-game-poster-booker-dewitt-elizabeth_1024x1024.jpg?v=1496321086"
            className="ps"
            alt="ps4"
          />
          <div className="x" />
          <div className="spin2">
            <div className="spinner" />
          </div>
          <div className="slid1" />
          <div className="butd">
            <button className="but">New challenge!</button>
          </div>
          <div className="h2">
            <h1 className="h1">new games available now</h1>
          </div>
        </div>
      </a>
    </div>
  </Fragment>
);
export default Header;
