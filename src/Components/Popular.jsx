import React from "react";
import data from "../assets/Assets/data";
import { Item } from "./Item";
import rectangle from "../assets/rectangle.png";
export const Popular = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <img src={rectangle} className="w-4 xl:w-6 lg:-w-5 " />
        <h1 className=" text-lg  xl:text-xl text-[#DB4444] font-semibold ">
          Most Bought
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-20">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-[#DB4444]  font-medium  text-white px-4 py-2">
          View All Products
        </button>
      </div>
    </div>
  );
};
