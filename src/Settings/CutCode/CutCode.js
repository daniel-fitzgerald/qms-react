import React from 'react'

import Content from '../../App/Content'
import { Input, Textarea } from '../../components/Input'

import SecondaryNav from '../SecondaryNav'

let getBreadcrumbs = (match) => {
    return {
        crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/cut-code', label: 'Cut Code List' }],
        currentLabel: 'Cut Code'
    }
}

let CutCode = ({ data, location, match, onChange, onSave, onClose }) => <Content title="Cut Code" secondaryNav={SecondaryNav} location={location} breadcrumbs={getBreadcrumbs(match)}>
    <Input id="code" label="Code" data={data} onChange={onChange} />
    <Input id="category" label="Category" data={data} onChange={onChange} />
    <Textarea id="description" label="Description" data={data} onChange={onChange} />
</Content>

export default CutCode