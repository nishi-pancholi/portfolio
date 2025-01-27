import React, { useState } from "react";
import { motion } from "framer-motion";  // Import framer-motion

const PopupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  const [isError, setIsError] = useState(false); // Track if there is an error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate email submission (replace this with actual logic)
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsSubmitted(true); // Simulate success response
      } else {
        setIsError(true); // Simulate error response
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg p-8 w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isSubmitted ? (
          <motion.div
            className="text-center p-8 bg-green-500 text-white rounded"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold">Thank you for reaching out!</h2>
            <p>Your message has been sent successfully.</p>
          </motion.div>
        ) : isError ? (
          <motion.div
            className="text-center p-8 bg-red-500 text-white rounded"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold">Oops! Something went wrong.</h2>
            <p>There was an error sending your message. Please try again.</p>
          </motion.div>
        ) : (
          <>
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
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-purple text-white rounded">
                  Send
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PopupModal;
