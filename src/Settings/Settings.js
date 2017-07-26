import React from 'react'
import { Link } from 'react-router-dom'

import Content from '../App/Content'

import SecondaryNav from './SecondaryNav'

let Settings = ({ location }) => <Content title="Settings" secondaryNav={SecondaryNav} location={location}>
    <ul>
        <li><Link to="/settings/exporter">Exporter</Link></li>
    </ul>
</Content>

export default Settings