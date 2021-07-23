import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { CoinDrop } from "../common";
import { DiagonalCarousel } from "../common/daigonalCarousel";
import { Profile } from "../profile";
import { Wizard } from "../wizard";
import { Carousel } from "./carousel";
import { MainLinks } from "./mainLinks";
import { SingleImage } from "./SingleImage";
import SocialLinks from "./socialLinks";

import "./styles/_gameDashboardStyles.scss";
import UserProfileOptions from "./userProfileOptions";

const GameDashboard = () => {
  return (
    <div className="gameDashboardLayout">
      <div className="gameLoungeNavbar">
        <MainLinks />
        <SocialLinks />
        <UserProfileOptions />
      </div>
      <div className="mainContent">
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                {/*<Route exact path="/gameDashboard" component={Gallery} />*/}
                <Route path="/gameDashboard/profile" component={Profile} />
                <Route path="/gameDashboard/rewards" component={CoinDrop} />
                <Route
                  path="/gameDashboard/image/:id"
                  component={SingleImage}
                />
                {/*<Route path="/gameDashboard/" component={Carousel} />*/}
                <Route path="/gameDashboard/" component={DiagonalCarousel} />
                <Route exact path="/gameDashboard/wizard" component={Wizard} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </div>
  );
};

export default GameDashboard;
