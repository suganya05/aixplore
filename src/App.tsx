import React from "react";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Service from "./components/Service";
import { HeroParallax } from "./components/ThingsWeDone";
import { products } from "./utils/data";
import Hero from "./components/Hero";
import { NewService } from "./components/NewService";

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <NewService />
      <Service />
      <Services />
      <HeroParallax products={products} />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
