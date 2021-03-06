import fetchMock from 'fetch-mock'

fetchMock.get(/\.\/api\/ref\/cut-suffix/, {
    options: [
        { label: 'A: some label', value: 'A' },
        { label: 'B: some label', value: 'B' },
        { label: 'D: some label', value: 'D' },
        { label: 'E: some label', value: 'E' },
        { label: 'F: some label', value: 'F' },
        { label: 'G: some label', value: 'G' },
        { label: 'H: some label', value: 'H' },
        { label: 'I: some label', value: 'I' },
        { label: 'J: some label', value: 'J' },
        { label: 'K: some label', value: 'K' },
        { label: 'L: some label', value: 'L' },
        { label: 'M: some label', value: 'M' },
        { label: 'N: some label', value: 'N' },
    ],
    labels: {
        A: 'A: some label',
        B: 'B: some label',
        D: 'D: some label',
        E: 'E: some label',
        F: 'F: some label',
        G: 'G: some label',
        H: 'H: some label',
        I: 'I: some label',
        J: 'J: some label',
        K: 'K: some label',
        L: 'L: some label',
        M: 'M: some label',
        N: 'N: some label',
    }
});

fetchMock.get(/\.\/api\/ref\/category/, {
    options: [
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
    ],
    labels: {
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
});

// fetchMock.put(/\.\/api\/settings\/cut-code/, {
//     status: 400,
//     body: [
//         'you errored',
//         'you errored again!'
//     ]
// })
fetchMock.put(/\.\/api\/settings\/cut-code/, {
    id: 1,
    code: '0536',
    category: 'CM',
    description: 'some description',
    certificateApplications: true,
    cutSuffixes: {
        A: true,
        B: true,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
    },
    createdBy: 'someone',
    dateCreated: '12/12/2012 13:56',
    modifiedBy: 'someone else',
    dateModified: '14/12/2015 19:12',
})

fetchMock.get(/\.\/api\/settings\/cut-code\/.+/, {
    id: 1,
    code: '0536',
    category: 'CM',
    description: 'some description',
    certificateApplications: true,
    cutSuffixes: {
        A: true,
        B: true,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
    },
    createdBy: 'someone',
    dateCreated: '12/12/2012 13:56',
    modifiedBy: 'someone else',
    dateModified: '14/12/2015 19:12',
})

let getCutCodes = () => {
    let result = []
    for (let i = 0; i < 4000; i++) {
        result.push({
            id: i,
            code: '0' + i,
            category: 'CM',
            description: 'some description'
        })
    }
    return result
}

fetchMock.get(/\.\/api\/settings\/cut-code/, getCutCodes())

fetchMock.get(/\.\/api\/settings\/exporter\/.+\/contact\/.+/, {
    id: 1,
    firstname: 'some',
    surname: 'body',
    email: 'some.body@thing.com',
    phone: '24389928734'
})

fetchMock.get(/\.\/api\/settings\/exporter\/.+/, {
    id: 1,
    name: 'name',
    abn: '324876',
    email: 'some@thing.com',
    accountNumber: '1231243',
    exporterNumber: '324234234',
    qmsEmail: 'eh@what.com',
    comments: 'some comment.',
    asAbove: true,
    postalAddress: {
        line1: '1 fake st',
        line2: 'somehwere',
        state: 'ACT',
        postcode: '2600'
    },
    physicalAddress: {
        line1: '1 fake st',
        line2: 'somehwere',
        state: 'ACT',
        postcode: '2600'
    },
    phone: '232984234',
    mobile: '3984573245',
    contacts: [
        {
            id: 1,
            firstname: 'some',
            surname: 'body',
            email: 'some.body@thing.com',
            phone: '24389928734'
        },
        {
            id: 2,
            firstname: 'some',
            surname: 'bodyelse',
            email: 'some.body@thing.com',
            phone: '24389928734'
        }
    ]
})

fetchMock.get('./api/settings/exporter', [
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
    { id: 1, name: 'name', abn: '324234234' },
]);