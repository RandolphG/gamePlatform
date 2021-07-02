import React, { FC, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../../../components";
import { PrivateRoute } from "../privateRoute";

const AppRouting: FC = () => {
  /* redirect from app to "/app/dashboard" */
  const renderRootRedirect = () => <Redirect to="/app/dashboard" />;

  /* return the root view */
  return (
    <Fragment>
      <Switch>
        <Route exact path="/app" render={renderRootRedirect} />
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default AppRouting;
