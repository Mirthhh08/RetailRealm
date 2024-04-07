import React, { useState, useEffect } from "react";
// import new_collection from "../assets/Assets/new_collections";
import { Item } from "./Item";

export const NewCollection = () => {
  const [new_collection, setnew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setnew_collection(data));
  }, []);

  return (
    <div className="p-2 mt-8">
      <div className="text-center">
        <div className="flex justify-center items-center gap-4">
          {/* <img src={yellow_rec} className="w-4 xl:w-6 lg:-w-5 " /> */}
          <h1 className="text-xl md:text-3xl font-semibold p-2 tracking-wider">
            Featured
          </h1>
        </div>
        {/* <h1 className="text-xl xl:text-3xl lg:text-3xl md:text-2xl font-semibold tracking-wider break-words mt-1">
          New Collections
        </h1> */}
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-10">
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
