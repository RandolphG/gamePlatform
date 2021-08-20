import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Button } from "../common";
import { GameSettings, Mood } from "./components";
import SettingsViewModel from "./settingsView.Model";
import "./styles/_settingsStyles.scss";

const Settings = () => {
  let { path, url } = useRouteMatch();

  const {
    showModal,
    hide,
    location,
    modal,
    AnimatePresence,
    motion,
    backdrop,
  } = SettingsViewModel();

  const Buttons = () => (
    <div className="buttons">
      <Button title="기분" url={`${url}/`} />
      <Button title="게임" url={`${url}/gameSettings`} />
      <Button title="정보" />
    </div>
  );

  const routes = [
    {
      path: `/mood`,
      component: Mood,
    },
    {
      path: `/`,
      component: GameSettings,
    },
  ];

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
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                {routes.map(({ path, component }, idx) => (
                  <Route key={idx} path={path}>
                    {component}
                  </Route>
                ))}
              </Switch>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
