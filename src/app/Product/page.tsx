import Navbar from "../Components/Navbar";
import { IoIosArrowForward } from "react-icons/io";

export default function Product() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Left-aligned larger Shop */}
        <h1 className="font-Montserrat text-[#252B42] text-3xl font-bold">Shop</h1>
        
        {/* Right-aligned Home > Shop */}
        <div className="flex items-center space-x-2 text-lg font-Montserrat text-[#252B42]">
          <h3>Home</h3>
          <IoIosArrowForward />
          <h3 className="text-[#BDBDBD]">Shop</h3>
        </div>
      </div>
    </div>
  );
}

