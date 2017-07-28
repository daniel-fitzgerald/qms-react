import React, { Component } from 'react'

import RestApiService from 'services/RestApiService'

import CutCodeList from './CutCodeList'

class CutCodeListLoader extends Component {
    state = {
        data: null,
        filter: { code: '', category: '', description: '' },
        messages: null
    }

    componentDidMount() {
        RestApiService.get('./api/settings/cut-code')
            .then(data => this.setState((prevState, props) => ({ data })))
            .catch(messages => this.setState((prevState, props) => ({ messages })))
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

    getFilteredData = () => {
        const { data, filter } = this.state
        return data.filter(dataItem => dataItem.code.includes(filter.code) && (!filter.category || dataItem.category === filter.category) && dataItem.description.includes(filter.description))
    }

    onClear = (e) => {
        let filter = { code: '', category: '', description: '' }
        this.setState((prevState, props) => ({ filter }))
    }

    render() {
        const { data, ...state } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <CutCodeList {...this.props} {...state} data={this.getFilteredData()} onEdit={this.onEdit} onFilterChange={this.onFilterChange} onClear={this.onClear} />
        }
    }
}

export default CutCodeListLoader