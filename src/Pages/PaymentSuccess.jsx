import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
const PaymentSuccess = () => {
  const referencenum = useSearchParams()[0].get("refrence");
  const { user } = useContext(ShopContext);
  
  return (
    <div className="flex flex-col h-screen justify-center gap-2 items-center ">
      <h1 className="text-4xl font-mono font-semibold">Order Successfull</h1>
      <p className="font-mono font-semibold">{referencenum}</p>
    </div>
  );
};

export default PaymentSuccess;
