import React from 'react'

import Content from 'components/Content'
import { StaticData, Input, Textarea, Select, Checkbox } from 'components/Input'

import SecondaryNav from '../SecondaryNav'

const breadcrumbs = {
    crumbs: [{ path: '/settings', label: 'Settings' }, { path: '/settings/exporter', label: 'Exporter List' }],
    currentLabel: 'Exporter'
}

let Address = ({ id, label, data, onChangeAddress }) => <div className="address-data">
    <span className="label">{label}</span>
    <Input id="line1" label="Line 1" data={data[id]} onChange={onChangeAddress(id)} />
    <Input id="line2" label="Line 2" data={data[id]} onChange={onChangeAddress(id)} />
    <Select id="state" label="State" data={data[id]} onChange={onChangeAddress(id)} options={[{ value: 'ACT', label: 'ACT' }, { value: 'NSW', label: 'New South Wales' }]} />
    <Input id="postcode" label="Postcode" data={data[id]} onChange={onChangeAddress(id)} />
</div>

let TableRow = ({ id, firstname, surname, email, phone, onEdit, onDisable, onPermissions }) => <tr>
    <td>{firstname}</td>
    <td>{surname}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td><a onClick={onEdit(id)}>Edit</a> <a onClick={onDisable}>Disable</a> <a onClick={onPermissions(id)}>Permissions</a></td>
</tr>

let Exporter = ({ data, onChange, onChangeAddress, location, onSave, onClose, onChangeAsAbove, ...contactActions }) => <Content title="Exporter" secondaryNav={SecondaryNav} location={location} breadcrumbs={breadcrumbs}>
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
            <Address id="physicalAddress" label="Address" data={data} onChangeAddress={onChangeAddress} />
            <Checkbox id="asAbove" label="Postal as above" data={data} onChange={onChangeAsAbove} />
            <fieldset disabled={data.asAbove}>
            <Address id="postalAddress" label="Postal Address" data={data} onChangeAddress={onChangeAddress} />
            </fieldset>
        </div>
    </div>
    <div className="page-actions">
        <button type="button" onClick={onClose}>Close</button>
        <button type="submit" onClick={onSave}>Save</button>
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
            {data.contacts.map((item, index) => <TableRow key={index} {...item} {...contactActions} />)}
        </tbody>
    </table>
</Content>

export default Exporter