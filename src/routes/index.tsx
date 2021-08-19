import React, { FC, Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Intro, SignUp } from "../components";
import { Wizard } from "../components/wizard";
import {
  CardBeamDown,
  DedicatedItemPage,
  HeroProfiles,
  HomePage,
  Settings,
  TitlePage,
} from "../game";
import { Notification } from "../game/common";
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
                  path="/dedicatedItemPage"
                  component={DedicatedItemPage}
                />
                <Route path="/settings" component={Settings} />
                <Route path="/cardBeamPage" component={CardBeamDown} />
                <Route path="/awardPage" component={AwardPage} />
                <Route path="/homePage" component={HomePage} />
                <Route path="/titlePage" component={TitlePage} />
                <Route path="/heroProfiles" component={HeroProfiles} />
                {/*<Route path="/wizard" component={Wizard} />*/}
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
