import React, { Component } from 'react'

import CutCodeList from './CutCodeList'

class CutCodeListLoader extends Component {
    state = {
        data: null,
        filter: { code: '', category: '', description: '' },
        messages: null
    }

    componentDidMount() {
        fetch('./api/settings/cut-code').then(response => response.json()).then(data => this.setState((prevState, props) => ({ data: data })))
    }

    onEdit = (id) => () => {
        const { history } = this.props
        history.push(`/settings/cut-code/${id}`)
    }

    onFilterChange = (id) => (e) => {
        let filter = Object.assign({}, this.state.filter)
        filter[id] = e.target.value
        this.setState((prevState, props) => ({ filter }))
    }

    getFilteredData = (data, filter) => {
        return data.filter(dataItem => dataItem.code.includes(filter.code) && dataItem.category.includes(filter.category) && dataItem.description.includes(filter.description))
    }

    render() {
        const { data, filter } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <CutCodeList {...this.props} data={this.getFilteredData(data, filter)} filter={filter} onEdit={this.onEdit} onFilterChange={this.onFilterChange} />
        }
    }
}

export default CutCodeListLoader