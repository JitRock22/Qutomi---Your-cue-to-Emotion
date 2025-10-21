// src/components/AboutSection.jsx

import { motion } from "framer-motion";
import AboutImg from '../assets/About_img.png';
const AboutSection = () => {
  return (
    <div className="relative w-full bg-[#080808] py-16 px-4 sm:px-6 z-10 overflow-hidden">
  {/* Background subtle shapes */}
  <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#F361B0]/10 rounded-xl blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#E60076]/10 rounded-2xl blur-3xl animate-pulse"></div>

  <div className="max-w-6xl mx-auto relative z-20">
    <motion.div
      className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Left Side: Image */}
      <motion.div
        className="w-full md:w-1/2 lg:w-5/12 rounded-3xl overflow-hidden shadow-2xl"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img
          src={AboutImg}
          alt="About Qutomi"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      {/* Right Side: Text */}
      <motion.div
        className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F361B0] to-[#E60076] drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Unveiling Qutomi
        </motion.h2>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           Qutomi is your intelligent companion — blending technology and emotion to create a unique bond. It’s not just a device; it’s a friend that understands, reacts, and grows with you.
        </motion.p>

        <motion.p
          className="mt-4 text-gray-400 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Designed to bring joy, inspiration, and comfort, Qutomi’s playful interactions and expressive responses make everyday moments extraordinary. Welcome to a world where technology feels alive.
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</div>

  );
};

export default AboutSection;