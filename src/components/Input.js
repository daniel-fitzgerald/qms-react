import React from 'react'

let hasError = (id, errors) => errors && errors[id] ? ' has-error' : ''

let Input = ({ id, label, data, errors, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <input id={id} value={data[id]} onChange={onChange(id)} />
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let Checkbox = ({ id, label, data, errors, onChange }) => <div className="dynamic-data">
    <label className="label" htmlFor={id}>{label}</label>
    <input id={id} checked={data[id]} type="checkbox" onChange={onChange(id)} />
</div>

let Textarea = ({ id, label, data, errors, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <textarea id={id} value={data[id]} onChange={onChange(id)} rows="5"></textarea>
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let Select = ({ id, label, data, errors, options, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <select id={id} value={data[id]} onChange={onChange(id)}>
            {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let StaticData = ({ label, value }) => <div className="static-data">
    <span className="label">{label}</span>
    <span>{value}</span>
</div>

export { Input, Textarea, Select, Checkbox, StaticData, hasError }