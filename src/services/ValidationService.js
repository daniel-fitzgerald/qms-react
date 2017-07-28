//var moment = require('moment')

function checkFieldMissing (value) {
    return value === null || value === undefined || value === ""
}

function hasValue(value) {
    return !(value === null || value === undefined || value === "")
}

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

function checkFieldIsNumber(value) {
    return isNaN(value)
}

function hasError(errors) {
    return Object.keys(errors).length > 0
}

export default {checkFieldMissing, hasError, hasValue, checkFieldIsNumber} //checkDateInvalid, checkEndDateAfterStartDate