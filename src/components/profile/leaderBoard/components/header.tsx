import React, { Fragment } from "react";
import "./_headerStyles.scss";

const Header = () => (
  <Fragment>
    <div id="base">
      <a href="https://www.ea.com/fr-fr/games/need-for-speed/need-for-speed-payback">
        <div>
          <img
            src="http://gamemag.ru/images/uploads/4080/760632a82e03e5a26a614ec6f56a09fc.jpg"
            className="long"
            alt="run"
          />
          <img
            src="https://medias.micromania.fr/catalog/product/cache/1/micromania_main_logo/9df78eab33525d08d6e5fb8d27136e95/l/o/logo-title_13.png"
            className="title"
            alt="nfs-payback"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/1024px-Electronic-Arts-Logo.svg.png"
            className="ea"
            alt="ea"
          />
          <img
            src="https://psmedia.playstation.com/is/image/psmedia/psn-icon-new-to-ps4-product-grid-02-eu-14jun18?$Icon$"
            className="ps"
            alt="ps4"
          />
          <img
            src="http://www.iconarchive.com/download/i98465/dakirby309/simply-styled/Xbox.ico"
            className="x"
            alt="xbox-one"
          />
          <div className="spin2">
            <div className="spinner" />
          </div>
          <div className="slid1" />
          <div className="butd">
            <button className="but">Take the wheel !</button>
          </div>
          <div className="h2">
            <h1 className="h1">Available now</h1>
          </div>
        </div>
      </a>
    </div>
  </Fragment>
);
export default Header;
