// Login.jsx
import { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// Skeleton for loading
const LoginSkeleton = () => (
  <div className="flex items-center justify-center min-h-screen px-4">
    <div className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md text-center backdrop-blur-md bg-white/70 animate-pulse">
      <div className="h-8 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-6 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-12 bg-gray-300 rounded-xl mb-3"></div>
      <div className="h-12 bg-gray-300 rounded-xl mb-3"></div>
      <div className="h-12 bg-gray-300 rounded-xl mb-3"></div>
      <div className="h-12 bg-gray-300 rounded-xl"></div>
    </div>
  </div>
);

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  // Handle Appwrite email verification
  useEffect(() => {
    const verifyEmail = async () => {
      if (userId && secret) {
        try {
          await account.updateVerification({ userId, secret });
          setVerified(true);
          setVerificationMessage(
            "Your email has been successfully verified! Please login."
          );
        } catch (err) {
          console.error(err);
          setVerified(false);
          setVerificationMessage(
            "Verification failed or link expired. Please try again."
          );
        }
      }
    };
    verifyEmail();
  }, [userId, secret]);

  // Handle login
  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await account.createEmailPasswordSession({ email, password });
      const user = await account.get();

      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Show skeleton while loading
  if (loading) return <LoginSkeleton />;

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
          Let’s Go
        </h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
          Sign in to your Qutomi account
        </p>

        {/* Verification message */}
        {verificationMessage && (
          <p
            className={`text-sm mb-2 ${
              verified ? "text-green-500" : "text-red-500"
            }`}
          >
            {verificationMessage}
          </p>
        )}

        <form
          className="flex flex-col gap-3 sm:gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
            style={{
              backgroundColor: "var(--color-input-bg)",
              borderColor: "var(--color-input-border)",
              color: "var(--color-text-color)",
            }}
          />

          {/* Password input with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-200 text-sm sm:text-base"
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
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Error message */}
          {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}

          {/* Login button */}
          <button
            type="button"
            onClick={handleLogin}
            className="py-3 rounded-xl font-semibold transition-colors duration-200 text-sm sm:text-base"
            style={{
              backgroundColor: "var(--color-primary-color)",
              color: "white",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-btn-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-primary-color)")
            }
          >
            Enter the Qutomi World 🚀
          </button>
        </form>

        <p className="mt-2 text-xs sm:text-sm text-gray-700">
          <Link
            to="/reset-password-request"
            style={{ color: "var(--color-primary-color)" }}
            className="font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </p>

        <p className="mt-4 text-xs sm:text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "var(--color-secondary-color)" }}
            className="font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
