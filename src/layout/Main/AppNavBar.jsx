// src/components/Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary lg:mx-1 text-[16px] poppins-medium hover:text-secondary"
            : "text-neutral text-[16px] poppins-medium hover:text-secondary"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-primary lg:mx-1 text-[16px] poppins-medium hover:text-secondary"
            : "text-neutral text-[16px] poppins-medium hover:text-secondary"
        }
      >
       Products
      </NavLink>
    </>
  );

  const navIcon = (
    <>
      <NavLink
        className={"hover:text-secondary text-neutral text-2xl lg:text-3xl"}
      >
        <IoCartOutline />
      </NavLink>
      <NavLink
        className={"hover:text-secondary text-neutral text-xl lg:text-2xl"}
      >
        <FaRegHeart />
      </NavLink>
      <NavLink
        to={"/login"}
        className={"hover:text-secondary text-neutral text-xl lg:text-2xl"}
      >
        <FaUserCircle />
      </NavLink>
    </>
  );

  return (
    <nav className="bg-base-100">
      <main className="mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-8 lg:h-24 h-16 shadow">
          {/* icon */}
          <div className="mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center border justify-center p-1 rounded-md text-secondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* nav-icon */}
          <Link to="/">
            <img src={logo} className="lg:w-36 w-28" alt="logo" />
          </Link>
          {/* navList */}
          <div className="hidden lg:flex space-x-10 w-[50%]">
            <div className="flex items-center space-x-6">{navList}</div>
            {/* search-field */}
            <div className="lg:flex hidden border border-gray-300 rounded-lg overflow-hidden  max-w-xs w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2.5 py-2 focus:outline-none text-neutral"
              />
              <button className="bg-primary hover:bg-secondary text-base-100 px-4 py-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.65 10.35A6.35 6.35 0 1110.35 4 6.35 6.35 0 0116.65 10.35z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* navIcon */}
          <div className="flex items-center lg:space-x-6 space-x-4">
            {navIcon}
          </div>
        </div>
      </main>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="flex flex-col pt-2 pb-3 gap-2.5 px-3.5 max-w-xs">
            {navList}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden  max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2.5 py-1.5 focus:outline-none"
              />
              <button className="bg-primary hover:bg-secondary text-base-100 px-2 py-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.65 10.35A6.35 6.35 0 1110.35 4 6.35 6.35 0 0116.65 10.35z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppNavBar;
