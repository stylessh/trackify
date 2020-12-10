import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/assets/Logo.png" alt="Trackify logo" /> <h2>Trackify</h2>
      </Link>
    </header>
  );
};

export default Navbar;
