import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/main_logo_picsel11.png"
import { FaInstagram, FaLinkedinIn} from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className=' text-gray-400 bg-gray-900 body-font'>
            <footer className="mx-auto">
                {/* <div className=" w-11/12 container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <img src={logo} alt="Logo" className="w-24 h-24 p-[-15]" />
                            
                        </Link>
                        <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Second Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-400 hover:text-white">First Link</Link>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">Second Link</a>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Third Link</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-400 hover:text-white">Fourth Link</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className=" w-11/12 container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                                <FaFacebookF className=' w-5 h-5' />
                            </Link>
                            <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-gray-900 rounded-full hover:text-white hover:scale-110" >
                                <FaXTwitter className=' w-5 h-5' />
                            </Link>
                            <Link className=" ml-2 text-gray-400 font-semibold text-lg w-7 h-7 flex justify-center items-center hover:bg-gradient-to-b from-[#1f35ff] via-[#fa1212] to-[#f3f703] rounded-full hover:text-white hover:scale-110 ">
                                <FaInstagram className=' w-5 h-5' />
                            </Link>
                            <Link className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                                <FaLinkedinIn className=' w-5 h-5' />
                            </Link>
                        </span>
                    </div>
                </div> */}

                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img src={logo} width={100} alt="" />
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Picsel —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@picsel</a>
                    </p>
                    {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span> */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.instagram.com/picsel.kdkce?igsh=bzVmZ2k0cDE4NXIw" className=" text-red-600 font-semibold text-lg w-7 h-7 flex justify-center items-center hover:bg-gradient-to-b from-[#1f35ff] via-[#fa1212] to-[#f3f703] rounded-full hover:text-white hover:scale-110 ">
                            <FaInstagram />
                        </a>
                        <a className="ml-2 text-gray-400 text-lg w-7 h-7 flex justify-center items-center hover:bg-black rounded-full hover:text-white hover:scale-110" >
                            <FaXTwitter />
                        </a>
                        <Link to="" className="ml-2 text-blue-500 text-lg w-7 h-7 flex justify-center items-center hover:bg-blue-700 rounded-full hover:text-white hover:scale-110">
                            <FaLinkedinIn />
                        </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer
