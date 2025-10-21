// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaPlus } from "react-icons/fa";

// const Landing = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#080808]">

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
//             whileHover={{ scale: 1.05, backgroundColor: "#E60076" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#F361B0] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300"
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
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#202020] hover:bg-[#333333] text-white font-semibold rounded-full shadow-md transition-all duration-300"
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
import { FaPlus } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  // Generate realistic firecracker particles distributed throughout the page
  const generateFirecrackers = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 8 + 4; // 4px - 12px
      const startX = Math.random() * 100; // Random starting position across page
      const startY = Math.random() * 100;
      
      // Random explosion direction and distance
      const distance = Math.random() * 100 + 50; // 50px - 150px
      const angle = Math.random() * Math.PI * 2; // Random direction
      const endX = distance * Math.cos(angle);
      const endY = distance * Math.sin(angle);
      
      const delay = Math.random() * 6; // Staggered delays
      const duration = 0.8 + Math.random() * 0.8; // Varied durations
      
      // Random colors for more realistic firecrackers
      const colors = ["#FF0000", "#FF6B00", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#FFFFFF"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${startY}%`,
            left: `${startX}%`,
            background: color,
            boxShadow: `0 0 ${size * 2}px ${size}px ${color}40`,
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
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1.2, 0.8, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatDelay: 4 + Math.random() * 3,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      );
    });
  };

  // Generate different types of firecrackers for variety
  const firecrackers = [
    ...generateFirecrackers(25), // Main explosions
    ...generateFirecrackers(15), // Smaller secondary explosions
  ];

  // Additional sparkle effects
  const sparkles = [...Array(30)].map((_, i) => {
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    return (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${startY}%`,
          left: `${startX}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          repeatDelay: Math.random() * 4,
          delay: Math.random() * 5,
        }}
      />
    );
  });

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#080808]">

      {/* Firecracker particles distributed throughout page */}
      {firecrackers}
      
      {/* Additional sparkle effects */}
      {sparkles}

      {/* Subtle background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F361B0] rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#00FFFF] rounded-full blur-3xl opacity-15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 text-white px-6 sm:px-8"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Welcome to <span className="text-[#F361B0]">Qutomi</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-white/80 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions. 💖
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={() => navigate("/signup")}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#E60076",
              boxShadow: "0 10px 25px rgba(243, 97, 176, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F361B0] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/suggestions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#202020] hover:bg-[#333333] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <FaPlus className="text-white" />
              <span>Add Your Suggestion</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
