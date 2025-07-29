import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { useCart } from "./CartContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="max-w-xl mx-auto mt-24 p-4 text-center">
      <h1 className="font-bold text-xl mb-2">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        //empty cart view
        <>
          <p className="text-sm mb-6">
            It appears that your cart is currently empty!
          </p>
          <button className="border border-black px-6 py-2 font-bold">
            CONTINUE SHOPPING
          </button>
        </>
      ) : (
        // Non-empty cart view
        <div className="text-left">
          <p className="text-sm text-center">
            Total Items ({cartItems.length})
          </p>

          {/*Map items from cart */}
          {cartItems.map((item, index) => (
            <div key={index} className="border-t pt-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm">Size: {item.size}</p>
                    <p className="text-sm">₱{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-xl font-light"
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-medium">₱{item.price}</p>
                <div className="flex items-center border px-2 pt-1">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="px-2"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/*Subtotal and Buttons */}
          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal:</span>
              <span>
                ₱
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Excluding taxes and shipping
            </p>
            <div className="mt-6">
              <Link
                to={"/checkout"}
                className="w-full bg-black text-white py-3 inline-block text-center font-bold mb-2"
              >
                CHECKOUT
              </Link>
              <Link
                to="/"
                className="w-full border border-black py-3 font-bold inline-block text-center"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
