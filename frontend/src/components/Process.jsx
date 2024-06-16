import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdPersonOff } from "react-icons/md";
import { GiMineTruck } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const Process = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const processData = [
    {
      heading: "1. Waste Assessment",
      description:
        "We start by assessing your waste streams to understand the types and volumes of waste your organization generates.",
    },
    {
      heading: "2. Recycling Strategy Development",
      description:
        "Based on our assessment, we develop a tailored recycling strategy to optimize waste diversion and minimize landfill disposal.",
    },
    {
      heading: "3. Implementation & Training",
      description:
        "We assist in implementing the recycling program across your organization, providing training to staff on proper sorting and disposal techniques.",
    },
    {
      heading: "4. Monitoring & Optimization",
      description:
        "We continually monitor the effectiveness of the recycling program, making adjustments as needed to improve efficiency and maximize recycling rates.",
    },
    {
      heading: "5. Reporting & Analysis",
      description:
        "We provide regular reports on waste diversion metrics and environmental impact, offering insights to support your sustainability goals.",
    },
  ];


  return (
    <div className="mt-10">
      <p className="text-center font-bold text-4xl sm:text-3xl md:text-5xl text-[#69919E]">
        How We Work
      </p>

      <div className="hidden w-11/12 sm:w-4/5 mx-auto sm:flex flex-col gap-10 py-16">
        {processData.map((stage, index) => (
          <div
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="500"
            key={index}
            className={` bg-[#33cc33] text-white w-3/5 py-4 px-8 rounded-3xl flex flex-col gap-3 ${
              index % 2 === 0 ? "" : "ml-auto"
            }`}
          >
            <span className="font-bold text-2xl">{stage.heading}</span>
            <p>{stage.description}</p>
          </div>
        ))}
      </div>

      <div className="border border-black w-11/12 sm:w-4/5 mx-auto flex flex-col gap-10 py-10 sm:hidden">
        {processData.map((stage, index) => (
          <div
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            key={index}
            className={`border bg-[#121212] text-gray-300 w-11-12 sm:w-3/5 py-4 px-8 rounded-3xl flex flex-col gap-2 ${
              index % 2 === 0 ? "sm:ml-auto" : ""
            }`}
          >
            <span className="font-bold text-xl">{stage.heading}</span>
            <p>{stage.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#33cc33] py-8">
        <p className="text-5xl font-bold text-center text-white">Why Choose Us</p>

        <div className="flex gap-10 w-3/5 mx-auto mt-12 ">
          <div className="border  text-xl py-6 px-6 rounded-md font-bold text-white flex flex-col justify-center items-center"><MdOutlinePriceChange size={42}/> Best Prices</div>
          <div className="border bg-gray-300 text-xl py-2 px-6 rounded-md font-bold flex flex-col justify-center items-center"><MdPersonOff size={42}/> No Middle Persons</div>
          <div className="border  text-xl py-2 px-6 rounded-md font-bold text-white flex flex-col justify-center items-center"><GiMineTruck size={42}/>Easy Pickup</div>
          <div className="border bg-gray-300 text-xl py-2 px-6 rounded-md font-bold flex flex-col justify-center items-center"><MdVerified size={42}/>Government Verified</div>
        </div>

      </div>
    </div>
  );
};

export default Process;
