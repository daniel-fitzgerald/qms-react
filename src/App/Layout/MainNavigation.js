import React from 'react'
import { Link } from 'react-router-dom'

import './main-navigation.css'

let getClassName = (to, location) => {
    return `nav-item${location.pathname.startsWith(to) ? ' active' : ''}`
}

let NavigationItem = ({ to, label, location }) => <li className={getClassName(to, location)}><Link to={to} className="level1"><span>{label}</span></Link></li>

let MainNavigation = ({ navigationItems, location }) => <div className="nav-wrapper clearfix">
    <nav className="main-navigation">
        <ul className="nav-menu clearfix level1" role="menubar">
            {navigationItems.map((element, index) => <NavigationItem key={index} {...element} location={location} />)}
        </ul>
    </nav>
</div>

export default MainNavigation