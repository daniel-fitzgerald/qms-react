import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Home from '../Home'
import Entitlement from '../Entitlement'
import Certification from '../Certification'
import Payments from '../Payments'
import Reports from '../Reports'
import Enquiries from '../Enquiries'
import Settings from '../Settings'

let AppRoutes = () => <div>
    <Redirect from="/" to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/entitlement" component={Entitlement} />
    <Route path="/certification" component={Certification} />
    <Route path="/payments" component={Payments} />
    <Route path="/reports" component={Reports} />
    <Route path="/enquiries" component={Enquiries} />
    <Route path="/settings" component={Settings} />
</div>

const NavigationItems = [
    { label: 'Home', to: '/home' },
    { label: 'Entitlement', to: '/entitlement' },
    { label: 'Certification', to: '/certification' },
    { label: 'Payments', to: '/payments' },
    { label: 'Reports', to: '/reports' },
    { label: 'Enquiries', to: '/enquiries' },
    { label: 'Settings', to: '/settings' },
]

export { AppRoutes, NavigationItems }