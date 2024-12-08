import React from 'react';
import Link from 'next/link';
import { LuPhone } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { TbSearch } from "react-icons/tb";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Navbar() {
  return (
    <header className='bg-white shadow-sm border-b mx-auto w-full'>
      <div className='bg-[#252B42] text-white py-4 text-sm flex justify-between items-center px-8 w-full'>
        <div className='flex items-center space-x-10'>
          <LuPhone />
          <span className='font-bold'>(225) 555-0118</span>
          <BsEnvelope />
          <div className='flex items-center ml-10'>
            <span className='font-Montserrat font-semibold'>michelle.rivera@example.com</span>
          </div>
          <div className='flex items'>
            <span className='font-Montserrat font-bold ml-28'>Follow Us and get a chance to win 80% off</span>
          </div>
        </div>
        <div className='flex items-center gap-[2px]'>
          <div className='text-white text-sm font-bold leading-[21px] flex items-center space-x-5'>
            <span>Follow Us :</span>
            <FaInstagram />
            <GrYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
       
      {/* Main Nav */}
      <div className='flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto'>
        <h1 className='text-2xl font-bold text-black px-16'>Bandage</h1>
        <div>
          <ul className='hidden md:flex space-x-10 items-center'>
            <li className='text-[#737373] hover:underline font-bold'>
              <Link href={"/"}>Home</Link>
            </li>
            <li className='text-[#737373] hover:underline font-bold'>
              <Link href={"/Product"}>
                <div className='flex items-center space-x-1'>
                  <span>Shop</span>
                  <RiArrowDropDownLine />
                </div>
              </Link>
            </li>
            <li className='text-[#737373] hover:underline font-bold'>
              <Link href={"/About"}>About</Link>
            </li>
            <li className='text-[#737373] hover:underline font-bold'>
              <Link href={"/Contact"}>Contact</Link>
            </li>
            <li className='text-[#737373] hover:underline font-bold'>
              <Link href={"/Pages"}>Pages</Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className='flex items-center gap-4'>
          <div className='font-bold text-[#23A6F0] flex items-center space-x-2 py-3'>
            <HiOutlineUser />
            <span className='font-bold text-base'>login / Register</span>
            <TbSearch />
            <BsCart />
            <h4 className='font-medium text-[#737373]'>1</h4>
            <IoMdHeartEmpty />
            <h4 className='font-medium text-[#737373]'>1</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
