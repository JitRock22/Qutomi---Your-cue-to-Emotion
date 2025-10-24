import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";
import { FaCheckCircle, FaHeart, FaArrowLeft, FaRedo } from "react-icons/fa";

const SuccessPage = () => {
    const location = useLocation();

    // If user opens /success directly, redirect them
    if (!location.state?.submitted) {
        return <Navigate to="/" />;
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center p-4">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-md mx-auto relative z-10"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        duration: 0.8
                    }}
                    className="w-24 h-24 bg-gradient-to-r from-[#00FF88] to-[#00CCFF] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                >
                    <FaCheckCircle className="text-white text-4xl drop-shadow-lg" />
                </motion.div>

                {/* Success Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold text-white mb-4"
                >
                    Thank You! 🎉
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-lg mb-2"
                >
                    Your feedback has been received successfully.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 mb-8 leading-relaxed"
                >
                    We truly appreciate you helping us build Qutomi together!
                    <span className="block text-[#F361B0] font-semibold mt-1">
                        Your voice makes a difference! 💖
                    </span>
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch w-full"
                >
                    {/* Back to Home Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 min-w-0">
                        <Link
                            to="/home"
                            className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm w-full text-sm font-medium"
                        >
                            <FaArrowLeft className="text-xs text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
                            <span className="text-white">Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Submit Another Response Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 min-w-0">
                        <Link
                            to="/suggestions"
                            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 overflow-hidden w-full text-sm border border-transparent"
                        >
                            {/* Button Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] rounded-xl"></div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xs"></div>

                            {/* Button Content */}
                            <div className="relative z-10 flex items-center gap-2">
                                <FaRedo className="text-xs text-white transition-transform duration-300 group-hover:rotate-180" />
                                <span className="text-white">Another Response</span>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                    <p className="text-gray-400 text-sm">
                        <span className="text-[#00FFFF] font-semibold">What's next?</span>
                        <br />
                        We'll review your feedback and incorporate it into Qutomi's development.
                        Stay tuned for updates!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SuccessPage;