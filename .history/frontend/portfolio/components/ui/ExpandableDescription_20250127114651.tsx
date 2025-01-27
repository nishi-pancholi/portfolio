import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div>
    <div className="relative w-full">
      {/* Expand/Collapse Button */}
      <button
        onClick={toggleExpand}
        className="absolute top-2 right-2 text-purple bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
        title={isExpanded ? "Collapse" : "Expand"}
      >
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
    <div>
      {/* Description */}
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed my-5 mx-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-none" : "max-h-16"
        }`}
        style={{
          lineHeight: "1.5rem",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isExpanded ? "none" : 3, // Ensures truncation with ellipsis when collapsed
        }}
      >
        {/* Display description */}
        {item.des}
      </p>
    </div>
    </div>
  );
};

export default ExpandableDescription;
