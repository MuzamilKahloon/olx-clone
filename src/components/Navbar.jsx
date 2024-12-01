import { FaCar, FaBuilding } from "react-icons/fa";
import logo from "../../public/HomeImages/logo2.png";
import border from "../../public/HomeImages/border.svg";
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-auto p-2 overflow-x-hidden border-b">
      {/* Main Container */}
      <div className="flex flex-wrap items-center px-4 md:px-20">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-auto h-8 mt-2 md:mt-4" />
        {/* Links */}
        <div className="flex mt-4 ml-10 space-x-6 cursor-pointer">
          <p className="flex items-center text-x hover:text-blue-400">
            <FaCar />
            <span className="ml-2 font-bold text-gray-800 hover:text-blue-400">
              Motors
            </span>
          </p>
          <p className="flex items-center text-x hover:text-blue-400">
            <FaBuilding />
            <span className="ml-2 font-bold text-gray-800 hover:text-blue-400">
              Property
            </span>
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="flex flex-wrap items-center justify-between w-full px-4 mt-6 md:px-20">
        {/* Location Input */}
        <div className="flex items-center h-12 px-4 border border-gray-300 rounded-md w-full max-w-[24rem]">
          <FaLocationDot className="w-6 h-6 text-gray-700" />
          <input
            type="text"
            placeholder="Location"
            className="w-full h-full ml-2 focus:outline-none"
          />
          <IoIosArrowDropdown className="w-6 h-6 text-gray-700" />
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-[24rem] mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones, and more..."
            className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 bg-teal-900 rounded-r-md">
            <IoIosSearch className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Login Button */}
        <button className="px-3 mt-4 border-b border-black md:mt-0 hover:border-none">
          Login
        </button>

        {/* Sell Button */}
        <div className="mt-4 md:mt-0">
          <button
            className="relative px-6 py-2 font-bold text-white"
            style={{
              backgroundImage: `url(${border})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              border: "none",
              height: "48px",
              width: "110px",
              color: "black",
            }}
          >
            + SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
