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


import { account } from '../config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import HomeSkeleton from '../components/Homeskeleton';
import Navbar from '../components/Navbar';

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

  if (loading) return <HomeSkeleton />;

  return (
    <div
  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
  style={{ backgroundColor: '#080808' }}
>
  <Navbar setIsLoggedIn={setIsLoggedIn} />

  {/* Neon glow blobs */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#F361B0]/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E60076]/10 rounded-full blur-3xl animate-pulse"></div>

  {/* Main content card with motion */}
  <motion.div
    className="mt-20 text-center p-8 sm:p-10 rounded-3xl shadow-2xl bg-[#111]/70 backdrop-blur-lg border border-[#F361B0]/20 w-[90%] max-w-lg z-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <motion.h1
      className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#F361B0] to-[#E60076] text-transparent bg-clip-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Welcome to Qutomi 🌸
    </motion.h1>

    <p className="text-gray-300 mb-6 text-sm sm:text-base">
      You’re now part of the world of intelligent companions 💖
    </p>

    <motion.button
      onClick={() => navigate('/dashboard')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-xl font-semibold transition-all text-white bg-gradient-to-r from-[#F361B0] to-[#E60076] hover:shadow-[0_0_20px_#F361B0]/70"
    >
      Explore Dashboard →
    </motion.button>
  </motion.div>

  <span className="text-stone-500 mt-4 z-10">
    *No Dashboard is there till now ...
  </span>
</div>

  );
};

export default Home;
