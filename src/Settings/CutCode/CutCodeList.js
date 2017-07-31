import React from 'react'

import Content from 'components/Content'
import { Input, Select } from 'components/Input'
import Expandable from 'components/Expandable'
import VirtualizedTable from 'components/VirtualizedTable'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }],
    currentLabel: 'Cut Code List'
}

let getConfig = (onEdit, category) => [
    { label: 'Cut Code', dataKey: 'code' },
    { label: 'Category', dataKey: 'category', cellRenderer: ({ dataKey, rowData }) => category.labels[rowData.category] },
    { label: 'Description', dataKey: 'description' },
    { label: 'Action', dataKey: 'action', cellRenderer: ({ dataKey, rowData }) => <a onClick={onEdit(rowData.id)}>Edit</a> }
]

let CutCodeList = ({ data, messages, category, filter, onFilterChange, location, onEdit, onClear }) => <Content title="Cut Code List" messages={messages} secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
    <Expandable label="Filters">
        <Input id="code" label="Cut Code" data={filter} onChange={onFilterChange} />
        <Select id="category" label="Category" data={filter} onChange={onFilterChange} options={category.options} />
        <Input id="description" label="Cut Description" data={filter} onChange={onFilterChange} />
        <div className="filter-actions">
            <button type="button" onClick={onClear}>Clear</button>
        </div>
    </Expandable>
    <VirtualizedTable data={data} config={getConfig(onEdit, category)} noResultsMessage="No Cut Code matches the filters." />
</Content>

export default CutCodeList