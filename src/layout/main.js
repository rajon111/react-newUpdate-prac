import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const main = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default main;