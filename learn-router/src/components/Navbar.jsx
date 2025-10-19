import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">React Router</h1>
      <div className="space-x-4 mr-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-1 rounded-lg border-color-white ${isActive ? "border-1 " : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `p-1 rounded-lg border-color-white ${isActive ? "border-1 " : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-1 rounded-lg border-color-white ${isActive ? "border-1 " : ""}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="github"
          className={({ isActive }) =>
            `p-1 rounded-lg border-color-white ${isActive ? "border-1 " : ""}`
          }
        >
          Github
        </NavLink>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `p-1 rounded-lg border-color-white ${isActive ? "border-1 " : ""}`
          }
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
