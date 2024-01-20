import React from "react";

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div>
      <div className="flex gap-2 uppercase break-words  text-[12px] xl:text-[16px] lg:xl:text-[16px] md:xl:text-[14px]">
        <p>Home</p>
        <p>/</p>
        <p>{product.category}</p>
        <p>/</p>
        <p className="font-semibold">{product.name}</p>
      </div>
    </div>
  );
};
