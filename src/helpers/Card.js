import React from "react";
import Button from "./Button";

const Card = ({ image, heading, content }) => {
  return (
    <div className="space-y-10 border-2 p-10  rounded-3xl">
      <div className="rounded-3xl">
        <img src={image} alt="" className=" rounded-3xl" />
      </div>
      <div className="space-y-4">
        <div className="text-2xl font-bold">{heading}</div>
        <div className="text-gray-500">{content}</div>
        <div>
          <Button className="border-2 border-black" label="Read More" />
        </div>
      </div>
    </div>
  );
};

export default Card;
