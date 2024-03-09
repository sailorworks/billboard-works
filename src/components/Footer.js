// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>Contact Information</p>
        <p>Social Media Links</p>
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
    </footer>
  );
}

export default Footer;