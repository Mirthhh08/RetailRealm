import React from "react";
import apple_logo from "../assets/apple_logo.png";
import hero_img from "../assets/hero_img.png";
import iphone14 from "../assets/iphone14.jpg";
export const Hero = () => {
  return (
    <div className=" bg-black text-white m-4 w-[90%] mr-auto ml-auto">
      <div className="flex sm:flex-row flex-col justify-evenly items-center">
        <div className="flex flex-col gap-4 justify-center  p-4 ">
          <div className="flex justify-normal items-center gap-4">
            <img
              src={apple_logo}
              alt="apple"
              className="w-[20px] xl:w-[40px] lg:w-[40px] md:w-[30px]"
            />
            <p className="font-medium">iPhone 14 Series</p>
          </div>
          <div className="xl:text-4xl lg:text-2xl text-xl font-medium">
            <p>Up to 10%</p>
            <p>off Voucher</p>
          </div>
          <div className="flex">
            <div className="border-b-2">Shop Now</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex ">
            <img
              src={hero_img}
              alt="iphone"
              className="py-2 w-[250px] lg:w-[300px] xl:w-[400px]"
            />
            <img
              src={iphone14}
              alt="iphone"
              className="hidden md:flex w-[250px] lg:w-[300px] xl:w-[400px] py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
