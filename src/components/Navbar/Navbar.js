import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Dropdown from "./Dropdown";

import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import { IconContext } from "react-icons";
import { useState, useRef } from "react";


const Navbar = ({ isPlaying, setIsPlaying, audioRef, showPodcast, setShowPodcast }) => {


    const play = () => {
        setIsPlaying(true);
        audioRef.current.play();
        setShowPodcast(false)
    };

    const pause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };


    return (
        <div className=" font-nitti sticky z-50 top-0 text-sm">

            <nav className="p-0 md:p-2 z-10 w-full md:w-auto m-auto flex bg-black text-white uppercase">

                <ul className="flex flex-row flex-1 items-center justify-start gap-8 font-nitti font-bold uppercase">
                    <li className="flex items-center">
                        <img className="w-28 h-fit" src="https://dublinsouthfm.ie/wp-content/uploads/2021/08/Comp-1-0-00-00-00.png" />
                    </li>
                    <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 '
                        } end >
                            <button className="pointer-events-auto hover:opacity-100 ">
                                HOME
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <Dropdown />
                    </li>
                    <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/schedule' className={({ isActive }) =>
                            isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
                        }>

                            <button className="pointer-events-auto ">
                                <span>SCHEDULE</span>
                            </button>
                        </NavLink>
                    </li>

                    <li className="ml-auto">
                        <div className=" flex justify-between items-center">
                            <IconContext.Provider value={{ color: "white", size: '1.2em', className: "mx-2" }}>
                                <a href="https://www.instagram.com/dublinsouthfm">
                                    <FaInstagram />
                                </a>
                                <a href="https://twitter.com/DublinSouthFM">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.facebook.com/DublinSouthFM/">
                                    <FaFacebook />
                                </a>
                            </IconContext.Provider>
                        </div>
                    </li>


                </ul>
                <div className="hidden flex flex-row border-2 border-[#F7BA45] p-1 max-h-16 self-center">
                    <IconContext.Provider value={{ color: "#F7BA45", size: '0.7em', className: "" }}>
                        <div className=" flex text-white items-center"><p className="mr-1">Live Now</p> <span className="mr-1 animate-flicker-animation bg-[#e81717] w-2 h-2 inline-block rounded-full"></span></div>
                        <button
                            className="p-4 border-2 border-[#F7BA45] rounded-full "
                            onClick={isPlaying ? pause : play}
                            aria-label={
                                isPlaying ? "Pause Live Broadcast" : "Play Live Broadcast"
                            }
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </IconContext.Provider>
                </div>

            </nav >
            <section className="bg-black pl-2 border-2 border-[#F7BA45] text-white">
                <ul className="flex flex-row">
                    <li className="flex items-center border-r-2 border-[#F7BA45]">
                        <div className=" flex text-white items-center text-lg"><p className="mr-1"></p> <span className="mr-1 animate-flicker-animation bg-[#e81717] w-7 h-7 inline-block rounded-full"></span></div>
                    </li>
                    <li className="flex items-center uppercase">
                        <p className="px-2 text-lg font-bold"></p>
                        <span></span>
                        <p className="px-2 text-lg"></p>
                    </li>
                    <li className="ml-auto">
                        <div className="flex flex-row  border-[#F7BA45] border-l-2 p-1 max-h-16 self-center">
                            <IconContext.Provider value={{ color: "#F7BA45", size: '0.7em', className: "" }}>
                                <button
                                    className="p-4 border-2 border-[#F7BA45] rounded-full "
                                    onClick={isPlaying ? pause : play}
                                    aria-label={
                                        isPlaying ? "Pause Live Broadcast" : "Play Live Broadcast"
                                    }
                                >
                                    {isPlaying ? <FaPause /> : <FaPlay />}
                                </button>
                            </IconContext.Provider>
                        </div>
                    </li>

                    <li></li>
                    <li></li>

                </ul>
            </section>

        </div>

    )
}

export default Navbar;










