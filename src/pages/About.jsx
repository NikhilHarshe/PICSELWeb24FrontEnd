import React from 'react'
import logo from "../Components/assets/logo.png"
import Footer from '../Components/Footer';

// import "./About.css"

const About = () => {
  // const observer = useRef(null);
  // useEffect(() => {
  //   const targets = document.querySelectorAll('.eitem');
  //   observer.current = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       entry.target.classList.toggle('eishow', entry.isIntersecting);
  //     });
  //   });

  //   targets.forEach(target => {
  //     observer.current.observe(target);
  //   });

  //   // Clean up observer on component unmount
  //   return () => {
  //     observer.current.disconnect();
  //   };
  // }, []);

  return (
    <>
      <section className="overflow-hidden  pt-14 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={logo}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={logo}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={logo}
                      alt=""
                      className="w-full rounded-2xl"
                    />

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-5 lg:mt-0">
                <span className="block mb-4 text-2xl font-bold text-gray-200">
                  Welcome to PICSEL!
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-gray-500 sm:text-[40px]/[48px]">
                  PICSEL ! Founded in August 2023
                </h2>
                <p className="mb-5 text-gray-200 text-base text-body-color dark:text-dark-600">
                  PICSEL is the heart of innovation at KDK College of Engineering, Nagpur.
                  We are dedicated to providing a vibrant platform for budding engineers and innovators to share their ideas and foster holistic development among our students.
                </p>
                <p className="mb-8 text-gray-200 text-base text-body-color dark:text-dark-6">
                  At PICSEL, we believe in pushing boundaries and setting new standards. Each year, we organize a spectrum of enriching events that leave a lasting impression on the bright minds of tomorrow.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-blue-600 hover:bg-opacity-90"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="bg-slate-900 flex text-5xl text-gray-200 font-medium justify-center items-center">PICSEL  Head MR.Nikhil Harshe </h1>
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4  ">
            <span class="p-4 lg:w-1/3 animate-rotate-y ">
              <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-12 pb-14 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-xl text-lg font-medium text-gray-900 mb-3">FACE-IT and FAHRENHEIT Unite for Tech Excellence</h1>
                <p class="leading-relaxed mb-3 text-gray-800">In collaboration with FAHRENHEIT, our renowned Annual Tech fest, FACE-IT amplifies our reach by hosting pre-Techfest events, elevating the excitement and engagement of our tech community.</p>

              </div>
            </span>
            <span class="p-4 lg:w-1/3 animate-rotate-y">
              <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-12 pb-14 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">The Innovation Hub of Computer Science</h1>
                <p class="leading-relaxed mb-3 text-gray-800">The field of Computer Science and Engineering is our playground of innovation, where we design, develop, and apply cutting-edge technologies, software, and algorithms. Our students are groomed to tackle complex challenges and drive advancements across industries, shaping the digital future.</p>

              </div>
            </span>

            <span class="p-4 lg:w-1/3 animate-rotate-y ">
              <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-12 pb-14 rounded-lg overflow-hidden text-center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Inspire, Create, Innovate: Join PICSEL's Quest</h1>
                <p class="leading-relaxed mb-3 text-gray-800">Join us on this journey of innovation, learning, and empowerment. At PICSEL, we are where ideas converge, talents flourish, and the future unfolds.</p>

              </div>
            </span>
          </div>
        </div>
      </section>
      <div className=' border-t mt-5'>
        <Footer />
      </div>
    </>
  );
};

export default About
