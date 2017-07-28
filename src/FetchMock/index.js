import fetchMock from 'fetch-mock'

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
    cutSuffixes: [
        { label: 'A: description', checked: true },
        { label: 'B: other description', checked: true },
        { label: 'C: another description', checked: false },
        { label: 'D: some description 1', checked: false },
        { label: 'E: some description 2', checked: false },
        { label: 'F: some description 3', checked: false },
        { label: 'G: some description 4', checked: false },
        { label: 'H: some description 5', checked: false },
        { label: 'I: some description 6', checked: false },
        { label: 'J: some description 7', checked: false },
        { label: 'K: some description 8', checked: false },
        { label: 'L: some description 9', checked: false },
        { label: 'M: some description 10', checked: false },
    ],
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
    cutSuffixes: [
        { label: 'A: description', checked: true },
        { label: 'B: other description', checked: true },
        { label: 'C: another description', checked: false },
        { label: 'D: some description 1', checked: false },
        { label: 'E: some description 2', checked: false },
        { label: 'F: some description 3', checked: false },
        { label: 'G: some description 4', checked: false },
        { label: 'H: some description 5', checked: false },
        { label: 'I: some description 6', checked: false },
        { label: 'J: some description 7', checked: false },
        { label: 'K: some description 8', checked: false },
        { label: 'L: some description 9', checked: false },
        { label: 'M: some description 10', checked: false },
    ],
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