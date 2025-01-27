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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
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
              className="w-full border rounded px-3 py-2"
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
              className="w-full border rounded px-3 py-2"
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
              className="w-full border rounded px-3 py-2"
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
              className="w-full border rounded px-3 py-2"
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
              className="px-4 py-2 bg-purple text-white rounded"
              disabled={isSubmitting} // Disable while submitting
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
