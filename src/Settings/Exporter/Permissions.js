import React from 'react'

import Content from '../../App/Content'

import SecondaryNav from '../SecondaryNav'

let getBreadcrumbs = (match) => {
    const { params: { exporterId } } = match
    return {
        crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/exporter', label: 'Exporter List' }, { path: `/settings/exporter/${exporterId}`, label: 'Exporter' }],
        currentLabel: 'Permissions'
    }
}

let Permissions = ({ data, location, match, onChange, onSave, onClose }) => <Content title="Permissions" secondaryNav={SecondaryNav} location={location} breadcrumbs={getBreadcrumbs(match)}>
    ???

    <div className="page-actions">
        <button type="button" onClick={onClose}>Close</button>
        <button type="submit" onClick={onSave}>Save</button>
    </div>
</Content>

export default Permissions