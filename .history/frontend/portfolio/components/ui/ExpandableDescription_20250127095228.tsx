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
    <div className="text-center">
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed mb-4 ${
          isExpanded ? "max-h-none" : "max-h-32"
        }`}
        style={{
          overflowY: isExpanded ? "visible" : "auto",
          maxHeight: isExpanded ? "none" : "8rem", // Collapsed height
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
