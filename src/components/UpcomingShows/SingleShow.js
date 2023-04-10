const SingleShow = ({ name, image, date, location, genre,  link }) => {

    const handleClick = (playlistLink) =>{
      
        
    }
    console.log(name);
    const genreList = genre.map((genre) => <li className="border rounded-2xl border-black p-1 my-1 mr-1 shadow-lg cursor-pointer text-xs">{genre}</li>)
    return (
    <article className="relative w-full p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg z-0">
        <div className="relative p-2 pb-4  h-full">
            <div className="hover:brightness-50 cursor-pointer" onClick={() => handleClick(link)}>
                <img className ='aspect-square object-cover'src={image} loading="lazy" />
            </div>
            <div className="flex flex-wrap justify-between mt-1">
                <span>{date}</span>
                <div className="basis-full text-left mt-1 text-lg font-bold">
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