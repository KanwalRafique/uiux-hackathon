"use client";
import Image from "next/image";

export default function Editor() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-[80%]">
        {/* Editor's Pic Section */}
        <div className="w-full mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">EDITOR&apos;S PIC</h2>
          <p className="text-lg text-gray-600 pt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Layout */}
        <div className="flex sm:flex-col md:flex-row gap-5 mt-5 justify-center items-center">
          {/* Left Image (510x500) */}
          <div className="bg-gray-950 w-[510px] h-[500px] relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={"/filter.png"}
              width={510}
              height={500}
              alt="men"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Card for MEN */}
            <div className="absolute bottom-4 left-4 w-[170px] h-[40px] bg-white flex justify-center items-center text-black mb-4 rounded-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
              MEN
            </div>
          </div>

          {/* Right Container with 2 sets of images horizontally */}
          <div className="flex flex-row gap-5">
            {/* Right Top Image (240x500) */}
            <div className="bg-gray-950 w-[240px] h-[500px] relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={"/women.png"}
                width={240}
                height={500}
                alt="women"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Card for WOMEN */}
              <div className="absolute bottom-4 left-4 w-[136px] h-[40px] bg-white flex justify-center items-center text-black mb-4 rounded-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                WOMEN
              </div>
            </div>

            {/* Right Bottom Images (240x242 each) */}
            <div className="flex flex-col gap-5">
              {/* First Image */}
              <div className="bg-gray-950 w-[240px] h-[242px] relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={"/accessories.png"}
                  width={240}
                  height={242}
                  alt="accessories"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Card for ACCESSORIES */}
                <div className="absolute bottom-4 left-4 w-[170px] h-[40px] bg-white flex justify-center items-center text-black mb-4 rounded-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  ACCESSORIES
                </div>
              </div>

              {/* Second Image */}
              <div className="bg-gray-950 w-[240px] h-[242px] relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={"/kids.png"}
                  width={240}
                  height={242}
                  alt="kids"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Card for KIDS */}
                <div className="absolute bottom-4 left-4 w-[120px] h-[40px] bg-white flex justify-center items-center text-black mb-4 rounded-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  KIDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
