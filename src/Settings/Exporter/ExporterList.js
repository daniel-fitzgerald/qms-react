import React from 'react'

let TableRow = ({ id, name, abn, onEdit }) => <tr><td>{name}</td><td>{abn}</td><td><a onClick={onEdit(id)}>Edit</a></td></tr>

let ExporterList = ({ data, ...actions }) => <div>
    <h2>Exporter List</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>ABN</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => <TableRow key={index} {...item} {...actions} />)}
        </tbody>
    </table>
</div>

export default ExporterList