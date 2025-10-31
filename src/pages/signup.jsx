// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { account, ID } from "../config/appwriteConfig";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaArrowRight, FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     username: "",
//     phone: "",
//     email: "",
//     password: ""
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const isStrongPassword = (pwd) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     return regex.test(pwd);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     setError("");
//   };

//   const validateStep1 = () => {
//     if (!formData.username.trim()) {
//       setError("Username is required");
//       return false;
//     }
//     if (!formData.email.trim()) {
//       setError("Email is required");
//       return false;
//     }
//     if (!formData.email.includes('@')) {
//       setError("Please enter a valid email address");
//       return false;
//     }
//     return true;
//   };

//   const validateStep2 = () => {
//     if (!formData.password) {
//       setError("Password is required");
//       return false;
//     }
//     if (!isStrongPassword(formData.password)) {
//       setError(
//         "Password must be 8+ characters with uppercase, lowercase, number & special character"
//       );
//       return false;
//     }
//     return true;
//   };

//   const nextStep = () => {
//     if (validateStep1()) {
//       setStep(2);
//       setError("");
//     }
//   };

//   const prevStep = () => {
//     setStep(1);
//     setError("");
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!validateStep2()) {
//       return;
//     }

//     setLoading(true);
//     try {
//       await account.create({
//         userId: ID.unique(),
//         email: formData.email,
//         password: formData.password,
//         name: formData.username,
//       });

//       setTimeout(() => {
//         navigate("/login");
//       }, 500);

//     } catch (err) {
//       console.error(err);
//       setError(err.message || "Signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !loading) {
//       if (step === 1) {
//         nextStep();
//       } else {
//         handleSignup(e);
//       }
//     }
//   };

//   // Progress steps
//   const steps = [
//     { number: 1, title: "Basic Info" },
//     { number: 2, title: "Security" }
//   ];

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#F361B0]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.3, 1, 1.3],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//       </div>

//       {/* Signup Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 w-full max-w-md"
//       >
//         {/* Card Container */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
//           {/* Card Header - With Join Us badge and tagline */}
//           <div className="p-6 border-b border-white/10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-center"
//             >
//               {/* Join Us Badge */}
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
//                 <FaStar className="text-[#F361B0] text-xs" />
//                 <span className="text-white/80 text-sm font-medium">Join Us</span>
//               </div>

//               {/* Gradient Heading */}
//               <h1 className="text-2xl font-bold mb-2">
//                 <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
//                   Create Account
//                 </span>
//               </h1>

//               {/* Tagline */}
//               <p className="text-gray-400 text-sm mb-4">
//                 Start your journey with Qutomi
//               </p>

//               {/* Progress Bar */}
//               <div className="flex items-center justify-center mb-2">
//                 {steps.map((stepItem, index) => (
//                   <div key={stepItem.number} className="flex items-center">
//                     {/* Step Circle - Solid Pink Color */}
//                     <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300 ${step >= stepItem.number
//                         ? 'bg-[#F361B0] border-[#F361B0] text-white shadow-lg'
//                         : 'border-gray-600 text-gray-400'
//                       }`}>
//                       {step > stepItem.number ? (
//                         <FaCheck className="w-3 h-3" />
//                       ) : (
//                         <span className="text-xs font-bold">{stepItem.number}</span>
//                       )}
//                     </div>

//                     {/* Connector Line - Solid Pink Color */}
//                     {index < steps.length - 1 && (
//                       <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step > stepItem.number ? 'bg-[#F361B0]' : 'bg-gray-600'
//                         }`} />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Step Title */}
//               <div className="text-sm text-[#F361B0] font-semibold">
//                 {steps[step - 1].title}
//               </div>
//             </motion.div>
//           </div>

//           {/* Card Body */}
//           <div className="p-6">
//             {/* Important Note - Only show on step 1 */}
//             {step === 1 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-4"
//               >
//                 <p className="text-yellow-400 text-xs text-center">
//                   💡 Your username cannot be changed once you sign up.
//                 </p>
//               </motion.div>
//             )}

//             {/* Error Message */}
//             <AnimatePresence>
//               {error && (
//                 <motion.div
//                   className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg mb-4"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                 >
//                   <p className="text-red-400 text-sm text-center">{error}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Step 1: Basic Information */}
//             <AnimatePresence mode="wait">
//               {step === 1 && (
//                 <motion.div
//                   key="step1"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="space-y-4"
//                 >
//                   {/* Username Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="username" className="text-sm font-medium text-gray-300">
//                       Username *
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaUser className="h-4 w-4 text-gray-400" />
//                       </div>
//                       <input
//                         id="username"
//                         name="username"
//                         type="text"
//                         required
//                         value={formData.username}
//                         onChange={(e) => handleInputChange("username", e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
//                         placeholder="Choose your username"
//                         disabled={loading}
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Field (Optional) */}
//                   <div className="space-y-2">
//                     <label htmlFor="phone" className="text-sm font-medium text-gray-300">
//                       Phone <span className="text-gray-500 text-xs">(optional)</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaPhoneAlt className="h-4 w-4 text-gray-400" />
//                       </div>
//                       <input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => handleInputChange("phone", e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
//                         placeholder="Your phone number"
//                         disabled={loading}
//                       />
//                     </div>
//                   </div>

