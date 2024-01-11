import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";
import { LoginSignUp } from "./pages/LoginSignUp";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import axios from "axios";
import { useEffect } from "react";
import men_banner from "./assets/Assets/banner_mens.png";
import women_banner from "./assets/Assets/banner_women.png";
import kids_banner from "./assets/Assets/banner_kids.png";
import { ShopCategory } from "./Components/ShopCategory";
const App = () => {
  const [products, setProducts] = React.useState(null);

  console.log(products);
  return (
    <>
      <main>
        <div>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/men"
                element={<ShopCategory banner={men_banner} category="men" />}
              />
              <Route
                path="/women"
                element={
                  <ShopCategory banner={women_banner} category="women" />
                }
              />
              <Route
                path="/kids"
                element={<ShopCategory banner={kids_banner} category="kid" />}
              />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignUp />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </main>
    </>
  );
};

export default App;
