import React, { Component } from 'react'

import CutCode from './CutCode'

class CutCodeLoader extends Component {
    state = {
        data: null,
        messages: null
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        fetch(`./api/settings/cut-code/${id}`).then(response => response.json()).then(data => this.setState((prevState, props) => ({ data })))
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
        
        history.push(`/settings/cut-code`)
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <CutCode {...this.props} data={data} onSave={this.onSave} onChange={this.onChange} onClose={this.onClose} />
        }
    }
}

export default CutCodeLoader