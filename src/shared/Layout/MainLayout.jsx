import React from 'react';

import Header from './Header';
import Body from './Body';
import AboutUs from './../../components/InfoPages/AboutUs';

function MainLayout() {
    return (
        <div>
            <Header />
            <Body />
            <AboutUs />
        </div>
    )
}

export default MainLayout;
