import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let idx = 0; idx <= 300; idx++) {
    cart[idx] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, set_all_products] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => set_all_products(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, []);
  console.log("all-products :-", all_products);
  const addToCart = (id, quantity = 1) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: prev[id] + quantity };

      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/addtocart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: id }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      return updatedCart;
    });
    console.log(cartItems);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: prev[id] - 1 };
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: id }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      return updatedCart;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: 0 };
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/deletefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: id }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      return updatedCart;
    });
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

  const checkoutHandler = () => {};

  const contextValue = {
    user,
    setUser,
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
