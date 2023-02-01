import { ShowArray } from "../components/UpcomingShows/ShowInfo";
import { PodcastArray } from "../components/UpcomingShows/ShowInfo";
import MultipleShows from "../components/UpcomingShows/MultipleShows";
import MultiplePodcasts from "../components/Podcast/MultiplePodcasts";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img10 from '../images/000043.JPG';
import Footer from "../components/Footer/Footer";

const Home = () => {

    return (
        <div>
            <section className="h-full w-full  bg-white text-black">
                <div className="h-full ">
                    <img src={img10} />
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
                        <div className=" py-12 pr-12 text-left">
                            <h1 className="font-guyot italic text-6xl mb-4 ">About</h1>
                            <h1 className="font-GTWalsheim text-6xl ">Dublin South FM</h1>
                        </div>
                        <div className="py-12 pl-12 text-left font-GTWalsheim text-lg">
                            <p className="mb-4">Dublin South FM is the licensed Community Radio Station for South Dublin.

                                Our main catchment area comprises: Dundrum, Churchtown, Rathfarnham, Ballinteer, Kilmacud, Goatstown, Stillorgan, Windy Arbour, Milltown, Mount Merrion, Sandyford, Ballyboden, Stepaside, Knocklyon, Rathmines & Terenure.</p>
                            <p>We are a community station run by volunteers with the support of some permanent part time staff.

                                You can pick us up on 93.9 FM everyday, or with the TuneIn radio app on your smartphone.</p>
                        </div>
                    </div>
                    <div className="flex py-2 justify-between border-b border-b-white uppercase">
                        <p>Playlists</p>
                        <p>001</p>
                    </div>
                </div>
            </section >
            <section className="h-full w-full p-8 bg-white text-black">
                <div className="flex py-2 justify-between border-b border-b-black uppercase text-sm font-nitti">
                    <p className="p-2 bg-white text-black rounded-xl focus:bg-slate-900 focus:rounded-xl shadow-[0_2px_0_0_rgb(0,0,0)] border-2 border-black transition ease-out active:scale-105" >Podcasts</p>
                </div>
                <div className="">
                    <MultiplePodcasts shows={PodcastArray} />
                </div>
            </section>
            <section className="h-full w-full p-8 bg-black text-white">
                <div className=" m-auto text-sm font-nitti mb-8 ">
                    <div className="grid grid-cols-2  m-auto">
                        <div className=" py-12 pr-12 text-left">
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
                            <div className=" flex relative flex-col justify-between items-center w-full h-full">
                                <div className='text-white flex justify-between w-full font-GTWalsheim text-xs'>
                                    <p>Launch Project</p>

                                </div>
                                <div className="justify-center">
                                    <h3 className="my-6 text-[bisque] text-2xl relative z-10 whitespace-pre-line">Our Mission</h3>
                                </div>
                                <div>

                                </div>
                            </div>

                        </li >
                        < li className={`font-nitti p-3 bg-cover  text-sm uppercase shadow-lg rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer bg-[url('https://dublinsouthfm.ie/wp-content/uploads/2021/10/ian-schneider-TamMbr4okv4-unsplash-scaled.jpg')]`} >
                            <div className=" flex relative flex-col justify-between items-center w-full h-full">
                                <div className='text-white flex justify-between w-full font-GTWalsheim text-xs'>
                                    <p>Launch Project</p>

                                </div>
                                <div className="justify-center">
                                    <h3 className="my-6 text-[bisque] text-2xl relative z-10 whitespace-pre-line">Our Story</h3>
                                </div>
                                <div>

                                </div>
                            </div>

                        </li >
                    </ul>
                    <div className="flex py-2 justify-between border-b border-b-white uppercase">
                        <p>Playlists</p>
                        <p>001</p>
                    </div>
                </div>
            </section >

        </div >
    )

}

export default Home;