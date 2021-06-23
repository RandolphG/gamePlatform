import React, { FC, LazyExoticComponent } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getLoggedInState } from "../../../app/userInfo";

interface IPrivateRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(getLoggedInState);

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn.status ? (
          <Component {...props} />
        ) : (
          <Redirect to="/intro" />
        );
      }}
    />
  );
};

export default PrivateRoute;
