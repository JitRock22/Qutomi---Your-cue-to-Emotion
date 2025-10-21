// import { account } from '../config/appwriteConfig';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import HomeSkeleton from '../components/Homeskeleton';
// import Navbar from '../components/Navbar';

// const Home = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem('showHomeSkeleton')) {
//       setLoading(true);
//       // Simulate data fetching delay
//       setTimeout(() => setLoading(false), 1200);
//       localStorage.removeItem('showHomeSkeleton');
//     }
//   }, []);

//   if (loading) return <HomeSkeleton />; // Show skeleton while loading

//   return (
//     <motion.div
//       className="p-8 min-h-screen bg-gray-100 flex flex-col items-center justify-center"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <Navbar setIsLoggedIn={setIsLoggedIn} />
//       <h1 className="text-3xl font-bold mb-6">Welcome to Home Page!</h1>
//       <p className="mb-6 text-gray-700">You are successfully logged in 🎉</p>

//     </motion.div>
//   );
// };

// export default Home;


// Home.jsx

import { account } from '../config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import HomeSkeleton from '../components/Homeskeleton';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/Aboutsection';
import Features from '../components/Features';
import Suggestion from '../components/suggestion';
import Footer from '../components/Footer';
import { FaChevronDown } from 'react-icons/fa'; // NEW: Import the arrow icon

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('showHomeSkeleton')) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1200);
      localStorage.removeItem('showHomeSkeleton');
    }
  }, []);

  // NEW: Function to handle smooth scrolling
  const handleScrollDown = () => {
    // Scroll by the height of the banner container
    const banner = document.getElementById("banner-container");
    if (banner) {
      window.scrollTo({
        top: banner.offsetHeight,
        behavior: "smooth",
      });
    }
  };


  if (loading) return <HomeSkeleton />;

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "#080808" }}
    >
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      {/* Background glow blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-[#F361B0]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#E60076]/10 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // className="relative z-10 sm:mt-10 sm:pt-10 w-full px-4 sm:px-6"
        className="relative z-10 pt-20 sm:mt-10 sm:pt-10 w-full px-4 sm:px-6"
      >
        <div id="banner-container" className="rounded-3xl overflow-hidden w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] max-w-[95vw] mx-auto">
          <Banner />
        </div>
        <motion.div
          onClick={handleScrollDown}
          className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: ["0%", "20%", "0%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-white/50 text-3xl" />
        </motion.div>
      </motion.div>

      {/* NEW: Bouncing Arrow Indicator */}
      {/* <motion.div
        onClick={handleScrollDown}
        className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: ["0%", "20%", "0%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaChevronDown className="text-white/50 text-3xl" />
      </motion.div> */}



      <About />
      <Features />
      <Suggestion />
      <Footer/>
    </div>
  );
};

export default Home;