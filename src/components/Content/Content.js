import React from 'react'
import { Link } from 'react-router-dom'

import './content.css'

import arrow from './arrow.svg'

let checkActive = (path, location) => {
    return (location.pathname + '/').startsWith(path + '/') ? ' active' : ''
}

let NavItem = ({ label, path, location }) => <li className={`dynamic${checkActive(path, location)}`}><Link to={path}><span>{label}</span></Link></li>

let NavRoot = ({ path, label, children, location }) =>
    <ul className="root">
        <li><a><span>{label}</span></a></li>
        <li>
            <ul className="dynamic">
                {children.map((navItem, index) => <NavItem key={index} {...navItem} location={location} />)}
            </ul>
        </li>
    </ul>

let SecondaryNav = ({ secondaryNav, location }) => {
    if (secondaryNav) {
        return <div className="secondary-nav" >
            <Link className="secondary-nav__section-title" to="/home"><img src={arrow} className="back-arrow" alt="" /> Home</Link>
            {secondaryNav.map((navItem, index) => <NavRoot key={index} {...navItem} location={location} />)}
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

let MessageType = ({ type, messages }) => {
    if (messages.length > 0) {
        return <div className={type}>
            {messages.map((message, index) => <p key={index}>{message.text}</p>)}
        </div>
    } else {
        return null
    }
}

let Messages = ({ messages }) => {
    if (messages) {
        return <div className="messages">
            <MessageType type="error" messages={messages.filter(message => message.type === 'error')} />
            <MessageType type="warning" messages={messages.filter(message => message.type === 'warning')} />
            <MessageType type="info" messages={messages.filter(message => message.type === 'info')} />
            <MessageType type="success" messages={messages.filter(message => message.type === 'success')} />
        </div>
    } else {
        return null
    }
}

let Content = ({ title, messages, children, secondaryNav, location, breadcrumbs }) => {
    document.title = title + ' - Quota Management System'
    return <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="main clearfix">
            <SecondaryNav secondaryNav={secondaryNav} location={location} />
            <div className="page-content full-width">
                <h1>{title}</h1>
                <Messages messages={messages} />
                <div>
                    {children}
                </div>
            </div>
        </div>
    </div>
}

export default Content