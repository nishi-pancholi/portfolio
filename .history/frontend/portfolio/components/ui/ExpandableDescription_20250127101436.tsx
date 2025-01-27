import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`relative text-center transition-all duration-300 ease-in-out ${
        expanded ? "h-[12rem]" : "h-[8rem]"
      }`}
      style={{
        overflow: "hidden", // Prevent content from overflowing
      }}
    >
      {/* Description */}
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed overflow-y-hidden pr-4 ${
          expanded ? "max-h-full" : "max-h-[8rem]"
        }`}
      >
        {item.des}
      </p>

      {/* Expand/Collapse Button */}
      <button
        onClick={toggleExpanded}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-400 text-sm"
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse description" : "Expand description"}
      >
        <FaChevronDown
          className={`transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ExpandableDescription;
