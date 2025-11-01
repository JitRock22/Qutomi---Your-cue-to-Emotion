// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { account } from "../config/appwriteConfig";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaUser, FaSignOutAlt, FaEnvelope, FaCheck, FaHome, FaLightbulb } from "react-icons/fa";
// // import { Md3dRotation } from "react-icons/md";

// const Navbar = ({ setIsLoggedIn }) => {
//   const [user, setUser] = useState(null);
//   const [openProfile, setOpenProfile] = useState(false);
//   const [verificationSent, setVerificationSent] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const profileRef = useRef();
//   const mobileMenuRef = useRef();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Fetch user info
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const currentUser = await account.get();
//         setUser(currentUser);
//       } catch (err) {
//         console.error(err);
//         setUser(null);
//       }
//     };
//     fetchUser();
//   }, []);

//   // Logout
//   const handleLogout = async () => {
//     try {
//       await account.deleteSession({ sessionId: "current" });
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Send verification
//   const handleSendVerification = async () => {
//     try {
//       await account.createVerification({
//         url: "http://localhost:5173/login",
//       });
//       setVerificationSent(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Close dropdowns if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setOpenProfile(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Scroll to section or navigate
//   const handleNavigation = (path) => {
//     if (path.startsWith('#')) {
//       // Scroll to section
//       const sectionId = path.substring(1);
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//       setMobileMenuOpen(false);
//     } else {
//       // Regular navigation
//       navigate(path);
//       setMobileMenuOpen(false);
//     }
//   };

//   const navigationItems = [
//     { name: "Home", path: "#home", icon: <FaHome className="text-sm" /> },
//     // { name: "About", path: "#about", icon: <FaUser className="text-sm" /> },
//     // { name: "Features", path: "#features", icon: <FaLightbulb className="text-sm" /> },
//     // { name: "Goals", path: "#goals", icon: <FaCheck className="text-sm" /> },
//     // {name:"3D Experience",path:"/experience",icon:<Md3dRotation className="text-md"/>},
//     { name: "Suggestions", path: "#suggestion", icon: <FaLightbulb className="text-sm" /> },
//   ];

//   return (
//     <nav className="w-full px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-[#080808]/95 to-[#080808]/90">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/5 to-[#00FFFF]/5 pointer-events-none" />

