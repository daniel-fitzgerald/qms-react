import React from 'react'

import Content from '../../App/Content'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }],
    currentLabel: 'Cut Code List'
}

let TableRow = ({ id, code, category, description, onEdit }) => <tr><td>{code}</td><td>{category}</td><td>{description}</td><td><a onClick={onEdit(id)}>Edit</a></td></tr>

let CutCodeList = ({ data, location, ...actions }) => <Content title="Cut Code List" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <table>
        <thead>
            <tr>
                <th>Cut Code</th>
                <th>Category</th>
                <th>Cut Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => <TableRow key={index} {...item} {...actions} />)}
        </tbody>
    </table>
</Content>

export default CutCodeList