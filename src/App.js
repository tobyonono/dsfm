import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
     
      <BrowserRouter>
      <Navbar />
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcasts />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter></>

  );
}

export default App;
