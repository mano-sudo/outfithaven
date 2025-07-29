import React from "react";
import { Regions } from "../Components/Regions";
import { useEffect } from "react";
import { useCart } from "./CartContext";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems } = useCart();

  const shippingPrice = 140;
  return (
    <div className="mt-24 flex flex-col lg:flex-row max-w-6xl mx-auto p-4 gap-8">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-2 rounded-md"
          />
          <label className="flex items-center text-sm gap-2">
            <input type="checkbox" />
            Email me with news and offers
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Delivery</h2>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input
              type="text"
              placeholder="First name"
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="w-full border p-2 mb-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Appartment, suit, etc. (Optional)"
            className="border p-2 w-full mb-2 rounded-md"
          />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input
              type="text"
              placeholder="Postal Code"
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded-md"
            />
          </div>
          <div className="mb-2">
            <select className="w-full border p-2 mb-2 rounded-md">
              <option value="">Select Region</option>
              {Regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Phone"
              className="w-full border p-2 mb-2 rounded-md"
            />
          </div>
          <label className="flex items-center gap-2 text-sm rounded-md">
            <input type="checkbox" />
            Save this information for next time
          </label>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
          <div className="flex items-center gap-2 p-3 border bg-gray-50 rounded-md">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="Cash on Delivery"
              defaultChecked
              disabled
            />
            <label htmlFor="cod" className="text-gray-700 font-medium">
              Cash on Delivery (COD)
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-2">
            Only COD is supported at the moment.
          </p>
        </div>
        <div className="w-full bg-blue-600 text-white py-3 font-bold text-center rounded-md mt-4">
          <button>Pay now</button>
        </div>
      </div>

      <div className="w-full lg:w-1/3 border rounded p-4 bg-gray-50">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.size}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p>₱{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal -</span>
          <span>
            ₱
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping -</span>
          <span>₱{shippingPrice}</span>
        </div>
        <div className="mt-6 border-t">
          <div className="mt-4 flex justify-between text-lg font-medium">
            <span>Total</span>
            <span>
              ₱
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ) + shippingPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
