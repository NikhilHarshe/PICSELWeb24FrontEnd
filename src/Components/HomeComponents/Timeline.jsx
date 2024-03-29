import React from "react";
import TimeLineImage from "../assets/PICSEL 2.jpg";
// import TimeLineImage from "../assets/TimelineImage.png";
import Logo1 from "../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Vibrant leadership fuels success with energy.",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Responsibility fuels trust and integrity.",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "Flexibility empowers adaptability and innovation.",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-blue-50 rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px] text-blue-100">{ele.Heading}</h2>
                    <p className="text-base text-gray-400">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${TimeLine.length - 1 === i ? "hidden" : "lg:block"
                    }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-green-900 text-white uppercase py-3 lg:gap-0 lg:py-8 w-[580px] ">
            <div className=" text-xl font-serif text-center">Evolving minds shaping the digital frontier together</div>
          </div>
          <img
            width={720}
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
