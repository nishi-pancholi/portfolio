import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function PopupModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/emails/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessModalVisible(true); // Show success modal
      } else {
        setIsErrorModalVisible(true); // Show error modal
      }
    } catch (error) {
      setIsErrorModalVisible(true); // Show error modal on failure
    } finally {
      setIsSubmitting(false);
      onClose(); // Close the form modal
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalVisible(false);
  };

  useEffect(() => {
    if (isSuccessModalVisible) {
      // Set a timeout to automatically close the success modal after 3 seconds
      const timer = setTimeout(() => {
        handleCloseSuccessModal();
      }, 3000); // Change the 3000 (3 seconds) to your preferred duration

      return () => clearTimeout(timer); // Cleanup the timer if the modal is closed earlier
    }
  }, [isSuccessModalVisible]);

  return (
    <div>
      {/* Main Form Modal */}
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
            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
            color: "white",
            padding: "2rem",
            width: "100%",
            maxWidth: "600px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <h2 className="text-2xl font-bold mb-4">Reach Out to Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
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
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
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
              <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
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
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
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
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccessModalVisible && (
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
            onClick={handleCloseSuccessModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                color: "white",
                padding: "2rem",
                width: "100%",
                maxWidth: "600px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p>Your message has been sent successfully.</p>
              <button
                onClick={handleCloseSuccessModal}
                className="px-4 py-2 bg-green-600 text-white rounded mt-4"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {isErrorModalVisible && (
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
            onClick={handleCloseErrorModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                color: "white",
                padding: "2rem",
                width: "100%",
                maxWidth: "600px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <h2 className="text-2xl font-bold mb-4">Oops!</h2>
              <p>There was an error sending your message. Please try again.</p>
              <button
                onClick={handleCloseErrorModal}
                className="px-4 py-2 bg-red-600 text-white rounded mt-4"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PopupModal;
