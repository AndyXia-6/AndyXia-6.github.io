import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Commercial from "./Pages/Commercial";
import About from "./Pages/About";
import Residential from "./Pages/Residential";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/residential" element={<Residential />} />
      </Routes>
    </Router>
  );
}

export default App;
