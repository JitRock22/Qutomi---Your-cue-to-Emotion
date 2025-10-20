// // Navbar.jsx
// import { useState, useEffect, useRef } from "react";
// import Logo from "../assets/cutomi_logo.jpeg";
// import { useNavigate } from "react-router-dom";
// import { account } from "../config/appwriteConfig";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = ({ setIsLoggedIn }) => {
//   const [user, setUser] = useState(null);
//   const [openProfile, setOpenProfile] = useState(false);
//   const [verificationSent, setVerificationSent] = useState(false);
//   const profileRef = useRef();
//   const navigate = useNavigate();

//   // Fetch user info on mount
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

//   // Handle logout
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

//   // Send email verification
//   const handleSendVerification = async () => {
//     try {
//       await account.createVerification({
//         url: "http://localhost:5173/login", // redirect after verification
//       });
//       setVerificationSent(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Close popup if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setOpenProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center fixed top-0 z-50">
//       {/* Logo */}
//       <div className="flex items-center cursor-pointer" onClick={() => navigate("/home")}>
//         <img
//           src={Logo}
//           alt="Qutomi Logo"
//           className="h-8  w-full rounded-md"
//         />
//         {/* <span className="ml-2 font-bold text-xl text-purple-600">Qutomi</span> */}
//       </div>

//       {/* Profile Icon */}
//       <div className="relative" ref={profileRef}>
//         <button
//           className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg"
//           onClick={() => setOpenProfile(!openProfile)}
//         >
//           {user?.name ? user.name[0].toUpperCase() : "U"}
//         </button>

//         {/* Profile Popup */}
//         <AnimatePresence>
//           {openProfile && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8, y: -10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.8, y: -10 }}
//               transition={{ duration: 0.2 }}
//               className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 text-sm"
//             >
//               {/* Verification Pill */}
//               <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full border"
//                    style={{
//                      color: user?.emailVerification ? "#16a34a" : "#6b7280",
//                      borderColor: user?.emailVerification ? "#16a34a" : "#6b7280",
//                    }}
//               >
//                 {user?.emailVerification ? "Verified" : "Not Verified"}
//               </div>

//               <div>
//                 <p className="text-gray-500">Username:</p>
//                 <p className="font-semibold">{user?.name || "Anonymous"}</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Account Created:</p>
//                 <p className="font-semibold">
//                   {user?.$createdAt ? new Date(user.$createdAt).toLocaleDateString() : "-"}
//                 </p>
//               </div>

//               {/* Show verification button if not verified */}
//               {!user?.emailVerification && !verificationSent && (
//                 <button
//                   onClick={handleSendVerification}
//                   className="mt-2 py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
//                 >
//                   Send Verification Email
//                 </button>
//               )}

//               {verificationSent && (
//                 <p className="text-green-600 text-sm mt-1">
//                   Verification email sent! Check your inbox.
//                 </p>
//               )}

//               <button
//                 onClick={handleLogout}
//                 className="mt-2 py-2 px-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors"
//               >
//                 Logout
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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

  // Close profile popup if clicked outside
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
    <nav
      className="w-full px-6 py-3 flex justify-between items-center fixed top-0 z-50 backdrop-blur-lg border-b border-[#F361B0]/20"
      style={{
        backgroundColor: "rgba(8,8,8,0.9)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => navigate("/home")}
      >
        <img
          src={Logo}
          alt="Qutomi Logo"
          className="h-9 w-9 rounded-lg border border-[#F361B0]/50 object-cover"
        />
       <span
  className="ml-3 font-extrabold text-lg sm:text-xl tracking-wide text-transparent bg-clip-text"
  style={{
    backgroundImage: "linear-gradient(90deg, #F361B0, #E60076)",
  }}
>
  Qutomi
</span>

      </div>

      {/* Profile Section */}
      <div className="relative" ref={profileRef}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenProfile(!openProfile)}
          className="h-10 w-10 rounded-full text-white font-semibold flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #F361B0, #E60076)",
            boxShadow: "0 0 12px #F361B0AA",
          }}
        >
          {user?.name ? user.name[0].toUpperCase() : "U"}
        </motion.button>

        {/* Profile Dropdown */}
        <AnimatePresence>
          {openProfile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-72 p-5 rounded-2xl backdrop-blur-xl border border-[#F361B0]/20 bg-[#111]/80 shadow-2xl flex flex-col gap-4 text-sm"
            >
              {/* Verification Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full border"
                style={{
                  color: user?.emailVerification ? "#16a34a" : "#9CA3AF",
                  borderColor: user?.emailVerification ? "#16a34a" : "#9CA3AF",
                }}
              >
                {user?.emailVerification ? "Verified" : "Not Verified"}
              </div>

              <div>
                <p className="text-gray-400">Username</p>
                <p className="text-white font-semibold">
                  {user?.name || "Anonymous"}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Account Created</p>
                <p className="text-gray-200">
                  {user?.$createdAt
                    ? new Date(user.$createdAt).toLocaleDateString()
                    : "-"}
                </p>
              </div>

              {/* Email verification */}
              {!user?.emailVerification && !verificationSent && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendVerification}
                  className="mt-1 py-2 rounded-lg font-semibold text-white transition-colors w-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #F361B0, #E60076)",
                    boxShadow: "0 0 10px #F361B0AA",
                  }}
                >
                  Verify Email
                </motion.button>
              )}

              {verificationSent && (
                <p className="text-green-400 text-sm mt-1 text-center">
                  ✅ Verification link sent!
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="mt-2 py-2 rounded-lg font-semibold text-white transition-colors w-full bg-[#222] hover:bg-[#E60076]"
              >
                Logout
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
