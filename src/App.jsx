import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";
import Products from "./Component/Products";
import Callus from "./Component/Callus";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider />
      <Products />
      <Callus />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
