
// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaPlus } from "react-icons/fa";

// const Landing = () => {
//   const navigate = useNavigate();

//   // Generate realistic firecracker particles distributed throughout the page
//   const generateFirecrackers = (count) => {
//     return [...Array(count)].map((_, i) => {
//       const size = Math.random() * 8 + 4; // 4px - 12px
//       const startX = Math.random() * 100; // Random starting position across page
//       const startY = Math.random() * 100;
      
//       // Random explosion direction and distance
//       const distance = Math.random() * 100 + 50; // 50px - 150px
//       const angle = Math.random() * Math.PI * 2; // Random direction
//       const endX = distance * Math.cos(angle);
//       const endY = distance * Math.sin(angle);
      
//       const delay = Math.random() * 6; // Staggered delays
//       const duration = 0.8 + Math.random() * 0.8; // Varied durations
      
//       // Random colors for more realistic firecrackers
//       const colors = ["#FF0000", "#FF6B00", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#FFFFFF"];
//       const color = colors[Math.floor(Math.random() * colors.length)];

//       return (
//         <motion.div
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             width: `${size}px`,
//             height: `${size}px`,
//             top: `${startY}%`,
//             left: `${startX}%`,
//             background: color,
//             boxShadow: `0 0 ${size * 2}px ${size}px ${color}40`,
//           }}
//           initial={{ 
//             x: 0, 
//             y: 0, 
//             opacity: 0,
//             scale: 0 
//           }}
//           animate={{ 
//             x: endX, 
//             y: endY, 
//             opacity: [0, 1, 0.8, 0],
//             scale: [0, 1.2, 0.8, 0],
//             rotate: [0, 180]
//           }}
//           transition={{
//             duration: duration,
//             repeat: Infinity,
//             repeatDelay: 4 + Math.random() * 3,
//             delay: delay,
//             ease: [0.25, 0.1, 0.25, 1],
//           }}
//         />
//       );
//     });
//   };

//   // Generate different types of firecrackers for variety
//   const firecrackers = [
//     ...generateFirecrackers(25), // Main explosions
//     ...generateFirecrackers(15), // Smaller secondary explosions
//   ];

//   // Additional sparkle effects
//   const sparkles = [...Array(30)].map((_, i) => {
//     const size = Math.random() * 3 + 1;
//     const startX = Math.random() * 100;
//     const startY = Math.random() * 100;
    
//     return (
//       <motion.div
//         key={`sparkle-${i}`}
//         className="absolute rounded-full bg-white"
//         style={{
//           width: `${size}px`,
//           height: `${size}px`,
//           top: `${startY}%`,
//           left: `${startX}%`,
//         }}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ 
//           opacity: [0, 1, 0],
//           scale: [0, 1, 0]
//         }}
//         transition={{
//           duration: 1.5 + Math.random(),
//           repeat: Infinity,
//           repeatDelay: Math.random() * 4,
//           delay: Math.random() * 5,
//         }}
//       />
//     );
//   });

//   return (
//     <div className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#080808]">

//       {/* Firecracker particles distributed throughout page */}
//       {firecrackers}
      
//       {/* Additional sparkle effects */}
//       {sparkles}

//       {/* Subtle background glow effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F361B0] rounded-full blur-3xl opacity-20"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.2, 0.3, 0.2]
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#00FFFF] rounded-full blur-3xl opacity-15"
//           animate={{ 
//             scale: [1.2, 1, 1.2],
//             opacity: [0.15, 0.25, 0.15]
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         />
//       </div>

//       {/* Main content */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//         }}
//         className="relative z-10 text-white px-6 sm:px-8"
//       >
//         <motion.h1
//           className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           Welcome to <span className="text-[#F361B0]">Qutomi</span>
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-white/80 leading-relaxed"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions. 💖
//         </motion.p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <motion.button
//             onClick={() => navigate("/signup")}
//             whileHover={{ 
//               scale: 1.05, 
//               backgroundColor: "#E60076",
//               boxShadow: "0 10px 25px rgba(243, 97, 176, 0.3)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#F361B0] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
//           >
//             Get Started
//           </motion.button>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link
//               to="/suggestions"
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#202020] hover:bg-[#333333] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
//             >
//               <FaPlus className="text-white" />
//               <span>Add Your Suggestion</span>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Landing;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaHeart, FaStar } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  // Enhanced firecracker particles with better performance
  const generateFirecrackers = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 6 + 3; // 3px - 9px
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      const distance = Math.random() * 80 + 40; // 40px - 120px
      const angle = Math.random() * Math.PI * 2;
      const endX = distance * Math.cos(angle);
      const endY = distance * Math.sin(angle);
      
      const delay = Math.random() * 4;
      const duration = 0.6 + Math.random() * 0.6;
      
      const colors = ["#FF6B6B", "#FF8E53", "#FFD93D", "#6BCF7F", "#4D96FF", "#C780E8", "#FF9CDA"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${startY}%`,
            left: `${startX}%`,
            background: color,
            boxShadow: `0 0 ${size * 3}px ${size * 1.5}px ${color}30`,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            x: endX, 
            y: endY, 
            opacity: [0, 1, 0.7, 0],
            scale: [0, 1.3, 0.7, 0],
            rotate: [0, 120, 240]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 2,
            delay: delay,
            ease: "easeOut",
          }}
        />
      );
    });
  };

  const firecrackers = [
    ...generateFirecrackers(20),
    ...generateFirecrackers(10),
  ];

  // Enhanced sparkle effects
  const sparkles = [...Array(25)].map((_, i) => {
    const size = Math.random() * 2 + 1;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    return (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${startY}%`,
          left: `${startX}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          scale: [0, 1.2, 0],
          rotate: [0, 180]
        }}
        transition={{
          duration: 1.2 + Math.random(),
          repeat: Infinity,
          repeatDelay: Math.random() * 3,
          delay: Math.random() * 4,
        }}
      />
    );
  });

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
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

      {/* Firecracker particles */}
      {firecrackers}
      {sparkles}

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 text-white px-6 sm:px-8 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaStar className="text-[#F361B0] text-sm" />
          <span className="text-white/80 text-sm font-medium">Welcome</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
            Qtomi
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions. 💖
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Get Started Button */}
          {/* Get Started Button - Darker Gradient */}
<motion.button
  onClick={() => navigate("/signup")}
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(243, 97, 176, 0.4)"
  }}
  whileTap={{ scale: 0.95 }}
  className="group relative px-8 py-4 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
>
  {/* Button Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
  
  {/* Button Content */}
  <div className="relative z-10 flex items-center justify-center gap-3">
    <FaHeart className="text-white text-lg" />
    <span className="text-lg font-semibold">Get Started</span>
  </div>
</motion.button>

          {/* Suggestion Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/suggestions"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/10 to-[#00FFFF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPlus className="text-white text-lg" />
                </motion.div>
                <span>Add Your Suggestion</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className="mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Together, let’s create a companion that truly feels.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Landing;