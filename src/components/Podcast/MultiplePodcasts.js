import SinglePodcast from "./SinglePodcast";
import { useState } from "react";

const MultiplePodcasts = ({shows, setShowPodcast, setPodcast}) => {
   

    const showList = shows.map((pl) => <SinglePodcast name={pl.name} image ={pl.image} date={pl.date} location={pl.location} genre={pl.genre} link={pl.link} setShowPodcast={setShowPodcast} setPodcast={setPodcast}/>)

    return(
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>{showList}</ul>
    )

}

export default MultiplePodcasts;