const category = {
    B: 'Butter',
    C: 'Casein',
    CH: 'Cheese',
    CM: 'Condensed milk',
    MC: 'Milk and Cream',
    MP: 'Milk Powders',
    ODP: 'Other Dairy Products',
    DS: 'Dairy Stockfeed',
    O: 'Other',
}

let getText = (table, code) => {
    return category[code]
}

export default { getText }