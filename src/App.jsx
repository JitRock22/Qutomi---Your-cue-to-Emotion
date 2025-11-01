// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import PrivateRoute from './utils/PrivateRoute';
// import Login from './pages/Login';
// import Signup from './pages/signup';
// import ResetPassword from "./pages/Resetpassword";
// import Home from './pages/Home';
// import SuggestionPage from './pages/Suggestionpage';

// import Landing from './pages/Landing';
// import SuccessPage from './pages/Successpage';
// import ErrorPage from './pages/Errorpage';
// // import { Analytics } from "@vercel/analytics/react"
// // import Experience3D from './pages/experience';
// // import Jackpot from './pages/jackpot';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check localStorage on app load
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) setIsLoggedIn(true);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* PrivateRoute now gets isLoggedIn */}
//         <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
//           <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
//         </Route>
//         {/* <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
//           <Route path="/suggestions" element={<SuggestionPage />} />
//         </Route> */}
//         {/* Public routes */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route
//           path="/login"
//           element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/signup"
//           element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
//         />
//         <Route path="/success" element={<SuccessPage />} />

//         <Route path="/error" element={<ErrorPage />} />
//         {/* <Route
//           path="/experience"
//           element={<Experience3D />}
//         /> */}
//         {/* <Route path="/jackpot" element={<Jackpot />} /> */}
//         <Route path="/suggestions" element={<SuggestionPage />} />
//       </Routes>
//       {/* <Analytics /> */}
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import PrivateRoute from './utils/PrivateRoute';
// import Login from './pages/Login';
// import Signup from './pages/signup';
// import ResetPassword from "./pages/Resetpassword";
// import ForgotPassword from "./pages/Forgotpassword";
// import Home from './pages/Home';
// import SuggestionPage from './pages/Suggestionpage';
// import Landing from './pages/Landing';
// import SuccessPage from './pages/Successpage';
// import ErrorPage from './pages/Errorpage';
// import { account } from './config/appwriteConfig';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Check authentication status on app load
//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const user = await account.get();
//       setIsLoggedIn(true);
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("✅ App: User authenticated on load:", user.email);
//     } catch (error) {
//       setIsLoggedIn(false);
//       localStorage.removeItem("user");
//       console.log("🔐 App: No active session");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle OAuth callback - improved version
//   useEffect(() => {
//     const handleOAuthCallback = async () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       const userId = urlParams.get('userId');
//       const secret = urlParams.get('secret');

//       console.log("🔄 App: Checking OAuth callback...", { userId, secret });

//       // If this is an OAuth callback, check authentication
//       if (userId || secret) {
//         try {
//           setLoading(true);
//           // Small delay to ensure Appwrite has processed the OAuth callback
//           await new Promise(resolve => setTimeout(resolve, 1000));

//           const user = await account.get();
//           setIsLoggedIn(true);
//           localStorage.setItem("user", JSON.stringify(user));
//           console.log("✅ App: OAuth callback successful:", user.email);

//           // Clean URL and redirect to home
//           window.history.replaceState({}, '', window.location.pathname);
//           window.location.href = '/home';
//         } catch (error) {
//           console.error('❌ App: OAuth callback failed:', error);
//           setLoading(false);
//         }
//       }
//     };

//     handleOAuthCallback();
//   }, []);

//   // Show loading spinner
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#080808]">
//         <div className="text-center">
//           <div className="w-12 h-12 border-4 border-[#E60076] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-white/70 text-sm">Loading Qutomi...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* PrivateRoute now gets isLoggedIn */}
//         <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
//           <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
//         </Route>

//         {/* Public routes */}
//         <Route path="/" element={<Landing />} />
//         <Route
//           path="/forgot-password"
//           element={isLoggedIn ? <Navigate to="/home" /> : <ForgotPassword />}
//         />
//         <Route
//           path="/reset-password"
//           element={isLoggedIn ? <Navigate to="/home" /> : <ResetPassword />}
//         />

//         <Route
//           path="/login"
//           element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/signup"
//           element={isLoggedIn ? <Navigate to="/home" /> : <Signup setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route path="/success" element={<SuccessPage />} />
//         <Route path="/error" element={<ErrorPage />} />
//         <Route path="/suggestions" element={<SuggestionPage />} />

//         {/* Catch all route - redirect to home if logged in, else to landing */}
//         <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/"} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/signup';
import ResetPassword from "./pages/Resetpassword";
import ForgotPassword from "./pages/Forgotpassword";
import Home from './pages/Home';
import SuggestionPage from './pages/Suggestionpage';
import Landing from './pages/Landing';
import SuccessPage from './pages/Successpage';
import ContactPage from './pages/Contact';
import PrivacyPolicy from './pages/Privacypolicy';
import Terms from './pages/Terms';
import ErrorPage from './pages/Errorpage';
import RefundPage from './pages/Refundpolicy';
import { account } from './config/appwriteConfig';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication status on app load - ONLY Appwrite sessions
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Only check Appwrite session - no localStorage dependency
      const user = await account.get();
      setIsLoggedIn(true);
      console.log("✅ App: User authenticated via Appwrite session:", user.email);
    } catch (error) {
      // No valid Appwrite session found
      setIsLoggedIn(false);
      console.log("🔐 App: No active Appwrite session");
    } finally {
      setLoading(false);
    }
  };

  // Handle OAuth callback
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');
      const secret = urlParams.get('secret');
      
      console.log("🔄 App: Checking OAuth callback...", { userId, secret });
      
      if (userId || secret) {
        try {
          setLoading(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user = await account.get();
          setIsLoggedIn(true);
          console.log("✅ App: OAuth callback successful:", user.email);
          
          window.history.replaceState({}, '', window.location.pathname);
          window.location.href = '/home';
        } catch (error) {
          console.error('❌ App: OAuth callback failed:', error);
          setLoading(false);
        }
      }
    };

    handleOAuthCallback();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#E60076] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70 text-sm">Loading Qutomi...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        </Route>
        
        <Route path="/" element={<Landing />} />
        <Route
          path="/forgot-password"
          element={isLoggedIn ? <Navigate to="/home" /> : <ForgotPassword />}
        />
        <Route
          path="/reset-password"
          element={isLoggedIn ? <Navigate to="/home" /> : <ResetPassword />}
        />
        
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" /> : <Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/suggestions" element={<SuggestionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms/>} />
        <Route path="/refund-policy" element={<RefundPage/>} />
        
        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/"} />} />
      </Routes>
    </Router>
  );
}

export default App;