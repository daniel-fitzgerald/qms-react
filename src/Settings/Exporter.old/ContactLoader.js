import React, { Component } from 'react'

import Contact from './Contact'

class ContactLoader extends Component {
    state = {
        data: null,
        messages: null
    }

    componentDidMount() {
        const { match: { params: { exporterId, contactId } } } = this.props
        fetch(`./api/settings/exporter/${exporterId}/contact/${contactId}`).then(response => response.json()).then(data => this.setState((prevState, props) => ({ data })))
    }

    onChange = (id) => (e) => {
        let data = Object.assign({}, this.state.data)
        data[id] = e.target.value
        this.setState((prevState, props) => ({ data }))
    }

    onSave = (e) => {
        e.preventDefault()
        console.log('save')
    }

    onClose = (e) => {
        const { history } = this.props
        const { match: { params: { exporterId } } } = this.props
        
        history.push(`/settings/exporter/${exporterId}`)
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <Contact {...this.props} data={data} onSave={this.onSave} onChange={this.onChange} onClose={this.onClose} />
        }
    }
}

export default ContactLoader