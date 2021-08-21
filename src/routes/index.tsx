import React, { FC, Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomePage, Settings, TitlePage, WorkInProgress } from "../game";
import { VolumeButton } from "../game/common/volumeButton";
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
  const renderRootRedirect = () => <Redirect to="/workInProgress" />;

  return (
    <Fragment>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/" component={renderRootRedirect} />
                {/*<Route
                  path="/dedicatedItemPage"
                  component={DedicatedItemPage}
                />*/}
                {/*<Route path="/loader" component={Loader} />*/}
                <Route path="/workInProgress" component={WorkInProgress} />
                <Route path="/settings" component={Settings} />
                <Route path="/volumeButton" component={VolumeButton} />
                {/*<Route path="/homeScreen" component={HomeScreen} />*/}
                <Route path="/homePage" component={HomePage} />
                <Route path="/titlePage" component={TitlePage} />
                <PrivateRoute path="/app" component={AppRouting} />
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
