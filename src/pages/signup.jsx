// // Signup.jsx
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { account, ID } from "../config/appwriteConfig";
// import { motion } from "framer-motion";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const isStrongPassword = (pwd) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     return regex.test(pwd);
//   };

//   const handleSignup = async () => {
//     setError("");
//     if (!isStrongPassword(password)) {
//       setError(
//         "Password must be 8+ chars and include uppercase, lowercase, number & special char"
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       await account.create({
//         userId: ID.unique(),
//         email,
//         password,
//         name: username,
//       });

//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#080808] px-4">
//       <motion.div
//         className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center bg-[#111]/90 border border-[#F361B0]/30"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3 text-[#F361B0]">
//           Join the Qutomi World
//         </h2>
//         <p className="mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base">
//           Create your account
//         </p>
//         <p className="text-xs mb-4 sm:mb-6 sm:text-sm text-gray-400 italic">
//           Note: Your username cannot be changed once you sign up. Choose carefully!
//         </p>

//         <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
//           />

//           <input
//             type="tel"
//             placeholder="Phone (optional)"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
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

//           {error && <p className="text-xs sm:text-sm text-red-400">{error}</p>}

//           <button
//             type="button"
//             onClick={handleSignup}
//             disabled={loading}
//             className={`py-3 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             style={{ backgroundColor: '#F361B0' }}
//             onMouseOver={(e) =>
//               !loading && (e.currentTarget.style.backgroundColor = '#E60076')
//             }
//             onMouseOut={(e) =>
//               !loading && (e.currentTarget.style.backgroundColor = '#F361B0')
//             }
//           >
//             {loading ? 'Creating Account...' : 'Sign Up Now'}
//           </button>
//         </form>

//         <p className="mt-4 text-xs sm:text-sm">
//           <span className=" text-gray-300">Already have an account?{" "}</span>
//           <Link
//             to="/login"
//             className="font-semibold "
//           >
//             <span className="text-[#F361B0] hover:text-[#E60076] hover:underline transition-colors duration-200">Login</span>
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account, ID } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaArrowRight, FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";

const Signup = () => {
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

      setTimeout(() => {
        navigate("/login");
      }, 500);

    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
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
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Next Button with Glow Effect */}
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -10px rgba(243, 97, 176, 0.5)"
                    }}
                    whileTap={{
                      scale: 0.98,
                      boxShadow: "0 5px 20px -5px rgba(243, 97, 176, 0.8)"
                    }}
                    className="w-full py-3 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 rounded-xl"
                      animate={{ opacity: isHovered ? 0.3 : 0 }}
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