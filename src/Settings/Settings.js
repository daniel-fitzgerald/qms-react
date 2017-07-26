import React from 'react'
import { Link } from 'react-router-dom'

import Content from '../App/Content'

import SecondaryNav from './SecondaryNav'

const breadcrumbs = {
    currentLabel: 'Settings'
}

let Settings = ({ location }) => <Content title="Settings" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <h2>Maintenance Tables</h2>
    <ul className="landing-page-links biosecurity-bg">
        <li><Link to="/settings/cut-suffix">Cut Suffix</Link></li>
        <li><Link to="/settings/cut-code">Cut Code</Link></li>
        <li><Link to="/settings/tariff-code">Tariff Code</Link></li>
        <li><Link to="/settings/commodity">Commodity</Link></li>
        <li><Link to="/settings/quota">Qutoa</Link></li>
        <li><Link to="/settings/exporter">Exporter</Link></li>
        <li><Link to="/settings/importer">Importer</Link></li>
        <li><Link to="/settings/destination">Destination</Link></li>
        <li><Link to="/settings/discharge-port">Discharge Port</Link></li>
        <li><Link to="/settings/load-port">Load Port</Link></li>
        <li><Link to="/settings/works">Works</Link></li>
        <li><Link to="/settings/Works Accreditation">Works Accreditation</Link></li>
        <li><Link to="/settings/Office Locations">Office Locations</Link></li>
        <li><Link to="/settings/Global Exports">Global Exports</Link></li>
    </ul>

    <h2>Notification Templates</h2>
    <ul className="landing-page-links biosecurity-bg">
        <li><Link to="/settings/template/new">New Template</Link></li>
        <li><Link to="/settings/template">Manage Template</Link></li>
    </ul>

    <h2>Setup</h2>
    <ul className="landing-page-links biosecurity-bg">
        <li><Link to="/settings/quota-definition/new">New Quota Definition</Link></li>
        <li><Link to="/settings/quota-definition">Manage Quto Definition</Link></li>
    </ul>
</Content>

export default Settings