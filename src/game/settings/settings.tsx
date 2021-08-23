import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "../common";
import SettingsViewModel from "./settingsView.Model";
import "./styles/_settingsStyles.scss";

const Settings = () => {
  const {
    items,
    visibleTab,
    showModal,
    hide,
    modal,
    AnimatePresence,
    motion,
    backdrop,
  } = SettingsViewModel();

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
    return (
      <span key={idx} style={visibleTab === item.id ? {} : { display: "none" }}>
        {item.component()}
      </span>
    );
  });

  const SettingsWindows = () => (
    <AnimatePresence exitBeforeEnter>{options}</AnimatePresence>
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
