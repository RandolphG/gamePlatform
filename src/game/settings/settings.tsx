import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../common";
import { GameSettings, Mood } from "./components";
import SettingsViewModel from "./settingsView.Model";
import "./styles/_settingsStyles.scss";

const Settings = () => {
  const items = [
    {
      id: 1,
      title: "기분",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
        console.log(`visibleTab -->`, visibleTab);
      },
      component: <Mood />,
    },
    {
      id: 2,
      title: "게임",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
        console.log(`visibleTab -->`, visibleTab);
      },
      component: <GameSettings />,
    },
    {
      id: 3,
      title: "정보",
      setVisible: (event: any, id: any): void => {
        console.log(event);
        setVisibleTab(event);
        console.log(`visibleTab -->`, visibleTab);
      },
      component: <GameSettings />,
    },
  ];

  const [visibleTab, setVisibleTab] = useState(items[0].id);

  const { showModal, hide, modal, AnimatePresence, motion, backdrop } =
    SettingsViewModel();

  const Buttons = () => (
    <div className="buttons">
      {items.map(({ id, setVisible, title }, idx) => (
        <Button key={idx} title={title} id={id} setVisible={setVisible} />
      ))}
    </div>
  );

  const CloseButton = () => (
    <div className="modalCloseButton" onClick={hide}>
      X
    </div>
  );

  const options = items.map((item, idx) => {
    console.log(`visibleTab`, visibleTab);

    return (
      <span key={idx} style={visibleTab === item.id ? {} : { display: "none" }}>
        {item.component}
      </span>
    );
  });

  const SettingsWindows = () => (
    <AnimatePresence exitBeforeEnter>{options}</AnimatePresence>
  );

  /*        <>{visibleTab === item.id ? {} : { display: "none" }}</>
   */

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
            {CloseButton()}
            <Buttons />
            <SettingsWindows />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
