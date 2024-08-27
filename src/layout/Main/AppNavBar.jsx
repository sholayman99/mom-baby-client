/* eslint-disable no-unused-vars */
import React from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaHeart, FaRegHeart, FaSearch, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const AppNavBar = () => {
  const navList = (
    <>
      <li>
        <label className="m-o p-0 relative rounded-full">
          <input
            className="input focus:outline-none border-gray-300 rounded-full min-w-[300px]"
            placeholder="Search.."
          />
          <button className="absolute right-0 btn-primary text-base-100 btn rounded-r-full
           hover:btn-secondary">
            <FaSearch />
          </button>
        </label>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary lg:mx-1 hover:text-secondary hover:bg-base-100 focus:bg-base-100 text-[16px] poppins-medium"
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
        <Link to={"/"} className="btn btn-ghost ">
          <img className="lg:w-40 w-24" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center justify-between ">
        <ul className="menu menu-horizontal ">{navList}</ul>
      </div>
      <div className="navbar-end mr-5">
        <ul className="flex items-center gap-4">
        <li>
            <NavLink
              className={"hover:text-secondary text-accent text-5xl my-0 py-0p"}
              to={"/login"}
            >
              <IoCartOutline />
            </NavLink>
          </li>
        <li>
            <NavLink
              className={"hover:text-secondary text-accent text-4xl my-0 py-0p"}
              to={"/login"}
            >
              <FaRegHeart />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"hover:text-secondary text-accent text-4xl my-0 py-0p"}
              to={"/login"}
            >
              <FaUserCircle />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavBar;
