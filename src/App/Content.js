import React from 'react'
import { Link } from 'react-router-dom'

import './content.css'

import arrow from './arrow.svg'

let checkActive = (path, location) => {
    return location.pathname.startsWith(path) ? ' active' : ''
}

let checkSelected = (path, location) => {
    return location.pathname === path ? 'selected' : ''
}

let NavItem = ({ label, path, location }) => <li className={`dynamic${checkActive(path, location)}`}><Link to={path}><span>{label}</span></Link></li>

let SecondaryNav = ({ secondaryNav, location }) => {
    if (secondaryNav) {
        return <div className="secondary-nav" >
            <Link className="secondary-nav__section-title" to="/home"><img src={arrow} className="back-arrow" alt="" /> Home</Link>
            <ul className="root">
                <li className={checkSelected(secondaryNav.root.path, location)}><Link to={secondaryNav.root.path}><span>{secondaryNav.root.label}</span></Link></li>
                <li>
                    <ul className="dynamic">
                        {secondaryNav.navItems.map((navItem, index) => <NavItem key={index} {...navItem} location={location} />)}
                    </ul>
                </li>
            </ul>
        </div>
    } else {
        return null
    }
}

let Crumb = ({ label, path }) => <li><Link to={path}>{label}</Link></li>

let Breadcrumbs = ({ breadcrumbs }) => {
    if (breadcrumbs) {
        return <div className="breadCrumb">
            <ol className="lineage">
                <li><Link to="/home">Home</Link></li>
                {breadcrumbs.crumbs && breadcrumbs.crumbs.map((crumb, index) => <Crumb key={index} {...crumb} />)}
                <li className="lastItem">{breadcrumbs.currentLabel}</li>
            </ol>
        </div>
    } else {
        return null
    }
}

let Content = ({ title, children, secondaryNav, location, breadcrumbs }) => {
    document.title = title + ' - Quota Management System'
    return <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="main clearfix">
            <SecondaryNav secondaryNav={secondaryNav} location={location} />
            <div className="page-content full-width">
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    </div>
}

export default Content