//                   {/* Email Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium text-gray-300">
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaEnvelope className="h-4 w-4 text-gray-400" />
//                       </div>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) => handleInputChange("email", e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
//                         placeholder="Enter your email"
//                         disabled={loading}
//                       />
//                     </div>
//                   </div>

//                   {/* Next Button with Glow Effect */}
//                   <motion.button
//                     type="button"
//                     onClick={nextStep}
//                     onHoverStart={() => setIsHovered(true)}
//                     onHoverEnd={() => setIsHovered(false)}
//                     whileHover={{
//                       scale: 1.02,
//                       boxShadow: "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
//                     }}
//                     whileTap={{
//                       scale: 0.98,
//                       boxShadow: "0 5px 20px -5px rgba(243, 97, 176, 0.8)"
//                     }}
//                     className="w-full py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
//                   >
//                     {/* Glow Effect */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 rounded-xl"
//                       animate={{ opacity: isHovered ? 0.3 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

//                     <span className="relative z-10">Continue</span>
//                     <FaArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
//                   </motion.button>
//                 </motion.div>
//               )}

//               {/* Step 2: Security */}
//               {step === 2 && (
//                 <motion.div
//                   key="step2"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="space-y-4"
//                 >
//                   {/* Password Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="password" className="text-sm font-medium text-gray-300">
//                       Password *
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaLock className="h-4 w-4 text-gray-400" />
//                       </div>
//                       <input
//                         id="password"
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         required
//                         value={formData.password}
//                         onChange={(e) => handleInputChange("password", e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         className="block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
//                         placeholder="Create a strong password"
//                         disabled={loading}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
//                         disabled={loading}
//                       >
//                         {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
//                       </button>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Must include uppercase, lowercase, number & special character
//                     </p>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-3">
//                     {/* Back Button */}
//                     <motion.button
//                       type="button"
//                       onClick={prevStep}
//                       whileHover={{
//                         scale: 1.02,
//                         backgroundColor: "rgba(255, 255, 255, 0.1)"
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
//                     >
//                       <FaArrowLeft className="w-4 h-4" />
//                       <span>Back</span>
//                     </motion.button>

//                     {/* Signup Button with Glow Effect */}
//                     <motion.button
//                       type="button"
//                       onClick={handleSignup}
//                       disabled={loading}
//                       onHoverStart={() => !loading && setIsHovered(true)}
//                       onHoverEnd={() => setIsHovered(false)}
//                       whileHover={{
//                         scale: loading ? 1 : 1.02,
//                         boxShadow: loading ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
//                       }}
//                       whileTap={{
//                         scale: loading ? 1 : 0.98,
//                         boxShadow: loading ? "none" : "0 5px 20px -5px rgba(243, 97, 176, 0.8)"
//                       }}
//                       className="flex-1 py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
//                     >
//                       {/* Glow Effect */}
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 rounded-xl"
//                         animate={{ opacity: isHovered && !loading ? 0.3 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       />

