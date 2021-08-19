import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Topbar } from "../common";
import { DedicatedItemPage } from "../dedicatedItemPage";
import { Settings } from "../settings";
import 내정보 from "./assets/elements/내정보.png";
import { HomeDashboard } from "./components/homeDashboard";
import "./styles/_homePageStyles.scss";
import { setCoins } from "./store";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showSettings, setShowModal] = useState(true);

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

  const routes = [
    {
      path: "/homepage/dedicatedItem",
      component: <DedicatedItemPage />,
    },
    {
      path: "/",
      component: <HomeDashboard />,
    },
  ];

  const MyInfo = () => (
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
  );

  useEffect(() => {
    // dispatch(setCoins({ coins: 3000 }));
    dispatch({ type: "home/setCoins", payload: { coins: 3000 } });
  }, []);

  return (
    <div className="homePage">
      <div className="homePage_container">
        <MyInfo />
        <Topbar />
        <Settings showModal={showSettings} setShowModal={setShowModal} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {routes.map(({ path, component }, idx) => (
              <Route key={idx} path={path}>
                {component}
              </Route>
            ))}
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
