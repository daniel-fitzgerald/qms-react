import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Layout'
import { AppRoutes, NavigationItems } from './AppNavigation'

import './app.css'

let AppLayout = (props) => <Layout appRoutes={<AppRoutes />} navigationItems={NavigationItems} {...props} />

let App = () => <Router>
  <Route path="/" component={AppLayout} />
</Router>

export default App