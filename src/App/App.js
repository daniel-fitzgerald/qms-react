import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import { AppRoutes, NavigationItems } from './AppNavigation'

import 'react-virtualized/styles.css'

import './app.css'

let AppLayout = (props) => <Layout appRoutes={<AppRoutes />} navigationItems={NavigationItems} {...props} />

let App = () => <Router basename="/qms-ui-test-rest">
  <Route path="/" component={AppLayout} />
</Router>

export default App