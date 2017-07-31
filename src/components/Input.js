import React from 'react'

let hasError = (id, errors) => errors && errors[id] ? ' has-error' : ''

let Input = ({ id, label, data, errors, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <input id={id} name={id} value={data[id]} onChange={onChange} />
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let Checkbox = ({ id, label, data, errors, onChange }) => <div className="dynamic-data checkbox">
    <input id={id} name={id} checked={data[id]} type="checkbox" onChange={onChange} />
    <label className="label" htmlFor={id}>{label}</label>
</div>

let Textarea = ({ id, label, data, errors, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <textarea id={id} name={id} value={data[id]} onChange={onChange} rows="5"></textarea>
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let Select = ({ id, label, data, errors, options, onChange }) => <div className={`dynamic-data${hasError(id, errors)}`}>
    <label className="label" htmlFor={id}>{label}</label>
    <div className="dynamic-data__input">
        <select id={id} name={id} value={data[id]} onChange={onChange}>
            {options.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
        <div className="field-error">{errors && errors[id]}</div>
    </div>
</div>

let StaticData = ({ label, value }) => <div className="static-data">
    <span className="label">{label}</span>
    <span>{value}</span>
</div>

let InnerCheckbox = ({ id, options, shortValue, checked, onChange }) => <div><label><input id={`${id}.${shortValue}`} name={`${id}.${shortValue}`} type="checkbox" checked={checked} onChange={onChange} /> {options.labels[shortValue]}</label></div>

let CheckboxList = ({ id, data, label, options, errors, onChange }) => <div id={id} className={`dynamic-data${hasError('cutSuffixes', errors)}`}>
    <span className="label">{label}</span>
    <div style={{ display: 'inline-block' }}>
        {Object.keys(data[id]).map((shortValue, index) => <InnerCheckbox key={index} id={id} checked={data[id][shortValue]} shortValue={shortValue} options={options} onChange={onChange} />)}
        <div className="field-error">{errors['cutSuffixes']}</div>
    </div>
</div>


export { Input, Textarea, Select, Checkbox, StaticData, CheckboxList }