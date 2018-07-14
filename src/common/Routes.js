import React from 'react'
import {Router, Route, Switch} from 'react-static'
import StaticRoutes from 'react-static-routes'

import NotFound from '../not-found'

import history from '../utils/history'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <StaticRoutes />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
