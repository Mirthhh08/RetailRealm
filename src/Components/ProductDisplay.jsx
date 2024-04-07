import React, { useContext } from "react";

import star_iocn from "../assets/star.png";
import star_dull_iocn from "../assets/dullstar.png";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { ShopContext } from "../Context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(ShopContext);
  console.log(quantity);
  return (
    <div>
      <div className="flex flex-col sm:flex-row mt-20 gap-[17px] justify-around ">
        {/* product imagee */}
        <div className="flex gap-[10px]  m-auto  md:flex-row xl:gap-[16px] lg:gap-[10px] md:gap-[5px] sm:flex-col-reverse sm:gap-2  sm:items-center">
          <div className="flex md:flex-col  xl:gap-[16px] lg:gap-[10px] sm:gap-[5px] sm:flex-row flex-col gap-[8px]">
            <img
              src={product.image}
              className=" md:h-[130px]  sm:h-[70px] h-[75px] "
            />
            <img
              src={product.image}
              className=" md:h-[130px]  sm:h-[70px] h-[75px]"
            />
            <img
              src={product.image}
              className=" md:h-[130px]  sm:h-[70px] h-[75px]"
            />
          </div>
          <div className="flex">
            <img src={product.image} className="w-[200px]  md:w-[355px] " />{" "}
          </div>
        </div>

        {/* product desciption */}
        <div className="xl:mx-[70px] lg:mx-[30px] flex flex-col lg:w-[600px] md:w-[400px] sm:w-[280px]  lg:gap-4 md:gap-[5px] sm:gap-1 gap-3">
          <h2 className="text-xl xl:text-2xl lg:text-[22px] md:text-lg sm:text-sm font-semibold tracking-wide break-words">
            {product.name}
          </h2>
          <div className="flex gap-2  justify-normal items-center ">
            <div className="flex">
              <img src={star_iocn} className=" w-[15px] " />
              <img src={star_iocn} className=" w-[15px] " />
              <img src={star_iocn} className=" w-[15px] " />
              <img src={star_iocn} className=" w-[15px] " />
              <img src={star_dull_iocn} className=" w-[15px] " />
            </div>

            <p className="text-[#00000080]">|</p>
            <p className="text-[#00FF66]">In Stock</p>
          </div>
          <div className="flex gap-4 font-normal text-xl xl:text-xl  sm:text-lg tracking-wider">
            <p className="">₹{product.new_price}.00</p>
            <p className=" line-through opacity-50">₹{product.old_price}</p>
          </div>
          <p className="font-normal break-words mb-2  sm:text-sm ">
            {product.description}
          </p>
          <hr />

          <div className="flex items-center gap-4 lg:mt-4 md:mt-2">
            <p className="lg:text-xl sm:text-lg text-xl font-normal ">Size:</p>
            <div className="flex sm:gap-2  gap-3">
              <div className="w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] sm:w-[20px] sm:h-[20px] flex justify-center items-center font-medium p-1 border-2 border-[#00000080]  rounded-sm hover:cursor-pointer">
                <p className="lg:text-[16px] sm:text-[12px]">XS</p>
              </div>
              <div className="w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] sm:w-[20px] sm:h-[20px] flex justify-center items-center font-medium p-1 border-2 border-[#00000080]  rounded-sm hover:cursor-pointer">
                <p className="lg:text-[16px] sm:text-[12px]">S</p>
              </div>
              <div className="w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] sm:w-[20px] sm:h-[20px] flex justify-center items-center font-medium p-1 border-2 border-[#00000080]  rounded-sm hover:cursor-pointer">
                <p className="lg:text-[16px] sm:text-[12px]">M</p>
              </div>
              <div className="w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] sm:w-[20px] sm:h-[20px] flex justify-center items-center font-medium p-1 border-2 border-[#00000080]  rounded-sm hover:cursor-pointer">
                <p className="lg:text-[16px] sm:text-[12px]">L</p>
              </div>
              <div className="w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] sm:w-[20px] sm:h-[20px] flex justify-center items-center font-medium p-1 border-2 border-[#00000080]  rounded-sm hover:cursor-pointer">
                <p className="lg:text-[16px] sm:text-[12px]">XL</p>
              </div>
            </div>
          </div>

          <div className="flex lg:mt-10  lg:mb-10 sm:mt-2 mt-8 gap-4 items-center">
            <div
              className="hover:bg-[#DB4444] px-2 py-1 hover:text-white flex items-center rounded-sm gap-2 hover:cursor-pointer  duration-200 border-2"
              onClick={() => {
                addToCart(product.id, quantity);
              }}
            >
              {" "}
              Add to cart
              <button className=" ">
                <IoCartOutline size={28} />
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm md:text-lg font-normal">
              <span className="font-semibold">Category</span> :{" "}
              {product.category}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
