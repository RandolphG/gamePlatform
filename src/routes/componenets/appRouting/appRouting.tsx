import { AnimatePresence } from 'framer-motion'
import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  Dashboard,
  ClickButton,
  CliffHanger,
  LeaderBoard,
  Menu,
  Notification,
  PropelMan,
  Rabbit,
  Tilt,
} from '../../../components'
import { PrivateRoute } from '../privateRoute'

const AppRouting: FC = () => {
  /* redirect from app to "/app/dashboard" */
  const renderRootRedirect = () => <Redirect to="/app/dashboard" />

  /* return the root view */
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Menu />
        <Notification />
        <Switch>
          <Route exact path="/app" render={renderRootRedirect} />
          <PrivateRoute path="/app/dashboard" component={Dashboard} />
          <Route exact path="/app/cliffHanger" component={CliffHanger} />
          <Route exact path="/app/leaderBoard" component={LeaderBoard} />
          <Route exact path="/app/click" component={ClickButton} />
          <Route exact path="/app/rabbit" component={Rabbit} />
          <Route exact path="/app/tilt" component={Tilt} />
          <Route exact path="/app/propelman" component={PropelMan} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default AppRouting
