import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaSignOutAlt, FaEnvelope, FaCheck, FaHome, FaLightbulb } from "react-icons/fa";
// import { Md3dRotation } from "react-icons/md";

const Navbar = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef();
  const mobileMenuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch user info
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

  // Logout
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

  // Send verification
  const handleSendVerification = async () => {
    try {
      await account.createVerification({
        url: "http://localhost:5173/login",
      });
      setVerificationSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to section or navigate
  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      // Scroll to section
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else {
      // Regular navigation
      navigate(path);
      setMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: "Home", path: "#home", icon: <FaHome className="text-sm" /> },
    // { name: "About", path: "#about", icon: <FaUser className="text-sm" /> },
    // { name: "Features", path: "#features", icon: <FaLightbulb className="text-sm" /> },
    // { name: "Goals", path: "#goals", icon: <FaCheck className="text-sm" /> },
    // {name:"3D Experience",path:"/experience",icon:<Md3dRotation className="text-md"/>},
    { name: "Suggestions", path: "#suggestion", icon: <FaLightbulb className="text-sm" /> },
  ];

  return (
    <nav className="w-full px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-[#080808]/95 to-[#080808]/90">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/5 to-[#00FFFF]/5 pointer-events-none" />

      <div className="flex items-center justify-between w-full relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => handleNavigation("#hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <img
              src="/navbar_logo.png"
              alt="Qutomi Logo"
              className="h-10 w-10 rounded-xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#F361B0]/20 to-[#00FFFF]/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
          </div>
          <span className="ml-3 font-bold text-xl bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
            Qtomi
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navigationItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative" ref={mobileMenuRef}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#F361B0]/50 transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </motion.button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-64 p-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl flex flex-col gap-2"
              >
                {/* Navigation Items */}
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 w-full text-left"
                    whileHover={{ x: 5 }}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}

                {/* User info and Logout in mobile menu */}
                <div className="border-t border-white/10 pt-3 mt-2 space-y-3">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white text-sm font-bold">
                      {user?.name ? user.name[0].toUpperCase() : "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {user?.name || "Anonymous"}
                      </p>
                      <p className="text-gray-400 text-xs truncate">
                        {user?.email || ""}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Logout Button */}
                  {/* Mobile Logout Button - Centered */}
                  <motion.button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all duration-300 w-full border border-red-400/20 hover:border-red-400/40"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaSignOutAlt />
                    <span className="font-medium">Logout</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Profile Section */}
        <div className="hidden md:block relative" ref={profileRef}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenProfile(!openProfile)}
            className="h-12 w-12 rounded-xl text-white font-semibold flex items-center justify-center shadow-lg relative group"
            style={{
              background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
              boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
            }}
          >
            {/* {user?.name ? user.name[0].toUpperCase() : "U"} */}
            {user?.prefs?.avatar ? (
              <img
                src={user.prefs.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-xl object-cover"
              />
            ) : (
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white font-semibold">
                {user?.name ? user.name[0].toUpperCase() : "U"}
              </div>
            )}

            {/* Online Indicator */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-[#080808] rounded-full" />
          </motion.button>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {openProfile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-80 p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl space-y-4"
              >
                {/* Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-lg truncate">
                      {user?.name || "Anonymous"}
                    </p>
                    <p className="text-gray-400 text-sm truncate">
                      {user?.email || ""}
                    </p>
                  </div>

                  {/* Verification Badge */}
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${user?.emailVerification
                      ? "text-green-400 border-green-400/50 bg-green-400/10"
                      : "text-yellow-400 border-yellow-400/50 bg-yellow-400/10"
                      }`}
                  >
                    {user?.emailVerification ? <FaCheck className="text-xs" /> : <FaEnvelope className="text-xs" />}
                    {user?.emailVerification ? "Verified" : "Unverified"}
                  </div>
                </div>

                {/* Account Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Account Created</p>
                    <p className="text-white font-medium">
                      {user?.$createdAt
                        ? new Date(user.$createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                        : "-"}
                    </p>
                  </div>
                </div>

                {/* Email verification */}
                {!user?.emailVerification && !verificationSent && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendVerification}
                    className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
                      boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
                    }}
                  >
                    <FaEnvelope />
                    Verify Email
                  </motion.button>
                )}

                {verificationSent && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-green-400/10 border border-green-400/20">
                    <FaCheck className="text-green-400 text-sm" />
                    <p className="text-green-400 text-sm">Verification link sent to your email!</p>
                  </div>
                )}

                {/* Logout Button with Red/Pink Theme */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleLogout}
                  className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #F361B0, #E60076)",
                    boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
                  }}
                >
                  <FaSignOutAlt />
                  Logout
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;