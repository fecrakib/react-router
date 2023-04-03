import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const     Home = () => {
    return (
        <div> <Header/>
            <h3>This is home page</h3>
            <Outlet/>

        </div>
    );
};

export default    Home;