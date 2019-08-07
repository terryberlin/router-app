import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink className="nav-item nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item nav-link" to="/posts/2018/06">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item nav-link" to="/admin">
          Admin
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
