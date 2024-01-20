import React from "react";
import new_collection from "../assets/Assets/new_collections";
import { Item } from "./Item";
import rectangle from "../assets/rectangle.png";
export const NewCollection = () => {
  return (
    <div>
      <div className="">
        <div className="flex gap-4 items-center">
          <img src={rectangle} className="w-4 xl:w-6 lg:-w-5 " />
          <h1 className="text-xl text-[#DB4444] font-semibold ">Featured</h1>
        </div>
        <h1 className="text-xl xl:text-4xl lg:text-3xl md:text-2xl font-semibold tracking-wider break-words mt-10">
          New Collections
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-20">
        {new_collection.map((item, i) => {
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
    </div>
  );
};
