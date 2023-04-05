import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded && <div>{item.content}</div>;

    //&& operator gives back the first falsey value or the last truthy value
    //|| operator gives back the first value that is truthy
    //React doesn't print booleans, nulls or undefined. So if isExpanded is false it won't show the div
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {content}
        {/* this is the same withut content variable
        {isExpanded && <div>{item.content}</div>} */}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
