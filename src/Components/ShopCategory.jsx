import React from "react";
import { useContext } from "react";
// import all_products from "../assets/Assets/all_product";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "./Item";
import { Services } from "./Services";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  // console.log("shop category",all_products);

  const products = all_products.filter(
    (item) => item.category === props.category
  );
  console.log(props.category, products);
  return (
    <div>
      <div>
        <div className="flex relative tracking-widest">
          <img
            src={props.shop_category.hero_image_1}
            className="w-[100%] sm:w-[50%]"
          />
          <img
            src={props.shop_category.hero_image_2}
            className="w-0 sm:w-[50%] "
          />

          <div className="absolute flex flex-col gap-3 md:gap-10 items-center justify-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="drop-shadow-[0_35px_35px_rgba(9,1,1)] md:text-4xl   text-2xl font-bold opacity-100">
              New Arrivals
            </p>
            <p className=" drop-shadow-[0_35px_35px_rgba(9,1,1)] lg:text-xl  md:text-lg text-sm font-bold ">
              Must have styles including Organic Cotton Straight Leg Jeans
            </p>
            <div className="drop-shadow-[0_35px_35px_rgba(9,1,1)] md:text-lg   text-black  bg-white px-3 py-1 font-semibold  rounded-md hover:cursor-pointer ">
              {" "}
              Shop Now
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 ">
        <p className=" tracking-widest text-xl md:text-4xl font-semibold md:font-medium capitalize">
          {props.shop_category.tag_line_1}
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center my-[50px]">
          {products.slice(0, 8).map((item, i) => {
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

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <img
          src={props.shop_category.hero_image_3}
          className="w-[100%] sm:w-[33%]"
        />
        <img
          src={props.shop_category.hero_image_4}
          className="w-[100%] sm:w-[33%] "
        />
        <img
          src={props.shop_category.hero_image_5}
          className="w-[100%] sm:w-[33%]"
        />
      </div>

      <div className="flex flex-col items-center mt-20 ">
        <p className=" tracking-widest text-xl md:text-4xl font-semibold md:font-medium capitalize">
          {props.shop_category.tag_line_2}
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-[50px]">
          {products.slice(8, 12).map((item, i) => {
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

      <Services />
    </div>
  );
};

export default ShopCategory;
