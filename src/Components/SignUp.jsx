import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <h2 className="text-2xl font-medium break-words">Create an Account</h2>
        <p className="text-medium break-words">Enter your details below</p>
      </div>
      <form className="flex flex-col gap-10 ">
        <input name="name" type="text" placeholder="Name" className="outline-none"/>
        <input name="email" type="email" placeholder="Enter you Email" className="outline-none"/>
        <input name="password" type="password" placeholder="Password" className="outline-none" />
      </form>
    </div>
  );
};

export default SignUp;
