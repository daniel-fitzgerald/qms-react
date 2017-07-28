import React from 'react'

import Content from 'components/Content'
import { Input, Select, Textarea, Checkbox, StaticData, hasError } from 'components/Input'
import SelectListService from 'services/SelectListService'

import SecondaryNav from '../SecondaryNav'

let getBreadcrumbs = (match) => {
    return {
        crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/cut-code', label: 'Cut Code List' }],
        currentLabel: 'Cut Code'
    }
}

let CutSuffixCheckbox = ({ index, label, checked, onCutSuffixChange }) => <div><label><input type="checkbox" checked={checked} onChange={onCutSuffixChange(index)} /> {label}</label></div>

let CutSuffixes = ({ data, errors, onCutSuffixChange }) => <div className={`dynamic-data${hasError('cutSuffixes', errors)}`}>
    <span className="label">Cut Suffix</span>
    <div style={{ display: 'inline-block' }}>
        {data.cutSuffixes.map((cutSuffix, index) => <CutSuffixCheckbox key={index} index={index} {...cutSuffix} onCutSuffixChange={onCutSuffixChange} />)}
        <div className="field-error">{errors['cutSuffixes']}</div>
    </div>
</div>

let CutCode = ({ data, messages, errors, location, match, onChange, onCutSuffixChange, onSubmit, onClose }) => <Content title="Cut Code" messages={messages} secondaryNav={SecondaryNav} location={location} breadcrumbs={getBreadcrumbs(match)}>
    <form onSubmit={onSubmit}>
        <Input id="code" label="Code" data={data} onChange={onChange} errors={errors} />
        <Select id="category" label="Category" data={data} onChange={onChange} errors={errors} options={SelectListService.getOptions('category')} />
        <Textarea id="description" label="Description" data={data} onChange={onChange} errors={errors} />
        <Checkbox id="certificateApplications" label="Enable for Certificate Applications on QMS" data={data} onChange={onChange} />

        <CutSuffixes data={data} errors={errors} onCutSuffixChange={onCutSuffixChange} />

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