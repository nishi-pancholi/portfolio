import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import PopupModal from "./models/PopupModal";
import{ AnimatePresence, motion} from"framer-motion";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate your <span className="text-purple">software</span> solutions to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s collaborate to build scalable, innovative, and efficient applications that drive success. Reach out today!
        </p>
        <div >
        <button
          className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
          onClick={handleModalToggle}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* remove px-3 py-1, add px-5 gap-2 */}
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                  bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
            >
              Let's get in touch
              <FaLocationArrow />
              
            </span>
          </button>
              {/* Modal */}
      <AnimatePresence> {isModalOpen && <PopupModal onClose={handleModalToggle} />}</AnimatePresence>
      
          </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Nishi Pancholi
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
  
    </footer>
  );
};

export default Footer;
