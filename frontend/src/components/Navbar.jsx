import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { RiHome6Fill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { MdWebStories } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
    console.log(hamburger);
  };
  return (
    <>
      <div className="bg-[#121212] sticky top-0 z-50">
        <div className="hidden md:flex md:w-full lg:w-11/12  mx-auto items-center justify-between px-4 z-40 py-6">
          <div className="flex items-center gap-4">
            <img src="./gl-logo.png" width={80} alt="img" />
            <p className="text-3xl font-bold text-gray-300">GreenLoop</p>
          </div>

          <div>
            <ul className="flex gap-8 xl:gap-14 text-lg text-gray-300">
              <Link to="/">
                <li className="hover:font-semibold hover:border-b-2 border-[#33CC33]">
                  Home
                </li>
              </Link>

              <Link to="sell">
              <li className="hover:font-semibold hover:border-b-2 border-[#33CC33]">
                Sell
              </li>
              </Link>

              <Link to="services">
              <li className="hover:font-semibold hover:border-b-2 border-[#33CC33]">
                Services
              </li>
              </Link>

              <Link to="prices">
              <li className="hover:font-semibold hover:border-b-2 border-[#33CC33]">
                Prices
              </li>
              </Link>

              
            </ul>
          </div>

          <div className="flex text-gray-300 gap-4">

            <Link to="signin">
            <button className="hover:border-2 flex py-2 px-4 rounded-md font-bold bg-[#33CC33] hover:bg-transparent hover:text-white justify-center items-center gap-4">
              <a>Signin</a>
              <TbLogin  size={24}/>
            </button></Link>
            
            <button className="border-2 flex py-2 px-4 rounded-md font-bold hover:bg-[#33CC33] hover:text-white justify-center items-center gap-4">
              <a href="tel:+917419067524">Make a Call</a>
              <FaPhoneAlt />
            </button>

            
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-auto py-2 items-center visible md:hidden w-11/12">
        <div className="flex items-center gap-4">
          <img src="./gl-logo.png" width={60} alt="img" />
          <p className="text-3xl font-bold text-gray-300">GreenLoop</p>
        </div>
        <Hamburger onToggle={handleHamburger} />
      </div>

      {hamburger && (
        <div className=" py-2 md:hidden">
          <ul className="text-center">
            <li className="border-b  w-4/5 mx-auto pb-2 flex justify-center items-center gap-2">
              <RiHome6Fill /> Home
            </li>
            <li className="border-b  w-4/5 mx-auto py-2 flex justify-center items-center gap-2">
              {" "}
              <MdOutlineProductionQuantityLimits /> Sell
            </li>
            <li className="border-b  w-4/5 mx-auto py-2 flex justify-center items-center gap-2">
              <IoMdContacts />
              Services
            </li>
            <li className="border-b w-4/5 mx-auto py-2 flex justify-center items-center gap-2">
              <MdWebStories />
              Prices
            </li>
            <li className="py-4 flex flex-col gap-2">
              <button className="border-2 border-[#33cc33] flex py-2 px-4 rounded-xl  font-bold text-[#33cc33] bg-transparent w-4/5 justify-center items-center mx-auto gap-4">
                <TbLogin color="" />
                <a href="#">Signin </a>
              </button>
              <button className="border-2 hover:border-1 flex py-2 px-4 rounded-xl  font-bold text-white bg-[#33cc33] w-4/5 justify-center items-center mx-auto gap-4">
                <FaPhoneAlt color="" />
                <a href="tel:+917419067524">Make a Call </a>
              </button>
              
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
