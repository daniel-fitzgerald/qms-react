import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../Home'
import Entitlement from '../Entitlement'
import Certification from '../Certification'
import Payments from '../Payments'
import Reports from '../Reports'
import Enquiries from '../Enquiries'
import Settings from '../Settings'
import { ExporterList, Exporter } from '../Settings/Exporter'

let HomeRedirect = (props) => <Redirect exact from="/" to="/home" />

let AppRoutes = () => <Switch>
    <Route exact path="/" component={HomeRedirect} />
    <Route path="/home" component={Home} />
    <Route path="/entitlement" component={Entitlement} />
    <Route path="/certification" component={Certification} />
    <Route path="/payments" component={Payments} />
    <Route path="/reports" component={Reports} />
    <Route path="/enquiries" component={Enquiries} />
    <Route path="/settings/exporter/:id" component={Exporter} />
    <Route path="/settings/exporter" component={ExporterList} />
    <Route path="/settings" component={Settings} />
</Switch>

const NavigationItems = [
    { label: 'Home', path: '/home' },
    { label: 'Entitlement', path: '/entitlement' },
    { label: 'Certification', path: '/certification' },
    { label: 'Payments', path: '/payments' },
    { label: 'Reports', path: '/reports' },
    { label: 'Enquiries', path: '/enquiries' },
    { label: 'Settings', path: '/settings' },
]

export { AppRoutes, NavigationItems }