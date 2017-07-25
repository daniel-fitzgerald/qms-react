import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Content from '../App/Content'

import { ExporterList, Exporter } from './Exporter'

const secondaryNav = {
    root: { label: 'Settings', path: '/settings' },
    navItems: [
        { label: 'Cut Suffix', path: '/settings/cut-suffix' },
        { label: 'Cut Code', path: '/settings/cut-code' },
        { label: 'Tariff Code', path: '/settings/tariff-code' },
        { label: 'Commodity', path: '/settings/commodity' },
        { label: 'Qutoa', path: '/settings/quota' },
        { label: 'Exporter', path: '/settings/exporter' },
        { label: 'Importer', path: '/settings/importer' },
        { label: 'Destination', path: '/settings/destination' },
        { label: 'Discharge Port', path: '/settings/discharge-port' },
        { label: 'Load Port', path: '/settings/load-port' },
        { label: 'Works', path: '/settings/works' },
        { label: 'Works Accreditation', path: '/settings/Works Accreditation' },
        { label: 'Office Locations', path: '/settings/Office Locations' },
        { label: 'Global Exports', path: '/settings/Global Exports' },
    ]
}

let SettingsHome = () => <div>
    <ul>
        <li><Link to="/settings/exporter">Exporter</Link></li>
    </ul>
</div>

let Settings = ({ location }) => <Content title="Settings" secondaryNav={secondaryNav} location={location}>
    <Switch>
        <Route path="/settings/exporter/:id" component={Exporter} />
        <Route path="/settings/exporter" component={ExporterList} />
        <Route path="/settings" component={SettingsHome} />
    </Switch>
</Content>

export default Settings