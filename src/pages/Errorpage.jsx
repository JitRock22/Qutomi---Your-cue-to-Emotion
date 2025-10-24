import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaRedo } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center p-4 sm:p-6">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#FF6B6B]/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-[#FFA726]/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center w-full max-w-md mx-auto relative z-10 px-4"
            >
                {/* Error Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        delay: 0.2, 
                        type: "spring", 
                        stiffness: 200,
                        duration: 0.8
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#FF6B6B] to-[#FFA726] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl"
                >
                    <FaExclamationTriangle className="text-white text-2xl sm:text-3xl drop-shadow-lg" />
                </motion.div>

                {/* Error Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
                >
                    Oops!
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-sm sm:text-base mb-2 px-2"
                >
                    Something went wrong while submitting your feedback.
                </motion.p>
                
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed px-2"
                >
                    Don't worry, your data is safe!
                    <span className="block text-[#FF6B6B] font-medium mt-1">
                        Please try again in a moment.
                    </span>
                </motion.p>

                {/* Action Buttons - Responsive Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch w-full"
                >
                    {/* Back to Home Button - Outline Style */}
                    <motion.div 
                        whileHover={{ scale: 1.02, y: -1 }} 
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 min-w-0"
                    >
                        <Link
                            to="/home"
                            className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm w-full text-sm font-medium h-full"
                        >
                            <FaArrowLeft className="text-xs text-white flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
                            <span className="truncate text-white">Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Try Again Button - Gradient Style */}
                    <motion.div 
                        whileHover={{ scale: 1.02, y: -1 }} 
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 min-w-0"
                    >
                        <button
                            onClick={() => window.history.back()}
                            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-xl text-white font-medium transition-all duration-300 overflow-hidden w-full text-sm border border-transparent h-full"
                        >
                            {/* Button Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFA726] rounded-xl"></div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xs"></div>
                            
                            {/* Button Content */}
                            <div className="relative z-10 flex items-center gap-2">
                                <FaRedo className="text-xs flex-shrink-0 transition-transform duration-300 group-hover:rotate-180" />
                                <span className="truncate">Try Again</span>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 sm:mt-6 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm mx-2 sm:mx-0"
                >
                    <p className="text-gray-400 text-xs sm:text-xs leading-relaxed">
                        <span className="text-[#FFA726] font-medium">Troubleshooting tip:</span>
                        {' '}
                        Check your internet connection and try again. If the problem persists, please contact support.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ErrorPage;