import React from "react";
import signuppage from "../assets/signuppage.png";
import IconGoogle from "../assets/IconGoogle.png";

const SignUp = () => {
  return (
    <div className="flex mt-20 gap-20 mb-20 items-center justify-center">
      <div className="hidden md:flex mr-auto ">
        <img
          src={signuppage}
          className="w-[300px] xl:w-[620px] lg:w-[500px] md:w-[400px]"
        />
      </div>
      <div className="flex justify-center items-center  mt-20 mb-20 md:mr-auto">
        <div className="flex flex-col justify-center  items-center ">
          <div className="mb-5">
            <h2 className="text-3xl xl:text-4xl lg:text-3xl  font-medium break-words  tracking-wider">
              Create an Account
            </h2>
            <p className=" break-words mt-3">Enter your details below</p>
          </div>
          <form className="flex flex-col gap-10 w-[320px] xl:w-[320px] lg:w-[270px] md:w-[250px]">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="outline-none border-b-2 border-gray-400 "
            />
            <input
              name="email"
              type="email"
              placeholder="Enter you Email"
              className="outline-none border-b-2 border-gray-400"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="outline-none border-b-2 border-gray-400"
            />

            <div className="text-white bg-[#DB4444] p-2 flex justify-center w-[100%]">
              <button>Create Account</button>
            </div>
          </form>
          <div>
            <div className=" w-[320px] xl:w-[320px] lg:w-[270px] md:w-[250px] p-1 flex justify-center items-center gap-2 border-2 border-gray-300 mt-2  hover:cursor-pointer">
              <img src={IconGoogle} />
              <p>Sign up with Google</p>
            </div>
          </div>
          <div className=" flex gap-2 mt-2 opacity-70 break-words font-normal ">
            <p>Already have account?</p>
            <p className="font-medium underline hover:cursor-pointer">
              {" "}
              Log in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
