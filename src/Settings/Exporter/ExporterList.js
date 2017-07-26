import React from 'react'

import Content from '../../App/Content'

import SecondaryNav from '../SecondaryNav'

let TableRow = ({ id, name, abn, onEdit }) => <tr><td>{name}</td><td>{abn}</td><td><a onClick={onEdit(id)}>Edit</a></td></tr>

let ExporterList = ({ data, location, ...actions }) => <Content title="Exporter List" secondaryNav={SecondaryNav} location={location}>
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