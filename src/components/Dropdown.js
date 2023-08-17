import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onSelect, selected }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divRef.current) {
        return;
      }

      if (!divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    }; //this piece of code removes our event handler if our dropdown is removed.This is to prevent
    //   unnecessary re-renderings
  }, []);

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
    <div ref={divRef} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleTogleDropdown}
      >
        {" "}
        {/*{content}*/}
        {selected?.label || "Select..."}
        <GoChevronDown className="text-lg" />
        {/* The question mark checks if selected is null, if it is then the or operator gives
        back the first truthy value in this case the Select string */}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
