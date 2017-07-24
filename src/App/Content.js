import React from 'react'
import { Link } from 'react-router-dom'

import './content.css'

const secondaryNav = [
    { label: 'menu item 1', to: '/menu' },
    { label: 'menu item 2', to: '/menu' },
    { label: 'menu item 3', to: '/menu' },
    { label: 'menu item 4', to: '/menu' },
    { label: 'menu item 5', to: '/menu' },
    { label: 'menu item 6', to: '/menu' },
    { label: 'menu item 7', to: '/menu' },
    { label: 'menu item 8', to: '/menu' },
]

let NavItem = ({ label, to }) => <li className="dynamic"><Link to={to}><span>{label}</span></Link></li>

let SecondaryNav = () => <div className="secondary-nav">
    <a className="secondary-nav__section-title" href="http://www.agriculture.gov.au">Home</a>

    <ul className="root">
        <li className="selected"><Link to="/sadf3"><span>something</span></Link></li>
        <li>
            <ul className="dynamic">
                {secondaryNav.map((navItem, index) => <NavItem key={index} {...navItem} />)}
            </ul>
        </li>
    </ul>
</div>

let Content = ({ title, children }) => {
    document.title = title + ' - Quota Management System'
    return <div className="main clearfix">
        <SecondaryNav />
        <div className="page-content full-width">
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default Content