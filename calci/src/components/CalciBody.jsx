import React, { useState } from "react";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";

const CalciBody = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
  <div className="w-75 bg-gray-800 p-4 rounded-xl shadow-lg">
      <Display value={input} />
      <ButtonsContainer handleClick={handleClick} />
    </div>
  );
};

export default CalciBody;


