// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/cutomi_logo.jpeg";
import { useNavigate } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const profileRef = useRef();
  const navigate = useNavigate();

  // Fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await account.deleteSession({ sessionId: "current" });
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  // Send email verification
  const handleSendVerification = async () => {
    try {
      await account.createVerification({
        url: "http://localhost:5173/login", // redirect after verification
      });
      setVerificationSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/home")}>
        <img
          src={Logo}
          alt="Qutomi Logo"
          className="h-8  w-full rounded-md"
        />
        {/* <span className="ml-2 font-bold text-xl text-purple-600">Qutomi</span> */}
      </div>

      {/* Profile Icon */}
      <div className="relative" ref={profileRef}>
        <button
          className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg"
          onClick={() => setOpenProfile(!openProfile)}
        >
          {user?.name ? user.name[0].toUpperCase() : "U"}
        </button>

        {/* Profile Popup */}
        <AnimatePresence>
          {openProfile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 text-sm"
            >
              {/* Verification Pill */}
              <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full border"
                   style={{
                     color: user?.emailVerification ? "#16a34a" : "#6b7280",
                     borderColor: user?.emailVerification ? "#16a34a" : "#6b7280",
                   }}
              >
                {user?.emailVerification ? "Verified" : "Not Verified"}
              </div>

              <div>
                <p className="text-gray-500">Username:</p>
                <p className="font-semibold">{user?.name || "Anonymous"}</p>
              </div>

              <div>
                <p className="text-gray-500">Account Created:</p>
                <p className="font-semibold">
                  {user?.$createdAt ? new Date(user.$createdAt).toLocaleDateString() : "-"}
                </p>
              </div>

              {/* Show verification button if not verified */}
              {!user?.emailVerification && !verificationSent && (
                <button
                  onClick={handleSendVerification}
                  className="mt-2 py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
                >
                  Send Verification Email
                </button>
              )}

              {verificationSent && (
                <p className="text-green-600 text-sm mt-1">
                  Verification email sent! Check your inbox.
                </p>
              )}

              <button
                onClick={handleLogout}
                className="mt-2 py-2 px-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
