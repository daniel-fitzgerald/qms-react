import React from 'react'
//import { Link } from 'react-router-dom'

import Header from './Header'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

import './layout.css'

let Breadcrumbs = ({ breadcrumbs }) => {
    if (breadcrumbs) {
        return null
        // return <div className="breadcrumbs">
        //     <ol className="lineage">
        //         <li><Link to="/home">Home</Link></li>
        //         <li className="lastItem"><span>{breadcrumbs.label}</span></li>
        //     </ol>
        // </div>
    } else {
        return null
    }
}

let AppLayout = ({ appRoutes, navigationItems, location, breadcrumbs }) => <div className="body-wrapper">
    <div className="page-wrapper">
        <Header />
        <MainNavigation navigationItems={navigationItems} location={location} />
        <div className="banner" role="banner"></div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        {appRoutes}
        <Footer />
    </div>
</div>

export default AppLayout