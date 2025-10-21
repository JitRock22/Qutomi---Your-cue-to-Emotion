// import { motion } from "framer-motion";
// import { useState } from "react";
// import Banner_img from "../assets/Banner_img1.png";

// const Banner = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isError, setIsError] = useState(false);

//   return (
//     <div className="relative w-full h-full sm:h-80 md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
//       {/* Skeleton placeholder */}
//       {!isLoaded && !isError && (
//         <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
//       )}

//       {/* Banner image */}
//       {!isError && (
//         <motion.img
//           src={Banner_img}
//           alt="Banner"
//           className={`w-full h-full object-cover ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           } transition-opacity duration-700`}
//           onLoad={() => setIsLoaded(true)}
//           onError={() => setIsError(true)}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         />
//       )}

//       {/* Fallback if banner fails */}
//       {isError && (
//         <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#E60076]/30 flex items-center justify-center text-gray-400 font-medium text-sm">
//           Banner unavailable
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;



import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Banner_img_desktop from "../assets/Banner_img1.png";
import Banner_img_mobile from "../assets/Banner_mobile.jpeg";

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint ~640px
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedImage = isMobile ? Banner_img_mobile : Banner_img_desktop;

  return (
   <div
  className={`relative w-full overflow-hidden rounded-2xl shadow-lg ${
    isMobile ? "" : "h-[70vh] sm:h-[75vh] md:h-[80vh]"
  }`}
>
      {/* Skeleton placeholder */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
      )}

      {/* Banner image */}
      {!isError && (
        <motion.img
          src={selectedImage}
          alt="Banner"
          className={`w-full h-full object-cover ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      {/* Fallback if banner fails */}
      {isError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#E60076]/30 flex items-center justify-center text-gray-400 font-medium text-sm">
          Banner unavailable
        </div>
      )}
    </div>
  );
};

export default Banner;
