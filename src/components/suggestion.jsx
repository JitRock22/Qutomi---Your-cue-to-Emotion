// // src/components/SuggestionCTA.jsx

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import { FaPlus } from "react-icons/fa";

// const SuggestionCTA = () => {
//   return (
//     <div className="w-full bg-[#1a1a1a]/50 border-t border-white/10 py-20 px-4 sm:px-6 z-10">
//       <div className="max-w-3xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* CHANGED: New Heading */}
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-text-color">
//             Be the First to Experience Qtomi
//           </h2>
//           {/* CHANGED: New Paragraph */}
//           <p className="mt-4 text-lg text-gray-300">
//             Your ideas are our secret ingredient. Before we launch, we invite you to share your valuable suggestions to help us craft the perfect experience and become a founding voice of the Qtomi community.
//           </p>
//         </motion.div>

//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           {/* CHANGED: Replaced form with a Link button */}
//           <Link
//             to="/suggestions" // This is the new private route
//             className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-text-color text-white font-semibold rounded-md hover:bg-text-onclick transition-colors"
//           >
//             <FaPlus className="text-white"/>
//             <span className="text-white">Add Your Suggestion</span>
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlus, FaUsers, FaRocket } from "react-icons/fa";

const SuggestionCTA = () => {
  return (
    <div id="suggestion" className="w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] border-t border-white/10 py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-8 left-8 w-48 h-48 bg-[#F361B0]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-56 h-56 bg-[#00FFFF]/10 rounded-full blur-2xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FaRocket className="text-[#F361B0] text-xs" />
            <span className="text-white/80 text-xs font-medium">Join Our Community</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Be the First to
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              Experience Qtomi
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Your ideas are our secret ingredient. Before we launch, we invite you to share your valuable suggestions to help us craft the perfect experience and become a founding voice of the Qtomi community.
          </p>

          {/* Stats */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <FaUsers className="text-[#F361B0] text-lg" />
              <span className="text-sm font-medium">500+ Early Supporters</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="text-sm text-gray-400 font-medium">100+ Suggestions</div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/suggestions"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaPlus className="text-white text-base" />
              </motion.div>
              <span className="text-base text-white">Add Your Suggestion</span>
            </div>

            {/* Hover Animation Line */}
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/50 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
          </Link>

          {/* Additional Info */}
          <motion.p
            className="mt-4 text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Takes less than 2 minutes • Your voice matters
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SuggestionCTA;