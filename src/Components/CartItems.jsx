import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartItems = () => {
  const {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    removeItem,
  } = useContext(ShopContext);

  return (
    <div className="w-[90%] ml-auto mr-auto mt-10 ">
      <div className="flex gap-2 uppercase break-words">
        <p>Home</p>
        <p>/</p>
        <p className="font-semibold">Cart</p>
      </div>
      <div className="lg:mx-10 sm:mx-[24px] lg:mt-20 sm:mt-[40px]">
        <div className="hidden sm:grid xl:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] sm:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]   xl:gap-[74px]  sm:gap-[20px]  xl:py-[20px] sm:py-[15px]  items-center font-semibold xl:text-xl">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="">
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div
                  className="grid grid-cols-[0.5fr_3fr_0.5fr] xl:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] sm:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr]  xl:gap-[74px]  gap-[20px]  xl:py-[20px] py-[15px]  items-center mt-10 "
                  key={e.id}
                >
                  <div className="">
                    {" "}
                    <img
                      src={e.image}
                      alt="img"
                      className="xl:h-[62px] sm:h-[50px]"
                    />
                  </div>
                  <p className=" break-words">{e.name}</p>
                  <p className="  break-words ">₹{e.new_price}</p>
                  <div className="flex  justify-center gap-4  items-center  w-[64px]  h-[50px] border-2  border-gray-300 rounded-md">
                    <p>{cartItems[e.id]}</p>
                    <div className="flex flex-col ">
                      <button onClick={() => addToCart(e.id)}>
                        <IoIosArrowUp />
                      </button>
                      <button onClick={() => removeFromCart(e.id)}>
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                  <p>₹{e.new_price * cartItems[e.id]} </p>
                  <button className="m-auto" onClick={() => removeItem(e.id)}>
                    <FaTrashAlt />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="flex">
        <div className=" sm:w-[400px] w-[90%] mr-auto flex flex-col  p-2 gap-3  my-20">
          <h2 className="text-3xl font-bold ">Cart Total</h2>
          <div className="flex ">
            <p>Subtotal</p>
            <p className="ml-auto  font-semibold">{totalCartAmount()}</p>
          </div>
          <hr />
          <div className="flex ">
            <p>Shipping</p>
            <p className="ml-auto">Free</p>
          </div>

          <hr />
          <div className="flex font-semibold">
            <p>Total</p>
            <p className="ml-auto  ">₹{totalCartAmount()}</p>
          </div>
          <hr />

          <Link to="/checkout">
            <div className=" flex  text-white font-medium">
              <button className="bg-[#D6763C] p-2">Procced to Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
