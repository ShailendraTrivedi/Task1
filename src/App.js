import React from "react";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import Articles from "./components/Articles"
const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <Home />
        <About />
        <Articles/>
        <Footer />
      </div>
    </>
  );
};

export default App;
