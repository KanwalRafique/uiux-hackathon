import React from 'react';
import Image from 'next/image';

export default function Universe() {
  return (
    <div>
      {/* Shared Container */}
      <div className="w-full relative h-[100vh] flex items-center bg-gray-50">
        {/* Hero Background positioned with some space from the left and top */}
        <div className="flex-shrink-0 ml-10 relative">
          {/* Background Image with hover effect */}
          <Image
            src="/asian-woman.png"
            alt="Background"
            width={704}
            height={682}
            className="object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle floating effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20 hover:opacity-30 transition-opacity duration-500 rounded-xl"></div>
        </div>

        {/* Overlay Text and Button positioned to the right of the page */}
        <div className="flex flex-col justify-center items-start gap-6 max-w-[1440px] mx-auto ml-auto pr-16">
          {/* SUMMER 2020 */}
          <h6 className="text-[#737373] font-[Montserrat] font-bold text-[16px] leading-[24px] tracking-[0.1px] uppercase hover:text-[#2DC071] transition-colors duration-300">
            Summer 2020
          </h6>

          {/* Hero Section */}
          <h1 className="text-[#252B42] font-[Montserrat] font-bold text-[58px] leading-[80px] tracking-[0.2px] hover:scale-105 transition-transform duration-500">
            Part of the Neural
            <br />
            Universe
          </h1>

          {/* Text */}
          <h6 className="text-[#737373] font-Montserrat text-[16px] leading-[24px] tracking-[0.1px] hover:text-black transition-colors duration-300">
            We know how large objects will act, <br />
            but things on a small scale.
          </h6>

          {/* Price and Buttons aligned horizontally */}
          <div className="flex items-start gap-4">
            {/* BUY NOW Button */}
            <button className="w-[221px] h-[62px] font-Montserrat bg-[#2DC071] rounded-[5px] text-white text-xl shadow-lg hover:bg-[#28a45c] transition-all duration-300 transform hover:-translate-y-1">
              BUY NOW
            </button>

            {/* LEARN MORE Button */}
            <button className="w-[221px] h-[62px] font-Montserrat bg-white border-2 border-[#2DC071] rounded-[5px] text-[#2DC071] text-xl shadow-lg hover:text-white hover:bg-[#2DC071] transition-all duration-300 transform hover:-translate-y-1">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
