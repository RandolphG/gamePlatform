import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coins from "../../../game/homePage/assets/elements/coins.png";
import dialog from "../../../game/homePage/assets/elements/dialog.png";
import keys from "../../../game/homePage/assets/elements/keys.png";
import mail from "../../../game/homePage/assets/elements/mail.png";
import playerLevel from "../../../game/homePage/assets/elements/playerLevelStatus.png";
import rubies from "../../../game/homePage/assets/elements/rubies.png";
import settings from "../../../game/homePage/assets/elements/settings.png";
import treasure from "../../../game/homePage/assets/elements/treasure.png";

const Header = () => {
  const onClick = () => {};

  const MainCurrency = () => (
    <div className="mainCurrency">
      <img className="keys" src={keys} alt="keys" />
      <img className="coins" src={coins} alt="coins" />
      <img className="rubies" src={rubies} alt="rubies" />
    </div>
  );

  const MainOptions = () => (
    <div className="mainOptions">
      <img className="mail" src={mail} alt="mail" />
      <img className="chat" src={dialog} alt="dialog" />
      <img className="treasure" src={treasure} alt="treasure" />
      <Link to="settings">
        <img className="settings" src={settings} alt="settings" />
      </Link>
    </div>
  );

  const PlayerLevel = () => (
    <img
      className="playerLevel"
      src={playerLevel}
      onClick={onClick}
      alt="playerLevel"
    />
  );

  const Topbar = () => (
    <div className="topbar">
      <PlayerLevel />
      <MainCurrency />
      <MainOptions />
    </div>
  );

  return (
    <header>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <Topbar />
      </motion.div>
    </header>
  );
};

export default Header;
