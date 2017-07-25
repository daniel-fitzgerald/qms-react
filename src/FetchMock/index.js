import fetchMock from 'fetch-mock'

fetchMock.get(/\.\/api\/settings\/exporter\/.+/g, {
    id: 1,
    name: 'name',
    abn: '324876',
    email: 'some@thing.com',
    accountNumber: '1231243',
    exporterNumber: '324234234',
    qmsEmail: 'eh@what.com',
    comments: 'some comment.',
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
            firstname: 'some',
            surname: 'body',
            email: 'some.body@thing.com',
            phone: '24389928734'
        }
    ]
})

fetchMock.get('./api/settings/exporter', [
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
    {id: 1, name: 'name', abn: '324234234'},
]);