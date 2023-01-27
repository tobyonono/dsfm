import img1 from '../../images/F1000005.JPG';
import img2 from '../../images/000016.JPG';
import img3 from '../../images/F1000033.JPG';
import img4 from '../../images/F1000006.jpg';
import img5 from '../../images/000017.JPG';
import img6 from '../../images/000019.JPG';
import img7 from '../../images/000043.JPG';


export const ShowArray =[
    {
        name:'Out & About',
        desc:'Slow R&B, Slow Jazz, Slow Life',
        link:<iframe src="https://open.spotify.com/embed/playlist/7MB7fMB6cScyBT7VNyYrx9?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk', 'jazz', 'afrobeats', ],
        image:'https://pbs.twimg.com/media/FnaTdbmWAAEqFhP?format=png&name=small',
        date:'11:00am - 12:00pm',
        location:'Dublin'
    },
    {
        name:'Not Just Nashville',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/3g92WrKlqrvZgvpGdFuMV9?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk', 'Music'],
        image:'https://pbs.twimg.com/media/Fnau4yGXEAk2Tdx?format=jpg&name=small',
        date:'12:00pm - 1:00pm',
        location:'London'
    },
    {
        name:'The Business Eye',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/6zvCa9tlYGdJWPhz9Ruzpk?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Music'],
        image:'https://pbs.twimg.com/media/FnaeMxqWQAMqN9y?format=jpg&name=small',
        date:'1:00pm - 2:00pm',
        location:'Lagos'
    },
    {
        name:'Destination Anywhere',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/4tZZU27KBx9le8rBXRkQ3G?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk'],
        image:'https://pbs.twimg.com/media/Fm1iGqWWAAAxfmd?format=jpg&name=medium',
        date:'2:00pm - 3:00pm',
        location:'Berlin'
    },
    
]

export const PodcastArray =[
    {
        name:'The Wishing Well',
        desc:'Slow R&B, Slow Jazz, Slow Life',
        link:<iframe width="100%" height="140" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDublinSouthFMCommunityRadio%2Fplaylists%2Fthe-wishing-well%2F" frameborder="0"></iframe>,
        genre:['Talk', 'jazz', 'afrobeats', ],
        image:'https://pbs.twimg.com/media/FnaeMxqWQAMqN9y?format=jpg&name=small',
        date:'11:00am - 12:00pm',
        location:'Dublin'
    },
    {
        name:'Community Connection',
        desc:'Sunny Friday Morning',
        link:<iframe  src="https://open.spotify.com/embed/show/3IuxIg2Vd8OPPKYebzDAP4?utm_source=generator" width="100%" height="142"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk', 'Music'],
        image:'https://pbs.twimg.com/media/Fnau4yGXEAk2Tdx?format=jpg&name=small',
        date:'12:00pm - 1:00pm',
        location:'London'
    },
    {
        name:'Southside Players',
        desc:'Sunny Friday Morning',
        link:<iframe title="Embed Player" width="100%" height="80px" src="https://embed.acast.com/5b0721e8e920b3130bdff6b0/63d288a074da94001174b9be" scrolling="no" frameBorder="0" style={{border: 'none', overflow: 'hidden'}}></iframe>,
        genre:['Music'],
        image:'https://pbs.twimg.com/media/Fm7fXkSWABAu4wf?format=jpg&name=small',
        date:'1:00pm - 2:00pm',
        location:'Lagos'
    },
    {
        name:'Friday Forum',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/4tZZU27KBx9le8rBXRkQ3G?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk'],
        image:img4,
        date:'2:00pm - 3:00pm',
        location:'Berlin'
    },
    {
        name:'Sunday Night w/ Keith McLoughlin',
        desc:'Sunny Friday Morning',
        link:<iframe src="https://open.spotify.com/embed/playlist/4tZZU27KBx9le8rBXRkQ3G?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
        genre:['Talk'],
        image:img4,
        date:'2:00pm - 3:00pm',
        location:'Berlin'
    },
    
]

const genreArray = ShowArray.map((show) => {
    return show.genre;
  });
  
export const uniqueTags = Array.from(new Set(genreArray.flat()))
