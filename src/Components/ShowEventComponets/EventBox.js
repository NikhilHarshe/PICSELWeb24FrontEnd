import React from 'react'
import { Link } from 'react-router-dom'

const EventBox = ({ data }) => {
    // console.log("this is box data  ", data);
    const {
        eventName,
        eventDate,
        // eventTime,
        eventDes,
        // eventLink,
        // eventManeger,
        eventImage,
        // email,
        // password,
    } = data
    const newDate = eventDate.substring(0, 10);
    const newDes = eventDes.substring(0, 90);
    return (
        <Link to={`/event/${data._id}`}>
            <div className='text-blue-100 flex flex-col gap-2 w-full h-full bg-gray-700 rounded-lg px-4 py-4'>
                <img src={eventImage} alt='Event Image' className=' w-[100%] h-[100%]' />
                <h1 className=' text-xl font-semibold text-yellow-300'>{eventName}</h1>
                <div className=' text-gray-100'>{newDes}.... </div>
                <div>{newDate}</div>
            </div>
        </Link>
    )
}

export default EventBox
