import React, { FC, Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GameDashboard, Intro, Notification, SignUp } from "../components";
import {
  PrivateRoute,
  NonAuthRoute,
  NotFound,
  AppRouting,
} from "./componenets";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  // const renderRootRedirect = () => <Redirect to="/app" />;
  const renderRootRedirect = () => <Redirect to="/gameDashboard" />;

  return (
    <Fragment>
      <Notification />
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                {/*<Route exact path="/" component={Wizard} />*/}
                <Route exact path="/" component={renderRootRedirect} />
                <Route path="/gameDashboard" component={GameDashboard} />
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
