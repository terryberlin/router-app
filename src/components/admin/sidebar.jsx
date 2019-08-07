import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ match }) => {
  return (
    <ul>
      <ul>
        <NavLink className="nav-item nav-link" to="/admin/posts">
          Posts
        </NavLink>
      </ul>
      <ul>
        <NavLink className="nav-item nav-link" to="/admin/users">
          Users
        </NavLink>
      </ul>
    </ul>
  );
};

export default SideBar;
