import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;