// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { account, ID } from "../config/appwriteConfig"; // path to your Appwrite lib
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
//     // Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
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

//       navigate("/login"); // redirect after signup
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
//       }}
//     >
//       <motion.div
//         className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center backdrop-blur-md bg-white/70"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h2
//           className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3"
//           style={{ color: "var(--color-primary-color)" }}
//         >
//           Join the Qutomi World
//         </h2>
//         <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
//           Create your account
//         </p>
//         <p className="text-xs mb-4 sm:mb-6 sm:text-sm text-gray-500 italic">
//           Note: Your username cannot be changed once you sign up. Choose carefully!
//         </p>
//         <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
//             onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
//             onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
//             style={{
//               backgroundColor: "var(--color-input-bg)",
//               borderColor: "var(--color-input-border)",
//               color: "var(--color-text-color)",
//             }}
//           />

//           <input
//             type="tel"
//             placeholder="Phone (optional)"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
//             onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
//             onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
//             style={{
//               backgroundColor: "var(--color-input-bg)",
//               borderColor: "var(--color-input-border)",
//               color: "var(--color-text-color)",
//             }}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
//             onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
//             onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
//             style={{
//               backgroundColor: "var(--color-input-bg)",
//               borderColor: "var(--color-input-border)",
//               color: "var(--color-text-color)",
//             }}
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
//               onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
//               onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
//               style={{
//                 backgroundColor: "var(--color-input-bg)",
//                 borderColor: "var(--color-input-border)",
//                 color: "var(--color-text-color)",
//               }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//             >
//               {showPassword ? <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
//             </button>
//           </div>

//           {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}

//           <button
//             type="button"
//             onClick={handleSignup}
//             disabled={loading}
//             className={`py-3 rounded-xl font-semibold transition-colors duration-200 text-sm sm:text-base ${loading ? "bg-gray-400 cursor-not-allowed" : ""
//               }`}
//             style={{ backgroundColor: "var(--color-primary-color)", color: "white" }}
//             onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--color-btn-hover)")}
//             onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--color-primary-color)")}
//           >
//             {loading ? "Creating Account..." : "Sign Up Now"}
//           </button>
//         </form>

//         <p className="mt-4 text-xs sm:text-sm text-gray-700">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             style={{ color: "var(--color-secondary-color)" }}
//             className="font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;


// Signup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account, ID } from "../config/appwriteConfig";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const isStrongPassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSignup = async () => {
    setError("");
    if (!isStrongPassword(password)) {
      setError(
        "Password must be 8+ chars and include uppercase, lowercase, number & special char"
      );
      return;
    }

    setLoading(true);
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name: username,
      });

      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080808] px-4">
      <motion.div
        className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center bg-[#111]/90 border border-[#F361B0]/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3 text-[#F361B0]">
          Join the Qutomi World
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base">
          Create your account
        </p>
        <p className="text-xs mb-4 sm:mb-6 sm:text-sm text-gray-400 italic">
          Note: Your username cannot be changed once you sign up. Choose carefully!
        </p>

        <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
          />

          <input
            type="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#F361B0]/40 bg-[#080808] text-white placeholder-gray-400 focus:border-[#F361B0] focus:outline-none transition-all duration-200 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F361B0] hover:text-[#E60076]"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {error && <p className="text-xs sm:text-sm text-red-400">{error}</p>}

          <button
            type="button"
            onClick={handleSignup}
            disabled={loading}
            className={`py-3 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            style={{ backgroundColor: '#F361B0' }}
            onMouseOver={(e) =>
              !loading && (e.currentTarget.style.backgroundColor = '#E60076')
            }
            onMouseOut={(e) =>
              !loading && (e.currentTarget.style.backgroundColor = '#F361B0')
            }
          >
            {loading ? 'Creating Account...' : 'Sign Up Now'}
          </button>
        </form>

        <p className="mt-4 text-xs sm:text-sm">
          <span className=" text-gray-300">Already have an account?{" "}</span>
          <Link
            to="/login"
            className="font-semibold "
          >
            <span className="text-[#F361B0] hover:text-[#E60076] hover:underline transition-colors duration-200">Login</span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
