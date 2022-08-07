import React from "react";
import Footer from "./footer";
import logo from "./assets/logo.png"; // Tell Webpack this JS file uses this image
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <div>This is Home</div>;
}

export default Home;
