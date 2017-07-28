import React from 'react'

import Content from 'components/Content'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }],
    currentLabel: 'Exporter List'
}

let TableRow = ({ id, name, abn, onEdit }) => <tr><td>{name}</td><td>{abn}</td><td><a onClick={onEdit(id)}>Edit</a></td></tr>

let ExporterList = ({ data, location, ...actions }) => <Content title="Exporter List" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>ABN</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => <TableRow key={index} {...item} {...actions} />)}
        </tbody>
    </table>
</Content>

export default ExporterList