import React, { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import { useDispatch } from "react-redux";
import playerLevel from "./assets/elements/playerLevelStatus.png";
import keys from "./assets/elements/keys.png";
import coins from "./assets/elements/coins.png";
import rubies from "./assets/elements/rubies.png";
import settings from "./assets/elements/settings.png";
import mail from "./assets/elements/mail.png";
import dialog from "./assets/elements/dialog.png";
import treasure from "./assets/elements/treasure.png";

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
import specialItem from "./assets/_dedicatedItem.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MainEvents, MainLinks } from "./components";
import { setCoins } from "./store";
import "./styles/_homePageStyles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
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

  // useEffect(() => {
  //   dispatch(setCoins({ coins: 3000 }));
  // }, []);

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

        <div className="specialItem">
          <Link to="dedicatedItemPage">
            <img
              className="specialItem_item"
              src={specialItem}
              onClick={onClick}
              alt="playerLevel"
            />
          </Link>
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
