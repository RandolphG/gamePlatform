import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Topbar } from "../common";
import { DedicatedItemPage } from "../dedicatedItemPage";
import { Settings } from "../settings";
import { MyInfo, HomeDashboard } from "./components";
import HomePageViewModel from "./homePageView.Model";
import "./styles/_homePageStyles.scss";

const HomePage = () => {
  const { location } = HomePageViewModel();

  const routes = [
    {
      path: "/homepage/dedicatedItem",
      component: DedicatedItemPage,
    },
    {
      path: "/",
      component: HomeDashboard,
    },
  ];

  return (
    <div className="homePage">
      <div className="homePage_container">
        <MyInfo />
        <Topbar />
        <Settings />
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
