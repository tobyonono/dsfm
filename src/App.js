import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Media from './pages/Media';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import MissionStatement from './pages/MissionStatement';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Volunteer from './pages/Volunteer';
import { ScrollRestoration } from "react-router-dom";





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
            <Route path="/#" element={<Contact />} />
            <Route path="/#" element={<Schedule />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/mission-statement" element={<MissionStatement />} />
            <Route path="/volunteer" element={<Volunteer />} />


            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </>


  );
}

export default App;
