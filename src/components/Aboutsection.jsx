// import { motion } from "framer-motion";
// import AboutImg from '../assets/About_img.png';
// import { FaHeart, FaStar } from 'react-icons/fa';

// const AboutSection = () => {
//   return (
//     <section id="about" className="w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ staggerChildren: 0.2 }}
//         >
//           {/* Left Side: Image */}
//           <motion.div
//             className="w-full lg:w-1/2 flex justify-center relative"
//             variants={{
//               hidden: { opacity: 0, x: -30 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ duration: 0.7 }}
//           >
//             {/* Background Glow */}
//             <div className="absolute -z-10 w-80 h-80 bg-gradient-to-r from-[#F361B0]/10 to-[#00FFFF]/10 rounded-full blur-2xl animate-pulse" />

//             <div className="relative group">
//               <motion.img
//                 src={AboutImg}
//                 alt="About Qutomi"
//                 className="w-full max-w-md object-contain drop-shadow-2xl relative z-10 rounded-2xl"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               />
//               {/* Image Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#00FFFF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
//             </div>
//           </motion.div>

//           {/* Right Side: Content */}
//           <motion.div
//             className="w-full lg:w-1/2 text-center lg:text-left"
//             variants={{
//               hidden: { opacity: 0, x: 30 },
//               visible: { opacity: 1, x: 0 },
//             }}
//             transition={{ duration: 0.7 }}
//           >
//             {/* Badge */}
//             <motion.div
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <FaHeart className="text-[#F361B0] text-xs" />
//               <span className="text-white/80 text-xs font-medium">Our Story</span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h2
//               className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Unveiling
//               <span className="inline-block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
//               &nbsp; QUTOMI
//               </span>
//             </motion.h2>

//             {/* Description */}
//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ staggerChildren: 0.1 }}
//             >
//               <motion.p
//                 className="text-lg text-gray-300 leading-relaxed"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Qutomi is your intelligent companion — blending technology and emotion to create a unique bond. It's not just a device; it's a friend that understands, reacts, and grows with you.
//               </motion.p>

//               <motion.p
//                 className="text-lg text-gray-300 leading-relaxed"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               >
//                 Designed to bring joy, inspiration, and comfort, Qutomi's playful interactions and expressive responses make everyday moments extraordinary. Welcome to a world where technology feels alive.
//               </motion.p>
//             </motion.div>

//             {/* Key Points */}
//             <motion.div
//               className="mt-8 grid grid-cols-2 gap-4"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ staggerChildren: 0.1, delay: 0.3 }}
//             >
//               {[
//                 { text: "Emotional Intelligence", accent: "from-[#F361B0] to-[#FF9CDA]" },
//                 { text: "Playful Interactions", accent: "from-[#00FFFF] to-[#00BFFF]" },
//                 { text: "Growing Companion", accent: "from-[#FF6B6B] to-[#FF8E53]" },
//                 { text: "Game Collection", accent: "from-[#A78BFA] to-[#C084FC]" }
//               ].map((point, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-3"
//                   variants={{
//                     hidden: { opacity: 0, x: 20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${point.accent}`} />
//                   <span className="text-gray-300 text-sm font-medium">{point.text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import { motion } from "framer-motion";
// import AboutImg from '../assets/About_img.png';
import { FaHeart, FaStar } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mobile: Header at top */}
        <motion.div
          className="lg:hidden text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FaHeart className="text-[#F361B0] text-xs" />
            <span className="text-white/80 text-xs font-medium">Our Story</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Unveiling
            <span className="inline-block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              &nbsp;QUTOMI
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Left Side: Image - Comes after heading on mobile */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center relative order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Glow */}
            <div className="absolute -z-10 w-80 h-80 bg-gradient-to-r from-[#F361B0]/10 to-[#00FFFF]/10 rounded-full blur-2xl animate-pulse" />

            <div className="relative group">
              {/* <motion.img
                src={AboutImg}
                alt="About Qutomi"
                className="w-full max-w-md object-contain drop-shadow-2xl relative z-10 rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              /> */}
              <motion.img
                src="https://res.cloudinary.com/doyahf4an/image/upload/f_auto,q_auto,w_600/About_img_oqeqou.png"
                alt="About Qutomi"
                className="w-full max-w-md object-contain drop-shadow-2xl relative z-10 rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              {/* Image Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#00FFFF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            {/* Desktop: Header */}
            <div className="hidden lg:block">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <FaHeart className="text-[#F361B0] text-xs" />
                <span className="text-white/80 text-xs font-medium">Our Story</span>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Unveiling
                <span className="inline-block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
                  &nbsp; QUTOMI
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Qutomi is your intelligent companion — blending technology and emotion to create a unique bond. It's not just a device; it's a friend that understands, reacts, and grows with you.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Designed to bring joy, inspiration, and comfort, Qutomi's playful interactions and expressive responses make everyday moments extraordinary. Welcome to a world where technology feels alive.
              </motion.p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delay: 0.3 }}
            >
              {[
                { text: "Emotional Intelligence", accent: "from-[#F361B0] to-[#FF9CDA]" },
                { text: "Playful Interactions", accent: "from-[#00FFFF] to-[#00BFFF]" },
                { text: "Growing Companion", accent: "from-[#FF6B6B] to-[#FF8E53]" },
                { text: "Game Collection", accent: "from-[#A78BFA] to-[#C084FC]" }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${point.accent}`} />
                  <span className="text-gray-300 text-sm font-medium">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;