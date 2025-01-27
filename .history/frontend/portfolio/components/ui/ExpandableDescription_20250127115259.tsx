import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="relative w-full flex flex-col">
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
            WebkitLineClamp: isExpanded ? "none" : 4, // Truncates with ellipsis when collapsed
            overflow: "hidden", // Ensures that overflowed content is hidden
            }}
        >
            {item.des}
        </p>
        </div>

      {/* Expand/Collapse Button */}
      <div className="flex justify-end mt-2 px-4">
        <button
          onClick={toggleExpand}
          className="text-purple bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
          title={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    </div>
  );
};

export default ExpandableDescription;
