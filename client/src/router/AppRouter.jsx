import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { PublicRoute, ProtectedRoute } from './CustomRoute'
// constants
import { ROUTER_PATH } from '../constants'
// pages
import ActionBanner from '../pages/ActionBanner'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import Products from '../pages/Products'
import Customers from '../pages/Customers'

export default function AppRouter() {
  return (
    <Switch>
      {/* public routes */}
      <PublicRoute path={ROUTER_PATH.LOGIN} component={Login} />
      <PublicRoute path={ROUTER_PATH.SINGUP} component={Singup} />

      {/* protected routes */}
      <ProtectedRoute
        path={ROUTER_PATH.ACTIONBANNER}
        component={ActionBanner}
        authenticated={true}
      />
      <ProtectedRoute
        path={ROUTER_PATH.PRODUCTS}
        component={Products}
        authenticated={true}
      />
      <ProtectedRoute
        path={ROUTER_PATH.CUSTOMERS}
        component={Customers}
        authenticated={true}
      />

      {/* redirect */}
      <PublicRoute
        path={ROUTER_PATH.ALL}
        render={() => <Redirect to={ROUTER_PATH.LOGIN} />}
      />
    </Switch>
  )
}
