import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Item = (props) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-[180px] xl:w-[300px] lg:w-[250px] hover:cursor-pointer mb-5 text-sm">
      <div>
        <div className="relative">
          <Link to={`/product/${props.id}`}>
            <img src={props.img} onClick={() => window.scroll(0, 0)} />{" "}
          </Link>
        </div>
        <p className="my-2 font-medium break-words text-md xl:text-lg  ">
          {props.name}
        </p>
      </div>
      <div className="flex gap-4 ">
        <p className="text-[#000000]">₹{props.new_price}</p>
        <p className="opacity-70  line-through flex items-center">
          ₹{props.old_price}
        </p>
      </div>
    </div>
  );
};
