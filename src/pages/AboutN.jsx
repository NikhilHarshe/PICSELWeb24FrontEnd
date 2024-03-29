import React from 'react'
import logo from "../Components/assets/main_logo_Picsel.png"
import logo1 from "../Components/assets/main_logo_kdk.jpeg"
import image1 from "../Components/assets/GalleryImages/image11.jpg"
import image2 from "../Components/assets/GalleryImages/image12.jpeg"
import image3 from "../Components/assets/GalleryImages/image13.jpeg"
import image4 from "../Components/assets/GalleryImages/image16.jpeg"
import image5 from "../Components/assets/GalleryImages/image15.jpeg"
import image6 from "../Components/assets/GalleryImages/image18.jpeg"
import com from "../Components/assets/PICSEL 3.jpg"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

import "./About.css"

const AboutN = () => {
    return (
        <>
            <div className=' w-10/12 mx-auto gap-24 flex flex-col '>
                <div className=' flex flex-col justify-center items-center gap-5'>
                    {/* <h1 className=' text-5xl text-gray-100 my-5'>PICSEL</h1> */}
                    <div className=' flipper rounded-full w-[300px] h-[300px] relative mt-6'>
                        <img className=' pico rounded-full bg-gray-100 absolute w-[300px] h-[300px]' src={logo1} alt='Logo' />
                        <img className=' pict rounded-full bg-gray-100 absolute w-[300px] h-[300px]' src={logo} alt='Logo' />
                    </div>
                    <h2 className=' text-xl text-gray-200 font-semibold'>About</h2>
                    <p className=' text-lg text-gray-400 w-9/12'>KDK College of Engineering Nagpur" is a premier institution known for its high-quality education and cutting-edge research in science and technology."PICSEL" (Panel In Computer Science and Engineering Learners) was established in August 2023 by professors and students of the Computer Science and Engineering (CSE) department at KDKCE. It aims to provide a platform for sharing ideas and fostering innovation among budding engineers and innovators.</p>
                    <div className="flex ">
                        <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                            <FaFacebookF className=' w-5 h-5' />
                        </Link>
                        <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-black rounded-full hover:text-white hover:scale-110" >
                            <FaXTwitter className=' w-5 h-5' />
                        </Link>
                        <Link to="https://www.instagram.com/picsel.kdkce?igsh=bzVmZ2k0cDE4NXIw" className=" ml-2 text-gray-400 font-semibold text-lg w-7 h-7 flex justify-center items-center hover:bg-gradient-to-b from-[#1f35ff] via-[#fa1212] to-[#f3f703] rounded-full hover:text-white hover:scale-110 ">
                            <FaInstagram className=' w-5 h-5' />
                        </Link>
                        <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                            <FaLinkedinIn className=' w-5 h-5' />
                        </Link>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className=' w-[50%] flex justify-center items-center'>
                        <h2 className=' text-gray-200 font-semibold text-4xl'><span className=' text-5xl text-blue-600'>"</span>Embracing our diversity, we stand united as a team, driven by a shared passion for success, fostering collaboration and celebrating each victory together.<span className=' text-blue-600 text-5xl'>"</span></h2>
                    </div>
                    <div className=' shadow-blue-200 shadow-[0px_0px_30px_0px]'>
                        <img className='shadow-gray-100 shadow-[10px_10px_0px_0px]' width={570} src={com} alt="" />
                    </div>
                </div>

                <div className=' flex flex-col justify-center items-center gap-10 mb-11'>
                    <p className=' border-t w-8/12'></p>
                    <p className=' text-gray-300 text-xl flex text-center w-full justify-center'>Success in events is crafted through meticulous planning, unwavering dedication,
                        <br /> and exceeding expectations, leaving lasting impressions of excellence.</p>
                    <div className=' flex flex-wrap gap-3 text-gray-100'>
                        {/* <div className=' relative group'>
                            <img id='first' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image1} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="first " > first</label>
                        </div>
                        <div className=' relative group'>
                            <img id='second' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image2} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="second " > first</label>
                        </div>
                        <div className=' relative group'>
                            <img id='third' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image3} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="third " > first</label>
                        </div>
                        <div className=' relative group'>
                            <img id='forth' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image4} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="forth " > first</label>
                        </div>
                        <div className=' relative group'>
                            <img id='fifth' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image5} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="fifth " > first</label>
                        </div>
                        <div className=' relative group'>
                            <img id='sixth' className=' opacity-50 hover:opacity-100 group-hover:scale-105 duration-300 rounded-md' width={400} src={image6} alt="" />
                            <label className=' absolute bottom-3 left-2 group-hover:opacity-100 opacity-0' htmlFor="sixth " > first</label>
                        </div> */}

                        <img id='first' className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image1} alt="" />
                        <img className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image2} alt="" />
                        <img className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image3} alt="" />
                        <img className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image4} alt="" />
                        <img className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image5} alt="" />
                        <img className=' opacity-50 hover:opacity-100 hover:scale-105 duration-300 rounded-md' width={400} src={image6} alt="" />
                    </div>
                </div>
            </div>
            <div className=' border-t'>
                <Footer />
            </div>
        </>
    )
}

export default AboutN
