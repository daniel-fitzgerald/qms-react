import React, { Component } from 'react'

import RestApiService from 'services/RestApiService'
import ValidationService from 'services/ValidationService'

import CutCode from './CutCode'

class CutCodeLoader extends Component {
    state = {
        data: null,
        errors: {},
        messages: null
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        RestApiService.get(`./api/settings/cut-code/${id}`)
            .then(data => this.setState((prevState, props) => ({ data })))
            .catch(messages => this.setState((prevState, props) => ({ messages })))
    }

    onChange = (id) => (e) => {
        let data = Object.assign({}, this.state.data)
        if (e.target.type === 'checkbox') {
            data[id] = e.target.checked || false
        } else {
            data[id] = e.target.value
        }
        let errors = this.validate(data)
        this.setState((prevState, props) => ({ data, errors }))
    }

    onCutSuffixChange = (index) => (e) => {
        let data = Object.assign({}, this.state.data)
        let cutSuffixes = Object.assign([], data.cutSuffixes)
        data.cutSuffixes = cutSuffixes
        cutSuffixes[index].checked = e.target.checked || false
        let errors = this.validate(data)
        this.setState((prevState, props) => ({ data, errors }))
    }

    validate = (data) => {
        let errors = {}

        const { code, category, description, cutSuffixes } = data

        if (!code) {
            errors.code = 'A Code is required.'
        }
        if (!category) {
            errors.category = 'A Category is required.'
        }
        if (!description) {
            errors.description = 'A Description is required.'
        }
        if (cutSuffixes) {
            let checkedCutSuffix = cutSuffixes.find(cutSuffix => cutSuffix.checked === true)
            if (!checkedCutSuffix) {
                errors.cutSuffixes = 'At least one Cut Suffix is required.'
            }
        }

        return errors
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { data } = this.state
        let error = this.validate(data)
        if (ValidationService.hasError(error)) {
            this.setState({ error })
            return
        }

        RestApiService.put('./api/settings/cut-code', data)
            .then(data => {
                const messages = [{ type: 'success', text: 'Saved Cut Code.' }]
                this.setState((prevState, props) => ({ data, messages }))
            })
            .catch(messages => this.setState((prevState, props) => ({ messages })))
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
            return <CutCode {...this.props} {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} onClose={this.onClose} onCutSuffixChange={this.onCutSuffixChange} />
        }
    }
}

export default CutCodeLoader