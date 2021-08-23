import { motion } from "framer-motion";
import React from "react";
import { Trans } from "react-i18next";
import { Checkbox } from "../../../common";
import "./styles/_moodStyles.scss";

const motionSettings = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Separator = () => (
  <div className="separator">
    <Trans>settings.mood.알림설정</Trans>
  </div>
);

const RowOne = () => (
  <div className="mood_rowOne">
    <div className="mood_rowOne_description">
      <Trans>settings.mood.카카오톡기본사진끄기</Trans> <Checkbox />
    </div>
    <div className="mood_rowOne_description">
      <Trans>settings.mood.카카오톡알림메시지거부</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowOne_description">
      <Trans>settings.mood.화면절전모드전투중제외</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowTwo = () => (
  <div className="mood_rowThree">
    <div className="mood_rowThree_description">
      <Trans>settings.mood.그래픽해상도</Trans>
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.낮음</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.보통</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.높음</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowThree = () => (
  <div className="mood_rowThree">
    <div className="mood_rowThree_description">
      <Trans>settings.mood.그래픽포레임</Trans>
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.낮음</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.보통</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowThree_description">
      <Trans>settings.mood.높음</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowFour = () => (
  <div className="mood_rowFour">
    <div className="mood_rowFour_description">
      <Trans>settings.mood.모험열쇠</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.우편물수령시간</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.공성전마감시간</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowFive = () => (
  <div className="mood_rowFour">
    <div className="mood_rowFour_description">
      <Trans>settings.mood.결투의징표</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.행운의상자받기</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.길드전마감시간</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowSix = () => (
  <div className="mood_rowFour">
    <div className="mood_rowFour_description">
      <Trans>settings.mood.결투의징표</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.행운의상자받기</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.길드전마감시간</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowSeven = () => (
  <div className="mood_rowFour">
    <div className="mood_rowFour_description">
      <Trans>settings.mood.길드전준비마감</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.스마트세나알림</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.투기자알림</Trans>
      <Checkbox />
    </div>
  </div>
);

const RowEight = () => (
  <div className="mood_rowFour">
    <div className="mood_rowFour_description">
      <Trans>settings.mood.공지알림</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.게임푸쉬알림</Trans>
      <Checkbox />
    </div>
    <div className="mood_rowFour_description">
      <Trans>settings.mood.투기자알림</Trans>
      <Checkbox />
    </div>
  </div>
);

const Mood = () => (
  <motion.div key="mood" {...motionSettings} className="mood">
    <RowOne />
    <RowTwo />
    <RowThree />
    <Separator />
    <RowFour />
    <RowFive />
    <RowSix />
    <RowSeven />
    <RowEight />
  </motion.div>
);

export default Mood;
