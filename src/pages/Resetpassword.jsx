// // ResetPassword.jsx
// import { useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { account } from "../config/appwriteConfig";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// const ResetPassword = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const userId = searchParams.get("userId");
//   const secret = searchParams.get("secret");

//   const handleReset = async () => {
//     setError("");
//     setSuccess("");

//     if (!password || password.length < 8) {
//       setError("Password must be at least 8 characters.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await account.updateRecovery({ userId, secret, password });
//       setSuccess("Password reset successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 3000);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to reset password. Link may be expired or invalid.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="p-8 rounded-3xl shadow-xl w-full max-w-md text-center bg-white">
//         <h2 className="text-3xl font-extrabold mb-4 text-purple-600">
//           Reset Your Password
//         </h2>
//         <p className="mb-6 text-gray-700 text-sm">
//           Enter a new password to secure your account
//         </p>

//         <div className="flex flex-col gap-4">
//           {/* New Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 outline-none w-full"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//             >
//               {showPassword ? (
//                 <EyeSlashIcon className="w-5 h-5" />
//               ) : (
//                 <EyeIcon className="w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 outline-none w-full"
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//             >
//               {showConfirmPassword ? (
//                 <EyeSlashIcon className="w-5 h-5" />
//               ) : (
//                 <EyeIcon className="w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {error && <p className="text-sm text-red-500">{error}</p>}
//           {success && <p className="text-sm text-green-500">{success}</p>}

//           <button
//             onClick={handleReset}
//             className={`py-3 rounded-xl font-semibold text-white transition-colors ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-purple-600 hover:bg-purple-700"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Resetting..." : "Reset Password"}
//           </button>
//         </div>

//         <p className="mt-4 text-xs text-gray-700">
//           Remembered your password?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             className="font-semibold text-purple-600 hover:underline"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;




import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaLock, FaArrowLeft, FaCheck } from "react-icons/fa";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await account.updateRecovery({ userId, secret, password });
      setSuccess("🎉 Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setError("Failed to reset password. Link may be expired or invalid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] p-4">
      {/* {background} */}
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

      {/* Reset Password Card - Compact design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Card Container - Smaller padding */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {/* Card Header - Compact */}
          <div className="p-6 border-b border-white/10">
            <div className="text-center">
              {/* Back Button - Smaller */}
              <div className="flex justify-start mb-3">
                <motion.button
                  onClick={() => navigate("/login")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  <FaArrowLeft className="w-3 h-3" />
                  Back
                </motion.button>
              </div>

              {/* Icon - Smaller */}
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-xl">
                  <FaLock className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Heading - Smaller */}
              <h1 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
                  Reset Password
                </span>
              </h1>
              
              <p className="text-gray-400 text-xs">
                Create a new secure password
              </p>
            </div>
          </div>

          {/* Card Body - Compact */}
          <div className="p-6">
            <form onSubmit={handleReset} className="space-y-4">
              {/* New Password Field */}
              <div className="space-y-1">
                <label htmlFor="password" className="text-xs font-medium text-gray-300">
                  New Password
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-9 pr-8 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
                    placeholder="New password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    disabled={loading}
                  >
                    {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500">Min. 8 characters</p>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1">
                <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-9 pr-8 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200"
                    placeholder="Confirm password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    disabled={loading}
                  >
                    {showConfirmPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Messages - Compact */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <p className="text-red-400 text-xs text-center">{error}</p>
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <p className="text-green-400 text-xs text-center">{success}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reset Button - Compact */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ 
                  scale: loading ? 1 : 1.02,
                }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full py-3 text-sm bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {/* Button Content */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative z-10 flex items-center gap-1">
                  {loading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Resetting...
                    </>
                  ) : (
                    <>
                      <FaCheck className="w-3 h-3" />
                      <span>Reset Password</span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>

            {/* Additional Info - Compact */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm">
                Remember Password?{" "}
                <Link
                  to="/login"
                  className="font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00CCCC] bg-clip-text text-transparent transition-all duration-200"
                >
                  <span className="text-[#62ececd7] hover:text-[#00CCCC] transition-colors duration-200">Back to Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note - Removed to save space */}
      </motion.div>
    </div>
  );
};

export default ResetPassword;