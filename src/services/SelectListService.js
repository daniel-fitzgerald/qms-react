const category = [
    { label: '', value: '' },
    { label: 'Butter', value: 'B' },
    { label: 'Casein', value: 'C' },
    { label: 'Cheese', value: 'CH' },
    { label: 'Condensed milk', value: 'CM' },
    { label: 'Milk and Cream', value: 'MC' },
    { label: 'Milk Powders', value: 'MP' },
    { label: 'Other Dairy Products', value: 'ODP' },
    { label: 'Dairy Stockfeed', value: 'DS' },
    { label: 'Other', value: 'O' },
]

let getOptions = (table) => {
    return category
}

export default { getOptions }