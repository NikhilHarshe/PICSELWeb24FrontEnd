import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchEventDetails, deleteEvent } from '../services/opretions/eventAPI';
import { useDispatch, useSelector } from 'react-redux';
import { LuPencilLine } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { setEvent, setEditEvent } from '../slices/eventSlice';
// import toast from 'react-hot-toast';
import ConfirmationModal from '../Components/ConfirmationModal';
// import {} from '../services/opretions/eventAPI'

const EventDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { eventId } = useParams();
  const [data, setData] = useState();
  // to keep track of confirmation modal
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)

  useEffect(() => {
    ; (async () => {
      try {
        const res = await fetchEventDetails(eventId);

        // console.log("This is event data in Event Box ", res);
        setData(res?.data);
      }
      catch (error) {
        console.log("Event data Can not Fetch ", error);
      }
    })()
  }, [eventId])

  const newDate = data?.eventDate.substring(0, 10);

  const edithandler = () => {
    dispatch(setEvent(data));
    dispatch(setEditEvent(true));
    navigate(`/event-edite/${data?._id}`);
  }
  const deletehandler = async () => {
    // const eventId = data?._id;
    setLoading(true);
    const res = await deleteEvent(eventId, token)

    console.log("res in eventDetails ", res);

    if (!res.success) {
      // toast.success("Event Deleted Successfully");
      dispatch(setEvent(null));
    }
    navigate("/ShowEvent");
    setLoading(false);
  }

  // const joinHandler = () => {
  //   navigate
  // }

  return (
    <>
      <section className="text-gray-600 lg:h-[627px] flex ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className=' my-7 text-gray-400'>Home/Event/{" "}
              <span className=' text-yellow-300'>{data?.eventName} </span>  </p>
            <p className="title-font mr-0 sm:text-4xl text-3xl mb-4 font-medium text-gray-200">{data?.eventName}</p>
            <p className="mb-5 leading-relaxed text-gray-400">{data?.eventDes}</p>
            <div className='w-7/12 flex justify-between '>
              <p className='text-yellow-300'>Date: <span className=' text-blue-100'>{newDate}</span> </p>
              <p className='text-yellow-300'>Time: <span className=' text-blue-100'>{data?.eventTime}</span></p>
            </div>
            <p className=' text-yellow-300'>Event Head: <span className=' text-blue-100'>{data?.eventManeger} </span> </p>
            <p className=' text-yellow-300'>Venue: <span className=' text-blue-100'>{data?.eventLocation} </span> </p>
            <div className=" mt-5">
              {
                (token && user) ?
                  (
                    <div className=' flex gap-3'>
                      <div className='flex gap-2 justify-cente align-middle text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={edithandler}>
                        <button className="">Edit</button>
                        <LuPencilLine className=' mt-1' />
                      </div>
                      <div className='flex gap-2 justify-cente align-middle text-red-500 bg-red-200 border-0 py-2 px-5 focus:outline-none hover:bg-red-300 rounded text-lg'
                        onClick={() => {
                          setConfirmationModal({
                            text1: "Do you want to delete this Evevt?",
                            text2:
                              "All the data related to this Event will be deleted",
                            btn1Text: !loading ? "Delete" : "Loading...  ",
                            btn2Text: "Cancel",
                            btn1Handler: !loading
                              ? () => deletehandler()
                              : () => { },
                            btn2Handler: !loading
                              ? () => setConfirmationModal(null)
                              : () => { },
                          })
                        }} >
                        <button className="">Delete</button>
                        <RiDeleteBinLine className=' mt-1' />
                      </div>
                    </div>
                  ) :
                  (
                    <a href={data?.eventLink} target="_blank" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Now</a>
                  )
              }
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-md ">
            <img className="object-cover rounded-lg shadow-blue-400 shadow-[0px_0px_30px_0px]" alt="hero" src={data?.eventImage} width={400} />
          </div>
        </div>
      </section>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default EventDetails
