import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="relative w-full">
      {/* Expand/Collapse Button */}
      <button
        onClick={toggleExpand}
        className="absolute top-2 right-2 text-purple bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
        title={isExpanded ? "Collapse" : "Expand"}
      >
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Description */}
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed pr-4 transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-none" : "max-h-16"
        } overflow-hidden`}
        style={{
          lineHeight: "1.5rem",
        }}
      >
        {/* Truncate if not expanded */}
        {!isExpanded && item.des.length > 100
          ? `${item.des.slice(0, 100)}...`
          : item.des}
      </p>
    </div>
  );
};

export default ExpandableDescription;
