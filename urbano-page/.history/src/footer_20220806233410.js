import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Code for footer, includes hyperlinks to different parts of the website

const Footer = () => (
  <nav>
    <div class="row" className="footer">
      <ul>
        <li className="active">
          <Link to="/">
            URBANO DESIGN <span class="y-link">AND</span> DEVELOPMENT{" "}
            <span class="y-link">LTD</span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/commercial">Commercial</Link>
        </li>
        <li>
          <Link to="/residential">Residential</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <div class="right">
          <span class="bar">| </span>
          <span class="about"> Dana A. Peers</span>
        </div>
      </ul>
    </div>
  </nav>
);

export default Footer;
