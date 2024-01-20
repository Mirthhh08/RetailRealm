import React from "react";
import rectangle from "../assets/rectangle.png";
import { Link } from "react-router-dom";
import { PiDressLight, PiShirtFoldedLight } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { IoLaptopOutline } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";
export const Categories = () => {
  const allCategories = [
    {
      id: 1,
      icon: <PiDressLight size={30} />,
      category: "Women's Fashion",
      link: "/women",
    },
    {
      id: 2,
      icon: <PiShirtFoldedLight size={30} />,
      category: "Men’s Fashion",
      link: "/men",
    },
    {
      id: 3,
      icon: <LuBaby size={30} />,
      category: "Kids Fashion",
      link: "/kid",
    },
    {
      id: 4,
      icon: <IoPhonePortraitOutline size={30} />,
      category: "Smart Phones",
      link: "#",
    },
    {
      id: 5,
      icon: <IoLaptopOutline size={30} />,
      category: "Laptops",
      link: "#",
    },
    {
      id: 6,
      icon: <MdOutlineSportsTennis size={30} />,
      category: "Sports & Outdoor",
      link: "#",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex gap-4 items-center">
        <img src={rectangle} className="w-4 xl:w-6 lg:-w-5 " />
        <h1 className="text-lg  xl:text-xl text-[#DB4444] font-semibold ">Categories</h1>
      </div>

      <h1 className="text-xl xl:text-4xl lg:text-3xl md:text-2xl font-semibold tracking-wider break-words mt-10">
        Browse By Category
      </h1>

      <div className="flex  justify-center items-center flex-wrap gap-4 mt-20 mb-20">
        {allCategories.map((category, i) => {
          return (
            <Link to={category.link}>
              <div
                key={i}
                className="w-[150px] h-[100px] flex flex-col gap-2 justify-center items-center border-2 p-2 hover:cursor-pointer hover:bg-[#DB4444] hover:text-white duration-300"
              >
                {category.icon}
                <p className=" break-words">{category.category}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
