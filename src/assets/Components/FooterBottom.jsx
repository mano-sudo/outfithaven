import React from "react";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <footer className="bg-gray-50 text-black py-5 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-sm gap-4">
        <p className="max-w-md text-left text-xs mb-5 px-6">
          Outfit Haven is a lifestyle and clothing brand that aims to change the
          mindset of people about Filipino fashion through its authentic and
          powerful message.
        </p>
        <div className="md:flex md:flex-col md:text-right">
          <p className="text-xs">Powered by Shopify</p>
          <div className="flex items-center justify-center mt-1  md:flex-row gap-2 text-2xl">
            <FaCcVisa />
            <FaCcMastercard />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
