import React from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`flex justify-between items-center p-4 fixed top-0 left-0 z-30 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <button
        onClick={toggleMenu}
        className={`md:hidden flex flex-col space-y-1 text-2xl ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        <RxHamburgerMenu />
      </button>
      <h1
        className="text-4xl font-bold ml-4 mt-3"
        style={{ fontFamily: "Condiment" }}
      >
        Outfit Haven
      </h1>
      {/*Full menu on desktop */}
      <ul className="hidden md:flex space-x-4">
        <li>Home</li>
        <li>Shop</li>
        <li>Brand</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="flex space-x-4 text-2xl">
        <CiUser className="bg-transparent hover:bg-gray-900 hover:text-white duration-300 rounded-full " />
        <CiSearch className="hidden md:flex" />
        <CiShoppingCart />
      </div>
      {/*Mobile menu */}

      <ul
        className={`fixed top-0 left-0 h-full w-full bg-gray-100 text-black p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col gap-y-11`}
      >
        <div className="flex items-center justify-center gap-3 mb-11 mt-11 p-2 border-b-2 border-transparent focus-within:border-b-black">
          <input
            type="text"
            placeholder="Search"
            className="text-center bg-gray-100 outline-none"
          />
        </div>
        <li className="flex justify-center items-center">Home</li>
        <li className="flex justify-center items-center">Shop</li>
        <li className="flex justify-center items-center">Brand</li>
        <li className="flex justify-center items-center">Blog</li>
        <li className="flex justify-center items-center">Contact</li>
        <button
          className="absolute top-10 right-8 text-2xl"
          onClick={toggleMenu}
        >
          <IoCloseSharp />
        </button>
        <li className="flex justify-center items-center gap-11 mt-11">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
