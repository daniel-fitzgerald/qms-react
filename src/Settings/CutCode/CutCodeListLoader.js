import React, { Component } from 'react'

import CutCodeList from './CutCodeList'

class CutCodeListLoader extends Component {
    state = {
        data: null,
        messages: null
    }

    componentDidMount() {
        fetch('./api/settings/cut-code').then(response => response.json()).then(data => this.setState((prevState, props) => ({ data: data })))
    }

    onEdit = (id) => () => {
        const { history } = this.props
        history.push(`/settings/cut-code/${id}`)
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <CutCodeList {...this.props} data={data} onEdit={this.onEdit} />
        }
    }
}

export default CutCodeListLoader