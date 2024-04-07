import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ShopContext } from "../Context/ShopContext";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const { totalCartItems } = useContext(ShopContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800); // Adjust the value according to your breakpoint
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center md:py-3">
      <div className="mr-auto">
        {/* Render the dropdown button */}
        {isSmallScreen && (
          <div className="relative">
            <button
              className="btn btn-link text-black"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              <RxHamburgerMenu size={28} />
            </button>
            {/* Conditionally render the dropdown list */}
            {isDropdownOpen && (
              <ul className="absolute top-full  bg-slate-100 rounded-sm text-center h-[230px]  w-[130px] space-x-1   left-0 z-10 shadow mt-3">
                <Link to="/">
                  {" "}
                  <li className="hover:font-semibold">Home</li>
                </Link>
                <Link to="/women">
                  {" "}
                  <li>Women</li>
                </Link>
                <Link to="/men">
                  {" "}
                  <li>Men</li>
                </Link>
                <Link to="/kid">
                  {" "}
                  <li>Kids</li>
                </Link>
                <Link to="/about">
                  {" "}
                  <li>About</li>
                </Link>
              </ul>
            )}
          </div>
        )}
        {/* Render the navigation links for larger screens */}
        {!isSmallScreen && (
          <ul className="flex gap-4 pl-6">
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/women">
              {" "}
              <li>Women</li>
            </Link>
            <Link to="/men">
              {" "}
              <li>Men</li>
            </Link>
            <Link to="/kid">
              {" "}
              <li>Kids</li>
            </Link>
            <Link to="/about">
              {" "}
              <li>About</li>
            </Link>
          </ul>
        )}
      </div>
      <div className="ml-auto mr-auto">
        <Link to="/">
         <h2 className=" text-lg md:text-2xl font-bold tracking-widest">Retail Realm</h2>
        </Link>
      </div>
      <div className="ml-auto flex gap-4 md:mr-2 ">
        {localStorage.getItem("auth-token") ? (
          <Link
            to="/profile"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            <CgProfile size={28} />
          </Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
        {/* Render cart icon with badge for totalCartItems */}
        <div className="relative pr-6">
          <Link to="/cart">
            <IoCartOutline size={26} />
          </Link>
          <div className="flex items-center justify-center absolute top-0 left-5 text-white bg-[#d44444] w-[20px] h-[20px]  rounded-full">
            <p className="">{totalCartItems()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
