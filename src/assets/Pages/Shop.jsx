import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const collections = [
  {
    title: "All Collections",
    link: "/collections",
    image: `${import.meta.env.BASE_URL}images/collections.jpg`,
  },
  {
    title: "T-Shirts",
    link: "/tshirts",
    image: `${import.meta.env.BASE_URL}images/shirts.jpg`,
  },
  {
    title: "Bottoms",
    link: "/bottoms",
    image: `${import.meta.env.BASE_URL}images/bottom.jpg`,
  },
  {
    title: "Cut and Sew",
    link: "/jackets",
    image: `${import.meta.env.BASE_URL}images/jackets.jpg`,
  },
  {
    title: "Accessories",
    link: "/accesories",
    image: `${import.meta.env.BASE_URL}images/accessories.jpg`,
  },
  {
    title: "Footwear",
    link: "/fotwear",
    image: `${import.meta.env.BASE_URL}images/footwear.jpg`,
  },
];

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-36 px-4">
      <h1 className="text-2xl font-bold text-center">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-5 mt-10 mb-10">
        {collections.map((item, index) => (
          <div
            key={index}
            className="h-[200px] w-[325px] md:h-[400px] md:w-auto flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-2xl font-bold ">{item.title}</h2>
            <Link
              to="item.link"
              className="underline text-sm hover:text-yellow-300"
            >
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
