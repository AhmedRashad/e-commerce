import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">register</Link>
      </li>
    </ul>
  );
}

export default NavBar;
