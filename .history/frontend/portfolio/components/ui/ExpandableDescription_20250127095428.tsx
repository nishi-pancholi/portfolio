import React, { useState, FC } from "react";

// Define the type for the item prop
interface ExpandableDescriptionProps {
  item: {
    des: string; // The description field should be a string
  };
}

const ExpandableDescription: FC<ExpandableDescriptionProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="text-center flex flex-col justify-between" // Flexbox ensures button stays aligned at the bottom
      style={{ height: "12rem" }} // Fixed height for consistent appearance
    >
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed mb-4 ${
          isExpanded ? "overflow-y-auto" : "overflow-hidden"
        }`}
        style={{
          maxHeight: isExpanded ? "100%" : "4rem", // Adjust the visible text height
        }}
      >
        {item.des}
      </p>
      <button
        onClick={toggleExpand}
        className="text-blue-500 font-medium hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableDescription;
