import React from 'react'

import Content from 'components/Content'
import {Input } from 'components/Input'

import SecondaryNav from '../SecondaryNav'

let getBreadcrumbs = (match) => {
    const { params: { exporterId } } = match
    return {
        crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/exporter', label: 'Exporter List' }, { path: `/settings/exporter/${exporterId}`, label: 'Exporter' }],
        currentLabel: 'Contact'
    }
}

let Contact = ({ data, location, match, onChange, onSave, onClose }) => <Content title="Contact" secondaryNav={SecondaryNav} location={location} breadcrumbs={getBreadcrumbs(match)}>
    <Input id="firstname" label="Firstname" data={data} onChange={onChange} />
    <Input id="surname" label="Surname" data={data} onChange={onChange} />
    <Input id="email" label="Email" data={data} onChange={onChange} />
    <Input id="phone" label="Phone" data={data} onChange={onChange} />

    <div className="page-actions">
        <button type="button" onClick={onClose}>Close</button>
        <button type="submit" onClick={onSave}>Save</button>
    </div>
</Content>

export default Contact