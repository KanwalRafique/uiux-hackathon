import React from 'react';
import Image from 'next/image';

export default function Vita() {
  return (
    <div>
      {/* Shared Container */}
      <div className="w-full relative h-[100vh] bg-[#23856D]">
        {/* Hero Background positioned with some space from the right and bottom */}
        <div className="absolute right-[10%] bottom-[5%] top-[20%]">
          <Image
            src="/white-shirt.png"
            alt="Background"
            width={443}
            height={585}
            className="object-cover"
          />
        </div>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 pl-16 max-w-[1440px] mx-auto">
          {/* SUMMER 2020 */}
          <h6 className="text-white font-[Montserrat] font-bold text-[16px] leading-[24px] tracking-[0.1px]">
            SUMMER 2020
          </h6>

          {/* Hero Section */}
          <h1 className="text-white font-[Montserrat] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            Vita Classic
            <br />
            Product
          </h1>

          {/* Text */}
          <h6 className="text-white font-Montserrat text-[16px] leading-[24px] tracking-[0.1px]">
            We know how large objects will act, <br />
            but things on a small scale.
          </h6>

          {/* Price and Button Container */}
          <div className="flex items-center gap-4">
            <div className="font-Montserrat font-bold text-white text-[32px]">$16.48</div> {/* Increased font size for the price */}
            <button className="w-[221px] h-[62px] font-Montserrat bg-[#2DC071] rounded-[5px] text-white text-xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
