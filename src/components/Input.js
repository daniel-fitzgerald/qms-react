import React from 'react'

let Input = ({ id, label, data, onChange }) => <div className="dynamic-data">
    <label className="label" htmlFor={id}>{label}</label>
    <input id={id} value={data[id]} onChange={onChange(id)} />
</div>

let Checkbox = ({ id, label, data, onChange }) => <div className="dynamic-data">
    <label className="label" htmlFor={id}>{label}</label>
    <input id={id} checked={data[id]} type="checkbox" onChange={onChange(id)} />
</div>

let Textarea = ({ id, label, data, onChange }) => <div className="dynamic-data">
    <label className="label" htmlFor={id}>{label}</label>
    <textarea id={id} value={data[id]} onChange={onChange(id)} rows="5"></textarea>
</div>

let Select = ({ id, label, data, options, onChange }) => <div className="dynamic-data">
    <label className="label" htmlFor={id}>{label}</label>
    <select id={id} value={data[id]} onChange={onChange(id)}>
        {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
    </select>
</div>

export { Input, Textarea, Select, Checkbox }