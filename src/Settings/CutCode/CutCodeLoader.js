import React, { Component } from 'react'

import CutCode from './CutCode'

class CutCodeLoader extends Component {
    state = {
        data: null,
        errors: {},
        messages: null
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        fetch(`./api/settings/cut-code/${id}`).then(response => response.json()).then(data => this.setState((prevState, props) => ({ data })))
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

    onSave = (e) => {
        e.preventDefault()
        console.log('save')
    }

    onClose = (e) => {
        const { history } = this.props

        history.push(`/settings/cut-code`)
    }

    render() {
        const { data, errors } = this.state
        if (data === null) {
            return <div>loading</div>
        } else {
            return <CutCode {...this.props} data={data} errors={errors} onSave={this.onSave} onChange={this.onChange} onClose={this.onClose} onCutSuffixChange={this.onCutSuffixChange} />
        }
    }
}

export default CutCodeLoader