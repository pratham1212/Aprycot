import React from "react";
import Digit from "../../Components/Images/Error/Digit-5.png";
import ImgCookie from "../../Components/Images/Error/Cookie.png";

export default function Error500() {
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
          src={ImgCookie}
          alt="500"
          className="w-[454px] h-[500px] text-[#EA6A12] rotate-0"
        />
        <img
          src={ImgCookie}
          alt="500"
          className="w-[454px] h-[500px] text-[#EA6A12]"
        />
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <p className="font-[Playfair_Display] text-[40px] font-bold leading-[52px] tracking-wide">
          Internal Server Error
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
