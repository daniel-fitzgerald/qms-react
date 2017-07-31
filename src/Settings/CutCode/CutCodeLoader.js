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
        Promise.all([RestApiService.get(`./api/settings/cut-code/${id}`), RestApiService.get('./api/ref/category'), RestApiService.get('./api/ref/cut-suffix')])
            .then(([data, category, cutSuffix]) => this.setState((prevState, props) => ({ data, category, cutSuffix })))
            .catch(messages => this.setState((prevState, props) => ({ messages })))
    }

    onChange = (e) => {
        const { name, checked, value, type } = e.target
        let names = name.split('.')
        let data = Object.assign({}, this.state.data)
        if (names.length === 1) {
            if (type === 'checkbox') {
                data[name] = checked || false
            } else {
                data[name] = value
            }
        } else {
            this.onChangeRecursive(data, type, value, checked, names)
        }
        let errors = this.validate(data)
        this.setState((prevState, props) => ({ data, errors }))
    }

    onChangeRecursive = (current, type, value, checked, [head, ...tail]) => {
        if (tail.length === 1) {
            let data = Object.assign(Array.isArray(current[head]) ? [] : {}, current[head])
            current[head] = data
            if (type === 'checkbox') {
                data[tail[0]] = checked || false
            } else {
                data[tail[0]] = value
            }
        } else {
            let data = Object.assign({}, current[head])
            current[head] = data
            this.onChangeRecursive(data, type, value, checked, tail)
        }
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
            let checkedCutSuffix = Object.keys(cutSuffixes).find(key => cutSuffixes[key] === true)
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
            let messages = ValidationService.getActionErrorMessages(errors, 'saved', 'Cut Code')
            this.setState((prevState, props) => { errors, messages })
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
            return <CutCode {...this.props} {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} onClose={this.onClose} />
        }
    }
}

export default CutCodeLoader