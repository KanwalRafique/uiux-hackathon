"use client";
import Image from "next/image";

export default function BestSellers() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-[80%]">
        {/* Editor's Pic Section */}
        <div className="w-full mt-10 text-center">
          <p className="text-lg text-gray-500 pt-2 font-Montserrat animate-fadeIn">Featured Products</p>
          <h2 className="text-2xl font-bold text-gray-800 font-Montserrat animate-fadeIn">BESTSELLER PRODUCTS</h2>
          <p className="text-lg text-gray-400 pt-2 font-Montserrat animate-fadeIn">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Sections */}
        <div className="flex justify-between gap-6 mt-10">
          {["boy.png", "girl.png", "tall-girl.png", "skirt.png"].map((image, index) => (
            <div key={index} className="flex flex-col items-center animate-fadeIn delay-[200ms] mb-6">
              <div className="w-[239px] h-[427px] overflow-hidden">
                <Image
                  src={`/${image}`}
                  width={239}
                  height={427}
                  alt={`item-${index}`}
                  className="w-full h-full transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-black font-Montserrat text-[16px] mb-2 hover:scale-105 transition-transform duration-300">GRAPHIC DESIGN</p>
                <p className="text-[#737373] font-Montserrat text-[14px] mb-3 hover:text-gray-600 transition-colors duration-300">English Department</p>
              </div>
              <div className="flex justify-between w-[108px] mb-4">
                <p className="text-[#BDBDBD] font-Montserrat text-[14px] line-through">$16.48</p>
                <p className="text-[#23856D] font-Montserrat text-[14px]">$6.48</p>
              </div>
              <div className="flex gap-2 mt-3">
                <div className="w-4 h-4 bg-[#23A6F0] rounded-full hover:scale-110 transition-transform duration-300"></div>
                <div className="w-4 h-4 bg-[#23856D] rounded-full hover:scale-110 transition-transform duration-300"></div>
                <div className="w-4 h-4 bg-[#E77C40] rounded-full hover:scale-110 transition-transform duration-300"></div>
                <div className="w-4 h-4 bg-[#252B42] rounded-full hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
