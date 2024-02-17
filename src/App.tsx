import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Services />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
