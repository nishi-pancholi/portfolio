"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ExpandableDescription from "./ui/ExpandableDescription"; // Import the reusable ExpandableDescription component

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[36rem] h-[36rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] bg-[#1a1c2e] rounded-3xl p-6 shadow-md transition-transform transform hover:scale-105"
            key={item.id}
          >
            {/* Project Cover */}
            <div>
              <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-[20vh] lg:h-[25vh] mb-6 rounded-3xl">
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="opacity-40" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-[60%] lg:w-[50%]"
                />
              </div>

              {/* Project Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center text-white mb-3">
                {item.title}
              </h1>

              {/* Expandable Description */}
              <ExpandableDescription item={item} />

              {/* Skills Section */}
              <div className="mt-3 mx-2">
                <h2 className="text-sm font-medium text-gray-300 mb-2">
                  Tools & Technologies:
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple text-white py-1 px-3 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Section */}
              {/* <div className="flex justify-center items-center mt-7">
                <p className="lg:text-xl md:text-xs text-sm text-purple font-medium">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3 text-purple" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