//                       <span className="relative z-10 flex items-center gap-2">
//                         {loading ? (
//                           <>
//                             <motion.div
//                               className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
//                               animate={{ rotate: 360 }}
//                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                             />
//                             <span>Creating...</span>
//                           </>
//                         ) : (
//                           <>
//                             <FaCheck className="w-4 h-4" />
//                             <span>Sign Up</span>
//                           </>
//                         )}
//                       </span>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Login Link */}
//             <div className="mt-6 pt-6 border-t border-white/10">
//               <p className="text-center text-gray-400 text-sm">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
//                 >
//                   <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">Sign in here</span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer Note */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="text-center text-gray-500 text-xs mt-4"
//         >
//           Your cue to emotion — Smart. Expressive. Alive.
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;




// import { useState } from 'react';
// import { account, ID } from '../config/appwriteConfig';

// export default function Signup({ setIsLoggedIn }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleEmailSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try {
//       // Create account
//       await account.create(ID.unique(), email, password, name);
      
//       // Automatically create session after signup
//       await account.createEmailPasswordSession(email, password);
      
//       const user = await account.get();
//       localStorage.setItem("user", JSON.stringify(user));
//       setIsLoggedIn(true);
      
//       setMessage('✅ Account created & logged in! Redirecting...');
      
//       setTimeout(() => {
//         window.location.href = '/home';
//       }, 1000);
      
//     } catch (error) {
//       setMessage(`❌ Signup failed: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = () => {
//     setMessage('🔄 Redirecting to Google...');
//     account.createOAuth2Session(
//       'google',
//       'http://localhost:5173/home', // Success URL
//       'http://localhost:5173/signup' // Failure URL
//     );
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create your account
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

//         <form className="mt-8 space-y-6" onSubmit={handleEmailSignup}>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Your Name (optional)"
//             />
//           </div>

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
//               placeholder="Minimum 8 characters"
//               minLength="8"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//           >
//             {loading ? 'Creating account...' : 'Sign up with Email'}
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
//               onClick={handleGoogleSignup}
//               className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               Sign up with Google
//             </button>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign in
//             </a>
//           </p>
//         </div>

//         {/* Debug Info */}
//         <div className="mt-8 p-4 bg-gray-100 rounded-md">
//           <p className="text-xs text-gray-600">
//             <strong>Test Instructions:</strong><br/>
//             • Email signup automatically logs you in<br/>
//             • Google OAuth should redirect to /home<br/>
//             • Check browser console for any errors
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account, ID } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaArrowRight, FaArrowLeft, FaCheck, FaStar, FaGoogle } from "react-icons/fa";

