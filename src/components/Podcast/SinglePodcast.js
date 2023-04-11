const SingleShow = ({ name, image, date, location, genre,  link, setShowPodcast, setPodcast}) => {

    const handleClick = (podcastLink) =>{
      setPodcast(podcastLink);
      setShowPodcast(true);
        
    }
    console.log(name);
    const genreList = genre.map((genre) => <li className="text-xs border rounded-2xl border-black p-1 m-1 shadow-lg cursor-pointer">{genre}</li>)
    return (
    <article className="w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
        <div className="relative p-2 pb-4 border border-black h-full">
            <div className="hover:brightness-50 cursor-pointer" onClick={() => handleClick(link)}>
                <img className ='aspect-square object-cover'src={image} loading="lazy" />
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