import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import logo1 from "../Components/assets/apple-touch-icon1.png"
import logo2 from "../Components/assets/apple-touch-icon.png"
import logo3 from "../Components/assets/apple-touch-icon3.png"
import Picture1 from "../Components/assets/Home page photos/Picture1.jpg"
import Picture2 from "../Components/assets/Home page photos/Picture2.jpg"
import Picture3 from "../Components/assets/Home page photos/Picture3.jpg"
import Picture4 from "../Components/assets/Home page photos/Picture4.jpg"
import Picture5 from "../Components/assets/Home page photos/Picture5.jpg"
import Picture6 from "../Components/assets/Home page photos/Picture6.jpg"
import Picture7 from "../Components/assets/Home page photos/Picture7.jpg"
import Picture8 from "../Components/assets/Home page photos/Picture8.jpg"
import Picture9 from "../Components/assets/Home page photos/Picture9.jpg"
import oppo from "../Components/assets/sponsers/oppo logo.jpeg"
import LiveTech from "../Components/assets/sponsers/LiveTech logo.jpeg"
import cafe from "../Components/assets/sponsers/cafe logo1.jpeg"
import Legendary from "../Components/assets/sponsers/Legendary.jpeg"
// import { TypeAnimation } from 'react-type-animation';
import CTAButton from "../Components/HomeComponents/Button"
import HighlightText from '../Components/HomeComponents/HighlightText';
import Timeline from "../Components/HomeComponents/Timeline"
import Member from '../Components/HomeComponents/Member';
// import { TeamMembersData } from '../data/TeamMembersData';
// import { FacultyMembersData } from '../data/FacultyMembersData';
import { memberEndpoints } from '../services/apis';
import { setLoading } from '../slices/authSlice';
import { apiConnector } from '../services/apiConnector';
import PICSEL from "../Components/assets/PICSEL 2.jpg"
import { TypeAnimation } from 'react-type-animation'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';

