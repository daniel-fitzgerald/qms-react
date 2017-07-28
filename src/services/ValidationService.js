import React from 'react'
//var moment = require('moment')

let checkFieldMissing = (value) => value === null || value === undefined || value === ""

let hasValue = (value) => !(value === null || value === undefined || value === "")

// function checkDateInvalid (value) {
//     if (hasValue(value)) {
//         const d = moment(value, "D/M/YYYY", true)
//         return !d.isValid()
//     }
// }

// function hasDate(value) {
//     if (hasValue(value)) {
//         const d = moment(value, "D/M/YYYY", true)
//         return d.isValid()
//     }
// }

// function checkEndDateAfterStartDate(startDate, endDate) {
//     if (hasDate(startDate) && hasDate(endDate)) {
//         const sd = moment(startDate, "D/M/YYYY", true)
//         const ed = moment(endDate, "D/M/YYYY", true)

//         return sd.isAfter(ed, 'day')
//     }
// }

let checkFieldIsNumber = (value) => isNaN(value)

let hasError = (errors) => Object.keys(errors).length > 0

let vowelRegex = /^[aeiou]/i

const fieldMessages = {
    'required': (thing) => vowelRegex.test(thing) ? `An ${thing} is required.` : `A ${thing} is required.`,
    'atLeastOneRequired': (thing) => `At least one ${thing} is required.`
}

let getFieldMessage = (code, ...params) => {
    const result = fieldMessages[code]
    if (result) {
        return result(...params)
    } else {
        return `Unknown message: ${code}${params.length > 0 ? `, [${params}]` : ''}`
    }
}

const successMessages = {
    'saved': (thing) => `Saved ${thing}.`
}
let getSuccessMessage = (code, ...params) => {
    const result = successMessages[code]
    if (result) {
        return [{ type: 'success', text: result(...params) }]
    } else {
        return [{ type: 'success', text: `Unknown message: ${code}${params.length > 0 ? `, [${params}]` : ''}` }]
    }
}

let focus = (id) => () => {
    let element = document.getElementById(id)
    if (element) {
        element.scrollIntoView()
        element.focus()
    }
}

const errorMessages = {
    'saved': (errors, thing) => <span>
        <span>You can not save the {thing} until the following errors have been resolved.</span>
        <ul>
            {Object.keys(errors).map((key, index) => <li key={index}><a onClick={focus(key)}>{errors[key]}</a></li>)}
        </ul>
    </span>
}
let getErrorMessages = (errors, code, ...params) => {
    const result = errorMessages[code]
    if (result) {
        return [{ type: 'error', text: result(errors, ...params) }]
    } else {
        return [{ type: 'error', text: `Unknown message: ${code}${params.length > 0 ? `, [${params}]` : ''}` }]
    }
}


export default { checkFieldMissing, hasError, hasValue, checkFieldIsNumber, getFieldMessage, getSuccessMessage, getErrorMessages } //checkDateInvalid, checkEndDateAfterStartDate