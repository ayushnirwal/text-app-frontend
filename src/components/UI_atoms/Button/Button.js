import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-green text-darkGray font-semibold w-full h-full rounded-full md:rounded-xl focus:outline-none  my-3 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
