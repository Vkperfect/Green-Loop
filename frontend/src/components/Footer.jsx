import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#121212] text-gray-300 flex flex-col justify-center items-center gap-6 py-10'>
        <img src="/gl-logo.png" alt="" className='w-20'/>
        <div className='flex gap-8'>
            <FaFacebook size={32}/>
            <BsTwitterX size={32}/>
            <FaInstagram size={32}/>
            <FaLinkedin size={32}/>
        </div>
        <p className='text-[#33cc33] font-bold'>Copyright© 2024 GreenLoop. All rights reserved.
</p>
    </div>
  )
}

export default Footer