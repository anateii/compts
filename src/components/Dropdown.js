import React from "react";
import { useState } from "react";

function Dropdown({ options, onSelect, selected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    //CLOSE DROPDOWN WHEN OPTION IS SELECTED
    setIsOpen(false);
    //WHAT OPTION DID THE USER CLICK ON?
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleSelect(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selected) {
    content = selected.label;
  }

  return (
    <div>
      <div onClick={handleTogleDropdown}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
