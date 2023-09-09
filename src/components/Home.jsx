import React from "react";
import FoodTruck from "../assets/FoodTruck.png";
import Pizza from "../assets/Pizza.jpg";
import BorderRed from "../assets/BorderRed.png";
import Button from "../helpers/Button";
const Home = () => {
  return (
    <div className="relative grid sm:grid-cols-2 grid-cols-1 h-[50rem]">
      <div className="sm:order-1 order-2 flex flex-col p-10 gap-10 sm:px-20">
        <header className="mb-20 sm:flex hidden"> 
          <img
            src={FoodTruck}
            alt=""
            className="h-[5rem] w-[5rem] object-cover"
          />
        </header>
        <section className="flex flex-col">
          <h1 className="text-5xl font-bold w-[20rem]">
            Discover the <span className="text-red-500">Best</span> Food and
            Drinks
          </h1>
          <p className=" w-[20rem]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
        </section>
        <footer className="w-full">
          <Button className="bg-red-500 text-white sm:mx-0 mx-16" label="Explore Now" />
        </footer>
      </div>
      <div className="relative sm:h-full h-[30rem]  sm:order-2 order-1">
        <img
          src={Pizza}
          alt=""
          className="absolute rounded-bl-[12rem] top-0 left-0 sm:w-full sm:h-full object-cover -z-20"
        />
        <div className="flex justify-end sm:p-14 p-1">
          <Button
            className="border-2 border-white text-white"
            label="Get in Touch"
          />
        </div>
      </div>
      <img
        src={BorderRed}
        alt=""
        className="absolute top-0 right-0 sm:w-[49em] sm:h-[52rem] -z-10"
      />
    </div>
  );
};

export default Home;
