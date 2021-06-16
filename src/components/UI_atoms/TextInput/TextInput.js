import React from "react";

const TextInput = ({ setValue, value, type, placeholder, autoComplete }) => {
  return (
    <input
      className="w-full h-10 bg-cream  rounded-full md:rounded-xl text-center text-darkGray focus:outline-none  my-3 "
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type={type || ""}
      placeholder={placeholder || "placeholder"}
      autoComplete={autoComplete || ""}
    />
  );
};

export default TextInput;
