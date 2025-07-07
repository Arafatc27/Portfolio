import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import About from './Components/Aboutme';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import me from './Images/MeInWhite.jpeg'
function App() {

  return (
    <>
      <Navbar/>        
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutme" element={<About />} /> */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </>
  )
}

export default App;
