import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

import Header from './Header'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

import './layout.css'

class AppLayout extends Component {

    componentWillReceiveProps(nextProps) {
        const { location, history: { action } } = nextProps
        if (location !== this.props.location && action === 'PUSH') {
            window.scrollTo(0, 0)
        }
    }

    render() {
        const { appRoutes, navigationItems, location } = this.props
        return <div className="body-wrapper">
            <div className="page-wrapper">
                <Header />
                <MainNavigation navigationItems={navigationItems} location={location} />
                <div className="banner" role="banner"></div>
                {appRoutes}
                <Footer />
            </div>
        </div>
    }
}

export default AppLayout