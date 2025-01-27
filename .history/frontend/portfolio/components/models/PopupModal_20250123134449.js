import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function PopupModal({ onClose }) {
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
    setTimeout(() => {
      setIsSubmitting(false); // Simulate form submission complete
    }, 2000);
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          backgroundColor: "#1a1c2e",
          color: "white",
          borderRadius: "8px",
          padding: "2rem",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
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
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PopupModal;
