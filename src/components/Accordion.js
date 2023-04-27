import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    //console.log("STALE version of expandedIndex", expandedIndex);
    setExpandedIndex((currentExpandedIndex) => {
      //console.log("UPDATED version of expandedIndex", currentExpandedIndex);
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });

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
