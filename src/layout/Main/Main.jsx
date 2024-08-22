/* eslint-disable no-unused-vars */
import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import AppNavBar from './AppNavBar';

const Main = () => {
    const location = useLocation()

    return (
        <div>
            <AppNavBar />
            <Outlet />
        </div>
    );
};

export default Main;