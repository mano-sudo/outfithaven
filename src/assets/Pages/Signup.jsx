import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl px-16 font-bold">
        Register Your Account
      </h1>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-5">
        <div className="flex flex-col w-80 md:w-[260px]">
          <label htmlFor="firtName" className="text-sm mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
        <div className="flex flex-col w-80 md:w-[260px]">
          <p>Last Name</p>
          <input
            type="text"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-4 mt-4">
        <div className="flex flex-col  w-80 md:w-[260px]">
          <p>Email</p>
          <input
            type="text"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
        <div className="flex flex-col w-80 md:w-[260px]">
          <p>password</p>
          <input
            type="password"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <button className="text-center bg-black text-white w-80 h-11 mt-8 hover:bg-gray-800">
          Submit
        </button>
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};

export default Signup;
