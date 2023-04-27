import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };
  //this is a callback function that receives the index available only inside the map

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    //  const handleClick = () => {
    //    setExpandedIndex(index);
    //  };    putting the handleClick here is not professional because it makes it harder to read inside of a map function if
    //        we have multiple event handlers.So we are moving it above outside of the mapping.

    const content = isExpanded && <div>{item.content}</div>;

    //&& operator gives back the first falsey value or the last truthy value
    //|| operator gives back the first value that is truthy
    //React doesn't print booleans, nulls or undefined. So if isExpanded is false it won't show the div
    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {/* handleClick here is a callbackfunction with index passed as parameter */}
        {content}
        {/* this is the same without content variable
        {isExpanded && <div>{item.content}</div>} */}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
