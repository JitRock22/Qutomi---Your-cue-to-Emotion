// import { useState, useEffect } from "react";
// import { useNavigate, Link, useSearchParams } from "react-router-dom";
// import { account } from "../config/appwriteConfig";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowRight, FaRocket } from "react-icons/fa";

// const Login = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [verified, setVerified] = useState(false);

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const userId = searchParams.get("userId");
//   const secret = searchParams.get("secret");

//   // Handle email verification
//   useEffect(() => {
//     const verifyEmail = async () => {
//       if (userId && secret) {
//         try {
//           setLoading(true);
//           await account.updateVerification({ userId, secret });
//           setVerified(true);
//           setVerificationMessage("🎉 Email verified successfully! You can now login.");
//         } catch (err) {
//           setVerified(false);
//           setVerificationMessage("❌ Verification failed. Please try signing up again.");
//         } finally {
//           setLoading(false);
//         }
//       }
//     };
//     verifyEmail();
//   }, [userId, secret]);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     setError("");
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     if (!formData.email.includes('@')) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       await account.createEmailPasswordSession({
//         email: formData.email,
//         password: formData.password
//       });
//       const user = await account.get();

//       localStorage.setItem("user", JSON.stringify(user));
//       setIsLoggedIn(true);

//       setTimeout(() => {
//         navigate("/home");
//       }, 500);

//     } catch (err) {
//       setError("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !loading) {
//       handleLogin(e);
//     }
//   };
//   async function handleGoogleAuth() {
//     account.createOAuth2Session(
//       'google',
//       'https://qtomi.com/home',
//       'https://qtomi.com/signup' // Different failure redirect for signup
//     );
//   }
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
//       {/* Fixed scroll issue by using min-h-screen and p-4 */}

//       {/* Background Elements - Subtle version of landing page theme */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-64 h-64 bg-[#F361B0]/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.4, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-72 h-72 bg-[#00FFFF]/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.1, 1, 1.1],
//             opacity: [0.2, 0.3, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//         {/* Subtle Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
//       </div>

//       {/* Login Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 w-full max-w-md"
//       >
//         {/* Card Container */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
//           {/* Card Header */}
//           <div className="p-8 border-b border-white/10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-center"
//             >
//               {/* Welcome Badge */}
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
//                 <FaRocket className="text-[#F361B0] text-xs" />
//                 <span className="text-white/80 text-sm font-medium">Welcome Back</span>
//               </div>

//               {/* Gradient Heading like Landing Page */}
//               <h1 className="text-3xl font-bold mb-3">
//                 <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
//                   Sign In to Qutomi
//                 </span>
//               </h1>

//               <p className="text-gray-400 text-sm">
//                 Enter your credentials to continue your journey
//               </p>
//             </motion.div>
//           </div>

//           {/* Card Body */}
//           <div className="p-8">
//             {/* Verification Message */}
//             <AnimatePresence>
//               {verificationMessage && (
//                 <motion.div
//                   className={`p-3 rounded-lg mb-6 ${verified
//                       ? "bg-green-500/10 border border-green-500/20 text-green-400"
//                       : "bg-red-500/10 border border-red-500/20 text-red-400"
//                     }`}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                 >
//                   <div className="flex items-center gap-2 text-sm">
//                     <div className={`w-1.5 h-1.5 rounded-full ${verified ? 'bg-green-400' : 'bg-red-400'}`}></div>
//                     {verificationMessage}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Login Form */}
//             <form onSubmit={handleLogin} className="space-y-6">
//               {/* Email Field */}
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium text-gray-300">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your email"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="text-sm font-medium text-gray-300">
//                     Password
//                   </label>
//                   <Link
//                     to="/reset-password"
//                     className="text-sm text-[#00FFFF] hover:text-[#00CCCC] transition-colors duration-200"
//                   >
//                     <span className="text-gray-500 hover:text-text-color transition-colors">Forgot password?</span>
//                   </Link>
//                 </div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.password}
//                     onChange={(e) => handleInputChange("password", e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     className="block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your password"
//                     disabled={loading}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
//                     disabled={loading}
//                   >
//                     {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Error Message */}
//               <AnimatePresence>
//                 {error && (
//                   <motion.div
//                     className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                   >
//                     <p className="text-red-400 text-sm text-center">{error}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Enhanced Login Button */}
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{
//                   scale: loading ? 1 : 1.02,
//                   boxShadow: loading ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
//                 }}
//                 whileTap={{ scale: loading ? 1 : 0.98 }}
//                 className="w-full py-4 px-4 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
//               >
//                 {/* Button Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

//                 {/* Button Content */}
//                 <span className="relative z-10 flex items-center gap-2">
//                   {loading ? (
//                     <>
//                       <motion.div
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                       />
//                       Signing in...
//                     </>
//                   ) : (
//                     <>
//                       <span className="text-lg">Continue to Qutomi</span>
//                       <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                     </>
//                   )}
//                 </span>
//               </motion.button>
//             </form>

//             {/* Divider */}
//             <div className="mt-6 pt-6 border-t border-white/10">
//               <p className="text-center text-gray-400 text-sm">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
//                 >
//                   <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">Create your account</span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;








// import { useState } from 'react';
// import { account } from '../config/appwriteConfig';

// export default function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try {
//       await account.createEmailPasswordSession(email, password);
//       const user = await account.get();
//       localStorage.setItem("user", JSON.stringify(user));
//       setIsLoggedIn(true);
//       setMessage('✅ Login successful! Redirecting...');
      
//       setTimeout(() => {
//         window.location.href = '/home';
//       }, 1000);
//     } catch (error) {
//       setMessage(`❌ Login failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = () => {
//     setMessage('🔄 Redirecting to Google...');
//     account.createOAuth2Session(
//       'google',
//       'http://localhost:5173/home', // Success URL
//       'http://localhost:5173/login' // Failure URL
//     );
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Test Authentication
//           </p>
//         </div>

//         {message && (
//           <div className={`p-4 rounded-md ${
//             message.includes('✅') ? 'bg-green-100 text-green-700 border border-green-300' : 
//             message.includes('❌') ? 'bg-red-100 text-red-700 border border-red-300' :
//             'bg-blue-100 text-blue-700 border border-blue-300'
//           }`}>
//             {message}
//           </div>
//         )}

//         <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="test@example.com"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//           >
//             {loading ? 'Signing in...' : 'Sign in with Email'}
//           </button>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               Sign in with Google
//             </button>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign up
//             </a>
//           </p>
//         </div>

//         {/* Debug Info */}
//         <div className="mt-8 p-4 bg-gray-100 rounded-md">
//           <p className="text-xs text-gray-600">
//             <strong>Test Credentials:</strong><br/>
//             • Use any valid email/password<br/>
//             • Google OAuth should redirect to /home<br/>
//             • Check console for errors
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowRight, FaRocket, FaGoogle } from "react-icons/fa";

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
  const [googleLoading, setGoogleLoading] = useState(false);

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

  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    try {
      await account.createOAuth2Session(
        'google',
        'https://qtomi.com/home',
        // 'localhost:5173/home',
        'https://qtomi.com/login'
        // 'localhost:5173/login'
      );
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
      setGoogleLoading(false);
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
                  className={`p-3 rounded-lg mb-6 ${verified
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

            {/* Google OAuth Button */}
            <motion.button
              type="button"
              onClick={handleGoogleAuth}
              disabled={googleLoading || loading}
              whileHover={{
                scale: googleLoading ? 1 : 1.02,
                boxShadow: googleLoading ? "none" : "0 10px 30px -10px rgba(66, 133, 244, 0.3)"
              }}
              whileTap={{ scale: googleLoading ? 1 : 0.98 }}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mb-6"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] to-[#34A853] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                {googleLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Connecting to Google...
                  </>
                ) : (
                  <>
                    <FaGoogle className="w-5 h-5 text-[#4285F4] group-hover:text-white transition-colors duration-200" />
                    <span>Continue with Google</span>
                  </>
                )}
              </span>
            </motion.button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white/5 text-gray-400 rounded-full">or continue with email</span>
              </div>
            </div>

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
                    disabled={loading || googleLoading}
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
                    disabled={loading || googleLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    disabled={loading || googleLoading}
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
                disabled={loading || googleLoading}
                whileHover={{
                  scale: (loading || googleLoading) ? 1 : 1.02,
                  boxShadow: (loading || googleLoading) ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
                }}
                whileTap={{ scale: (loading || googleLoading) ? 1 : 0.98 }}
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

            {/* Sign Up Link */}
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