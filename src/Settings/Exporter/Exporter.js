import React from 'react'

import Content from '../../App/Content'

import SecondaryNav from '../SecondaryNav'

let StaticData = ({ label, value }) => <div className="static-data"><span className="label">{label}</span><span>{value}</span></div>

let Input = ({ id, label, data, onChange }) => <div className="dynamic-data"><label className="label" htmlFor={id}>{label}</label><input id={id} value={data[id]} onChange={onChange(id)} /></div>
let Textarea = ({ id, label, data, onChange }) => <div className="dynamic-data"><label className="label" htmlFor={id}>{label}</label><textarea id={id} value={data[id]} onChange={onChange(id)} rows="5"></textarea></div>

let Address = ({ id, label, data, onChangeAddress }) => <div className="address-data">
    <span className="label">{label}</span>
    <Input id="line1" label="Line 1" data={data[id]} onChange={onChangeAddress(id)} />
    <Input id="line2" label="Line 2" data={data[id]} onChange={onChangeAddress(id)} />
    <Input id="state" label="State" data={data[id]} onChange={onChangeAddress(id)} />
    <Input id="postcode" label="Postcode" data={data[id]} onChange={onChangeAddress(id)} />
</div>

let TableRow = ({ id, firstname, surname, email, phone, onEdit, onDisable, onPermissions }) => <tr>
    <td>{firstname}</td>
    <td>{surname}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td><a onClick={onEdit(id)}>Edit</a> <a onClick={onDisable}>Disable</a> <a onClick={onPermissions}>Permissions</a></td>
</tr>

let Exporter = ({ data, onChange, onChangeAddress, location, ...actions }) => <Content title="Exporter" secondaryNav={SecondaryNav} location={location}>
    <div>
        <div className="grid-50">
            <StaticData label="Name" value={data.name} />
            <StaticData label="ABN" value={data.abn} />
            <StaticData label="Email" value={data.email} />
            <StaticData label="Account Number" value={data.accountNumber} />
            <StaticData label="Exporter Number" value={data.exporterNumber} />
            <Input id="qmsEmail" label="QMS Email" data={data} onChange={onChange} />
            <Textarea id="comments" label="Comments" data={data} onChange={onChange} />
            <Input id="phone" label="Phone" data={data} onChange={onChange} />
            <Input id="mobile" label="Mobile" data={data} onChange={onChange} />
        </div>
        <div className="grid-50">
            <Address id="postalAddress" label="Postal Address" data={data} onChangeAddress={onChangeAddress} />
            <Address id="physicalAddress" label="Physical Address" data={data} onChangeAddress={onChangeAddress} />
        </div>
    </div>

    <h3>Contacts</h3>
    <table>
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.contacts.map((item, index) => <TableRow key={index} {...item} {...actions} />)}
        </tbody>
    </table>
</Content>

export default Exporter