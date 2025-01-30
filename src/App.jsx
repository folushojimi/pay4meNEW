import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeadingBrand from "./component/LeadingBrand";
import Features from "./pages/Features";
import Howitworks from "./pages/Howitworks";
import Whatweoffer from "./pages/Whatweoffer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LeadingBrand />
      <Features />
      <Howitworks/>
      <Whatweoffer/>
    </div>
  );
};

export default App;
