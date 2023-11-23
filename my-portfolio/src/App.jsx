import { useState } from 'react'
import './styles/style.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { Navbar } from './navigation/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Skills />}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/qualifications" element={<Education />}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
