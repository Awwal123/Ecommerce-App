import { useState } from "react";
// import Magnify from "";
// import Hamburger from "../images/hamburger.png";
// import Closebtn from "../assets/images/hamburger.png";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="bg-white w-full flex justify-between items-center px-5 py-3 md:py-4 md:px-16 relative">
        <div
          className={`fixed inset-0 bg-[#00000080] z-10 ${
            isNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsNavOpen(false)}
        ></div>
        {/* <img src="./i" alt="" /> */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="font-bold text-2xl">Exclusive</h1>
          <img
            src={isNavOpen ? "./images/Cancel.png" : "./images/hamburger.png"}
            className="w-10 block md:hidden h-10 cursor-pointer"
            onClick={toggleNavbar}
          />
        </div>

        <div className="hidden md:flex justify-between gap-7">
          <p className="text-base font-normal cursor-pointer hover:text-gray-400">
            Home
          </p>
          <p className="text-base font-normal cursor-pointer hover:text-gray-400">
            Contact
          </p>
          <p className="text-base font-normal cursor-pointer hover:text-gray-400">
            About
          </p>
          <p className="text-base font-normal cursor-pointer hover:text-gray-400">
            SignUp
          </p>
        </div>

        <div className="relative hidden md:inline-block">
          <input
            type="text"
            className="border active:border-gray-200 w-[248px] h-[38px] font-thin px-3 rounded-md text-sm bg-[#F5F5F5] pr-10"
            placeholder="What are you looking for?"
          />
          <img
            src="./images/Magnify.png"
            alt="magnify"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Navbar for small screens */}
        <div
          className={`fixed top-0 left-0 w-full bg-gray-500 z-20 h-1/2 transform transition-transform ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-lg py-2">Home</p>
            <p className="text-white text-lg py-2">Contact</p>
            <p className="text-white text-lg py-2">About</p>
            <p className="text-white text-lg py-2">SignUp</p>
          </div>
        </div>
      </div>
      <hr className="w-full border-1 border-gray-200" />
    </div>
  );
};
