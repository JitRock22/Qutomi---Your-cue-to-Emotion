// src/components/SuggestionCTA.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaPlus } from "react-icons/fa";

const SuggestionCTA = () => {
  return (
    <div className="w-full bg-[#1a1a1a]/50 border-t border-white/10 py-20 px-4 sm:px-6 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* CHANGED: New Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-color">
            Be the First to Experience Qutomi
          </h2>
          {/* CHANGED: New Paragraph */}
          <p className="mt-4 text-lg text-gray-300">
            Your ideas are our secret ingredient. Before we launch, we invite you to share your valuable suggestions to help us craft the perfect experience and become a founding voice of the Qutomi community.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* CHANGED: Replaced form with a Link button */}
          <Link
            to="/suggestions" // This is the new private route
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-text-color text-white font-semibold rounded-md hover:bg-text-onclick transition-colors"
          >
            <FaPlus className="text-white"/>
            <span className="text-white">Add Your Suggestion</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SuggestionCTA;