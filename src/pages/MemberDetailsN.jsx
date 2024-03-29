// import logo from "https://res.cloudinary.com/dy72qjbd5/image/upload/v1710947805/Collage/blwgyu9w63xdmgaadbiv.jpg"
// import './App.css';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";


function MemberDetailsN() {
  const iconStylesofLinkedin = {
    fontSize: '34px',
    color: 'blue',
    transition: 'color 0.3s ease', // Add transition effect

  };

  const iconStylesofInsta = {
    fontSize: '34px',
    color: 'red',
    transition: 'color 0.3s ease', // Add transition effect
    ":hover": {
      fontSize: '44px',
      color: "red"// Change color on hover
    },
  };
  return (
    <section class=" text-gray-100 body-font h-screen bg-gray-900">
      <div class=" container px-5 py-20 mx-auto flex flex-wrap items-center h-full">
        <div className="flex flex-col lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h2 className="text-[80px] gap-y-2 h-24">Nikhil Harshe</h2>
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mt-5">
            <h2 class="title-font font-semibold text-3xl  text-gray-100 w-full ">
              &nbsp;  &nbsp;  &nbsp;   As the Website Head for the CSE Department, my goal is to cultivate an inspiring digital   CSE department.</h2>
          </div>
          <div className="flex mt-10 gap-x-4 justify-items-start">
            <a href="/" ><FaLinkedin class="rohit hover:text-8xl" style={iconStylesofLinkedin} /></a>
            <button href="/"><FaInstagram style={iconStylesofInsta} /></button>
            <button href="/"><FaTwitter style={iconStylesofLinkedin} /></button>
          </div>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-2 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <img src={'https://res.cloudinary.com/dy72qjbd5/image/upload/v1710947805/Collage/blwgyu9w63xdmgaadbiv.jpg'} width={400} height={300} alt="data"/>
          <h1 className="text-center justify-center mt-5 text-3xl font-semibold text-gray-100 mb-3">Website Head  </h1>
        </div>
      </div>
    </section>
  );
}

export default MemberDetailsN;