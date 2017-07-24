import React from 'react'
import { Link } from 'react-router-dom'

let NavigationItem = ({ to, label }) => <li><Link to={to}>{label}</Link></li>

let MainNavigation = ({ navigationItems }) => <ul>
    {navigationItems.map((element, index) => <NavigationItem key={index} {...element} />)}
</ul>

export default MainNavigation