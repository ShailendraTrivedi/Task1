import React from "react";
import Button from "../helpers/Button";
import Spoon from "../assets/Spoon.jpg";
const AboutUs = () => {
  return (
    <div className="grid sm:grid-cols-2 bg-gray-200 mt-20 py-20">
      <div className="sm:flex hidden justify-center w-full">
        <img src={Spoon} alt="" className="object-contain" />
      </div>
      <div className="sm:p-10 flex flex-col justify-center sm:items-start items-center gap-5 sm:w-10/12 mx-10">
        <header className="text-3xl font-bold">About Us</header>
        <section className="sm:text-left text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint velit
          ex saepe corporis itaque deserunt aut pariatur, sunt ea magni vel
          iusto perspiciatis sit. Dolore veniam laborum quisquam eligendi
          tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          quam fugit dicta explicabo esse nulla ea, debitis repellendus
          distinctio commodi accusamus rem ab maiores illum obcaecati ad quis
          error molestias.
        </section>
        <footer>
          <Button className="bg-red-500 text-white" label="Read Now" />
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
