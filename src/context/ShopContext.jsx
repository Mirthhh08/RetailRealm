import React, { createContext, useState } from "react";
import all_products from "../assets/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let idx = 0; idx <= all_products.length; idx++) {
    cart[idx] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id, quantity = 1) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: prev[id] + quantity };
      console.log(updatedCart);
      return updatedCart;
    });
    console.log(cartItems);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const removeItem = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
  };
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id == Number(item)
        );

        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }

    return totalAmount;
  };
  
  const totalCartItems = () => {
    let itemCnt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        itemCnt += cartItems[item];
      }
    }

    return itemCnt;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    removeItem,
    totalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
