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
        <table>
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
                            <td key={`${time}-${day}` } className='bg-[bisque] p-4'>
                                {filterShows(time, day).map(show => show.name)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Schedule;