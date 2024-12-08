"use client";
import Image from "next/image";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";

export default function Featured() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-[80%]">
        {/* Editor's Pic Section */}
        <div className="w-full mt-10 text-center">
          <p className="text-lg text-[#23A6F0] pt-2 font-Montserrat">Practice Advice</p>
          <h2 className="text-3xl font-bold text-[#252B42] font-Montserrat">Featured Posts</h2>
          <p className="text-lg text-[#737373] pt-2 font-Montserrat">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Section of 3 Images Layout */}
        <div className="flex gap-5 mt-10 justify-center items-center">
          {["road.png", "pink car.png", "umbrella.png"].map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Image with size 348x300 */}
              <div className="w-[348px] h-[300px] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={`/${image}`}
                  width={348}
                  height={300}
                  alt={`item-${index}`}
                  className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* NEW Card on Image */}
              <div className="absolute top-4 left-4 w-[58px] h-[24px] bg-[#E74040] flex justify-center items-center text-white font-Montserrat text-[12px] animate-bounce">
                NEW
              </div>

              {/* Text Below Image with Left Alignment */}
              <div className="text-left mt-4 px-2">
                <p className="font-sans text-[16px] mb-2 flex justify-start gap-4">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#252B42]">Trending</span>
                  <span className="text-[#252B42]">New</span>
                </p>
                <p className="text-[#252B42] font-Montserrat text-[14px] mb-3">
                  Loudest à la Madison #1 <br />
                  (L'integral)
                </p>
                <div className="text-[#737373] font-Montserrat text-[14px] mb-3 py-3">
                  We focus on ergonomics and meeting <br />
                  you where you work. It's only a <br />
                  keystroke away.
                </div>
                <br />
                {/* 22 April 2021 and 10 comments on the same line with React Icons */}
                <div className="flex items-center text-[#737373] font-Montserrat text-[14px]">
                  <IoMdAlarm className="text-cyan-500 size-6 mr-2" />
                  <span>22 April 2021</span>
                  <VscGraphLine className="text-[#23856D] size-6 ml-4 mr-2" />
                  <span>10 comments</span>
                </div>
              </div>
              <br />

              {/* Transparent Price Section */}
              <div className="flex items-center justify-start pl-2 w-full mb-4 group-hover:underline group-hover:text-[#23A6F0] transition-colors duration-300">
                <div className="text-[#BDBDBD] font-Montserrat text-[20px] mr-2 ml-10">
                  Learn More
                </div>
                <IoIosArrowForward className="text-[#23A6F0] size-7" />
              </div>
            </div>
          ))}
        </div>

        {/* Added Bottom Margin for Space Between Sections */}
        <div className="mb-16"></div> {/* Added extra margin to create space for the next section */}
      </div>
    </div>
  );
}
