import React from "react";
import "./styles/_settingsStyles.scss";

const Settings = () => {
  const motionSettings = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div className="dedicatedItemPage">
      <div className="dedicatedItemPage_container">Settings</div>
    </div>
  );
};

export default Settings;
