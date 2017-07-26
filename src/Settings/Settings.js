import React from 'react'
import { Link } from 'react-router-dom'

import Content from '../App/Content'

import SecondaryNav from './SecondaryNav'

const breadcrumbs = {
    currentLabel: 'Settings'
}

let Settings = ({ location }) => <Content title="Settings" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <ul>
        <li><Link to="/settings/exporter">Exporter</Link></li>
    </ul>
</Content>

export default Settings