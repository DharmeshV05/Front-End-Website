import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1>WEb.Dev</h1>
      <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <main className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <HashLink to={"/#home"} onClick={toggleMenu}>
          Home
        </HashLink>
        <Link to={"/contact"} onClick={toggleMenu}>
          Contact
        </Link>
        <HashLink to={"/#about"} onClick={toggleMenu}>
          About
        </HashLink>
        <HashLink to={"/#brands"} onClick={toggleMenu}>
          Brands
        </HashLink>
        <Link to={"/services"} onClick={toggleMenu}>
          Services
        </Link>
      </main>
    </nav>
  );
};

export default Header;
