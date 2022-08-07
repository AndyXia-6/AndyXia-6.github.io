import React from "react";
import logo from "./assets/logo.png"; // Tell Webpack this JS file uses this image
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <img src={logo} className="logo" alt="logo" />
      <div class="info">
        <div class="about-us">
          <h1>
            <span class="stick-header">|</span> ABOUT US
          </h1>
          <p>
            <span class="y-text bold">Urbano Design and Development Ltd.</span>{" "}
            is committed to uncompromising detail in Residential and Commerical
            design, as well as, Project Management and Land Development.
          </p>
          <p>
            Over the past 30 years <span class="y-text bold">Dana Peers</span>{" "}
            has completed numerous projects, not only in Alberta, but throughout
            North America, including Mexico, California, Texas, Montana and
            British Columbia.
          </p>
          <p>
            <span class="y-text bold">Urbano Design</span> is focused on being a
            leader in innovation and bringing projects to reality for our
            clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
