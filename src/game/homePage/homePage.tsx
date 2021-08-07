import React, { useState } from "react";
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
import 전투 from "./assets/elements/전투.png";
import 대전 from "./assets/elements/대전.png";
import 성장 from "./assets/elements/성장.png";
import 모험 from "./assets/elements/모험.png";
import 내정보 from "./assets/elements/내정보.png";
import 세나의달신규복귀꼴팁 from "./assets/elements/세나의달신규복귀꼴팁.png";
import 시간여행자의이야기 from "./assets/elements/시간여행자의이야기.png";
import 이벤트 from "./assets/elements/이벤트.png";
import 이벤트캘린더 from "./assets/elements/이벤트캘린더.png";
import 콘텐츠형황판 from "./assets/elements/콘텐츠형황판.png";
import 룬 from "./assets/elements/룬.png";
import 오늘의소식 from "./assets/elements/오늘의소식.png";
import 아르얀로드패키지 from "./assets/elements/아르얀로드패키지.png";
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
  // @ts-ignore
  const [show, setShow] = useState(true);
  const 내정보MotionSettings = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  function onClose() {
    setShow(false);
  }

  function onClick() {
    setShow(true);
  }

  return (
    <div className="homePage">
      <div className="homePage_container">
        <AnimatePresence exitBeforeEnter>
          {show && (
            <motion.div
              {...내정보MotionSettings}
              className="myInfo"
              onClick={onClose}
            >
              <img className="내정보" src={내정보} alt="내정보" />
            </motion.div>
          )}
        </AnimatePresence>
        <img
          className="playerLevel"
          src={playerLevel}
          onClick={onClick}
          alt="playerLevel"
        />
        <div className="eventsSection">
          <img
            className="세나의달신규복귀꼴팁"
            src={세나의달신규복귀꼴팁}
            alt="세나의달신규복귀꼴팁"
          />
          <img
            className="시간여행자의이야기"
            src={시간여행자의이야기}
            alt="시간여행자의이야기"
          />
          <img className="이벤트" src={이벤트} alt="이벤트" />
        </div>

        <div className="eventsSectionB">
          <img className="이벤트캘린더" src={이벤트캘린더} alt="이벤트캘린더" />
          <img className="콘텐츠형황판" src={콘텐츠형황판} alt="콘텐츠형황판" />
          <img className="룬" src={룬} alt="룬" />
        </div>

        <div className="eventsSectionC">
          <img className="오늘의소식" src={오늘의소식} alt="오늘의소식" />
          <img
            className="아르얀로드패키지"
            src={아르얀로드패키지}
            alt="아르얀로드패키지"
          />
          S{" "}
        </div>

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
        <div className="mainEvents">
          <img className="전투" src={전투} alt="전투" />
          <img className="대전" src={대전} alt="대전" />
          <img className="성장" src={성장} alt="성장" />
          <img className="모험" src={모험} alt="모험" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
