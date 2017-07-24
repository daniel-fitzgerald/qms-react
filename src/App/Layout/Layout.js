import React from 'react'

import Header from './Header'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

import './layout.css'

let AppLayout = ({ appRoutes, navigationItems }) => <div className="body-wrapper">
    <div className="page-wrapper">
        <Header />
        <MainNavigation navigationItems={navigationItems} />
        <div className="banner" role="banner"></div>
        <div className="breadcrumbs"></div>
        <div className="main clearfix">
            {appRoutes}
        </div>
        <Footer />
    </div>
</div>

export default AppLayout