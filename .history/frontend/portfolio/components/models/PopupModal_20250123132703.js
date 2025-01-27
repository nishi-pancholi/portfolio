import { useState } from "react";
import{ AnimatePresence, motion} from"framer-motion";
<style jsx>{`
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .modal-card {
    background-color: #1a1c2e;
    color: white;
    border-radius: 8px;
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  .modal-card .absolute {
    z-index: -1;
  }
  .modal-card h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .modal-card form input,
  .modal-card form textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid #cbacf9;
    color: white;
  }
  .modal-card form button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  .modal-card form button[disabled] {
    cursor: not-allowed;
    background-color: gray;
  }
`}</style>;
function PopupModal({onClose}) {
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
    <motion.div className="overlay" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <motion.div className="modal-card" onClick={(e) => e. stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{scale: 1, opacity: 1 }}  exit ={{scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
    <div >
      <div >
  

        <div className="relative z-10">
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
      </div>
    </div>
    </motion.div>
    </motion.div>
  );
};

export default PopupModal;
