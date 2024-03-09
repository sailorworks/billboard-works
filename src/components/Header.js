// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Billboard Works</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/find-billboards">Find Billboards</Link>
          </li>
          <li>
            <Link to="/sign-up-login">Sign Up/Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button>Find Billboards</button>
        <button>List Your Billboards</button>
      </div>
    </header>
  );
}

export default Header;