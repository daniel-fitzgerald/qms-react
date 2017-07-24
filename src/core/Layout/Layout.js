import React from 'react'

import Header from './Header'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

let AppLayout = ({ appRoutes, navigationItems }) => <div>
    <Header />
    <MainNavigation navigationItems={navigationItems} />
    <div>
        {appRoutes}
    </div>
    <Footer />
</div>

export default AppLayout