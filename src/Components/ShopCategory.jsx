import { all } from "axios";
import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Item } from "./Item";

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="w-[90%] mr-auto ml-auto mt-10 ">
      <div className="flex gap-2 uppercase break-words">
        <p>Home</p>
        <p>/</p>
        <p>Category</p>
        <p>/</p>
        <p className="font-semibold">{props.category}</p>
      </div>
      <div className="mt-10">
        <img src={props.banner} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-20">
        {all_products.map((item, i) => {
          if (item.category === props.category) {
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
          } else return null;
        })}
      </div>
    </div>
  );
};
