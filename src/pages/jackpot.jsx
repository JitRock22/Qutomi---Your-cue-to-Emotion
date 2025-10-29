// src/pages/Jackpot.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaGift, FaTicketAlt, FaCoins, FaCrown, FaStar, FaTrophy, FaLock, FaSyncAlt } from "react-icons/fa";
import { account } from '../config/appwriteConfig';

const Jackpot = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);
  const [lastSpinDate, setLastSpinDate] = useState(null);
  const [canSpin, setCanSpin] = useState(false);
  const wheelRef = useRef(null);

  // Prizes with probabilities (Jackpot has very low probability)
  const prizes = [
    { id: 1, name: "10% Discount", value: "10OFF", probability: 0.25, icon: FaTicketAlt, color: "from-green-400 to-emerald-600" },
    { id: 2, name: "Free Shipping", value: "FREESHIP", probability: 0.20, icon: FaCoins, color: "from-blue-400 to-cyan-600" },
    { id: 3, name: "15% Discount", value: "15OFF", probability: 0.18, icon: FaTicketAlt, color: "from-purple-400 to-indigo-600" },
    { id: 4, name: "25% Discount", value: "25OFF", probability: 0.15, icon: FaStar, color: "from-yellow-400 to-orange-600" },
    { id: 5, name: "50% Discount", value: "50OFF", probability: 0.10, icon: FaTrophy, color: "from-red-400 to-pink-600" },
    { id: 6, name: "Qtomi Unit", value: "FREEUNIT", probability: 0.02, icon: FaCrown, color: "from-[#F361B0] to-[#00FFFF]" }, // Jackpot - very low probability
    { id: 7, name: "5% Discount", value: "5OFF", probability: 0.08, icon: FaTicketAlt, color: "from-gray-400 to-gray-600" },
    { id: 8, name: "Better Luck", value: "NEXT_TIME", probability: 0.02, icon: FaSyncAlt, color: "from-slate-400 to-slate-600" },
  ];

  // Check user authentication and spin eligibility
  useEffect(() => {
    checkUserAuth();
    checkSpinEligibility();
  }, []);

  const checkUserAuth = async () => {
    try {
      const userData = await account.get();
      setUser(userData);
    } catch (error) {
      console.error('Not authenticated');
    }
  };

  const checkSpinEligibility = () => {
    const lastSpin = localStorage.getItem('lastSpinDate');
    if (lastSpin) {
      const lastSpinDate = new Date(lastSpin);
      const today = new Date();
      const daysSinceLastSpin = Math.floor((today - lastSpinDate) / (1000 * 60 * 60 * 24));
      
      setLastSpinDate(lastSpinDate);
      setCanSpin(daysSinceLastSpin >= 7);
    } else {
      setCanSpin(true);
    }
  };

  const spinWheel = () => {
    if (!user) {
      alert('Please login to spin the wheel!');
      return;
    }

    if (!canSpin) {
      alert('You can spin once per week. Come back next week!');
      return;
    }

    setIsSpinning(true);
    setHasSpun(true);

    // Simulate spinning animation
    setTimeout(() => {
      const random = Math.random();
      let cumulativeProbability = 0;
      let selectedPrize = prizes[0];

      // Select prize based on probability
      for (const prize of prizes) {
        cumulativeProbability += prize.probability;
        if (random <= cumulativeProbability) {
          selectedPrize = prize;
          break;
        }
      }

      setResult(selectedPrize);
      setIsSpinning(false);
      
      // Save spin date
      localStorage.setItem('lastSpinDate', new Date().toISOString());
      localStorage.setItem('lastSpinResult', JSON.stringify(selectedPrize));
      
      // Update eligibility
      setCanSpin(false);
      setLastSpinDate(new Date());
    }, 3000);
  };

  const getNextSpinDate = () => {
    if (lastSpinDate) {
      const nextSpinDate = new Date(lastSpinDate);
      nextSpinDate.setDate(nextSpinDate.getDate() + 7);
      return nextSpinDate.toLocaleDateString();
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 p-4 sm:p-6"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowLeft className="text-white/80 group-hover:text-white text-lg" />
          </motion.div>
          <span className="text-white/80 group-hover:text-white font-medium text-sm sm:text-base">Back to Home</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-8"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FaGift className="text-[#F361B0] text-sm" />
            <span className="text-white/80 text-sm font-medium">Weekly Jackpot</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Spin to
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
              Win Big!
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            One spin per week. Amazing discounts, coupons, and a chance to win a FREE Qtomi unit!
          </p>

          {/* Spin Counter */}
          {lastSpinDate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-4"
            >
              <FaLock className="text-yellow-400 text-sm" />
              <span className="text-yellow-400 text-sm font-medium">
                Next spin: {getNextSpinDate()}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Wheel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          {/* Wheel */}
          <div className="relative">
            {/* Wheel Base */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Wheel */}
              <motion.div
                ref={wheelRef}
                className="w-full h-full rounded-full border-4 border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm relative overflow-hidden"
                animate={isSpinning ? { rotate: 3600 } : { rotate: 0 }}
                transition={isSpinning ? { duration: 3, ease: "easeOut" } : {}}
              >
                {/* Wheel Segments */}
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index;
                  const IconComponent = prize.icon;
                  
                  return (
                    <div
                      key={prize.id}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'center'
                      }}
                    >
                      <div
                        className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left"
                        style={{
                          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                        }}
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${prize.color} opacity-90`} />
                      </div>
                      
                      {/* Prize Icon */}
                      <div
                        className="absolute top-8 left-1/2 transform -translate-x-1/2"
                        style={{ transform: `rotate(${-angle}deg)` }}
                      >
                        <IconComponent className="text-white text-lg" />
                      </div>
                    </div>
                  );
                })}

                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#080808] to-[#1a1a1a] rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-full" />
                </div>
              </motion.div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-8 bg-gradient-to-br from-[#F361B0] to-[#00FFFF] clip-triangle z-20" />
            </div>

            {/* Spin Button */}
            <motion.button
              onClick={spinWheel}
              disabled={!canSpin || isSpinning || !user}
              className={`group relative mx-auto mt-8 flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-2xl shadow-xl transition-all duration-300 ${
                canSpin && user
                  ? 'bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] hover:shadow-2xl hover:scale-105 cursor-pointer'
                  : 'bg-gray-600 cursor-not-allowed opacity-50'
              }`}
              whileHover={canSpin && user ? { scale: 1.05 } : {}}
              whileTap={canSpin && user ? { scale: 0.95 } : {}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-3">
                {isSpinning ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FaSyncAlt className="text-white text-lg" />
                    </motion.div>
                    <span className="text-lg text-white">Spinning...</span>
                  </>
                ) : (
                  <>
                    <FaGift className="text-white text-lg" />
                    <span className="text-lg text-white">
                      {!user ? 'Login to Spin' : canSpin ? 'Spin the Wheel!' : 'Come Back Next Week'}
                    </span>
                  </>
                )}
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Result Modal */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`bg-gradient-to-br ${result.color} rounded-3xl p-8 max-w-md w-full text-center text-white shadow-2xl`}
            >
              <result.icon className="text-6xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Congratulations!</h3>
              <p className="text-xl mb-4">You won:</p>
              <div className="text-2xl font-bold mb-6 bg-white/20 rounded-xl py-3 px-6">
                {result.name}
              </div>
              {result.value !== "NEXT_TIME" && (
                <div className="bg-black/30 rounded-xl p-4 mb-6">
                  <p className="text-sm opacity-80 mb-2">Your Code:</p>
                  <p className="text-2xl font-mono font-bold">{result.value}</p>
                </div>
              )}
              <button
                onClick={() => setResult(null)}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Awesome!
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Prizes List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Possible Prizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prizes.map((prize) => {
              const IconComponent = prize.icon;
              return (
                <motion.div
                  key={prize.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${prize.color} rounded-2xl p-6 text-white text-center backdrop-blur-sm border border-white/20`}
                >
                  <IconComponent className="text-3xl mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">{prize.name}</h3>
                  <p className="text-sm opacity-80">
                    {(prize.probability * 100).toFixed(1)}% chance
                  </p>
                  {prize.id === 6 && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                      <FaCrown className="text-yellow-400 text-xs" />
                      <span className="text-yellow-400 text-xs font-bold">JACKPOT</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">How it Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="text-left">
                <p>• One spin per week per user</p>
                <p>• Must be logged in to spin</p>
                <p>• Prizes are automatically applied</p>
              </div>
              <div className="text-left">
                <p>• Discount codes valid for 30 days</p>
                <p>• Free unit requires account verification</p>
                <p>• No purchase necessary</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default Jackpot;