import React from "react";
import { useContext } from "react";
// import signuppage from "../assets/signuppage.png";
// import IconGoogle from "../assets/IconGoogle.png";
import { useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const AuthPage = () => {
  const { setUser } = useContext(ShopContext);
  const [state, setState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    // console.log("login");
    let resdata;

    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (resdata = data));

    if (resdata.success) {
      localStorage.setItem("auth-token", resdata.token);
      setUser(resdata.user);
      window.location.replace("/");
    } else {
      alert(resdata.errors);
    }
  };

  const signup = async () => {
    // console.log("signup");
    let resdata;

    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (resdata = data));

    if (resdata.success) {
      localStorage.setItem("auth-token", resdata.token);
      window.location.replace("/");
    } else {
      alert(resdata.errors);
    }
  };

  return (
    <div className="flex  items-center justify-center my-20">
      <div className=" border-2 border-red-600 rounded-md p-4 w-[100%] sm:w-[400px] ">
        <div className="flex flex-col ">
          <h2 className="text-3xl sm:text-4xl font-medium break-words  tracking-wider">
            {state}
          </h2>
          <p className=" break-words mt-3">Enter your details below</p>
        </div>
        <form className="flex flex-col  gap-4 items-center mt-4 ">
          {state === "Sign Up" ? (
            <input
              onChange={changeHandler}
              value={formData.username}
              name="username"
              type="text"
              placeholder="Name"
              className="outline-none border-b-2 border-gray-400 w-[100%] max-w-[400px] "
            />
          ) : (
            <></>
          )}

          <input
            onChange={changeHandler}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter you Email"
            className="outline-none border-b-2 border-gray-400  w-[100%] max-w-[400px]"
          />
          <input
            onChange={changeHandler}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Password"
            className="outline-none border-b-2 border-gray-400  w-[100%]  max-w-[400px]"
          />
        </form>
        <div>
          <button
            className="bg-[#DB4444] py-2 mt-4 text-white w-[100%]  "
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            {state}
          </button>
          {state === "Sign Up" ? (
            <div className="flex flex-row gap-4 items-center justify-center mt-2 border-2  py-2 cursor-pointer">
              <img />
              <p>Sign up with Google</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        {state === "Sign Up" ? (
          <div className="flex justify-end gap-3 text-sm mt-1">
            <p>Already have account?</p>
            <p
              className="font-medium underline hover:cursor-pointer"
              onClick={() => {
                setState("Login");
              }}
            >
              {" "}
              Log in
            </p>
          </div>
        ) : (
          <div className="flex justify-end gap-3 text-sm mt-1">
            <p>Dont't have an account?</p>
            <p
              className="font-medium underline hover:cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
