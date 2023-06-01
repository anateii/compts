import React from "react";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleSelect(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   let content = "Select...";
  //   if (selected) {
  //     content = selected.label;
  //   }

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleTogleDropdown}
      >
        {" "}
        {/*{content}*/}
        {selected?.label || "Select..."}
        <GoChevronDown className="text-lg" />
        {/* The question mark checks if selected is null, if it is then the or operator gives
        back the first truthy value in this case the Select string */}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
