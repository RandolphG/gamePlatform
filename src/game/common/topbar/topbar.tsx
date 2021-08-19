import React from "react";
import { useDispatch } from "react-redux";
import playerLevel from "../../homePage/assets/elements/playerLevelStatus.png";
import keys from "../../homePage/assets/elements/keys.png";
import coins from "../../homePage/assets/elements/coins.png";
import rubies from "../../homePage/assets/elements/rubies.png";
import mail from "../../homePage/assets/elements/mail.png";
import dialog from "../../homePage/assets/elements/dialog.png";
import treasure from "../../homePage/assets/elements/treasure.png";
import settings from "../../homePage/assets/elements/settings.png";
import "./styles/_topbarStyles.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { showSettings } from "../../settings";
import { Slider } from "../slider";

const Topbar = () => {
  const dispatch = useDispatch();
  function show() {
    dispatch(showSettings());
  }

  function onClick() {}

  const PlayerLevel = () => (
    <Link to="/homePage">
      <img
        className="playerLevel"
        src={playerLevel}
        onClick={onClick}
        alt="playerLevel"
      />
    </Link>
  );

  const MainCurrency = () => (
    <div className="mainCurrency">
      <img className="keys" src={keys} alt="keys" />
      <img className="coins" src={coins} alt="coins" />
      <img className="rubies" src={rubies} alt="rubies" />
    </div>
  );

  const MainOptions = () => (
    <div className="mainOptions">
      {/*<img className="mail" src={mail} alt="mail" />*/}
      {/*<img className="chat" src={dialog} alt="dialog" />*/}
      {/*<img className="treasure" src={treasure} alt="treasure" />*/}
      <img className="settings" src={settings} alt="settings" onClick={show} />
      <Slider />
    </div>
  );

  return (
    <motion.div
      className="topbar"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <PlayerLevel />
      <MainCurrency />
      <MainOptions />
    </motion.div>
  );
};

export default Topbar;
