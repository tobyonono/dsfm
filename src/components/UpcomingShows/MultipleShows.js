import { showArray } from "./ShowInfo";
import SingleShow from "./SingleShow";
import { useState } from "react";

const MultipleShows = ({shows}) => {
   

    const showList = shows.map((pl) => <SingleShow name={pl.name} image ={pl.image} date={pl.date} location={pl.location} genre={pl.genre} link={pl.link} />)

    return(
        <ul className='grid grid-cols-4 gap-4 py-6'>{showList}</ul>
    )

}

export default MultipleShows;