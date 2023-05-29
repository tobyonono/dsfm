import logo from './logo.svg';
import { useState, useRef  } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Media from './pages/Media';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import MissionStatement from './pages/MissionStatement';
import CodeOfPractice from './pages/CodeOfPractice';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Volunteer from './pages/Volunteer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ScrollRestoration } from "react-router-dom";





function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPodcast, setShowPodcast] = useState(false);
  const audioRef = useRef(new Audio('https://dublinsouthfm.radioca.st/stream'));


  return (
    <>
      <BrowserRouter>
      <Navbar isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} showPodcast={showPodcast} setShowPodcast={setShowPodcast}/>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} showPodcast={showPodcast} setShowPodcast={setShowPodcast}/>} />
            <Route path="/podcast" element={<Podcasts />} />
            <Route path="/media" element={<Media />} />
            <Route path="/#" element={<Schedule />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/mission-statement" element={<MissionStatement />} />
            <Route path="/code-of-practice" element={<CodeOfPractice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/schedule" element={<Schedule />} />





            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </>


  );
}

export default App;
