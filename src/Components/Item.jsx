import React from "react";
import { useState } from "react";

export const Item = (props) => {
  const [check, setCheck] = useState(false);
  console.log(check);
  return (
    <div className="w-[300px] hover:cursor-pointer mb-5">
      <div
        onMouseEnter={() => {
          setCheck(true);
        }}
        onMouseLeave={() => {
          setCheck(false);
        }}
      >
        <div className="relative">
          <img src={props.img} />
          {check && (
            <div className="absolute bottom-0 flex  justify-center w-[300px] p-2 rounded-t-xl bg-[#DB4444] text-white text-lg break-words opacity-80">
              {" "}
              <p className="opacity-100"> Add to Cart</p>
            </div>
          )}
        </div>
        <p className="my-2 font-medium break-words text-lg">{props.name}</p>
      </div>
      <div className="flex gap-4 ">
        <p className="text-[#DB4444]">${props.new_price}</p>
        <p className="opacity-70  line-through">${props.old_price}</p>
      </div>
    </div>
  );
};
