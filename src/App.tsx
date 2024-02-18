import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Service from "./components/Service";
import { HeroParallax } from "./components/ThingsWeDone";
import { products } from "./utils/data";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Service />
      <Services />
      <HeroParallax products={products} />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
