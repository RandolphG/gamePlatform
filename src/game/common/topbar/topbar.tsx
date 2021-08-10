import React from "react";
import playerLevel from "../../homePage/assets/elements/playerLevelStatus.png";
import keys from "../../homePage/assets/elements/keys.png";
import coins from "../../homePage/assets/elements/coins.png";
import rubies from "../../homePage/assets/elements/rubies.png";
import mail from "../../homePage/assets/elements/mail.png";
import dialog from "../../homePage/assets/elements/dialog.png";
import treasure from "../../homePage/assets/elements/treasure.png";
import settings from "../../homePage/assets/elements/settings.png";
import "./styles/_topbarStyles.scss";

const Topbar = () => {
  function onClick() {}

  const PlayerLevel = () => (
    <img
      className="playerLevel"
      src={playerLevel}
      onClick={onClick}
      alt="playerLevel"
    />
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
      <img className="mail" src={mail} alt="mail" />
      <img className="chat" src={dialog} alt="dialog" />
      <img className="treasure" src={treasure} alt="treasure" />
      <img className="settings" src={settings} alt="settings" />
    </div>
  );

  return (
    <div className="topbar">
      <PlayerLevel />
      <MainCurrency />
      <MainOptions />
    </div>
  );
};

export default Topbar;
