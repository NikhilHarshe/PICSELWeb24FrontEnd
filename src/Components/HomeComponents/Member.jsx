import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Member = ({ membersData }) => {
    const navigate = useNavigate();

    // console.log("membersData he ", membersData);
    return (
        <Swiper
            slidesPerView={4}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //     clickable: true,
            // }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper h-full pl-2 pr-10 pt-3 pb-3 bg-white"
        >
            {
                membersData.map((member, index) => (

                    <SwiperSlide key={index} className="p-3 lg:w-1/4 md:w-1/2 mb-2 box-Shadow rounded-xl hover:scale-105  " onClick={() => navigate(`/member/${member._id}`)} >
                        <div >
                            <div className="h-full flex flex-col items-center text-center">
                                <img src={member.image} alt={member.firstName} className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{member.firstName} {member.lastName} </h2>
                                    <h3 className="text-gray-600 ">{member.roll}</h3>
                                    <p className="mb-4 font-medium text-gray-700 ">{member.des.substring(0, 50)}
                                        <span>....</span>
                                    </p>
                                    <div className="inline-flex">
                                        <a href={member.instaUrl} className=" text-red-600 font-semibold text-lg w-6 h-6 flex justify-center items-center hover:bg-gradient-to-b from-[#1f35ff] via-[#fa1212] to-[#f3f703] rounded-full hover:text-white hover:scale-110 ">
                                            <FaInstagram />
                                        </a>
                                        <a className="ml-2 text-gray-900 text-lg w-6 h-6 flex justify-center items-center hover:bg-gray-900 rounded-full hover:text-white hover:scale-110" >
                                            <FaXTwitter />
                                        </a>
                                        <Link to={member.linkedinUrl} className="ml-2 text-blue-500 text-lg w-6 h-6 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                                            <FaLinkedinIn />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
export default Member