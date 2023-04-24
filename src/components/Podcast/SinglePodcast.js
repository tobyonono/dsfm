import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";

const SingleShow = ({ name, image, date, location, genre, link, setShowPodcast, setPodcast, isPlaying, setIsPlaying, audioRef }) => {

    const handleClick = (podcastLink, setIsPlaying, audioRef) => {
        setIsPlaying(false);
        audioRef.current.pause();
        setPodcast(podcastLink);
        setShowPodcast(true);
        

    }
    console.log(name);
    const genreList = genre.map((genre) => <li className="text-xs border rounded-2xl border-black p-1 m-1 shadow-lg cursor-pointer">{genre}</li>)
    return (
        <article className="w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
            <div className="relative p-2 pb-1  h-full">
                <div className="group flex justify-center items-center relative">
                    <div className=" cursor-pointer" >
                        <img className='aspect-square object-cover' src={image} loading="lazy" />
                    </div>
                    <div className="invisible inset-0 absolute group-hover:bg-black/60 flex items-center justify-center  group-hover:visible group-hover:text-white/100" >
                        <button className="" onClick={() => handleClick(link, setIsPlaying, audioRef)}>
                        <IconContext.Provider value={{ size: '5em'}}>
                            <FaPlay />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between mt-3">
                    <div className="basis-full text-left text-lg font-bold">
                        <h1>{name}</h1>
                    </div>
                    <div className="flex flex-row">
                        <ul className="flex w-full flex-wrap rounded">{genreList}</ul>
                    </div>
                </div>
            </div>
        </article>
    )
}



export default SingleShow;