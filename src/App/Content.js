import React from 'react'

let Content = ({ title, children }) => {
    document.title = title + ' - Quota Management System'
    return <div>
        <div>
            secondary nav
        </div>
        <div>
            <div>{title}</div>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default Content