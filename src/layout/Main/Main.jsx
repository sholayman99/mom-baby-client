/* eslint-disable no-unused-vars */
import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import AppNavBar from './AppNavBar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') ||
location.pathname.includes('register') || location.pathname.includes('otp-verify');
    return (
        <div>
             {noHeaderFooter ||  <AppNavBar />}
            <Outlet />
        </div>
    );
};

export default Main;