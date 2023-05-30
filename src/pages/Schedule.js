import React from 'react';
import { useState } from 'react';


const Schedule = () => {


    const schedule = [
        {
            name: "Show 1",
            timeSlots: [
                {
                    startTime: "11:00",
                    endTime: "13:00",
                    day: "Monday"
                },
                {
                    startTime: "12:00",
                    endTime: "13:00",
                    day: "Tuesday"
                }
            ]
        },
        {
            name: "Show 2",
            timeSlots: [
                {
                    startTime: "14:00",
                    endTime: "15:00",
                    day: "Tuesday"
                },
                {
                    startTime: "15:00",
                    endTime: "16:00",
                    day: "Wednesday"
                }
            ]
        },
        {
            name: "Show 3",
            timeSlots: [
                {
                    startTime: "16:00",
                    endTime: "17:00",
                    day: "Monday"
                },
                {
                    startTime: "17:00",
                    endTime: "18:00",
                    day: "Wednesday"
                }
            ]
        }
    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

    const [currentTime, setCurrentTime] = useState(new Date());

    const filterShows = (time, day) => {
        return schedule.filter(show => show.timeSlots.some(timeSlot => timeSlot.startTime === time && timeSlot.day === day));
    };

    return (
        <>
            <table className='hidden'>
                <thead>
                    <tr>
                        <th></th>
                        {days.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {times.map(time => (
                        <tr key={time}>
                            <td>{time}</td>
                            {days.map(day => (
                                <td key={`${time}-${day}`} className='bg-[bisque] p-4'>
                                    {filterShows(time, day).map(show => show.name)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=' text-left'>
                <h1 className='font-GTWalsheim text-lg'>MONDAY:</h1>
                <ul className='text-left gap-2 mb-4'>
                    <li>11am - Out & About</li>
                    <li>12pm - Not Just Nashville</li>
                    <li>1pm - Music</li>
                    <li>2pm - Destination Anywhere</li>
                    <li>3pm - Scoth na Seachtaine</li>
                    <li>4pm - Voyage Around My Brain</li>
                    <li>5pm - News</li>
                    <li>5:30pm - Making A Difference</li>
                    <li>6pm - Signposts of Your Life</li>
                    <li>7pm - Mike @ the Mic</li>
                    <li>8pm - Music</li>
                    <li>9pm - Ray M's Country Sounds</li>
                    <li>10pm - Moshpit Monday</li>
                </ul>
                <h1 className='font-GTWalsheim text-lg'>TUESDAY:</h1>
                <ul className='text-left gap-2 mb-4'>
                    <li>11am - RTE Doc On One</li>
                    <li>12pm - Tuesday Bluesday</li>
                    <li>2pm - Lost In Translation</li>
                    <li>3pm - Where's It At?</li>
                    <li>3:30pm - Musical Memories</li>
                    <li>4pm - Memory Lane</li>
                    <li>5pm - News</li>
                    <li>5:30pm - Paul Wright Docs</li>
                    <li>6pm - Music</li>
                    <li>7pm - Fite Fuaite</li>
                    <li>8pm - Descarga</li>
                    <li>9pm - Solid Sound</li>
                </ul>
                <h1 className='font-GTWalsheim text-lg'>WEDNESDAY:</h1>
                <ul className='text-left gap-2 mb-4'>
                    <li>11am - The Power of Dreams</li>
                    <li>1pm - Music</li>
                    <li>2pm - Echoes of the Jukebox</li>
                    <li>3pm - Midweek Mix</li>
                    <li>4pm - The Norton Report</li>
                    <li>5pm - News</li>
                    <li>5:30 - Green Radio</li>
                    <li>6pm - Music</li>
                    <li>8pm - Bass Nation</li>
                    <li>9pm - Radio Dublino</li>
                    <li>10pm - Tracks with Noel & Eoin</li>
                </ul>

                <div className='hidden'>
                     THURSDAY:

                11am - The Marlon Show
                12pm - Mike @ the mic
                1pm - Wellbeing For Everyday Life
                2pm - The Sandyford Shedders
                3pm - Apna Radio
                4pm - Midweek Mix
                5pm - News
                5:30pm - Southside Players
                6pm - Dramatic Dublin
                6:30pm - Interlinks
                7pm - Music
                8pm - Ult Cruze
                10pm - New Irish Music Hour

                FRIDAY:

                11am - Friday Forum
                12pm - Music
                2pm - Let's Get Social
                3pm - Sweep of the Week
                4pm - The View From Here
                5pm - News
                5:30pm - Music
                6pm - Ray M's Country Sounds
                7pm - Rhyme & Reason
                7:30pm - The Jazzman
                9pm - The Power of Dreams

                SATURDAY:

                11am - Sweep of the Week
                12pm - RTE Doc On One
                1pm - The Sandyford Shedders
                2pm - Shuffling Through The Years
                3:30 - Shout!
                4pm - Apna Radio
                6pm - Music Bonanza
                7pm - Urban Smooth
                9pm - Music

                SUNDAY:
                11am - Ceol go Leor
                1pm - Take the A Train
                3pm - Memory Lane
                4pm - Classic Sunday
                5:30pm - Vision
                6pm - Music
                7pm - Eclectic Chair
                8pm - Sunday Night with Keith
                10pm - Music
                </div>

            </div>
        </>

    );
}

export default Schedule;