import React from "react";
import ez from "../assets/ez.png";
import home_image_1 from "../assets/home_image_1.jpeg";
import home_image_2 from "../assets/home_image_2.jpeg";
import home_image_3 from "../assets/home_image_3.jpeg";

const Caurosal = () => {
  return (
    <div className="relative tracking-widest  ">
      <div className="flex flex-row justify-center items-center ml-auto mr-auto">
        <img src={home_image_1} className="w-[100%] sm:w-[33%]" />
        <img src={home_image_3} className="w-[0] sm:w-[33%]" />
        <img src={home_image_2} className="w-[0] sm:w-[33%]" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 className="text-white lg:text-4xl font-bold text-center">
          Discover the Latest Fashion Trends
        </h1>

        <p className="mt-2 text-white lg:text-lg text-center p-2">
          Elevate your style with our curated collection of trendy outfits.
        </p>

        <button className="mt-4 px-4 py-2 bg-white text-black lg:text-lg font-semibold rounded-md shadow-lg hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Caurosal;
