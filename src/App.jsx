import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import About from './Components/About.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Reset dello scroll */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/progetti" element={<Projects />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      {/* Il footer scompare solo in Home */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;