import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="relative w-full">
      {/* Description */}
      <div className="px-4 my-5">
        <p
          className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-none" : "max-h-16"
          }`}
          style={{
            lineHeight: "1.5rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: isExpanded ? "none" : 3, // Truncates with ellipsis when collapsed
          }}
        >
          {item.des}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <div className="absolute bottom-0 right-0 mb-3 mr-3">
        <button
          onClick={toggleExpand}
          className="text-purple bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
          title={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    </div>
  );
};

export default ExpandableDescription;
