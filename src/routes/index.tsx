import React, { FC } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Intro } from "../components";
import { NotFound } from "./componenets";
import { AppRouting } from "./componenets/appRouting";
import { NonAuthRoute } from "./componenets/nonAuthRoute";
import { PrivateRoute } from "./componenets/privateRoute";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  const renderRootRedirect = () => <Redirect to="/app" />;

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={renderRootRedirect} />
              <PrivateRoute path="/app" component={AppRouting} />
              <Route exact path="/intro" component={Intro} />
              <Route path="/non-auth" component={NonAuthRoute} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default AppRouter;
