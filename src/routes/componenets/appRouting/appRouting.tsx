import React, { FC, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../../../game";
import { PrivateRoute } from "../privateRoute";

const AppRouting: FC = () => {
  /* redirect from app to "/app/dashboard" */
  const renderRootRedirect = () => <Redirect to="/app/dashboard" />;

  /* return the root view */
  return (
    <Fragment>
      <Switch>
        <Route exact path="/app" render={renderRootRedirect} />
        <PrivateRoute path="/app/homepage" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default AppRouting;
