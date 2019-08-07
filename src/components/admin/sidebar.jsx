import React from "react";
import { Link, Route } from "react-router-dom";

const SideBar = ({ match }) => {
  return (
    <ul>
      <ul>
        <Link to="/admin/posts">Posts</Link>
      </ul>
      <ul>
        <Link to="/admin/users">Users</Link>
      </ul>
    </ul>
  );
};

export default SideBar;
