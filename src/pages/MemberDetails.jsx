import React, { useEffect, useState } from 'react'
import { getMemberDetail } from '../services/opretions/memberApi';
import { Link, useParams } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const MemberDetails = () => {

    const { memberId } = useParams();
    const [data, setData] = useState([]); // Change setData to setData1

    const fetchdata = async () => {
        try {
            const res = await getMemberDetail(memberId);

            console.log("This is event data in Event Box ", res.data);
            setData(res.data); // Change setData to setData1
            console.log("This is event data in Event Box 3 ", data);
        } catch (error) {
            console.log("Event data Can not Fetch ", error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    console.log("This is event data in Event Box 2 ", data);

    //   const newDate = data?.eventDate.substring(0, 10);

    //   const edithandler = () => {
    //     dispatch(setEvent(data));
    //     dispatch(setEditEvent(true));
    //     navigate(`/event-edite/${data?._id}`);
    //   }
    //   const deletehandler = () => {
    //     // const eventId = data?._id;
    //     const res = deleteEvent(eventId, token)

    //     console.log("res in eventDetails ", res);

    //     if (!res.success){
    //       // toast.success("Event Deleted Successfully");
    //       dispatch(setEvent(null));
    //       navigate("/ShowEvent");
    //     }

    //   }

    return (
        <div className=' w-10/12 flex mx-auto justify-between items-center gap-2 mt- h-[630px] text-gray-400'>
            <div className=' w-[65%] flex flex-col gap-10'>
                <p>Home/{data.accountType}/ <span className=' text-yellow-300'>{data.firstName} {data.lastName} </span> </p>
                <div className=' gap-2 flex flex-col'>
                    <p className=' text-blue-100 text-4xl font-semibold'>{data.firstName}{" "}{data.lastName} </p>
                    <p className=' text-lg'>Position : <span className=' text-yellow-300'>{data.role}</span></p>
                    <p className=' text-lg text-gray-300 leading-7'> <span className=' text-blue-400 text-2xl font-bold'>{"<"} </span> {data.des} <span className=' text-blue-400 text-2xl font-bold'>{"/>"} </span> </p>
                    <span className="inline-flex">
                        <a href={data.instaUrl} className=" text-red-600 font-semibold text-lg w-7 h-7 flex justify-center items-center hover:bg-gradient-to-b from-[#1f35ff] via-[#fa1212] to-[#f3f703] rounded-full hover:text-white hover:scale-110 ">
                            <FaInstagram />
                        </a>
                        <a className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-black rounded-full hover:text-white hover:scale-110" >
                            <FaXTwitter />
                        </a>
                        <Link to={data.linkedinUrl} className="ml-2 text-blue-500 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                            <FaLinkedinIn />
                        </Link>
                    </span>
                </div>
            </div>
            <div className='shadow-blue-200 shadow-[0px_0px_30px_0px]'>
                <img className=' shadow-gray-400 shadow-[10px_10px_0px_0px]' src={data.image} alt={data.firstName} width={320} />
            </div>
        </div>
    )
}

export default MemberDetails
