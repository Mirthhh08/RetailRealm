import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Navbar  from "./Components/Navbar";

import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Men from "./Components/ShopCategory";
// import { About } from "./Pages/About";
// import { Contact } from "./Pages/Contact";
// import { useEffect } from "react";
import man_fashion_1 from "./assets/man_fashion_1.jpeg";
import man_fashion_2 from "./assets/man_fashion_2.jpeg";
import man_fashion_3 from "./assets/man_fashion_3.jpeg";
import man_fashion_4 from "./assets/man_fashion_4.jpeg";
import man_fashion_5 from "./assets/man_fashion_5.jpeg";

import women_fashion_1 from "./assets/women_fashion_1.jpeg";
import women_fashion_2 from "./assets/women_fashion_2.jpeg";
import women_fashion_3 from "./assets/women_fashion_3.jpeg";
import women_fashion_4 from "./assets/women_fashion_4.jpeg";
import women_fashion_5 from "./assets/women_fashion_5.jpeg";

import kid_fashion_1 from "./assets/kid_fashion_1.jpeg";
import kid_fashion_2 from "./assets/kid_fashion_2.jpeg";
import kid_fashion_3 from "./assets/kid_fashion_3.jpeg";
import kid_fashion_4 from "./assets/kid_fashion_4.jpeg";
import kid_fashion_5 from "./assets/kid_fashion_5.jpeg";

import ShopCategory from "./Components/ShopCategory";
import { Product } from "./Pages/Product";
import Checkout from "./Pages/Checkout";

import Contact from "./Pages/Contact";

const App = () => {
  const [products, setProducts] = React.useState(null);

  const shop_category = {
    men: {
      hero_image_1: man_fashion_1,
      hero_image_2: man_fashion_2,
      hero_image_3: man_fashion_3,
      hero_image_4: man_fashion_4,
      hero_image_5: man_fashion_5,
      tag_line_1: "For Alpha Males, By Alpha Males",
      tag_line_2: "The Ultimate Men's Apparel",
    },
    women: {
      hero_image_1: women_fashion_1,
      hero_image_2: women_fashion_2,
      hero_image_3: women_fashion_3,
      hero_image_4: women_fashion_4,
      hero_image_5: women_fashion_5,
      tag_line_1: "For Alpha Males, By Alpha Males",
      tag_line_2: "The Ultimate Women's Apparel",
    },
    kids: {
      hero_image_1: kid_fashion_1,
      hero_image_2: kid_fashion_2,
      hero_image_3: kid_fashion_3,
      hero_image_4: kid_fashion_4,
      hero_image_5: kid_fashion_5,
      tag_line_1: "For Alpha Males, By Alpha Males",
      tag_line_2: "The Ultimate Kid's Apparel",
    },
  };

  console.log(shop_category);
  return (
    <>
      <main>
        <div className="font-lato">
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/men" element={<Men />} /> */}
              <Route
                path="/men"
                element={
                  <ShopCategory
                    shop_category={shop_category.men}
                    category="man"
                  />
                }
              />
              <Route
                path="/women"
                element={
                  <ShopCategory
                    shop_category={shop_category.women}
                    category="women"
                  />
                }
              />
              <Route
                path="/kid"
                element={
                  <ShopCategory
                    shop_category={shop_category.kids}
                    category="kid"
                  />
                }
              />

              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignUp />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </main>
    </>
  );
};

export default App;
