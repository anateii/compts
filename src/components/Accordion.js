import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //What if we want to toggle the panels and make them closed as default start?
  // we can put useState(-1) this way the index starts at a negative value and all
  // the panels are closed by default.

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }

    //here we are implementing the toggle logic. If the expandedIndex is identical to the nextIndex
    //then we set the setExpanded index to -1 so it can close the panel
  };
  //this is a callback function that receives the index available only inside the map

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    //  const handleClick = () => {
    //    setExpandedIndex(index);
    //  };    putting the handleClick here is not professional because it makes it harder to read inside of a map function if
    //        we have multiple event handlers.So we are moving it above outside of the mapping.

    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );

    //&& operator gives back the first falsey value or the last truthy value
    //|| operator gives back the first value that is truthy
    //React doesn't print booleans, nulls or undefined. So if isExpanded is false it won't show the div
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* handleClick here is a callbackfunction with index passed as parameter */}
        {content}
        {/* this is the same without content variable
        {isExpanded && <div>{item.content}</div>} */}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
