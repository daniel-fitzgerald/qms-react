import React from 'react'

import Content from 'components/Content'
import { Input, Select, Textarea, Checkbox, StaticData, CheckboxList } from 'components/Input'

import SecondaryNav from '../SecondaryNav'

let getBreadcrumbs = (match) => {
    return {
        crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/cut-code', label: 'Cut Code List' }],
        currentLabel: 'Cut Code'
    }
}

let CutCode = ({ data, messages, errors, cutSuffix, category, location, match, onChange, onSubmit, onClose }) => <Content title="Cut Code" messages={messages} secondaryNav={SecondaryNav} location={location} breadcrumbs={getBreadcrumbs(match)}>
    <form onSubmit={onSubmit}>
        <Input id="code" label="Code" data={data} onChange={onChange} errors={errors} />
        <Select id="category" label="Category" data={data} onChange={onChange} errors={errors} options={category} />
        <Textarea id="description" label="Description" data={data} onChange={onChange} errors={errors} />
        <Checkbox id="certificateApplications" label="Enable for Certificate Applications on QMS" data={data} onChange={onChange} />

        <CheckboxList id="cutSuffixes" label="Cut Suffix" data={data} errors={errors} onChange={onChange} options={cutSuffix} />

        <StaticData label="Created By" value={data.createdBy} />
        <StaticData label="Date Created" value={data.dateCreated} />
        <StaticData label="Modified By" value={data.modifiedBy} />
        <StaticData label="Date Modified" value={data.dateModified} />

        <div className="page-actions">
            <button type="button" onClick={onClose}>Close</button>
            <button type="submit">Save</button>
        </div>
    </form>
</Content>

export default CutCode