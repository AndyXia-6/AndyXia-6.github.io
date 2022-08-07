import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Commercial from "./Pages/Commercial";
import About from "./Pages/About";
import Residential from "./Pages/Residential";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Commercial</Link>
        <Link to="/">Residential</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
