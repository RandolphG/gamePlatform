import { getUserState } from 'app'
import React, { FC, LazyExoticComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

interface IPrivateRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>
  path: string
}

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, ...rest }) => {
  const user = useSelector(getUserState)

  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/intro" />
        )
      }}
    />
  )
}

export default PrivateRoute
