import React, { FC, Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomePage, Loader, Settings, TitlePage, WorkInProgress } from "../game";
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
  const renderRootRedirect = () => <Redirect to="/homePage" />;

  return (
    <Fragment>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                {/*<Route
                  path="/dedicatedItemPage"
                  component={DedicatedItemPage}
                />*/}
                <Route path="/loader" component={Loader} />
                <Route path="/workInProgress" component={WorkInProgress} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/homePage" component={HomePage} />
                <Route exact path="/titlePage" component={TitlePage} />
                <PrivateRoute path="/app" component={AppRouting} />
                <Route exact path="/non-auth" component={NonAuthRoute} />
                <Route exact path="/404" component={NotFound} />
                <Route path="/" component={renderRootRedirect} />
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
