import { account } from '../config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import HomeSkeleton from '../components/Homeskeleton';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/Aboutsection';
import Features from '../components/Features';
import Suggestion from '../components/suggestion';
import Footer from '../components/Footer';
import Goals from '../components/Goals'
import FAQ from '../components/FAQSection';
import { FaChevronDown } from 'react-icons/fa';

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('showHomeSkeleton')) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1200);
      localStorage.removeItem('showHomeSkeleton');
    }
  }, []);

  // Hide scroll arrow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed scroll function - scrolls to About section
  const handleScrollDown = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: "smooth"
      });
    }
  }, []);

  if (loading) return <HomeSkeleton />;

  return (
    <div
      id="home"
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
        className="relative z-10 pt-20 sm:mt-10 sm:pt-10 w-full px-4 sm:px-6"
      >
        <div id="banner-container" className="rounded-3xl overflow-hidden w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] max-w-[95vw] mx-auto">
          <Banner />
        </div>
        
        {/* Fixed Scroll Arrow - Only shows when at top */}
        {showScrollArrow && (
          <motion.div
            onClick={handleScrollDown}
            className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="text-white/50 text-3xl" />
          </motion.div>
        )}
      </motion.div>

      <About />
      <Features />
      <Suggestion />
      <Goals/>
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Home;


