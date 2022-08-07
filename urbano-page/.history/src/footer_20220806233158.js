import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Code for footer, includes hyperlinks to different parts of the website
const Footer = () => (
  <div class="row" className="footer">
    <ul>
      <li className="active">
        <a href="Default.aspx">
          URBANO DESIGN <span class="y-link">AND</span> DEVELOPMENT{" "}
          <span class="y-link">LTD</span>{" "}
        </a>
      </li>
      <li>
        <a href="Comm.aspx">Commercial</a>
      </li>
      <li>
        <a href="Res.aspx">Residential</a>
      </li>
      <li>
        <a href="Contact.aspx">Contact</a>
      </li>
      <div class="right">
        <span class="bar">| </span>
        <span class="about"> Dana A. Peers</span>
      </div>
    </ul>
  </div>
);

export default Footer;
