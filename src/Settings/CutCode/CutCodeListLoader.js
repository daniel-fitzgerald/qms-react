import React, { Component } from 'react'

import RestApiService from 'services/RestApiService'
import Loading from 'components/Loading'

import CutCodeList from './CutCodeList'

class CutCodeListLoader extends Component {
    state = {
        data: null,
        filter: { code: '', category: '', description: '' },
        messages: null
    }

    componentDidMount() {
        Promise.all([RestApiService.get('./api/settings/cut-code'), RestApiService.get('./api/ref/category')])
            .then(([data, category]) => this.setState((prevState, props) => ({ data, category })))
            .catch(messages => this.setState((prevState, props) => ({ messages })))
    }

    onEdit = (id) => () => {
        const { history } = this.props
        history.push(`/settings/cut-code/${id}`)
    }

    onFilterChange = (e) => {
        let filter = Object.assign({}, this.state.filter)
        filter[e.target.name] = e.target.value
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
            return <Loading {...this.state}></Loading>
        } else {
            return <CutCodeList {...this.props} {...state} data={this.getFilteredData()} onEdit={this.onEdit} onFilterChange={this.onFilterChange} onClear={this.onClear} />
        }
    }
}

export default CutCodeListLoader