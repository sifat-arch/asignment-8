import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import btnLogo from "../assets/git.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <Link to="/apps">Apps</Link>
            <Link to="/installation">Installation</Link>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          <span>
            <img className="h-10" src={logo} alt="" />
          </span>
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3.5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold px-3 py-2 transition ${
                isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `text-lg font-semibold px-3 py-2 transition ${
                isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
              }`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `text-lg font-semibold px-3 py-2 transition ${
                isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
              }`
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl flex gap-2"
          href="https://github.com/sifat-arch/asignment-8"
          target="_blank"
        >
          <span>
            <img src={btnLogo} alt="" />
          </span>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
