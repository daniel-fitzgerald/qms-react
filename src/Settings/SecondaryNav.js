const SecondaryNav = [
    {
        label: 'Maintenance Tables', children: [
            { label: 'Cut Suffix', path: '/settings/cut-suffix' },
            { label: 'Cut Code', path: '/settings/cut-code' },
            { label: 'Tariff Code', path: '/settings/tariff-code' },
            { label: 'Commodity', path: '/settings/commodity' },
            { label: 'Qutoa', path: '/settings/quota' },
            { label: 'Exporter', path: '/settings/exporter' },
            { label: 'Importer', path: '/settings/importer' },
            { label: 'Destination', path: '/settings/destination' },
            { label: 'Discharge Port', path: '/settings/discharge-port' },
            { label: 'Load Port', path: '/settings/load-port' },
            { label: 'Works', path: '/settings/works' },
            { label: 'Works Accreditation', path: '/settings/Works Accreditation' },
            { label: 'Office Locations', path: '/settings/Office Locations' },
            { label: 'Global Exports', path: '/settings/Global Exports' },
        ]
    },
    {
        label: 'Notification Templates', children: [
            { label: 'New Template', path: '/settings/template/new' },
            { label: 'Manage Template', path: '/settings/template' },
        ]
    },
    {
        label: 'Setup', children: [
            { label: 'New Quota Definition', path: '/settings/quota-definition/new' },
            { label: 'Manage Quto Definition', path: '/settings/quota-definition' },
        ]
    }
]


export default SecondaryNav