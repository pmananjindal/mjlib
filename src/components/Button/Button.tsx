import React, { useState } from "react";
const Button = () => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    setVal(val + 1);
  };
  return (
    <>
      <p>{val}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};
export default Button;
