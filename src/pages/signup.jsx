// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();

//     // Validate password
//     const strongPassword =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     if (!strongPassword.test(password)) {
//       setPasswordError(
//         "Password must be 8+ characters, include uppercase, lowercase, number & special char"
//       );
//       return;
//     }
//     setPasswordError("");

//     console.log({ username, phone, email, password });
//     navigate("/login"); // redirect after signup
//   };

//   const handleFocus = (e) => {
//     e.target.style.borderColor = "var(--color-primary-color)";
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = "var(--color-input-border)";
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen"
//       style={{ backgroundColor: "var(--color-bg-color)" }}
//     >
//       <div
//         className="p-8 rounded-2xl shadow-lg w-96 text-center"
//         style={{ backgroundColor: "var(--color-input-bg)" }}
//       >
//         <h2
//           className="text-3xl font-bold mb-2"
//           style={{ color: "var(--color-primary-color)" }}
//         >
//           Create Account 💖
//         </h2>
//         <p className="mb-6" style={{ color: "var(--color-text-color)" }}>
//           Sign up to join Qutomi
//         </p>

//         <form onSubmit={handleSignup} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             className="px-4 py-3 rounded-xl border focus:outline-none"
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
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             className="px-4 py-3 rounded-xl border focus:outline-none"
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
//             required
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             className="px-4 py-3 rounded-xl border focus:outline-none"
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
//               required
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none"
//               style={{
//                 backgroundColor: "var(--color-input-bg)",
//                 borderColor: "var(--color-input-border)",
//                 color: "var(--color-text-color)",
//               }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-gray-500"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>

//           {passwordError && (
//             <p className="text-xs text-red-500">{passwordError}</p>
//           )}

//           <button
//             type="submit"
//             className="py-3 rounded-xl font-semibold transition-colors"
//             style={{
//               backgroundColor: "var(--color-primary-color)",
//               color: "white",
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor = "var(--color-btn-hover)")
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = "var(--color-primary-color)")
//             }
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="mt-4 text-sm">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             style={{ color: "var(--color-secondary-color)" }}
//             className="font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account, ID } from "../config/appwriteConfig"; // path to your Appwrite lib
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
    // Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
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

      navigate("/login"); // redirect after signup
    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <motion.div
        className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center backdrop-blur-md bg-white/70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-3"
          style={{ color: "var(--color-primary-color)" }}
        >
          Join the Qutomi World
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
          Create your account
        </p>
        <p className="text-xs mb-4 sm:mb-6 sm:text-sm text-gray-500 italic">
          Note: Your username cannot be changed once you sign up. Choose carefully!
        </p>
        <form className="flex flex-col gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
            style={{
              backgroundColor: "var(--color-input-bg)",
              borderColor: "var(--color-input-border)",
              color: "var(--color-text-color)",
            }}
          />

          <input
            type="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
            style={{
              backgroundColor: "var(--color-input-bg)",
              borderColor: "var(--color-input-border)",
              color: "var(--color-text-color)",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
            style={{
              backgroundColor: "var(--color-input-bg)",
              borderColor: "var(--color-input-border)",
              color: "var(--color-text-color)",
            }}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
              onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-color)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-input-border)")}
              style={{
                backgroundColor: "var(--color-input-bg)",
                borderColor: "var(--color-input-border)",
                color: "var(--color-text-color)",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}

          <button
            type="button"
            onClick={handleSignup}
            disabled={loading}
            className={`py-3 rounded-xl font-semibold transition-colors duration-200 text-sm sm:text-base ${loading ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
            style={{ backgroundColor: "var(--color-primary-color)", color: "white" }}
            onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--color-btn-hover)")}
            onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--color-primary-color)")}
          >
            {loading ? "Creating Account..." : "Sign Up Now"}
          </button>
        </form>

        <p className="mt-4 text-xs sm:text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "var(--color-secondary-color)" }}
            className="font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
