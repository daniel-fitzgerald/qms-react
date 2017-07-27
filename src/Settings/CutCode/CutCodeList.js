import React from 'react'

import Content from '../../App/Content'
import { Input } from '../../components/Input'

import Expandable from '../../components/Expandable'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }],
    currentLabel: 'Cut Code List'
}

let TableRow = ({ id, code, category, description, onEdit }) => <tr><td>{code}</td><td>{category}</td><td>{description}</td><td><a onClick={onEdit(id)}>Edit</a></td></tr>

let ShowNoData = ({ data }) => {
    if (data && data.length > 0) {
        return null
    } else {
        return <tr><td colSpan="4">No Cut Code values.</td></tr>
    }
}

let CutCodeList = ({ data, filter, onFilterChange, location, ...actions }) => <Content title="Cut Code List" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <Expandable label="Filters">
        <Input id="code" label="Cut Code" data={filter} onChange={onFilterChange} />
        <Input id="category" label="Category" data={filter} onChange={onFilterChange} />
        <Input id="description" label="Cut Description" data={filter} onChange={onFilterChange} />
    </Expandable>
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
            <ShowNoData data={data} />
        </tbody>
    </table>
</Content>

export default CutCodeList