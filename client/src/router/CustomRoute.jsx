import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// private func - on route render callback
const _onRouteRender = () => {
  console.log('before route render')
}
// custom route - app default route
export const PublicRoute = ({ render, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        _onRouteRender()
        return render ? render(props) : <Component {...props} />
      }}
    />
  )
}
// custom route - protected by authenticated(bool) route
export const ProtectedRoute = ({ authenticated, ...rest }) =>
  authenticated ? (
    <PublicRoute {...rest} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  )
