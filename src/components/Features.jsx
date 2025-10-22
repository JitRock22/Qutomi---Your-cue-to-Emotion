import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import img1 from '../assets/Feature_img1.png';
import img2 from '../assets/Feature_img2.png';
import img3 from '../assets/Feature_img3.png';
import img4 from '../assets/Feature_img4.png';
import img5 from '../assets/Feature_img5.png';
import { FaMagic, FaGamepad, FaTasks, FaPalette, FaSmileBeam, FaHeart, FaPaintBrush, FaMusic, FaStar } from 'react-icons/fa';

const images = [img1, img2, img3, img4, img5];

const features = [
  { icon: <FaMagic />, title: "20+ Animations", gradient: "from-purple-500 to-pink-500" },
  { icon: <FaGamepad />, title: "Fun Games", gradient: "from-green-400 to-blue-500" },
  { icon: <FaTasks />, title: "Productivity Apps", gradient: "from-orange-400 to-red-500" },
  { icon: <FaPaintBrush />, title: "Dynamic Themes", gradient: "from-cyan-400 to-blue-500" },
  { icon: <FaSmileBeam />, title: "Cuteness Overloaded", gradient: "from-yellow-400 to-orange-500" },
  { icon: <FaPalette />, title: "Vibrant Colors", gradient: "from-indigo-500 to-purple-600" },
  { icon: <FaHeart />, title: "Made with Love", gradient: "from-rose-500 to-pink-600" },
  { icon: <FaMusic />, title: "Interactive Sound", gradient: "from-teal-400 to-cyan-500" },
];

// --- Minimal Image Carousel with Swipe ---
const ImageCarouselWithDots = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setLoaded(false);
      setCurrent(prev => (prev + 1) % images.length);
    } else if (isRightSwipe) {
      setLoaded(false);
      setCurrent(prev => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div 
      className="w-full h-[280px] md:h-[480px] rounded-2xl shadow-2xl overflow-hidden relative bg-gray-800 group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/20 to-[#00FFFF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      {/* Skeleton */}
      {!loaded && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-2xl z-10" />}

      {/* Images with improved swipe animation */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Feature ${current + 1}`}
          className="w-full h-full object-cover absolute top-0 left-0 z-20 select-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onLoad={() => setLoaded(true)}
          draggable="false"
        />
      </AnimatePresence>

      {/* Minimal Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setLoaded(false);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-gradient-to-r from-[#F361B0] to-[#00FFFF]' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="w-full bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 left-10 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <FaStar className="text-[#F361B0] text-xs" />
            <span className="text-white/80 text-xs font-medium">Features</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            A Powerful Core,
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              Surrounded by Features
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need, seamlessly integrated with emotional intelligence.
          </p>
        </motion.div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden lg:flex flex-row items-stretch gap-8 lg:gap-12">
          {/* Left Side - Feature Tiles */}
          <motion.div
            className="w-full lg:w-2/3 grid grid-cols-2 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300" />
                
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative p-5 lg:p-6 flex items-center gap-4 lg:gap-5 z-10">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-lg lg:text-xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg lg:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Carousel */}
          <motion.div
            className="w-full lg:w-1/3 flex items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageCarouselWithDots />
          </motion.div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="lg:hidden flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarouselWithDots />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
                
                <div className="relative p-4 flex flex-col items-center text-center gap-3 z-10">
                  <motion.div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-base shadow-md`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;