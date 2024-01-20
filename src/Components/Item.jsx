import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-[180px] xl:w-[300px] lg:w-[250px] hover:cursor-pointer mb-5">
      <div
        onMouseEnter={() => {
          setCheck(true);
        }}
        onMouseLeave={() => {
          setCheck(false);
        }}
      >
        <div className="relative">
          <Link to={`/product/${props.id}`}>
            <img src={props.img} onClick={() => window.scroll(0, 0)} />{" "}
          </Link>
          {check && (
            <div className="absolute bottom-0 flex  justify-center w-[180px] xl:w-[300px] md:w-[250px] p-2 rounded-t-xl bg-[#DB4444] text-white text-lg break-words opacity-80">
              {" "}
              <p className="opacity-100"> Add to Cart</p>
            </div>
          )}
        </div>
        <p className="my-2 font-medium break-words text-md xl:text-lg  ">{props.name}</p>
      </div>
      <div className="flex gap-4 ">
        <p className="text-[#DB4444]">${props.new_price}</p>
        <p className="opacity-70  line-through">${props.old_price}</p>
      </div>
    </div>
  );
};