//       <div className="flex items-center justify-between w-full relative z-10">
//         {/* Logo */}
//         <motion.div
//           className="flex items-center cursor-pointer select-none group"
//           onClick={() => handleNavigation("#hero")}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative">
//             <img
//               src="/navbar_logo.png"
//               alt="Qutomi Logo"
//               className="h-10 w-10 rounded-xl object-cover shadow-lg"
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-[#F361B0]/20 to-[#00FFFF]/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
//           </div>
//           <span className="ml-3 font-bold text-xl bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
//             Qtomi
//           </span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-4">
//           {navigationItems.map((item) => (
//             <motion.button
//               key={item.name}
//               onClick={() => handleNavigation(item.path)}
//               className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.icon}
//               <span className="font-medium">{item.name}</span>
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden relative" ref={mobileMenuRef}>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#F361B0]/50 transition-all duration-300"
//           >
//             <div className="flex flex-col gap-1">
//               <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
//               <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
//               <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
//             </div>
//           </motion.button>

//           {/* Mobile Menu Dropdown */}
//           <AnimatePresence>
//             {mobileMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8, y: -10 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.8, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute right-0 mt-3 w-64 p-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl flex flex-col gap-2"
//               >
//                 {/* Navigation Items */}
//                 {navigationItems.map((item) => (
//                   <motion.button
//                     key={item.name}
//                     onClick={() => handleNavigation(item.path)}
//                     className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 w-full text-left"
//                     whileHover={{ x: 5 }}
//                   >
//                     {item.icon}
//                     <span className="font-medium">{item.name}</span>
//                   </motion.button>
//                 ))}

//                 {/* User info and Logout in mobile menu */}
//                 <div className="border-t border-white/10 pt-3 mt-2 space-y-3">
//                   <div className="flex items-center gap-3 px-3 py-2">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white text-sm font-bold">
//                       {user?.name ? user.name[0].toUpperCase() : "U"}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-white text-sm font-medium truncate">
//                         {user?.name || "Anonymous"}
//                       </p>
//                       <p className="text-gray-400 text-xs truncate">
//                         {user?.email || ""}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Mobile Logout Button */}
//                   {/* Mobile Logout Button - Centered */}
//                   <motion.button
//                     onClick={handleLogout}
//                     className="flex items-center justify-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all duration-300 w-full border border-red-400/20 hover:border-red-400/40"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <FaSignOutAlt />
//                     <span className="font-medium">Logout</span>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Desktop Profile Section */}
//         <div className="hidden md:block relative" ref={profileRef}>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setOpenProfile(!openProfile)}
//             className="h-12 w-12 rounded-xl text-white font-semibold flex items-center justify-center shadow-lg relative group"
//             style={{
//               background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
//               boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
//             }}
//           >
//             {/* {user?.name ? user.name[0].toUpperCase() : "U"} */}
//             {user?.prefs?.avatar ? (
//               <img
//                 src={user.prefs.avatar}
//                 alt={user.name}
//                 className="h-12 w-12 rounded-xl object-cover"
//               />
//             ) : (
//               <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white font-semibold">
//                 {user?.name ? user.name[0].toUpperCase() : "U"}
//               </div>
//             )}

//             {/* Online Indicator */}
//             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-[#080808] rounded-full" />
//           </motion.button>

//           {/* Profile Dropdown */}
//           <AnimatePresence>
//             {openProfile && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8, y: -10 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.8, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute right-0 mt-3 w-80 p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl space-y-4"
//               >
//                 {/* Header */}
//                 <div className="flex items-center gap-4 pb-4 border-b border-white/10">
//                   <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] flex items-center justify-center text-white text-lg font-bold shadow-lg">
//                     {user?.name ? user.name[0].toUpperCase() : "U"}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-white font-semibold text-lg truncate">
//                       {user?.name || "Anonymous"}
//                     </p>
//                     <p className="text-gray-400 text-sm truncate">
//                       {user?.email || ""}
//                     </p>
//                   </div>

//                   {/* Verification Badge */}
//                   <div
//                     className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${user?.emailVerification
//                       ? "text-green-400 border-green-400/50 bg-green-400/10"
//                       : "text-yellow-400 border-yellow-400/50 bg-yellow-400/10"
//                       }`}
//                   >
//                     {user?.emailVerification ? <FaCheck className="text-xs" /> : <FaEnvelope className="text-xs" />}
//                     {user?.emailVerification ? "Verified" : "Unverified"}
//                   </div>
//                 </div>

//                 {/* Account Info */}
//                 <div className="space-y-3">
//                   <div>
//                     <p className="text-gray-400 text-sm">Account Created</p>
//                     <p className="text-white font-medium">
//                       {user?.$createdAt
//                         ? new Date(user.$createdAt).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric'
//                         })
//                         : "-"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email verification */}
//                 {!user?.emailVerification && !verificationSent && (
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={handleSendVerification}
//                     className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
//                     style={{
//                       background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
//                       boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
//                     }}
//                   >
//                     <FaEnvelope />
//                     Verify Email
//                   </motion.button>
//                 )}

//                 {verificationSent && (
//                   <div className="flex items-center gap-2 p-3 rounded-xl bg-green-400/10 border border-green-400/20">
//                     <FaCheck className="text-green-400 text-sm" />
//                     <p className="text-green-400 text-sm">Verification link sent to your email!</p>
//                   </div>
//                 )}

//                 {/* Logout Button with Red/Pink Theme */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleLogout}
//                   className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
//                   style={{
//                     background: "linear-gradient(135deg, #F361B0, #E60076)",
//                     boxShadow: "0 0 20px rgba(243, 97, 176, 0.3)",
//                   }}
//                 >
//                   <FaSignOutAlt />
//                   Logout
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { account } from "../config/appwriteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt, FaEnvelope, FaCheck, FaHome, FaLightbulb, FaGoogle, FaGem, FaRocket } from "react-icons/fa";

const Navbar = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const profileRef = useRef();
  const mobileMenuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  // Memoized user data functions
  const getUserDisplayName = useCallback(() => {
    return user?.name || user?.prefs?.name || "Anonymous";
  }, [user]);

  const getUserEmail = useCallback(() => {
    return user?.email || user?.prefs?.email || "";
  }, [user]);

  const isGoogleUser = useCallback(() => {
    return user?.providers?.includes('google') || user?.prefs?.authProvider === 'google';
  }, [user]);

  const getMemberStatus = useCallback(() => {
    if (!user?.$createdAt) return { 
      status: "New Explorer", 
      icon: "🌱",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/30",
      gradient: "from-emerald-500 to-green-500",
      description: "Welcome aboard! Your journey with Qtomi begins now.",
      badgeColor: "bg-emerald-500/20"
    };
    
    const joinDate = new Date(user.$createdAt);
    const vanguardStart = new Date('2025-10-01');
    const vanguardEnd = new Date('2026-04-30');
    
    if (joinDate >= vanguardStart && joinDate <= vanguardEnd) {
      return { 
        status: "Qtomi Vanguard", 
        icon: "💎",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/30",
        gradient: "from-purple-500 to-pink-500",
        description: "Part of Qtomi since Day One 🌟",
        badgeColor: "bg-purple-500/20"
      };
    } else {
      return { 
        status: "Qtomi Catalyst", 
        icon: "🚀",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/30",
        gradient: "from-cyan-500 to-blue-500",
        description: "Keeping the spark alive 🔥",
        badgeColor: "bg-cyan-500/20"
      };
    }
  }, [user]);

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

  // Logout handler
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
      const isProfileClick = profileRef.current && !profileRef.current.contains(event.target);
      const isMobileMenuClick = mobileMenuRef.current && !mobileMenuRef.current.contains(event.target);
      
      if (isProfileClick) setOpenProfile(false);
      if (isMobileMenuClick) setMobileMenuOpen(false);
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Optimized navigation handler
  const handleNavigation = useCallback((path) => {
    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  }, [navigate]);

  // Navigation items configuration
  const navigationItems = [
    { name: "Home", path: "#home", icon: <FaHome className="text-sm md:text-base" /> },
    { name: "Suggestions", path: "#suggestion", icon: <FaLightbulb className="text-sm md:text-base" /> },
  ];

  // User avatar component - Only this shows in navbar
  const UserAvatar = () => {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpenProfile(!openProfile)}
        className="h-12 w-12 rounded-xl flex items-center justify-center shadow-lg relative group border-2 border-transparent hover:border-[#F361B0]/50 transition-all duration-300"
        aria-label="User profile"
      >
        <div 
          className="h-12 w-12 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg"
          style={{
            background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
          }}
        >
          {getUserDisplayName()[0].toUpperCase()}
        </div>
        
        {/* Online Indicator */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-[#080808] rounded-full" />
        
        {/* Google Badge */}
        {isGoogleUser() && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border border-white flex items-center justify-center">
            <FaGoogle className="text-white text-[8px]" />
          </div>
        )}
      </motion.button>
    );
  };

  // Profile dropdown component with attractive member status
  const ProfileDropdown = () => {
    const memberStatus = getMemberStatus();
    const [isShining, setIsShining] = useState(false);

    // Auto-shine effect every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setIsShining(true);
        setTimeout(() => setIsShining(false), 600);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <AnimatePresence>
        {openProfile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-80 p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl space-y-4 z-50"
          >
            {/* Header - Clean without member status */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="relative">
                <div 
                  className="h-14 w-14 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg border-2 border-white/20"
                  style={{
                    background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
                  }}
                >
                  {getUserDisplayName()[0].toUpperCase()}
                </div>
                {isGoogleUser() && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-[#111] flex items-center justify-center">
                    <FaGoogle className="text-white text-[10px]" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-lg truncate mb-1">
                  {getUserDisplayName()}
                </p>
                <p className="text-gray-400 text-sm truncate">
                  {getUserEmail()}
                </p>
              </div>
            </div>

            {/* Enhanced Member Status Card with Auto-Shine */}
            <div className={`relative p-4 rounded-2xl border ${memberStatus.borderColor} ${memberStatus.bgColor} overflow-hidden group transition-all duration-300`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${memberStatus.gradient} opacity-5 transition-opacity duration-300`} />
              
              {/* Auto Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transition-transform duration-600 ${
                isShining ? 'translate-x-full' : '-translate-x-full'
              }`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${memberStatus.badgeColor} flex items-center justify-center text-lg backdrop-blur-sm`}>
                      {memberStatus.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${memberStatus.color}`}>
                        {memberStatus.status}
                      </h3>
                      {/* Verification Status */}
                      <div className="flex items-center gap-1 mt-1">
                        {user?.emailVerification ? (
                          <>
                            <FaCheck className="text-green-400 text-xs" />
                            <span className="text-green-400 text-xs font-medium">Verified</span>
                          </>
                        ) : (
                          <>
                            <FaEnvelope className="text-yellow-400 text-xs" />
                            <span className="text-yellow-400 text-xs font-medium">Unverified</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                  {memberStatus.description}
                </p>
              </div>
            </div>

            {/* Account Info */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wide">Member Since</p>
                <p className="text-white font-medium text-sm">
                  {user?.$createdAt ? new Date(user.$createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  }) : 'Recent'}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wide">Status</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-green-400 font-medium text-sm">Active</p>
                </div>
              </div>
            </div>

            {/* Email verification */}
            {!user?.emailVerification && !verificationSent && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendVerification}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                <FaEnvelope />
                Verify Email
              </motion.button>
            )}

            {verificationSent && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-green-400/10 border border-green-400/20">
                <FaCheck className="text-green-400 text-sm" />
                <p className="text-green-400 text-sm">Verification link sent!</p>
              </div>
            )}

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F361B0] to-[#E60076] hover:from-[#F361B0] hover:to-[#CC0066]"
            >
              <FaSignOutAlt />
              Logout
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Mobile menu component
  const MobileMenu = () => (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-3 w-72 p-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-[#111]/95 shadow-2xl flex flex-col gap-2 z-50"
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

          {/* User info section */}
          {/* User info section */}
{user && (
  <div className="border-t border-white/10 pt-3 mt-2 space-y-3">
    <div className="flex items-center gap-3 px-3 py-2">
      <div className="relative">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold"
          style={{
            background: "linear-gradient(135deg, #F361B0, #FF9CDA)",
          }}
        >
          {getUserDisplayName()[0].toUpperCase()}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">
          {getUserDisplayName()}
        </p>
        <p className="text-gray-400 text-xs truncate">
          {getUserEmail()}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {/* Verification Status for Mobile */}
          <div className="flex items-center gap-1">
            {user?.emailVerification ? (
              <>
                <FaCheck className="text-green-400 text-xs" />
                <span className="text-green-400 text-xs font-medium">Verified</span>
              </>
            ) : (
              <>
                <FaEnvelope className="text-yellow-400 text-xs" />
                <span className="text-yellow-400 text-xs font-medium">Unverified</span>
              </>
            )}
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Active</span>
          </div>
        </div>
        <div className="mt-2">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${getMemberStatus().color} ${getMemberStatus().bgColor} ${getMemberStatus().borderColor}`}>
            <span className="text-xs">{getMemberStatus().icon}</span>
            <span className="font-medium">{getMemberStatus().status}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Logout Button */}
    <motion.button
      onClick={handleLogout}
      className="flex items-center justify-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all duration-300 w-full border border-red-400/20 hover:border-red-400/40"
      whileHover={{ scale: 1.02 }}
    >
      <FaSignOutAlt />
      <span className="font-medium">Logout</span>
    </motion.button>
  </div>
)}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="w-full px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-[#080808]/95 to-[#080808]/90">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0]/5 to-[#00FFFF]/5 pointer-events-none" />

      <div className="flex items-center justify-between w-full relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => handleNavigation("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <img
              src="/navbar_logo.png"
              alt="Qtomi Logo"
              className="h-10 w-10 rounded-xl object-cover shadow-lg"
              loading="eager"
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

        {/* Right Section - Avatar only visible */}
        <div className="flex items-center gap-4">
          {/* Desktop Profile */}
          <div className="hidden md:block relative" ref={profileRef}>
            <UserAvatar />
            <ProfileDropdown />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative" ref={mobileMenuRef}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#F361B0]/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </motion.button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;