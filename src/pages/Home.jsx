import { account } from '../config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import HomeSkeleton from '../components/HomeSkeleton';
import Navbar from '../components/Navbar';

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('showHomeSkeleton')) {
      setLoading(true);
      // Simulate data fetching delay
      setTimeout(() => setLoading(false), 1200);
      localStorage.removeItem('showHomeSkeleton');
    }
  }, []);

  if (loading) return <HomeSkeleton />; // Show skeleton while loading

  return (
    <motion.div
      className="p-8 min-h-screen bg-gray-100 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <h1 className="text-3xl font-bold mb-6">Welcome to Home Page!</h1>
      <p className="mb-6 text-gray-700">You are successfully logged in 🎉</p>
    
    </motion.div>
  );
};

export default Home;
