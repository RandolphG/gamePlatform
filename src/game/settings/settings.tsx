import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Trans } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox } from "../common";
import { backdrop, modal } from "./motionSettings";
import { getModalState, hideSettings } from "./store";
import "./styles/_settingsStyles.scss";

const Settings = () => {
  const showModal: boolean = useSelector(getModalState);
  const dispatch: any = useDispatch();

  const hide = () => dispatch(hideSettings());

  const Buttons = () => (
    <div className="buttons">
      <Button title="기분" />
      <Button title="게임" />
      <Button title="정보" />
    </div>
  );

  const Mood = () => (
    <div className="mood">
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
      <div className="mood_rowTwo">
        <div className="mood_rowTwo_description">
          <Trans>settings.mood.그래픽해상도</Trans>
        </div>
        <div className="mood_rowTwo_description">
          <Trans>settings.mood.낮음</Trans>
          <Checkbox />
        </div>
        <div className="mood_rowTwo_description">
          <Trans>settings.mood.보통</Trans>
          <Checkbox />
        </div>
        <div className="mood_rowTwo_description">
          <Trans>settings.mood.높음</Trans>
          <Checkbox />
        </div>
      </div>
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
      <Separator />
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
      </div>{" "}
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
    </div>
  );

  const Separator = () => (
    <div className="separator">
      <Trans>settings.mood.알림설정</Trans>
    </div>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <div className="modalCloseButton" onClick={hide}>
              X
            </div>
            <Buttons />
            <Mood />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
