import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      {/* Shared Container */}
      <div className="w-full relative min-h-screen">
        {/* Hero Background */}
        <Image
          src="/bg-girl.jpg"
          alt="Hero Background"
          fill // Replaces layout="fill"
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
          className="brightness-75 hover:brightness-90 transition-all duration-500"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-6 pl-16 max-w-[1440px] mx-auto">
          {/* SUMMER 2020 */}
          <h6 className="text-white font-[Montserrat] font-bold text-[16px] leading-[24px] tracking-[0.1px] uppercase hover:text-[#2DC071] transition-colors duration-300">
            Summer 2020
          </h6>

          {/* Hero Section */}
          <h1 className="text-white font-[Montserrat] font-bold text-[58px] leading-[80px] tracking-[0.2px] drop-shadow-lg hover:scale-105 transition-transform duration-500">
            New Collection
          </h1>

          {/* Text */}
          <h6 className="text-white font-Montserrat text-[16px] leading-[24px] tracking-[0.1px] hover:text-gray-300 transition-colors duration-300">
            We know how large objects will act, <br />
            but things on a small scale.
          </h6>

          {/* Button */}
          <button className="w-[221px] h-[62px] font-Montserrat bg-[#2DC071] rounded-[5px] text-white text-xl shadow-lg hover:bg-[#28a45c] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
