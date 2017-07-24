import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

import { NavigationItems } from '../AppNavigation'

import './layout.css'

let Breadcrumbs = ({ location }) => {
    const {label} = NavigationItems.find(element => element.to === location.pathname)
    return <div className="breadcrumbs">
        <ol className="lineage">
            <li><Link to="/home">Home</Link></li>
            <li className="lastItem"><span>{label}</span></li>
        </ol>
    </div>
}

let AppLayout = ({ appRoutes, navigationItems, location }) => <div className="body-wrapper">
    <div className="page-wrapper">
        <Header />
        <MainNavigation navigationItems={navigationItems} location={location} />
        <div className="banner" role="banner"></div>
        <Breadcrumbs location={location} />
        {appRoutes}
        <Footer />
    </div>
</div>

export default AppLayout