import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import rectangle from "../assets/rectangle.png";
import { Item } from "./Item";
import { Link } from "react-router-dom";
export const RelatedItems = (props) => {
  const { product } = props;
  const { all_products } = useContext(ShopContext);

  const selected_product = all_products.filter((item, i) => {
    if (product.category === item.category) return item;
  });

  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledArray = shuffleArray([...selected_product]);
    const new_arr = shuffledArray.slice(0, 4);

    setRandomItems(new_arr);
  }, []);

  return (
    <div className="mt-20">
      <div className="flex gap-4 items-center">
        <img src={rectangle} className="w-4 xl:w-6 lg:-w-5" />
        <div className="flex justify-center items-center ">
          <h1 className="text-lg  xl:text-xl text-[#DB4444] font-semibold ">
            Related Item
          </h1>
        </div>
        <div className="bg-[#DB4444] p-2 text-white rounded-sm flex ml-auto">
          <button>
            {" "}
            <Link to={`/${product.category}`}>View All</Link>{" "}
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">
        {randomItems.map((item, i) => {
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
