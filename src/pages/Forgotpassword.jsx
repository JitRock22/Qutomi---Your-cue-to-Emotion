import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaArrowLeft, FaCheck, FaRocket, FaExclamationTriangle, FaHome } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await account.get();
        // If user is logged in, redirect to home
        navigate("/home");
      } catch (error) {
        // User is not logged in, proceed with forgot password
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await account.createRecovery(
        email,
        "https://qtomi.com/reset-password"
      );
      setSuccess(true);
      
    } catch (err) {
      console.error("Password reset error:", err);
      
      if (err.message?.includes('user') || err.message?.includes('not found')) {
        setError("❌ No account found with this email address.");
      } else if (err.message?.includes('rate limit')) {
        setError("⏰ Too many attempts. Please wait a few minutes.");
      } else {
        setError("❌ Failed to send reset email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setSuccess(false);
    setError("");
    setEmail("");
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#E60076] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70 text-sm">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#F361B0]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#00FFFF]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Forgot Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {/* Card Header */}
          <div className="p-6 border-b border-white/10">
            <div className="text-center">
              {/* Back Button */}
              <div className="flex justify-between items-center mb-3">
                <motion.button
                  onClick={() => navigate("/login")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  <FaArrowLeft className="w-3 h-3" />
                  Back to Login
                </motion.button>
                
                {/* Home Button */}
                <motion.button
                  onClick={() => navigate("/")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  <FaHome className="w-3 h-3" />
                  Home
                </motion.button>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-2xl">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
                  Reset Password
                </span>
              </h1>
              
              <p className="text-gray-400 text-sm">
                Enter your email to receive reset instructions
              </p>
            </div>
          </div>

          {/* Rest of your ForgotPassword component remains the same */}
          <div className="p-6">
            {!success ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your registered email"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <FaExclamationTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending Reset Link...</span>
                      </>
                    ) : (
                      <>
                        <FaEnvelope className="w-5 h-5" />
                        <span>Send Reset Instructions</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            ) : (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
              >
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center justify-center gap-3 text-green-400 mb-2">
                    <FaCheck className="w-6 h-6" />
                    <span className="text-lg font-semibold">Email Sent Successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    We've sent password reset instructions to:
                  </p>
                  <p className="text-white font-medium mt-1">{email}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleRetry}
                    className="flex-1 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm hover:bg-white/10 transition-colors duration-200"
                  >
                    Try Another Email
                  </button>
                  <Link
                    to="/login"
                    className="flex-1 py-2 bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] text-black font-semibold rounded-lg text-sm text-center hover:opacity-90 transition-opacity duration-200"
                  >
                    Back to Login
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Additional Help */}
            {!success && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-center text-gray-400 text-sm">
                  Remember your password?{" "}
                  <Link
                    to="/login"
                    className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
                  >
                    <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">
                      Sign in here
                    </span>
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;