const Signup = ({ setIsLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const isStrongPassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(pwd);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStep1 = () => {
    if (!formData.username.trim()) {
      setError("Username is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.email.includes('@')) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (!isStrongPassword(formData.password)) {
      setError(
        "Password must be 8+ characters with uppercase, lowercase, number & special character"
      );
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep1()) {
      setStep(2);
      setError("");
    }
  };

  const prevStep = () => {
    setStep(1);
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateStep2()) {
      return;
    }

    setLoading(true);
    try {
      await account.create({
        userId: ID.unique(),
        email: formData.email,
        password: formData.password,
        name: formData.username,
      });

      // Automatically create session after signup
      await account.createEmailPasswordSession(formData.email, formData.password);
      const user = await account.get();
      
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);

      setTimeout(() => {
        navigate("/home");
      }, 500);

    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      await account.createOAuth2Session(
        'google',
        'https://qtomi.com/home',
        'https://qtomi.com/signup'
        // 'localhost:5173/home',
        // 'localhost:5173/signup'
      );
    } catch (error) {
      setError("Google sign-up failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading && !googleLoading) {
      if (step === 1) {
        nextStep();
      } else {
        handleSignup(e);
      }
    }
  };

  // Progress steps
  const steps = [
    { number: 1, title: "Basic Info" },
    { number: 2, title: "Security" }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Card Header - With Join Us badge and tagline */}
          <div className="p-6 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              {/* Join Us Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <FaStar className="text-[#F361B0] text-xs" />
                <span className="text-white/80 text-sm font-medium">Join Us</span>
              </div>

              {/* Gradient Heading */}
              <h1 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
                  Create Account
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-gray-400 text-sm mb-4">
                Start your journey with Qutomi
              </p>

              {/* Progress Bar */}
              <div className="flex items-center justify-center mb-2">
                {steps.map((stepItem, index) => (
                  <div key={stepItem.number} className="flex items-center">
                    {/* Step Circle - Solid Pink Color */}
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300 ${step >= stepItem.number
                        ? 'bg-[#F361B0] border-[#F361B0] text-white shadow-lg'
                        : 'border-gray-600 text-gray-400'
                      }`}>
                      {step > stepItem.number ? (
                        <FaCheck className="w-3 h-3" />
                      ) : (
                        <span className="text-xs font-bold">{stepItem.number}</span>
                      )}
                    </div>

                    {/* Connector Line - Solid Pink Color */}
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${step > stepItem.number ? 'bg-[#F361B0]' : 'bg-gray-600'
                        }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Title */}
              <div className="text-sm text-[#F361B0] font-semibold">
                {steps[step - 1].title}
              </div>
            </motion.div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            {/* Google OAuth Button - Only show on step 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <motion.button
                  type="button"
                  onClick={handleGoogleSignup}
                  disabled={googleLoading || loading}
                  whileHover={{
                    scale: (googleLoading || loading) ? 1 : 1.02,
                    boxShadow: (googleLoading || loading) ? "none" : "0 10px 30px -10px rgba(66, 133, 244, 0.3)"
                  }}
                  whileTap={{ scale: (googleLoading || loading) ? 1 : 0.98 }}
                  className="w-full py-3 px-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
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
                        <span>Sign up with Google</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>
            )}

            {/* Divider - Only show on step 1 */}
            {step === 1 && (
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white/5 text-gray-400 rounded-full">or continue with email</span>
                </div>
              </div>
            )}

            {/* Important Note - Only show on step 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-4"
              >
                <p className="text-yellow-400 text-xs text-center">
                  💡 Your username cannot be changed once you sign up.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg mb-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 1: Basic Information */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Username Field */}
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-gray-300">
                      Username *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Choose your username"
                        disabled={loading || googleLoading}
                      />
                    </div>
                  </div>

                  {/* Phone Field (Optional) */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Phone <span className="text-gray-500 text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhoneAlt className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Your phone number"
                        disabled={loading || googleLoading}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Enter your email"
                        disabled={loading || googleLoading}
                      />
                    </div>
                  </div>

                  {/* Next Button with Glow Effect */}
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    disabled={googleLoading}
                    onHoverStart={() => !googleLoading && setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{
                      scale: googleLoading ? 1 : 1.02,
                      boxShadow: googleLoading ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
                    }}
                    whileTap={{
                      scale: googleLoading ? 1 : 0.98,
                      boxShadow: googleLoading ? "none" : "0 5px 20px -5px rgba(243, 97, 176, 0.8)"
                    }}
                    className="w-full py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 rounded-xl"
                      animate={{ opacity: isHovered && !googleLoading ? 0.3 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    <span className="relative z-10">Continue</span>
                    <FaArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Security */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="block w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Create a strong password"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                        disabled={loading}
                      >
                        {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Must include uppercase, lowercase, number & special character
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* Back Button */}
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </motion.button>

                    {/* Signup Button with Glow Effect */}
                    <motion.button
                      type="button"
                      onClick={handleSignup}
                      disabled={loading}
                      onHoverStart={() => !loading && setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      whileHover={{
                        scale: loading ? 1 : 1.02,
                        boxShadow: loading ? "none" : "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
                      }}
                      whileTap={{
                        scale: loading ? 1 : 0.98,
                        boxShadow: loading ? "none" : "0 5px 20px -5px rgba(243, 97, 176, 0.8)"
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 rounded-xl"
                        animate={{ opacity: isHovered && !loading ? 0.3 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Creating...</span>
                          </>
                        ) : (
                          <>
                            <FaCheck className="w-4 h-4" />
                            <span>Sign Up</span>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Link */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
                >
                  <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">Sign in here</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-xs mt-4"
        >
          Your cue to emotion — Smart. Expressive. Alive.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;