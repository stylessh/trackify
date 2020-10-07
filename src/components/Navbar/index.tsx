import React from "react";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/Logo.png" alt="Trackify logo" /> <h2>Trackify</h2>
      </div>
    </header>
  );
};

export default Navbar;
