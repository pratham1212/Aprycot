import React from "react";
import Digit from "../../Components/Images/Error/Digit-4.png";
import ImgBurger from "../../Components/Images/Error/Burger.png";

export default function Error404() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#fffbec]">
      {/* Numbers and Burger Images */}
      <div className="relative flex items-center justify-center gap-8">
        <img
          src={Digit}
          alt="404"
          className="w-[454px] h-[500px] text-[#EA6A12]"
        />
        <img
          src={ImgBurger}
          alt="Burger"
          className="w-[377.57px] h-[540px] rotate-0"
        />
        <img
          src={Digit}
          alt="404"
          className="w-[454px] h-[500px] text-[#EA6A12]"
        />
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <p className="font-[Playfair_Display] text-[40px] font-bold leading-[52px] tracking-wide">
          Page Not Found
        </p>
        <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
        </p>
      </div>
      <div className="mt-6">
        <button className="w-[162px] h-[44px] rounded-[74px] px-[24px] py-[8px] bg-[#EA6A12] text-white font-semibold hover:bg-[#d15c0f] transition duration-300">
            <a href="/">Back to Home</a>
        </button>
        </div>
    </div>
  );
}
