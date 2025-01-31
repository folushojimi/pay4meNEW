import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeadingBrand from "./component/LeadingBrand";
import Features from "./pages/Features";
import Howitworks from "./pages/Howitworks";
import Whatweoffer from "./pages/Whatweoffer";
import Demovideo from "./pages/Demovideo";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import BarcodeBanner from "./pages/BarcodeBanner";
import BlogCarousel from "./pages/BlogCarousel";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LeadingBrand />
      <Features />
      <Howitworks/>
      <Whatweoffer/>
      <Demovideo/>
      <Testimonial/>
      <BlogCarousel/>
      <BarcodeBanner/>
      <Footer/>
    </div>
  );
};

export default App;
