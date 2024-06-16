import React from "react";
import { PiBeerBottle } from "react-icons/pi";
import { GiMetalBar, GiTBrick } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
require("@lottiefiles/lottie-player");
const Prices = () => {

  return (
    <div className="bg-[#33cc33] py-10">
      <p className="text-center text-4xl font-bold text-white">
        PRICES OF COMMON RECYCLABLES
      </p>

      <div className="pt-10 flex gap-16 w-4/5 mx-auto">
        <div className="border py-12 px-12 font-bold h-[250px] flex flex-col gap-4 justify-center items-center rounded-lg">
           <PiBeerBottle size={96}/>
          <p className="text-2xl text-white">Plastic</p>
          <p className="text-lg">Price : Rs. 30/kg</p>
        </div>
        <div className="border py-12 px-12 font-bold h-[250px] flex flex-col gap-4 justify-center items-center rounded-lg">
           <GiMetalBar size={96}/>
          <p className="text-2xl text-white">Iron</p>
          <p className="text-lg">Price : Rs. 40/kg</p>
        </div>
        <div className="border py-12 px-12 font-bold h-[250px] flex flex-col gap-4 justify-center items-center rounded-lg">
           <BiFridge size={96}/>
          <p className="text-2xl text-white">Appliances</p>
          <p className="text-lg">Price : Rs. 2000/kg</p>
        </div>
        <div className="border py-12 px-12 font-bold h-[250px] flex flex-col gap-4 justify-center items-center rounded-lg">
           <HiOutlineDesktopComputer size={96}/>
          <p className="text-2xl text-white">Computers</p>
          <p className="text-lg">Price : Rs. 1000/kg</p>
        </div>
      </div>

      <p className="text-center mt-10 text-xl"> Prices may vary according to current market place.</p>
    </div>
  );
};

export default Prices;
