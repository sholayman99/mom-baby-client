/* eslint-disable no-unused-vars */
import React from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";

const AppNavBar = () => {
  const navList = (
    <>
      <li>
       <label className="m-o p-0 relative rounded-full">
        <input className="input focus:outline-none border-gray-300 rounded-full min-w-[300px]" placeholder="Search.." />
        <button className="absolute right-0 btn-primary text-base-100 btn rounded-r-full hover:btn-secondary">
          <FaSearch />
        </button>
       </label>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary  bg-base-100 text-[16px] poppins-medium"
              : "text-info  bg-base-100 text-[16px] poppins-medium"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary  bg-base-100 text-[16px] poppins-medium"
              : "text-info  bg-base-100 text-[16px] poppins-medium"
          }
          to={"/products"}
        >
          Products
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-24 bg-base-100">
      <div className="navbar-start">
        <details className="dropdown md:hidden lg:hidden">
          <summary
            className={`btn  bg-base-100 text-secondary border-none shadow-none`}
          >
            <Hamburger size={20} rounded easing="ease-in" />
          </summary>
          <ul className="p-3 ml-0  gap-3 shadow menu dropdown-content z-50  bg-base-100 min-w-full rounded-box ">
            {navList}
          </ul>
        </details>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img className="w-40" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default AppNavBar;
