import React, { FC, Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GameDashboard, Intro, Notification, SignUp } from "../components";
import DiagonalCarousel from "../components/common/daigonalCarousel/diagonalCarousel";
import HomeIngParticles from "../components/common/homingParticles/homingParticles";
import { Wizard } from "../components/wizard";
import {
  CardBeamDown,
  DedicatedItemPage,
  HeroProfiles,
  HomePage,
  TitlePage,
} from "../game";
import {
  PrivateRoute,
  NonAuthRoute,
  NotFound,
  AppRouting,
} from "./componenets";
import { AwardPage } from "../game/awardPage";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  // const renderRootRedirect = () => <Redirect to="/app" />;
  // const renderRootRedirect = () => <Redirect to="/gameDashboard" />;
  const renderRootRedirect = () => <Redirect to="/titlePage" />;

  return (
    <Fragment>
      <Notification />
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/" component={renderRootRedirect} />
                <Route
                  exact
                  path="/homingParticles"
                  component={HomeIngParticles}
                />
                <Route
                  path="/dedicatedItemPage"
                  component={DedicatedItemPage}
                />
                <Route path="/cardBeamPage" component={CardBeamDown} />
                <Route path="/awardPage" component={AwardPage} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/titlePage" component={TitlePage} />
                <Route path="/heroProfiles" component={HeroProfiles} />
                <Route path="/gameDashboard" component={GameDashboard} />
                <Route path="/wizard" component={Wizard} />
                <Route path="/diagonalCarousel" component={DiagonalCarousel} />
                <PrivateRoute path="/app" component={AppRouting} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/intro" component={Intro} />
                <Route path="/non-auth" component={NonAuthRoute} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </Fragment>
  );
};

export default AppRouter;
