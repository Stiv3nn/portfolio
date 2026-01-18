import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from './Components/Footer.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/progetti" element={<Projects />} />
      </Routes>

      {/* Il footer scompare solo in Home */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;