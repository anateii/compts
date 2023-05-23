import React from "react";
import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    //CLOSE DROPDOWN WHEN OPTION IS SELECTED
    setIsOpen(false);
    //WHAT OPTION DID THE USER CLICK ON?
    console.log(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleSelect(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleTogleDropdown}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
