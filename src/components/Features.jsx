// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import img2 from '../assets/Feature_img2.png';
// import img1 from '../assets/Feature_img1.png';
// import img3 from '../assets/Feature_img3.png';
// import img4 from '../assets/Feature_img4.png';
// import img5 from '../assets/Feature_img5.png';
// import { FaMagic, FaGamepad, FaTasks, FaPalette, FaSmileBeam, FaHeart, FaPaintBrush, FaMusic } from 'react-icons/fa';

// const images = [
//   img1, img2, img3, img4, img5
// ];

// const features = [
//   { icon: <FaMagic />, title: "20+ Animations" },
//   { icon: <FaGamepad />, title: "Fun Games" },
//   { icon: <FaTasks />, title: "Productivity Apps" },
//   { icon: <FaPaintBrush />, title: "Dynamic Themes" },
//   { icon: <FaSmileBeam />, title: "Cuteness Overloaded" },
//   { icon: <FaPalette />, title: "Vibrant Colors" },
//   { icon: <FaHeart />, title: "Made with Love" },
//   { icon: <FaMusic />, title: "Interactive Sound" },
// ];

// // --- Image Carousel with Dots ---
// const ImageCarouselWithDots = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[300px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden relative bg-gray-800">
//       {/* Images - AnimatePresence handles the fade in/out */}
//       <AnimatePresence initial={false}>
//         <motion.img
//           key={current}
//           src={images[current]}
//           alt={`Feature ${current + 1}`}
//           className="w-full h-full object-cover absolute top-0 left-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//       </AnimatePresence>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//               current === index ? 'bg-[#F361B0]' : 'bg-white/50 hover:bg-white/75'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Features = () => {
//   return (
//     <div className="w-full bg-[#080808] py-24 px-4 sm:px-6 z-10 overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
//             A Powerful Core, Surrounded by Features
//           </h2>
//           <p className="mt-4 text-lg text-gray-400">
//             Everything you need, seamlessly integrated.
//           </p>
//         </motion.div>

//         {/* --- DESKTOP LAYOUT --- */}
//         <div className="hidden md:flex flex-row items-stretch gap-10 lg:gap-16 max-w-7xl mx-auto">
//           {/* Left Side - Rectangular Tiles */}
//           <motion.div
//             className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-2 gap-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.1 }}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#1a1a1a]/70 p-6 rounded-2xl border border-white/10 flex items-center gap-6 hover:scale-105 transition-transform cursor-pointer"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="text-4xl text-[#F361B0] min-w-[60px] flex justify-center">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">
//                   {feature.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Side - Carousel with Dots */}
//           <motion.div
//             className="w-full md:w-1/3 flex items-center"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <ImageCarouselWithDots />
//           </motion.div>
//         </div>

//         {/* --- MOBILE LAYOUT --- */}
//         <div className="md:hidden flex flex-col gap-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <ImageCarouselWithDots />
//           </motion.div>

//           <div className="grid grid-cols-2 gap-5">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#1a1a1a]/50 p-6 rounded-lg border border-white/10 text-center flex flex-col items-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="text-4xl text-[#F361B0]">{feature.icon}</div>
//                 <h3 className="mt-4 text-base font-medium text-white">
//                   {feature.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;



// src/components/Features.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from '../assets/Feature_img1.png';
import img2 from '../assets/Feature_img2.png';
import img3 from '../assets/Feature_img3.png';
import img4 from '../assets/Feature_img4.png';
import img5 from '../assets/Feature_img5.png';
import { FaMagic, FaGamepad, FaTasks, FaPalette, FaSmileBeam, FaHeart, FaPaintBrush, FaMusic } from 'react-icons/fa';

const images = [img1, img2, img3, img4, img5];

const features = [
  { icon: <FaMagic />, title: "20+ Animations" },
  { icon: <FaGamepad />, title: "Fun Games" },
  { icon: <FaTasks />, title: "Productivity Apps" },
  { icon: <FaPaintBrush />, title: "Dynamic Themes" },
  { icon: <FaSmileBeam />, title: "Cuteness Overloaded" },
  { icon: <FaPalette />, title: "Vibrant Colors" },
  { icon: <FaHeart />, title: "Made with Love" },
  { icon: <FaMusic />, title: "Interactive Sound" },
];

// --- Image Carousel with Dots & Skeleton ---
const ImageCarouselWithDots = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // reset for next image
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden relative bg-gray-800">
      {/* Skeleton */}
      {!loaded && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-2xl z-10" />}

      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Feature ${current + 1}`}
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onLoad={() => setLoaded(true)}
        />
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setLoaded(false);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? 'bg-[#F361B0]' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full bg-[#080808] py-24 px-4 sm:px-6 z-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-color">
            A Powerful Core, Surrounded by Features
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need, seamlessly integrated.
          </p>
        </motion.div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:flex flex-row items-stretch gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Rectangular Tiles */}
          <motion.div
            className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/70 p-6 rounded-2xl border border-white/10 flex items-center gap-6 hover:scale-105 transition-transform cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl text-[#F361B0] min-w-[60px] flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Carousel with Dots */}
          <motion.div
            className="w-full md:w-1/3 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageCarouselWithDots />
          </motion.div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="md:hidden flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageCarouselWithDots />
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a]/50 p-6 rounded-lg border border-white/10 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl text-[#F361B0]">{feature.icon}</div>
                <h3 className="mt-4 text-base font-medium text-white">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
