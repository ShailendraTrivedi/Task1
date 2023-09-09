import React from "react";

const Button = ({ className, label }) => {
  return (
    <div>
      <button className={`${className} w-[10rem] rounded-3xl p-2`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
