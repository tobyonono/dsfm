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


const Navbar = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('https://dublinsouthfm.radioca.st/stream'));

    const play = () => {
        setIsPlaying(true);
        audioRef.current.play();
    };

    const pause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };


    return (
        <div className=" font-nitti">
            <div className="flex flex-row bg-black font-bold uppercase w-full p-2">
                <div className="hidden ml-auto flex justify-between items-center">
                    <IconContext.Provider value={{ color: "white", size: '1.2em', className: "mx-2" }}>
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                        <FaLinkedin />
                        <FaMixcloud />
                    </IconContext.Provider>
                </div>
            </div>
            <nav className="p-0 md:p-2 z-10 w-full md:w-auto m-auto flex bg-black text-white uppercase">
                <div className="w-2/12">
                    <img className="" src="https://dublinsouthfm.ie/wp-content/uploads/2021/08/Comp-1-0-00-00-00.png" />
                </div>
                <ul className="flex flex-row flex-1 items-center justify-around  p-2 font-nitti font-bold uppercase">
                    
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
                    <li className='active:border-blue-400 mr-2'>
                        <NavLink to='/podcasts' className={({ isActive }) =>
                            isActive ? 'opacity-100 border-b border-black' : 'opacity-50 hover:opacity-100 border-dashed'
                        }>
                            <button className="pointer-events-auto ">
                                <span>CONTACT</span>
                            </button>
                        </NavLink>
                    </li>

                
                </ul>
                <div className="flex flex-row border-2 border-[#F7BA45] p-1 max-h-16 self-center">
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

        </div>

    )
}

export default Navbar;










