// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Landing = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center relative overflow-hidden"
//       style={{
//         backgroundImage: "url('/banner.jpg')", // 🖼️ Replace with your banner image path
//       }}
//     >
//       {/* Overlay for contrast */}
//       <div className="absolute inset-0 bg-primary-color bg-opacity-50"></div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-white px-4"
//       >
//         <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
//           Welcome to <span className="text-text-color">Qutomi</span>
//         </h1>
//         <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-gray-200">
//           Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions. 💖
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md"
//           >
//             Get Started
//           </button>
//           <button
//             onClick={() => navigate("/login")}
//             className="border border-gray-300 hover:border-white hover:text-white text-gray-300 px-6 py-3 rounded-full font-semibold transition-colors"
//           >
//             See How It Works
//           </button>
//         </div>
//         {/* Subtle neon square glow elements */}
// <div className="absolute top-10 left-5 w-32 h-32 bg-[#F361B0]/10 rounded-lg blur-3xl animate-pulse"></div>
// <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E60076]/10 rounded-md blur-3xl animate-pulse"></div>
// <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#F361B0]/10 rounded-xl blur-3xl animate-pulse"></div>
// <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-[#E60076]/10 rounded-lg blur-3xl animate-pulse"></div>

//       </motion.div>
//     </div>
//   );
// };

// export default Landing;



import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  // Generate random neon squares
  const squares = [...Array(12)].map((_, i) => {
    const size = Math.floor(Math.random() * 60) + 20; // 20px - 80px
    const top = Math.floor(Math.random() * 100); // 0% - 100%
    const left = Math.floor(Math.random() * 100); // 0% - 100%
    const color = i % 2 === 0
      ? "rgba(243, 97, 176, 0.1)"
      : "rgba(230, 0, 118, 0.1)";
    const delay = Math.random() * 2; // animation delay

    return (
      <div
        key={i}
        className="absolute rounded-md blur-3xl animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-[#080808]">

      {/* Neon squares */}
      {squares}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-[#F361B0]">Qutomi</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-white/80">
          Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions. 💖
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#F361B0] hover:bg-[#E60076] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border hover:border-white border-gray-300  hover:text-white text-gray-300 px-6 py-3 rounded-full font-semibold transition-transform duration-300 transform hover:scale-105"
          >
            See How It Works
          </button>

        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
