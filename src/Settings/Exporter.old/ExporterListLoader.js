import React, { Component } from 'react'

import ExporterList from './ExporterList'

class ExporterListLoader extends Component {
    state = {
        data: null,
        messages: null
    }

    componentDidMount() {
        fetch('./api/settings/exporter').then(response => response.json()).then(data => this.setState((prevState, props) => ({ data: data })))
    }

    onEdit = (id) => () => {
        const { history } = this.props
        history.push(`/settings/exporter/${id}`)
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <div>qq1</div>
        } else {
            return <ExporterList {...this.props} data={data} onEdit={this.onEdit} />
        }
    }
}

export default ExporterListLoader