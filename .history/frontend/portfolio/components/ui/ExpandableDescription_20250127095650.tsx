import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ExpandableDescription = ({ item }: { item: { des: string } }) => {
  return (
    <div
      className="relative text-center"
      style={{
        height: "8rem", // Fixed height for consistent item layout
        overflow: "hidden", // Prevent description from overflowing outside the box
      }}
    >
      {/* Description */}
      <p
        className="lg:text-lg font-light text-sm text-gray-400 leading-relaxed overflow-y-auto pr-4"
        style={{
          maxHeight: "8rem", // Matches container height
        }}
      >
        {item.des}
      </p>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        style={{
          visibility: "hidden", // Initially hidden
        }}
      >
        <FaChevronDown className="text-gray-400 text-xs animate-bounce" />
      </div>
    </div>
  );
};

export default ExpandableDescription;
