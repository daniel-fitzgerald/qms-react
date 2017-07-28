import React, { Component } from 'react'

import RestApiService from 'services/RestApiService'
import ValidationService from 'services/ValidationService'
import Loading from 'components/Loading'

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

        if (ValidationService.checkFieldMissing(code)) {
            errors.code = ValidationService.getFieldMessage('required', 'Code')
        }
        if (ValidationService.checkFieldMissing(category)) {
            errors.category = ValidationService.getFieldMessage('required', 'Category')
        }
        if (ValidationService.checkFieldMissing(description)) {
            errors.description = ValidationService.getFieldMessage('required', 'Description')
        }
        if (ValidationService.hasValue(cutSuffixes)) {
            let checkedCutSuffix = cutSuffixes.find(cutSuffix => cutSuffix.checked === true)
            if (ValidationService.checkFieldMissing(checkedCutSuffix)) {
                errors.cutSuffixes = ValidationService.getFieldMessage('atLeastOneRequired', 'Cut Suffix')
            }
        }

        return errors
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { data } = this.state
        let errors = this.validate(data)
        if (ValidationService.hasError(errors)) {
            let messages = ValidationService.getErrorMessages(errors, 'saved', 'Cut Code')
            this.setState({ errors, messages })
            return
        }

        RestApiService.put('./api/settings/cut-code', data)
            .then(data => {
                const messages = ValidationService.getSuccessMessage('saved', 'Cut Code')
                this.setState((prevState, props) => ({ data, messages }))
            })
            .catch(messages => this.setState((prevState, props) => ({ messages })))
    }

    onClose = (e) => {
        const { history } = this.props

        history.push('/settings/cut-code')
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <Loading {...this.state}></Loading>
        } else {
            return <CutCode {...this.props} {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} onClose={this.onClose} onCutSuffixChange={this.onCutSuffixChange} />
        }
    }
}

export default CutCodeLoader