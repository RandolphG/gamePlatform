import React, { useState } from "react";
import "./styles/_homePageStyles.scss";
import { Trans, useTranslation } from "react-i18next";
import playerLevel from "./assets/elements/playerLevelStatus.png";
import keys from "./assets/elements/keys.png";
import coins from "./assets/elements/coins.png";
import rubies from "./assets/elements/rubies.png";
import settings from "./assets/elements/settings.png";
import mail from "./assets/elements/mail.png";
import dialog from "./assets/elements/dialog.png";
import treasure from "./assets/elements/treasure.png";
/* images */
import 영웅 from "./assets/elements/영웅.png";
import 엽젹 from "./assets/elements/엽젹.png";
import 소셜 from "./assets/elements/소셜.png";
import 길드 from "./assets/elements/길드.png";
import 콘텐츠 from "./assets/elements/콘텐츠.png";
import 소환상점 from "./assets/elements/소환상점.png";
import 상점 from "./assets/elements/상점.png";
import 버프상점 from "./assets/elements/버프상점.png";
/* events */
import 전투 from "./assets/elements/전투.png";
import 대전 from "./assets/elements/대전.png";
import 성장 from "./assets/elements/성장.png";
import 모험 from "./assets/elements/모험.png";
import 내정보 from "./assets/elements/내정보.png";
/* event section A*/
import 세나의달신규복귀꼴팁 from "./assets/elements/세나의달신규복귀꼴팁.png";
import 시간여행자의이야기 from "./assets/elements/시간여행자의이야기.png";
import 이벤트 from "./assets/elements/이벤트.png";
/* event section B*/
import 이벤트캘린더 from "./assets/elements/이벤트캘린더.png";
import 콘텐츠형황판 from "./assets/elements/콘텐츠형황판.png";
import 룬 from "./assets/elements/룬.png";
/* event section C*/
import 오늘의소식 from "./assets/elements/오늘의소식.png";
import 아르얀로드패키지 from "./assets/elements/아르얀로드패키지.png";
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
  // @ts-ignore
  const [show, setShow] = useState(false);
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

  const EventSectionA = () => (
    <div className="eventsSectionA">
      <div className="세나의달신규복귀꼴팁Container">
        <img
          className="세나의달신규복귀꼴팁"
          src={세나의달신규복귀꼴팁}
          alt="세나의달신규복귀꼴팁"
        />
        <div className="text">
          <Trans>eventsSectionA.세나의달신규복귀꼴팁</Trans>
        </div>
      </div>
      <div className="시간여행자의이야기Container">
        <img
          className="시간여행자의이야기"
          src={시간여행자의이야기}
          alt="시간여행자의이야기"
        />
        <div className="text">
          <Trans>eventsSectionA.시간여행자의이야기</Trans>
        </div>
      </div>
      <div className="이벤트Container">
        <img className="이벤트" src={이벤트} alt="이벤트" />
        <div className="text">
          <Trans>eventsSectionA.이벤트</Trans>
        </div>
      </div>
    </div>
  );

  const EventSectionB = () => (
    <div className="eventsSectionB">
      <div className="이벤트캘린더Container">
        <img className="이벤트캘린더" src={이벤트캘린더} alt="이벤트캘린더" />
        <div className="text">
          <Trans>eventsSectionB.이벤트캘린더</Trans>
        </div>
      </div>
      <div className="콘텐츠형황판Container">
        <img className="콘텐츠형황판" src={콘텐츠형황판} alt="콘텐츠형황판" />
        <div className="text">
          <Trans>eventsSectionB.콘텐츠형황판</Trans>
        </div>
      </div>
      <div className="룬Container">
        <img className="룬" src={룬} alt="룬" />
        <div className="text">
          <Trans>eventsSectionB.룬</Trans>
        </div>
      </div>
    </div>
  );

  const EventSectionC = () => (
    <div className="eventsSectionC">
      <div className="오늘의소식Container">
        <img className="오늘의소식" src={오늘의소식} alt="오늘의소식" />
        <div className="text">
          <Trans>eventsSectionC.오늘의소식</Trans>
        </div>
      </div>
      <div className="아르얀로드패키지Container">
        <img
          className="아르얀로드패키지"
          src={아르얀로드패키지}
          alt="아르얀로드패키지"
        />
        <div className="text">
          <Trans>eventsSectionC.아르얀로드패키지</Trans>
        </div>
      </div>
    </div>
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

  const MainLinks = () => (
    <div className="mainLinks">
      <div className="영웅Container">
        <img className="영웅" src={영웅} alt="영웅" />
        <div className="text">
          <Trans>main-links.영웅</Trans>
        </div>
      </div>
      <div className="업적Container">
        <img className="업적" src={엽젹} alt="업적" />
        <div className="text">
          <Trans>main-links.업적</Trans>
        </div>
      </div>
      <div className="소셜Container">
        <img className="소셜" src={소셜} alt="소셜" />
        <div className="text">
          <Trans>main-links.소셜</Trans>
        </div>
      </div>
      <div className="길드Container">
        <img className="길드" src={길드} alt="길드" />
        <div className="text">
          <Trans>main-links.길드</Trans>
        </div>
      </div>
      <div className="콘텐츠Container">
        <img className="콘텐츠" src={콘텐츠} alt="콘텐츠" />
        <div className="text">
          <Trans>main-links.콘텐츠</Trans>
        </div>
      </div>
      <div className="소환상점Container">
        <img className="소환상점" src={소환상점} alt="소환상점" />
        <div className="text">
          <Trans>main-links.소환상점</Trans>
        </div>
      </div>
      <div className="상점Container">
        <img className="상점" src={상점} alt="상점" />
        <div className="text">
          <Trans>main-links.상점</Trans>
        </div>
      </div>
      <div className="버프상점Container">
        <img className="버프상점" src={버프상점} alt="버프상점" />
        <div className="text">
          <Trans>main-links.버프상점</Trans>
        </div>
      </div>
    </div>
  );

  const MainEvents = () => (
    <div className="mainEvents">
      <div className="전투Container">
        <img className="전투" src={전투} alt="전투" />
        <div className="text">
          <Trans>main-events.전투</Trans>
        </div>
      </div>
      <div className="대전Container">
        <img className="대전" src={대전} alt="대전" />
        <div className="text">
          <Trans>main-events.대전</Trans>
        </div>
      </div>{" "}
      <div className="성장Container">
        <img className="성장" src={성장} alt="성장" />
        <div className="text">
          <Trans>main-events.성장</Trans>
        </div>
      </div>
      <div className="모험Container">
        <img className="모험" src={모험} alt="모험" />
        <div className="text">
          <Trans>main-events.모험</Trans>
        </div>
      </div>
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

        <div className="topbar">
          <PlayerLevel />
          <MainCurrency />
          <MainOptions />
        </div>

        <div className="middleSectionA">
          <EventSectionA />
        </div>

        <div className="middleSectionB">
          <EventSectionB />
          <EventSectionC />
        </div>

        <MainLinks />
        <MainEvents />
      </div>
    </div>
  );
};

export default HomePage;
