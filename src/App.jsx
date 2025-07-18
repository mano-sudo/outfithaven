import React from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import ImageSlider from "./assets/Pages/Hero";
import Products from "./assets/Pages/Products";
import Footer from "./assets/Components/Footer";
import FooterBottom from "./assets/Components/FooterBottom";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ImageSlider />
        <Products />
      </main>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default App;
