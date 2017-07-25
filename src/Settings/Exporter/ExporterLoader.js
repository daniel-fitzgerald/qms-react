import React, { Component } from 'react'

import Exporter from './Exporter'

class ExporterLoader extends Component {
    state = {
        data: null,
        messages: null
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        fetch(`./api/settings/exporter/${id}`).then(response => response.json()).then(data => this.setState((prevState, props) => ({ data })))
    }

    onChange = (id) => (e) => {
        let data = Object.assign({}, this.state.data)
        data[id] = e.target.value
        this.setState((prevState, props) => ({ data }))
    }

    onChangeAddress = (addressId) => (id) => (e) => {
        let data = Object.assign({}, this.state.data)
        let address = Object.assign({}, data[addressId])
        data[addressId] = address
        address[id] = e.target.value
        this.setState((prevState, props) => ({ data }))
    }

    onPermissions = () => {
        console.log('onPermissions')
    }

    onDisable = () => {
        console.log('onDisable')
    }

    onEdit = (id) => () => {
        const { history } = this.props
        history.push(`/settings/exporter/contact/${id}`)
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <Exporter {...this.props} data={data} onChange={this.onChange} onChangeAddress={this.onChangeAddress} onEdit={this.onEdit} onDisable={this.onDisable} onPermissions={this.onPermissions} />
        }
    }
}

export default ExporterLoader