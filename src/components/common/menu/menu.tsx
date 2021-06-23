import React from "react";
import "./styles/_menuStyles.scss";
import { MediaIconsPopups } from "./mediaIconsPopups";
import { Topbar } from "./topbar";

const Menu = () => {
  return (
    <div className="menu">
      <MediaIconsPopups />
      <Topbar />
    </div>
  );
};

export default Menu;
