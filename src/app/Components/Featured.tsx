"use client";
import Image from "next/image";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";

export default function Featured() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-[80%]">
        <div className="w-full mt-10 text-center">
          <p className="text-lg text-[#23A6F0] pt-2 font-Montserrat">Practice Advice</p>
          <h2 className="text-3xl font-bold text-[#252B42] font-Montserrat">Featured Posts</h2>
          <p className="text-lg text-[#737373] pt-2 font-Montserrat">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex gap-5 mt-10 justify-center items-center">
          {["road.png", "pink car.png", "umbrella.png"].map((image, index) => (
            <div key={index} className="flex flex-col items-center relative group hover:scale-105 transition-transform duration-300">
              <div className="w-[348px] h-[300px] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={`/${image}`}
                  width={348}
                  height={300}
                  alt={`item-${index}`}
                  className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-4 left-4 w-[58px] h-[24px] bg-[#E74040] flex justify-center items-center text-white font-Montserrat text-[12px] animate-bounce">
                NEW
              </div>
              <div className="text-center mt-3">
                <h2 className="text-[16px] font-Montserrat text-[#252B42]">GRAPHIC DESIGN</h2>
                <p className="text-[14px] text-[#737373] font-Montserrat">English Department</p>
                <div className="flex gap-2 justify-center mt-3">
                  <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="text-xl font-bold text-[#23A6F0] flex justify-center gap-2">
            <IoMdAlarm className="mt-1" />
            <span>See all</span>
            <IoIosArrowForward className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
