import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ClickButton,
  CliffHanger,
  Dashboard,
  Intro,
  MediaIconsPopups,
  Menu,
  Notification,
  Rabbit,
  Tilt,
} from "../components";
import { PropelMan } from "../components/content/propellMan";
import { LeaderBoard } from "../components/leaderBoard";
import { Time } from "../components/common/menu/topbar";
import { NotFound } from "./componenets";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => {
  return (
    <Router>
      {/*<Notification />*/}
      {/*<Time />*/}
      {/*<MediaIconsPopups />*/}
      {/*<Menu />*/}
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              {/*<Route exact path="/" component={Intro} />*/}
              <Route exact path="/cliffHanger" component={CliffHanger} />
              <Route exact path="/leaderBoard" component={LeaderBoard} />
              <Route exact path="/click" component={ClickButton} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/rabbit" component={Rabbit} />
              <Route exact path="/tilt" component={Tilt} />
              <Route exact path="/" component={PropelMan} />
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
