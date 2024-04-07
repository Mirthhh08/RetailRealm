import React from "react";
import { Link } from "react-router-dom";

import p1_product from "../assets/Assets/p1_product.png";
import best3 from "../assets/best3.png";
import best2 from "../assets/best2.png";
import product_32 from "../assets/Assets/product_32.png";
import best4 from "../assets/best4.png";
import cat6 from "../assets/cat6.png";

export const Categories = () => {
  const allCategories = [
    {
      id: 1,
      imgsrc: p1_product,
      Category: "Tops",
      link: "/women",
    },
    {
      id: 2,
      imgsrc: best3,
      Category: "Jackets",
      link: "/men",
    },
    {
      id: 3,
      imgsrc: best2,
      Category: "Dresses",
      link: "/women",
    },
    {
      id: 4,
      imgsrc: product_32,
      Category: "Shorts",
      link: "/kid",
    },
    {
      id: 5,
      imgsrc: best4,
      Category: "Sweatshirts",
      link: "/men",
    },
    {
      id: 6,
      imgsrc: cat6,
      Category: "Denim",
      link: "/women",
    }
  ];

  return (
    <div className="text-center md:p-4 p-1  mt-16 tracking-wider overflow-hidden">
      <h2 className="md:text-3xl text-xl font-bold mb-4">Shop by category</h2>
      <div className="flex justify-center md:space-x-3  space-x-1">
        {allCategories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <Link to={category.link}>
              <img src={category.imgsrc} alt={category.Category} className="w-52 h-52 object-cover" />
              <p className="mt-2 text-sm font-semibold underline">{category.Category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
