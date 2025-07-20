import React from "react";
import Navbar from "./assets/Components/Navbar";
import ImageSlider from "./assets/Pages/Hero";
import Products from "./assets/Pages/Products";
import Footer from "./assets/Components/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./assets/Pages/Shop";
import HowToOrder from "./assets/Pages/HowToOrder";
import Contact from "./assets/Pages/Contact";
import Touch from "./assets/Components/Touch";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <div className="pt-20">
                  {" "}
                  {/* Push content, not hero */}
                  <Products />
                </div>
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <div>
                {" "}
                {/* Add padding on shop page */}
                <Shop />
              </div>
            }
          />
          <Route
            path="/how-to-order"
            element={
              <div>
                {" "}
                {/* Add padding on shop page */}
                <HowToOrder />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                {""}
                {}
                <Contact />
              </div>
            }
          />
        </Routes>
      </main>
      <Touch />
      <Footer />
    </div>
  );
};

export default App;
