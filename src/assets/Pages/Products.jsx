import React from "react";
import { BiCategory } from "react-icons/bi";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { HiMinus } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const mockProducts = [
  {
    id: 1,
    category: "shoes",
    brand: "Nike",
    name: "Nike Air Max 95 Men's Shoes",
    price: 13383.48,
    Image: `${import.meta.env.BASE_URL}images/nike-95-black.png`,
  },
  {
    id: 2,
    category: "shoes",
    brand: "Nike",
    name: "Nike Air Max 95 Big Bubble",
    price: 13383.48,
    Image: `${import.meta.env.BASE_URL}images/nike-airmax-gray.png`,
  },
];

const categories = [
  {
    title: "All Collections",
    image: `${import.meta.env.BASE_URL}images/collections.jpg`,
    colSpan: "col-span-2 md:col-span-2",
    rowSpan: "",
  },
  {
    title: "Shirts",
    image: `${import.meta.env.BASE_URL}images/shirts.jpg`,
    colSpan: "col-span-1 md:col-span-1 md:row-start-2",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Accessories",
    image: `${import.meta.env.BASE_URL}images/accessories.jpg`,
    colSpan: "col-span-1 md:col-span-1 md:row-start-2",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Cut and Sew",
    image: `${import.meta.env.BASE_URL}images/jackets.jpg`,
    colSpan: "col-span-2 md:col-span-3",
    rowSpan: "md:row-span-2",
  },
];

const Products = () => {
  const images = [
    `${import.meta.env.BASE_URL}images/nike.jpg`,
    `${import.meta.env.BASE_URL}images/adi.jpg`,
    `${import.meta.env.BASE_URL}images/puma.jpg`,
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold md:text-3xl md:font-semibold mt-6">
        ALL PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <img src={product.Image} alt={product.name} />
            <h2 className="text-center">{product.name}</h2>
            <p className="text-md text-center mt-2">₱{product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <button className="flex items-center justify-center bg-black text-white text-xs py-4 px-10 mt-11">
          Shop All Collections
        </button>
      </div>
      {/* Category Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-x-3 gap-y-3 p-4 pb-0 h-[500px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-white p-4 bg-cover bg-center transition-transform duration-300 group ${cat.colSpan} ${cat.rowSpan}`}
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            <h1 className="text-sm md:text-xl font-bold">{cat.title}</h1>
            <a
              href="#"
              className="text-xs md:text-sm border-b-2 border-white cursor-pointer mt-2"
            >
              View Products
            </a>
          </div>
        ))}
      </div>
      {/* Image Slider */}
      <div
        className="relative h-[75vh] md:h-[80vh] bg-cover bg-h-[100px] bg-center transition-all duration-300 mt-5 md:mt-14"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-10">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
            aria-label="Previous Slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-30 rounded-full hover:bg-black/70"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:px-20 md:mt-5 tracking-normal">
        <h1 className="text-center text-3xl px-16 mt-5 md:text-3xl font-bold text-gray-800">
          Outfit Haven brings you the best local clothing brands from the
          Philippines, celebrating Filipino style and community.
        </h1>
        <h1 className="flex justify-center items-center">
          <HiMinus className="text-5xl" />
        </h1>
        <p className="text-center px-3">
          Outfit Haven is a home for local Filipino brands—built to showcase
          creativity, culture, and identity through fashion. We celebrate the
          spirit of Filipino streetwear and inspire the next generation through
          every piece we carry.
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <button className=" flex item-center justify-center text-center px-8 py-2 text-sm bg-black text-white">
          Learn More
        </button>
      </div>
      <div className="relative flex items-center justify-center py-4 mt-10">
        <h1 className="text-2xl font-bold text-gray-700">Instagram</h1>
        <button className="absolute mt-24 md:right-16 flex items-center gap-2 bg-black text-white text-xs px-8 py-3">
          <FaInstagram />
          Follow Us
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-24 md:mt-11">
        <h1 className="text-2xl font-bold text-gray-700">Newsletter</h1>
        <p className="text-xs mt-2">Let's keep in touch</p>
        <span className="flex items-center justify-center gap-4 mt-14 mb-10 border-b-2 border-b-gray-950">
          <AiOutlineMail className="text-2xl" />
          <input
            type="text"
            placeholder="email@website.com"
            className="text-xs focus:outline-none pr-10 md:pr-40"
          />
          <IoIosArrowForward className="cursor-pointer text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Products;
