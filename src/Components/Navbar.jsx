import React, { useState } from 'react'
import { Link, matchPath, useLocation} from 'react-router-dom'
import { BsChevronDown } from "react-icons/bs"
import logo from "./assets/main_logo_picsel11.png"
// import { logout } from '../services/opretions/userAPI'
import { useSelector } from 'react-redux'
import ProfileDropdown from './ProfileDropdown'
import { NavbarLinks } from "../data/navbar-links"

const Navbar = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const location = useLocation();
    // const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false)

    const subLinks = [
        {
            title: "Up Coming Events",
            link: "/events/ShowEvent",
        },
        {
            title: "Successful Events",
            link: "/events/gallery",
        },
    ];

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    return (
        <div className=' text-gray-400 bg-gray-800 body-font border-b border-gray-600'>
            <header className=" w-11/12 mx-auto">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <Link to={"/"} className="flex flex-col title-font font-medium items-center text-white md:mb-0 mt-3 mb-3" >
                        <img src={logo}  alt="Logo" width={100} className="" />
                        <span className="ml-3 text-xl">KDKCE</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {NavbarLinks.map((link, index) => (
                            <p key={index}>
                                {link.title === "Events" ? (
                                    <>
                                        <div
                                            className={`group relative mr-5 text-lg flex cursor-pointer items-center hover:text-yellow-300 gap-1 ${matchRoute("/events/ShowEvent")
                                                ? "text-white"
                                                : "text-gray-400"
                                                }
                                                ${matchRoute("/events/gallery")
                                                ? "text-white"
                                                : "text-gray-400"
                                                }`}
                                        >
                                            <p>{link.title}</p>
                                            <BsChevronDown />
                                            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-blue-50 p-4 text-gray-800 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-blue-50"></div>
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks.length ? (
                                                    <>
                                                        {subLinks.map((subLink, i) => (
                                                                <Link
                                                                    to={subLink.link}
                                                                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-blue-100"
                                                                    key={i}
                                                                >
                                                                    <p>{subLink.title}</p>
                                                                </Link>
                                                            ))}
                                                    </>
                                                ) : (
                                                    <p className="text-center">No Courses Found</p>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link?.path}>
                                        <p
                                            className={`${matchRoute(link?.path)
                                                ? "mr-5 text-white text-lg "
                                                : "mr-5 hover:text-yellow-300 text-lg"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </p>
                        ))}
                        {
                            token !== null && (
                                <Link to={"/event/create"} className={`${matchRoute("/event/create")
                                    ? "mr-5 text-white text-lg"
                                    : "mr-5 hover:text-yellow-300 text-lg"
                                    }`}>Create Event</Link>
                                //  <Link className="mr-5 hover:text-white text-lg">Second Link</Link>
                                // <Link className="mr-5 hover:text-white text-lg">Third Link</Link>
                                // <Link className="mr-5 hover:text-white text-lg">Fourth Link</Link>
                            )
                        }
                    </nav>
                    {token === null && (
                        <Link to="/login">
                            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Log in
                            </button>
                        </Link>
                    )}
                    {/* {token === null && (
                        <Link to="/signup">
                            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Sign up
                            </button>
                        </Link>
                    )} */}
                    {token !== null && <ProfileDropdown />}

                </div>
            </header >
        </div >

    )
}

export default Navbar


