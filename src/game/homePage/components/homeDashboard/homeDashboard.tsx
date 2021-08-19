import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import specialItem from "../../assets/_dedicatedItem.png";
import 룬 from "../../assets/elements/룬.png";
import 세나의달신규복귀꼴팁 from "../../assets/elements/세나의달신규복귀꼴팁.png";
import 시간여행자의이야기 from "../../assets/elements/시간여행자의이야기.png";
import 아르얀로드패키지 from "../../assets/elements/아르얀로드패키지.png";
import 오늘의소식 from "../../assets/elements/오늘의소식.png";
import 이벤트 from "../../assets/elements/이벤트.png";
import 이벤트캘린더 from "../../assets/elements/이벤트캘린더.png";
import 콘텐츠형황판 from "../../assets/elements/콘텐츠형황판.png";
import { MainEvents } from "../mainEvents";
import { MainLinks } from "../mainLinks";
import { motion } from "framer-motion";

const HomeDashboard = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

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

  function onClick() {}

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="specialItem">
        <Link to="/homepage/dedicatedItem">
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
    </motion.div>
  );
};

export default HomeDashboard;
