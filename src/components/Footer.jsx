import React from "react";
import FoodTruck from "../assets/FoodTruck.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="grid sm:grid-cols-4 sm:gap-0 gap-10 bg-gray-200 p-20">
      <div className="flex justify-center w-full">
        <img
          src={FoodTruck}
          alt=""
          className="h-[8rem] w-[8rem] object-contain"
        />
      </div>
      <div>
        <ul className="list- w-[60%] flex flex-col gap-5">
          <li className="text-xl font-bold">Contact Us</li>
          <li>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </li>
          <li>example2020@gmail.com</li>
          <li>(904) 443-0343</li>
        </ul>
      </div>
      <div>
        <ul className="list- w-[60%] flex flex-col gap-5">
          <li className="text-xl font-bold">More</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col sm:justify-around sm:items-start items-center">
        <header className="sm:order-1 order-2">
          <div className="text-2xl font-bold sm:flex hidden">Social Link</div>
          <div className="flex gap-5">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
        </header>
        <footer className="sm:order-2 order-1">
          <div>© 2022 Food Truck Example</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
