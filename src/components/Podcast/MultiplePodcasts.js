import SinglePodcast from "./SinglePodcast";
import { useState } from "react";

const MultiplePodcasts = ({shows}) => {
   

    const showList = shows.map((pl) => <SinglePodcast name={pl.name} image ={pl.image} date={pl.date} location={pl.location} genre={pl.genre} link={pl.link} />)

    return(
        <ul className='grid grid-cols-4 gap-4 py-6'>{showList}</ul>
    )

}

export default MultiplePodcasts;