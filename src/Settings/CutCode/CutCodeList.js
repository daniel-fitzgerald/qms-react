import React from 'react'

import Content from '../../App/Content'
import { Input } from '../../components/Input'

import Expandable from '../../components/Expandable'
import VirtualizedTable from '../../components/VirtualizedTable'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }],
    currentLabel: 'Cut Code List'
}

const config = [
    { label: 'Cut Code', dataKey: 'code' },
    { label: 'Category', dataKey: 'category' },
    { label: 'Description', dataKey: 'description' },
    { label: 'Action', dataKey: 'action' },
]

let mapData = (data, onEdit) => {
    return data.map(element => Object.assign({}, element, {action: <a onClick={onEdit(element.id)}>Edit</a>}))
}

let CutCodeList = ({ data, filter, onFilterChange, location, onEdit }) => <Content title="Cut Code List" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <Expandable label="Filters">
        <Input id="code" label="Cut Code" data={filter} onChange={onFilterChange} />
        <Input id="category" label="Category" data={filter} onChange={onFilterChange} />
        <Input id="description" label="Cut Description" data={filter} onChange={onFilterChange} />
    </Expandable>
    <VirtualizedTable data={mapData(data, onEdit)} config={config} />
</Content>

export default CutCodeList