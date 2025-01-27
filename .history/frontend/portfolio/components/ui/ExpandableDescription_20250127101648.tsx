import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="relative text-center">
      {/* Description */}
      <p
        className={`lg:text-lg font-light text-sm text-gray-400 leading-relaxed ${
          isExpanded ? "max-h-none" : "max-h-32"
        } overflow-hidden pr-4 transition-all duration-300 ease-in-out`}
      >
        {item.des}
      </p>

      {/* Expand/Collapse Button */}
      <button
        onClick={toggleExpand}
        className="mt-2 flex items-center justify-center text-purple"
      >
        {isExpanded ? (
          <>
            Collapse <FaChevronUp className="ml-2" />
          </>
        ) : (
          <>
            Expand <FaChevronDown className="ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default ExpandableDescription;
