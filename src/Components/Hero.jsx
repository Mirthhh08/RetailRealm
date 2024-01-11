import React from "react";
import apple_logo from "../assets/apple_logo.png";
import hero_img from "../assets/hero_img.png";
import iphone14 from "../assets/iphone14.jpg";
export const Hero = () => {
  return (
    <div className=" bg-black text-white m-4 w-[90%] mr-auto ml-auto">
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col gap-4 justify-center  p-4 ">
          <div className="flex justify-normal items-center gap-4">
            <img src={apple_logo} alt="apple" />
            <p className="font-medium">iPhone 14 Series</p>
          </div>
          <div className="text-4xl font-medium">
            <p>Up to 10%</p>
            <p>off Voucher</p>
          </div>
          <div className="flex">
            <div className="border-b-2">Shop Now</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex ">
            <img src={hero_img} alt="iphone" className="py-2" />
            <img src={iphone14} alt="iphone" className="hidden md:block w-[450px] py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
