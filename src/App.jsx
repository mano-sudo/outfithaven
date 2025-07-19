import React from "react";
import Navbar from "./assets/Components/Navbar";
import ImageSlider from "./assets/Pages/Hero";
import Products from "./assets/Pages/Products";
import Footer from "./assets/Components/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./assets/Pages/Shop";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
