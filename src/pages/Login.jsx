// // Login.jsx
// import { useState, useEffect } from "react";
// import { useNavigate, Link, useSearchParams } from "react-router-dom";
// import { account } from "../config/appwriteConfig";
// import { motion } from "framer-motion";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// // Skeleton for loading
// const LoginSkeleton = () => (
//   <div className="flex items-center justify-center min-h-screen bg-[#080808] px-4">
//     <div className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center bg-[#111]/70 animate-pulse">
//       <div className="h-8 bg-[#222] rounded-xl mb-4"></div>
//       <div className="h-6 bg-[#222] rounded-xl mb-4"></div>
//       <div className="h-12 bg-[#222] rounded-xl mb-3"></div>
//       <div className="h-12 bg-[#222] rounded-xl mb-3"></div>
//       <div className="h-12 bg-[#222] rounded-xl mb-3"></div>
//       <div className="h-12 bg-[#222] rounded-xl"></div>
//     </div>
//   </div>
// );

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [verified, setVerified] = useState(false);

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const userId = searchParams.get("userId");
//   const secret = searchParams.get("secret");

//   // Handle Appwrite email verification
//   useEffect(() => {
//     const verifyEmail = async () => {
//       if (userId && secret) {
//         try {
//           await account.updateVerification({ userId, secret });
//           setVerified(true);
//           setVerificationMessage("Your email has been successfully verified! Please login.");
//         } catch (err) {
//           console.error(err);
//           setVerified(false);
//           setVerificationMessage("Verification failed or link expired. Please try again.");
//         }
//       }
//     };
//     verifyEmail();
//   }, [userId, secret]);

//   // Handle login
//   const handleLogin = async () => {
//     setError("");
//     setLoading(true);

//     try {
//       await account.createEmailPasswordSession({ email, password });
//       const user = await account.get();

//       localStorage.setItem("user", JSON.stringify(user));
//       setIsLoggedIn(true);
//       navigate("/home");
//     } catch (err) {
//       console.error(err);
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <LoginSkeleton />;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#080808] px-4">
//       <motion.div
//         className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center bg-[#111]/90 border border-[#F361B0]/30"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3 text-[#F361B0]">
//           Let’s Go
//         </h2>
//         <p className="mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base">
//           Sign in to your Qutomi account
//         </p>

//         {/* Verification message */}
//         {verificationMessage && (
//           <p
//             className={`text-sm mb-2 ${
//               verified ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {verificationMessage}
//           </p>
//         )}

//         <form
//           className="flex flex-col gap-3 sm:gap-4"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           {/* Email input */}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
//           />

//           {/* Password input with toggle */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F361B0] hover:text-[#E60076]"
//             >
//               {showPassword ? (
//                 <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//               ) : (
//                 <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//               )}
//             </button>
//           </div>

//           {/* Error message */}
//           {error && <p className="text-xs sm:text-sm text-red-400">{error}</p>}

//           {/* Login button */}
//           <button
//             type="button"
//             onClick={handleLogin}
//             className="py-3 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-200"
//             style={{ backgroundColor: "#F361B0" }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#E60076")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F361B0")}
//           >
//             Enter the Qutomis World
//           </button>
//         </form>

//         <p className="mt-2 text-xs sm:text-sm text-gray-300">
//           <Link
//             to="/reset-password"
//             className="font-semibold "
//             // className="text-gray-300 hover:text-[#E60076] transition-colors duration-200"
//           >
//             <span className="text-gray-300 hover:text-text-color hover:underline">Forgot Password?</span>
//           </Link>
//         </p>

//          <p className="mt-4 text-xs sm:text-sm">
//           <span className=" text-gray-300">Doesn't have an account?{" "}</span>
//           <Link
//             to="/signup"
//             className="font-semibold "
//           >
//             <span className="text-[#F361B0] hover:text-[#E60076] hover:underline transition-colors duration-200">Sign up</span>
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;

import { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowRight,FaRocket } from "react-icons/fa";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  // Handle email verification
  useEffect(() => {
    const verifyEmail = async () => {
      if (userId && secret) {
        try {
          setLoading(true);
          await account.updateVerification({ userId, secret });
          setVerified(true);
          setVerificationMessage("🎉 Email verified successfully! You can now login.");
        } catch (err) {
          setVerified(false);
          setVerificationMessage("❌ Verification failed. Please try signing up again.");
        } finally {
          setLoading(false);
        }
      }
    };
    verifyEmail();
  }, [userId, secret]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await account.createEmailPasswordSession({ 
        email: formData.email, 
        password: formData.password 
      });
      const user = await account.get();

      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      
      setTimeout(() => {
        navigate("/home");
      }, 500);
      
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleLogin(e);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
      {/* Fixed scroll issue by using min-h-screen and p-4 */}
      
      {/* Background Elements - Subtle version of landing page theme */}
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
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Card Header */}
          <div className="p-8 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <FaRocket className="text-[#F361B0] text-xs" />
                <span className="text-white/80 text-sm font-medium">Welcome Back</span>
              </div>
              
              {/* Gradient Heading like Landing Page */}
              <h1 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
                  Sign In to Qutomi
                </span>
              </h1>
              
              <p className="text-gray-400 text-sm">
                Enter your credentials to continue your journey
              </p>
            </motion.div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {/* Verification Message */}
            <AnimatePresence>
              {verificationMessage && (
                <motion.div
                  className={`p-3 rounded-lg mb-6 ${
                    verified 
                      ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${verified ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    {verificationMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
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
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Link
                    to="/reset-password"
                    className="text-sm text-[#00FFFF] hover:text-[#00CCCC] transition-colors duration-200"
                  >
                    <span className="text-gray-500 hover:text-text-color transition-colors">Forgot password?</span>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    disabled={loading}
                  >
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
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
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enhanced Login Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ 
                  scale: loading ? 1 : 1.02,
                  boxShadow: loading ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
                }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full py-4 px-4 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <span className="text-lg">Continue to Qutomi</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>

            {/* Divider */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
                >
                  <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">Create your account</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;