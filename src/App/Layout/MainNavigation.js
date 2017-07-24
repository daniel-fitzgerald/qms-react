import React from 'react'
import { Link } from 'react-router-dom'

import './main-navigation.css'

let NavigationItem = ({ to, label }) => <li className="nav-item"><Link to={to} className="level1"><span>{label}</span></Link></li>

let MainNavigation = ({ navigationItems }) => <div className="nav-wrapper clearfix">
    <nav className="main-navigation">
        <ul className="nav-menu clearfix level1" role="menubar">
            {navigationItems.map((element, index) => <NavigationItem key={index} {...element} />)}
        </ul>
    </nav>
</div>

export default MainNavigation