import React from 'react';

import Dashboard from './../../components/Dashboard/Dashboard';
import UserList from './../../components/Users/UserlList';
import UserDetails from './../../components/Users/UserDetails';

function Body() {

    return (
        <React.Fragment>
            <Dashboard />
            <UserList />
            <UserDetails />
        </React.Fragment>
    );
}

export default Body;
