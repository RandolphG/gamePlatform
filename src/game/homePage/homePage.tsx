import React from "react";
import "./styles/_homePageStyles.scss";
import playerLevel from "./assets/elements/playerLevelStatus.png";
import keys from "./assets/elements/keys.png";
import coins from "./assets/elements/coins.png";
import rubies from "./assets/elements/rubies.png";
import settings from "./assets/elements/settings.png";
import mail from "./assets/elements/mail.png";
import dialog from "./assets/elements/dialog.png";
import treasure from "./assets/elements/treasure.png";
import 영웅 from "./assets/elements/영웅.png";
import 엽젹 from "./assets/elements/엽젹.png";
import 소셜 from "./assets/elements/소셜.png";
import 길드 from "./assets/elements/길드.png";
import 콘텐츠 from "./assets/elements/콘텐츠.png";
import 소환상점 from "./assets/elements/소환상점.png";
import 상점 from "./assets/elements/상점.png";
import 버프상점 from "./assets/elements/버프상점.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage_container">
        <img className="playerLevel" src={playerLevel} alt="playerLevel" />
        <div className="mainCurrency">
          <img className="keys" src={keys} alt="keys" />
          <img className="coins" src={coins} alt="coins" />
          <img className="rubies" src={rubies} alt="rubies" />
        </div>
        <div className="mainOptions">
          <img className="settings" src={settings} alt="settings" />
          <img className="mail" src={mail} alt="mail" />
          <img className="chat" src={dialog} alt="dialog" />
          <img className="treasure" src={treasure} alt="treasure" />
        </div>
        <div className="mainLinks">
          <img className="영웅" src={영웅} alt="영웅" />
          <img className="엽젹" src={엽젹} alt="엽젹" />
          <img className="소셜" src={소셜} alt="소셜" />
          <img className="길드" src={길드} alt="길드" />
          <img className="콘텐츠" src={콘텐츠} alt="콘텐츠" />
          <img className="소환상점" src={소환상점} alt="소환상점" />
          <img className="상점" src={상점} alt="상점" />
          <img className="버프상점" src={버프상점} alt="버프상점" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
