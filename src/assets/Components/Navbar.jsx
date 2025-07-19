import React, { useState, useEffect } from "react";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === "/outfithaven";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickLink = (link) => {
    setClickedLink(link);
    setTimeout(() => setClickedLink(null), 200);
  };

  const handleMobileClick = (link) => {
    handleClickLink(link);
    setIsOpen(false);
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 left-0 z-30 w-full transition-colors duration-300 ${
        isHome && !isScrolled
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <button
        onClick={toggleMenu}
        className={`md:hidden flex flex-col space-y-1 text-2xl ${
          isHome && !isScrolled ? "text-white" : "text-black"
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

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link
            to="/"
            onClick={() => handleClickLink("/")}
            className={`transition-transform duration-150 ease-in-out ${
              clickedLink === "/" ? "scale-95" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={() => handleClickLink("/shop")}
            className={`transition-transform duration-150 ease-in-out ${
              clickedLink === "/shop" ? "scale-95" : ""
            }`}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/howtoorder"
            onClick={() => handleClickLink("/howtoorder")}
            className={`transition-transform duration-150 ease-in-out ${
              clickedLink === "/howtoorder" ? "scale-95" : ""
            }`}
          >
            How To Order
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleClickLink("/contact")}
            className={`transition-transform duration-150 ease-in-out ${
              clickedLink === "/contact" ? "scale-95" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex space-x-4 text-2xl">
        <CiUser className="bg-transparent hover:bg-gray-900 hover:text-white duration-300 rounded-full" />
        <CiSearch className="hidden md:flex" />
        <CiShoppingCart />
      </div>

      {/* Mobile Menu */}
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
        <li>
          <Link
            to="/"
            onClick={() => handleMobileClick("/")}
            className={`flex justify-center items-center transition-transform duration-150 ease-in-out ${
              clickedLink === "/" ? "scale-95" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={() => handleMobileClick("/shop")}
            className={`flex justify-center items-center transition-transform duration-150 ease-in-out ${
              clickedLink === "/shop" ? "scale-95" : ""
            }`}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/howtoorder"
            onClick={() => handleMobileClick("/howtoorder")}
            className={`flex justify-center items-center transition-transform duration-150 ease-in-out ${
              clickedLink === "/howtoorder" ? "scale-95" : ""
            }`}
          >
            How To Order
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleMobileClick("/contact")}
            className={`flex justify-center items-center transition-transform duration-150 ease-in-out ${
              clickedLink === "/contact" ? "scale-95" : ""
            }`}
          >
            Contact
          </Link>
        </li>

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
    </nav>
  );
};

export default Navbar;
