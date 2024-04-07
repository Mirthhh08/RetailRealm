import React, { useContext } from "react";
import { useParams } from "react-router";
import { Breadcrum } from "../Components/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay";
import { RelatedItems } from "../Components/RelatedItems";
import { ShopContext } from "../Context/ShopContext";
export const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));

  console.log(product)
  return (
    <div className="w-[90%] mr-auto ml-auto mt-10">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedItems product={product} />
    </div>
  );
};
