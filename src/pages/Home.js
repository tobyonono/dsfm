import { ShowArray } from "../components/UpcomingShows/ShowInfo";
import { PodcastArray } from "../components/UpcomingShows/ShowInfo";
import MultipleShows from "../components/UpcomingShows/MultipleShows";
import MultiplePodcasts from "../components/Podcast/MultiplePodcasts";
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import img10 from '../images/000043.JPG';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const Home = () => {

    const [podcast, setPodcast] = useState('');
    const [showPodcast, setShowPodcast] = useState(false);

    const handleClick = () => {
        setShowPodcast(false)
    }

    return (
        <div>
            <section className="h-full w-full flex flex-col  bg-white text-black">


                <div className=" h-[calc(100vh_-_62px_-_53px)]">
                    <img className='h-full w-full object-cover' src={img10} />
                    <div className="inset-0 absolute group-hover:bg-black/60 flex items-center justify-center  group-hover:visible group-hover:text-white/100" >
                        <div className="" >
                        testing
                        </div>
                    </div>
                </div>

            </section>
            <section className="h-full w-full p-8 bg-white text-black">
                <div className="flex py-2 justify-between border-b border-b-black uppercase text-sm font-nitti">
                    <p className="p-2 bg-white text-black rounded-xl focus:bg-slate-900 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-out active:scale-105" >Upcoming Shows</p>
                </div>
                <div className="">
                    <MultipleShows shows={ShowArray} />
                </div>
                <div className=" ">
                    <NavLink to='/schedule' className='flex justify-center items-center font-GTWalsheim'>
                        <h1 className="border-b border-b-black text-lg m-1">Full Schedule</h1>
                        <FaArrowRight />
                    </NavLink>
                </div>
            </section>
            <section className="h-full w-full p-8 bg-black text-white">
                <div className=" m-auto text-sm font-nitti mb-8 ">
                    <div className="grid grid-cols-2  m-auto">
                        <div className=" py-12 pr-12 text-left flex items-center justify-center flex-col">
                            <h1 className="font-guyot italic text-6xl mb-4 ">About</h1>
                            <h1 className="font-GTWalsheim text-6xl ">Dublin South FM</h1>
                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-lg">
                            <p className="mb-4">Dublin South FM is the licensed Community Radio Station for South Dublin.

                                Our main catchment area comprises: Dundrum, Churchtown, Rathfarnham, Ballinteer, Kilmacud, Goatstown, Stillorgan, Windy Arbour, Milltown, Mount Merrion, Sandyford, Ballyboden, Stepaside, Knocklyon, Rathmines & Terenure.</p>
                            <p>We are a community station run by volunteers with the support of some permanent staff.

                                You can pick us up on 93.9 FM everyday, or with the TuneIn radio app on your smartphone.</p>
                        </div>
                    </div>
                    <div className="flex py-2 justify-between border-b border-b-white uppercase">

                    </div>
                </div>
            </section >
            <section className="h-full w-full p-8 bg-white text-black">
                <div className="flex py-2 justify-between border-b border-b-black uppercase text-sm font-nitti">
                    <p className="p-2 bg-white text-black rounded-xl focus:bg-slate-900 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-out active:scale-105" >Podcasts</p>
                </div>
                <div className="">
                    <MultiplePodcasts shows={PodcastArray} setPodcast={setPodcast} setShowPodcast={setShowPodcast} />
                </div>
            </section>
            <section className="h-full w-full p-8 bg-black text-white">
                <div className=" m-auto text-sm font-nitti mb-8 ">
                    <div className="grid grid-cols-2  m-auto">
                        <div className=" py-12 pr-12 text-left flex justify-center items-center">
                            <h1 className="font-guyot italic text-6xl mb-4">Who We Are</h1>
                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-lg">
                            <p className="mb-4">Dublin South FM is the licensed Community Radio Station for South Dublin.

                                Our main catchment area comprises: Dundrum, Churchtown, Rathfarnham, Ballinteer, Kilmacud, Goatstown, Stillorgan, Windy Arbour, Milltown, Mount Merrion, Sandyford, Ballyboden, Stepaside, Knocklyon, Rathmines & Terenure.</p>
                            <p>We are a community station run by volunteers with the support of some permanent part time staff.

                                You can pick us up on 93.9 FM everyday, or with the TuneIn radio app on your smartphone.</p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-4">
                        < li className={` font-nitti p-9  bg-cover text-sm uppercase shadow-lg rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer bg-[url('https://dublinsouthfm.ie/wp-content/webpc-passthru.php?src=https://dublinsouthfm.ie/wp-content/uploads/2021/09/Studio44.png&nocache=1')]`} >
                            <NavLink to='/mission-statement'>
                                <div className=" flex relative flex-col justify-between items-center w-full h-full">
                                    <div className='text-white flex justify-between w-full font-GTWalsheim text-xs'>

                                    </div>
                                    <div className="justify-center">
                                        <h3 className="my-6 text-[bisque] text-2xl relative z-10 whitespace-pre-line">Our Mission</h3>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </NavLink>
                        </li >
                        < li className={`font-nitti p-3 bg-cover  text-sm uppercase shadow-lg rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer bg-[url('https://dublinsouthfm.ie/wp-content/uploads/2021/10/ian-schneider-TamMbr4okv4-unsplash-scaled.jpg')]`} >
                            <NavLink to='/our-story'><div className=" flex relative flex-col justify-between items-center w-full h-full">
                                <div className='text-white flex justify-between w-full font-GTWalsheim text-xs'>

                                </div>
                                <div className="justify-center">
                                    <h3 className="my-6 text-[bisque] text-2xl relative z-10 whitespace-pre-line">Our Story</h3>
                                </div>
                                <div>

                                </div>
                            </div>
                            </NavLink>
                        </li >
                    </ul>
                    <div className="flex py-2 justify-between border-b border-b-white uppercase">

                    </div>
                </div>
            </section >
            <section className="fixed bottom-0 left-0 right-0">
                {showPodcast &&
                    <div className="flex flex-row items-center transition ease-in-out">
                        <div className="w-full transition ease-in-out">{podcast}</div>
                        <IconContext.Provider value={{ margin: "0em", className: "m-0 hover:color-grey" }}>

                            <button className="h-[60px] w-[60px] ml-auto text-white bg-black " onClick={handleClick}>
                                <div className="hover h-full w-full inline-flex items-center justify-center hover:animate-spin"><FiX /></div></button>
                        </IconContext.Provider>

                    </div>}
            </section>

        </div >
    )

}

export default Home;