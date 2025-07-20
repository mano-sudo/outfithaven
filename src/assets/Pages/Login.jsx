import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-3xl md:text-2xl font-bold">Login</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-7 md:mt-5">
        <div className="flex flex-col w-80 md:w-[220px]">
          <label htmlFor="Email" className="text-xs">
            Email
          </label>
          <input
            type="text"
            id="Email"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
        <div className="flex flex-col w-80 md:w-[220px]">
          <label htmlFor="Password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            id="Password"
            className="text-xs focus:outline-none border h-11 md:h-8 border-gray-400 p-2 py-[4px]"
          />
        </div>
      </div>
      <button className="bg-black text-white w-80 h-11 mt-6 md:w-20 md:h-9 md:text-[11px] text-sm hover:bg-gray-700 mx-auto block">
        Sign In
      </button>
      <div className="flex flex-col justify-center text-[12px] md:text-[13px] items-center mt-7 md:mt-5 gap-1 mt-10px mb-20">
        <Link to="/signup" className="hover:text-yellow-500">
          Sign Up
        </Link>
        <Link to="/passwordrecovery" className="hover:text-yellow-500">
          Recover Passwod
        </Link>
      </div>
    </div>
  );
};

export default Login;
