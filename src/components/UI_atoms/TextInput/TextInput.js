import React from "react";

const TextInput = ({
  setValue,
  onKeyUp,
  value,
  type,
  placeholder,
  autoComplete,
}) => {
  return (
    <input
      className="w-full h-full bg-cream  rounded-full md:rounded-lg text-center text-darkGray focus:outline-none  "
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={onKeyUp}
      value={value}
      type={type || ""}
      placeholder={placeholder || "placeholder"}
      autoComplete={autoComplete || ""}
    />
  );
};

export default TextInput;
