import "./App.css";
import React from "react";
import Footer from "./footer";
import logo from "./assets/logo.png"; // Tell Webpack this JS file uses this image
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Commercial from "./Pages/Commercial";
import Residential from "./Pages/Residential";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </Router>
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
      <div className="App">
        <Footer />
      </div>
    </div>
  );
}
export default App;
