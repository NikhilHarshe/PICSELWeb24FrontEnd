import React, { useEffect, useState } from 'react'
import { apiConnector } from '../services/apiConnector';
import { eventEndpoints } from '../services/apis';
import EventBox from '../Components/ShowEventComponets/EventBox';

const ShowEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    ; (async () => {
      setLoading(true)
      try {
        // console.log("in showEvents ")
        const res = await apiConnector("GET", eventEndpoints.GET_ALL_EVENTS_API)

        setEventsData(res?.data?.data);
        // console.log("This is event data1...", eventsData)
      } catch (error) {
        console.log("Could not fetch Events.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("This is event data2.....", eventsData)


  return (
    <div className='flex flex-col'>
      <div className='bg-gray-800'>
        <div className='w-10/12 mx-auto flex flex-col justify-center lg:h-[210px] pl-4 gap-2'>
          <p className=' text-base text-gray-500 font-semibold'>Home/ Events/
            <span className=' text-yellow-300'> UpComingEvents</span>
          </p>
          <h1 className=' text-3xl text-gray-200 font-semibold'>Scheduled Events</h1>
          <p className=' text-gray-400 font-semibold'>Let's come together and bring our unique contributions to events, ensuring their success through our individuality and collaboration.</p>
        </div>
      </div>

      {/* Events */}
      <div className='w-10/12 mx-auto mb-10 '>
        <div className=' grid grid-cols-3 gap-6 mt-10'>
          {
            eventsData.map((data) => (
              <EventBox data={data} />
            ))
          }
        </div>

      </div>
    </div >
  )

}

export default ShowEvents
