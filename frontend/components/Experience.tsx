import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-6 gap-6">
              {/* Thumbnail */}
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-lg"
              />

              {/* Experience Details */}
              <div className="flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-2">
                  <strong>Company:</strong> {card.company}
                </p>
                <p className="text-start text-gray-300 mt-2">
                  <strong>Location:</strong> {card.location}
                </p>
                <p className="text-start text-gray-300 mt-2">
                  <strong>Dates:</strong> {card.startDate} -{" "}
                  {card.endDate || "Present"}
                </p>

                {/* Description */}
                <p className="text-start text-gray-400 mt-4 font-light leading-relaxed">
                  {card.desc}
                </p>

                {/* Tools/Technologies */}
                <div className="mt-4">
                  <p className="text-gray-200 font-medium text-start">Tools & Skills:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {card.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple text-white py-1 px-3 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
