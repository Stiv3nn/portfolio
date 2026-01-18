import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/progetti" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
