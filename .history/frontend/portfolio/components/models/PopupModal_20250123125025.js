import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const PopupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation for the modal (fade in and slide up)
  const modalAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { tension: 250, friction: 25 },
  });

  // Animation for the border (conic gradient)
  const borderAnimation = useSpring({
    from: { backgroundPosition: "100% 100%" },
    to: { backgroundPosition: "0% 0%" },
    reset: true,
    reverse: isSubmitting,
    config: { tension: 100, friction: 30 },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an email submission (for example, using an API)
    setTimeout(() => {
      setIsSubmitting(false); // Simulate form submission complete
    }, 2000);
  };

  return (
    <animated.div
 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <animated.div
      
        className="bg-[#1A1C2E] text-white rounded-lg p-8 w-full max-w-lg shadow-lg border-4 border-transparent bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      >
        <h2 className="text-2xl font-bold mb-4">Reach Out to Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded px-3 py-2 border-[#CBACF9] bg-transparent text-white"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 py-2 border-[#CBACF9] bg-transparent text-white"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border rounded px-3 py-2 border-[#CBACF9] bg-transparent text-white"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded px-3 py-2 border-[#CBACF9] bg-transparent text-white"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={onClose} // Close modal when clicked
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
              disabled={isSubmitting} // Disable while submitting
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </div>
        </form>
      </animated.div>
    </animated.div>
  );
};

export default PopupModal;