const Home = () => {

    const [TeamMembersData, setTeamMembersData] = useState([]);
    const [FacultyMembersData, setFacultyMembersData] = useState([]);


    useEffect(() => {
        const fetchData = async (accountType) => {
            let response = null;
            setLoading(true)
            try {
                // console.log("accoutType in Home ", accountType);
                response = await apiConnector("POST", memberEndpoints.GET_ALL_MEMBERS_DETAILS, { accountType })

                // setTeamMembersData(res?.data?.data);
                // console.log("This is event data1...", eventsData)
            } catch (error) {
                console.log("Could not fetch Events.", error)
            }
            setLoading(false)
            return response;
        }
        const fetchDataAndSetState = async () => {
            const team = await fetchData("TeamMember");
            setTeamMembersData(team?.data?.data);
            // setTeamMembersData(team);
            const faculty = await fetchData("Faculty");
            setFacultyMembersData(faculty?.data?.data);
        };

        fetchDataAndSetState();
    }, []);


    // console.log("TeamMemberData1 ", TeamMembersData);
    // console.log("FacultyMembersData1 ", FacultyMembersData);

    const codeblock = `<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is MyCode</title>\n</head>\n<body>\n<h1><a href="/">Aim</a></h1>\n<nav> <a href="/one">forgetMistake()</a> <a href="/two">rememberLasson()</a>\n</nav>\n</body>`
    const cote = `PICSEL Committee: Ignite innovation, foster collaboration, and shape the future of technology!`

    return (
        <div className=' text-gray-600  body-font'>
            {/* section 1 */}
            <div className=' w-10/12 mx-auto'>
                {/* <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold h-[85px] overflow-hidden">
                            Empower Your
                            <HighlightText text={"Soft Skills"} /> with Our PICSEL Community!
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={{
                        btnText: "Try it Yourself",
                        link: "/contact",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        link: "/about",
                        active: false,
                    }}
                    codeColor={"text-yellow-400"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is MyCode</title>\n</head>\n<body>\n<h1><a href="/">Aim</a></h1>\n<nav> <a href="/one">forgetMistake()</a> <a href="/two">rememberLasson()</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                /> */}

                <div className={`flex lg:flex-row mt-20 justify-between flex-col lg:gap-10 gap-10 `}>

                    <div className=' w-[47%] h-[350px]  relative shadow-blue-200 shadow-[0px_0px_30px_0px]'>
                        <Swiper
                            slidesPerView={1}
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
                            className="mySwiper h-full w-full z-0 shadow-gray-100 shadow-[10px_10px_0px_0px] object-cover"
                        // style={{ filter: 'grayscale(0.6) contrast(1.2) opacity(0.99)' }}
                        >
                            <SwiperSlide >
                                <img src={Picture1} alt="Picture1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture2} alt="Picture2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture3} alt="Picture3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture4} alt="Picture4" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture5} alt="Picture5" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture6} alt="Picture6" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture7} alt="Picture7" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture8} alt="Picture8" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Picture9} alt="Picture9" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={PICSEL} alt="PICSEL" />
                            </SwiperSlide>
                        </Swiper>

                        <span className={` font-bold text-lg font-mono bg-slate-700 text-yellow-400 z-30 absolute bottom-2 `}>
                            <TypeAnimation
                                sequence={[cote, 2000, ""]}
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    whiteSpace: "pre-line",
                                    display: "block",
                                }}
                                omitDeletionAnimation={true}
                            />
                        </span>
                    </div>
                    <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
                        <div className="codeblock1 absolute"></div>
                        {/* Indexing */}
                        <div className="text-center flex flex-col w-[10%] select-none text-gray-500 font-inter font-bold ">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                            <p>11</p>
                        </div>

                        {/* Codes */}
                        <div
                            className={`w-[90%] flex flex-col gap-2 font-bold font-mono text-yellow-400  pr-1`}
                        >
                            <TypeAnimation
                                sequence={[codeblock, 1000, ""]}
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    whiteSpace: "pre-line",
                                    display: "block",
                                }}
                                omitDeletionAnimation={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <section className=' bg-gray-900 '>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
                    {/* Job that is in Demand - Section 1 */}
                    <div className="mb-10 w-11/12 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold lg:w-[45%] text-blue-50">
                            Learn teamwork essentials for {" "}
                            <HighlightText text={"effective collaboration"} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px] text-gray-400">
                                The modern Picsel is the dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/about"}>
                                <div className=""> Know More</div>
                            </CTAButton>
                        </div>
                    </div>

                    {/* Timeline Section - Section 2 */}
                    <Timeline />

                    {/* Learning Language Section - Section 3 */}
                    {/* <LearningLanguageSection /> */}
                </div>
            </section>

            {/* section 3 */}
            <section className=' bg-gray-50 '>
                <div className='w-10/12 mx-auto pt-12 mt-5'>
                    <div className=' flex justify-center flex-col items-center text-gray-800 text-4xl font-bold'>
                        OUR VISION
                        <span className=' h-[6px] w-[70px] bg-yellow-400'></span>
                    </div>
                    <div className=' flex justify-between gap-8 pt-8'>
                        <div className=' flex gap-2 hover:bg-gray-300 hover:scale-105 duration-300 p-2 rounded-md'>
                            <div >
                                <img src={logo1} alt="Aim" />
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <div className=' text-gray-700 text-xl font-semibold'>Face Challenges:</div>
                                <p className=' text-gray-500 font-semibold'>The PICSEL committee envisions empowering engineering students to confidently navigate the challenges encountered throughout their academic journey.</p>
                            </div>
                        </div>
                        <div className=' flex gap-2 hover:bg-gray-300 hover:scale-105 duration-300 p-2 rounded-md'>
                            <div>
                                <img src={logo2} alt="Aim" />
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <div className=' text-gray-700 text-xl font-semibold' >Culture of Innovation:</div>
                                <p className=' text-gray-500 font-semibold'>The PICSEL committee aims to foster a culture of innovation among students by providing opportunities for research, idea exploration, and peer collaboration.</p>
                            </div>
                        </div>
                        <div className=' flex gap-2 hover:bg-gray-300 hover:scale-105 duration-300 p-2 rounded-md'>
                            <div>
                                <img src={logo3} alt="Aim" />
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <div className=' text-gray-700 text-xl font-semibold'>Diversity: </div>
                                <p className=' text-gray-500 font-semibold'>The PICSEL committee is dedicated to promoting inclusivity within the student community. Our vision is to cultivate an environment where students from all backgrounds thrive and feel valued and included.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* section 4 */}
            <section className="bg-gray-50">
                <div className=' w-10/12 mx-auto'>
                    <div class=" px-5 pt-20 py-4 ">
                        <div class="flex flex-col text-center w-full mb-12">
                            {/* <h1 class="text-4xl font-bold title-font mb-4 text-gray-800">OUR TEAM</h1> */}
                            <div className=' flex justify-center flex-col items-center text-gray-800 text-4xl font-bold'>
                                OUR TEAM
                                <span className=' h-[6px] w-[70px] bg-yellow-400'></span>
                            </div>
                            <div className=' mt-3 relative'>
                                <span className=' text-4xl font-bold text-blue-700 left-[14%] absolute'>{"<"} </span>
                                <span className=' text-4xl font-bold text-blue-700 right-[13%] absolute'>{"/>"} </span>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 ">United in purpose, diverse in talents, OUR TEAM embodies synergy, driving collective success with each individual's unique contribution.</p>
                            </div>

                        </div>
                        <div className=' flex flex-wrap -m-4 mx-auto'>
                            <Member membersData={TeamMembersData} />
                        </div>
                        {/* <div className=' flex justify-end mt-6'>
                            <CTAButton active={true} linkto={"#"}>
                                <div className=" ">Know More</div>
                            </CTAButton>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* section 5 */}
            <section className="bg-gray-50">
                <div className=' w-10/12 mx-auto'>
                    <div class=" px-5 pt-20 py-24 ">
                        <div class="flex flex-col text-center w-full mb-12">
                            {/* <h1 class="text-4xl font-bold title-font mb-4 text-gray-800">OUR FACULTY</h1> */}
                            <div className=' flex justify-center flex-col items-center text-gray-800 text-4xl font-bold'>
                                OUR FACULTY
                                <span className=' h-[6px] w-[70px] bg-yellow-400'></span>
                            </div>
                            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 mt-3">Our faculty, comprised of dedicated experts, serve as guiding beacons, nurturing the growth and development of our students while shaping the leaders of tomorrow.</p> */}
                            <div className=' mt-3 relative'>
                                <span className=' text-4xl font-bold text-blue-700 left-[14%] absolute'>{"<"} </span>
                                <span className=' text-4xl font-bold text-blue-700 right-[13%] absolute'>{"/>"} </span>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 ">Our faculty, comprised of dedicated experts, serve as guiding beacons, nurturing the growth and development of our students while shaping the leaders of tomorrow.</p>
                            </div>
                        </div>
                        {/* <div class="flex flex-wrap -m-4 mx-auto">
                            {
                                membersData.map((member) => (
                                    <Member key={member.id} member={member} />
                                ))
                            }
                        </div> */}

                        <div className=' flex flex-wrap mx-auto'>
                            <Member membersData={FacultyMembersData} />
                        </div>


                        {/* <div className=' flex justify-end mt-6'>
                            <CTAButton active={true} linkto={"#"}>
                                <div className=" ">Know More</div>
                            </CTAButton>
                        </div> */}
                    </div>
                </div>
            </section >

            {/* section 6 */}
            <section className=' flex mx-auto bg-gray-50'>
                <div className=' w-8/12 flex gap-8 flex-col mx-auto mb-5'>
                    <div className=' flex justify-center flex-col items-center text-gray-800 text-4xl font-bold'>
                        OUR SPONSORS
                        <span className=' h-[6px] w-[70px] bg-yellow-400'></span>
                    </div>
                    <div className=' flex gap-7 justify-between'>
                        <img className='' width={200} src={oppo} alt="" />
                        <img className='' width={200} src={cafe} alt="" />
                        <img className='' width={200} src={LiveTech} alt="" />
                        <img className='' width={250} src={Legendary} alt="" />
                    </div>
                    {/* <div>
                    </div> */}
                    {/* <div className='flex justify-center'> */}
                    {/* </div> */}
                </div>
            </section>

            {/* Footer */}
            < Footer />
        </div >
    )
}

export default Home
