// import { account } from '../config/appwriteConfig';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useEffect, useState, useCallback, Suspense, lazy } from 'react';
// import HomeSkeleton from '../components/Homeskeleton';
// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import { FaChevronDown } from 'react-icons/fa';

// // Lazy load only components that are below the fold
// const About = lazy(() => import('../components/Aboutsection'));
// const Features = lazy(() => import('../components/Features'));
// const Suggestion = lazy(() => import('../components/suggestion'));
// const Goals = lazy(() => import('../components/Goals'));
// const FAQ = lazy(() => import('../components/FAQSection'));
// const Footer = lazy(() => import('../components/Footer'));

// // Prefetch function for lazy components
// const prefetchLazyComponents = () => {
//   if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
//     requestIdleCallback(() => {
//       Promise.all([
//         import('../components/Aboutsection'),
//         import('../components/Features'),
//         import('../components/suggestion'),
//         import('../components/Goals'),
//         import('../components/FAQSection'),
//         import('../components/Footer')
//       ]);
//     });
//   }
// };

// // Error Boundary Component for individual sections
// const SectionErrorBoundary = ({ children, sectionName }) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const errorHandler = (error) => {
//       console.error(`Error in ${sectionName}:`, error);
//       setHasError(true);
//     };

//     window.addEventListener('error', errorHandler);
//     return () => window.removeEventListener('error', errorHandler);
//   }, [sectionName]);

//   if (hasError) {
//     return (
//       <div className="w-full min-h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-gray-700 my-8">
//         <div className="text-center text-white">
//           <div className="text-2xl mb-2">⚠️</div>
//           <p className="text-sm text-gray-300">Failed to load {sectionName}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-3 px-4 py-2 bg-[#E60076] text-white rounded-lg text-sm hover:bg-[#F361B0] transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return children;
// };

// // Improved Loading component that maintains full width
// const SectionLoader = ({ minHeight = '400px' }) => (
//   <div
//     className="w-full flex items-center justify-center bg-transparent"
//     style={{ minHeight }}
//   >
//     <div className="flex flex-col items-center space-y-3">
//       <div className="w-8 h-8 border-2 border-[#E60076] border-t-transparent rounded-full animate-spin"></div>
//       <p className="text-gray-400 text-sm">Loading...</p>
//     </div>
//   </div>
// );

// // Section-specific height configurations
// const sectionHeights = {
//   about: '500px',
//   features: '600px',
//   suggestion: '400px',
//   goals: '500px',
//   faq: '600px',
//   footer: '300px'
// };

// // Main LazySection component with full width handling
// const LazySection = ({
//   sectionId,
//   isVisible,
//   component: Component,
//   sectionName,
//   ...props
// }) => {
//   const sectionHeight = sectionHeights[sectionId] || '400px';

//   return (
//     <div
//       id={sectionId}
//       className="w-full"
//       style={{ minHeight: isVisible ? 'auto' : sectionHeight }}
//     >
//       {!isVisible ? (
//         <SectionLoader minHeight={sectionHeight} />
//       ) : (
//         <SectionErrorBoundary sectionName={sectionName}>
//           <Suspense fallback={<SectionLoader minHeight={sectionHeight} />}>
//             <Component {...props} />
//           </Suspense>
//         </SectionErrorBoundary>
//       )}
//     </div>
//   );
// };

// const Home = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showScrollArrow, setShowScrollArrow] = useState(true);
//   const [visibleSections, setVisibleSections] = useState({
//     about: false,
//     features: false,
//     suggestion: false,
//     goals: false,
//     faq: false,
//     footer: false
//   });
//   const [prefetchDone, setPrefetchDone] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem('showHomeSkeleton')) {
//       setLoading(true);
//       setTimeout(() => setLoading(false), 1200);
//       localStorage.removeItem('showHomeSkeleton');
//     }
//   }, []);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const user = await account.get();
//         console.log("🏠 Home: User session:", user);

//         if (!user) {
//           console.log("❌ Home: No user session, redirecting to login");
//           navigate("/login");
//         } else {
//           console.log("✅ Home: User authenticated:", user.name);
//         }
//       } catch (error) {
//         console.error("❌ Home: Auth check failed:", error);
//         navigate("/login");
//       }
//     };

//     checkAuth();
//   }, [navigate]);


//   // Prefetch lazy components on mount and user interaction
//   useEffect(() => {
//     const handlePrefetch = () => {
//       if (!prefetchDone) {
//         prefetchLazyComponents();
//         setPrefetchDone(true);
//       }
//     };

//     // Prefetch on mount
//     handlePrefetch();

//     // Prefetch on user interactions
//     const events = ['mousemove', 'touchstart', 'keydown'];
//     const prefetchOnInteraction = () => {
//       handlePrefetch();
//       events.forEach(event => {
//         window.removeEventListener(event, prefetchOnInteraction);
//       });
//     };

//     events.forEach(event => {
//       window.addEventListener(event, prefetchOnInteraction, { once: true });
//     });

//     return () => {
//       events.forEach(event => {
//         window.removeEventListener(event, prefetchOnInteraction);
//       });
//     };
//   }, [prefetchDone]);

//   // Intersection Observer to load components when they come into view
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '200px', // Increased to load earlier
//       threshold: 0.05
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections(prev => ({
//             ...prev,
//             [sectionId]: true
//           }));
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Observe only lazy loaded sections (below the fold)
//     const lazySections = [
//       'about',
//       'features',
//       'suggestion',
//       'goals',
//       'faq',
//       'footer'
//     ];

//     // Small delay to ensure DOM is ready
//     setTimeout(() => {
//       lazySections.forEach(sectionId => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           observer.observe(element);
//         }
//       });
//     }, 100);

//     return () => observer.disconnect();
//   }, []);

//   // Hide scroll arrow when user scrolls down
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowScrollArrow(false);
//       } else {
//         setShowScrollArrow(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Fixed scroll function - scrolls to About section
//   const handleScrollDown = useCallback(() => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({
//         behavior: "smooth"
//       });
//     }
//   }, []);

//   if (loading) return <HomeSkeleton />;

//   return (
//     <div
//       id="home"
//       className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
//       style={{ backgroundColor: "#080808" }}
//     >
//       <Navbar setIsLoggedIn={setIsLoggedIn} />

//       {/* Background glow blobs */}
//       <motion.div
//         className="absolute -top-20 -right-20 w-72 h-72 bg-[#F361B0]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 w-80 h-80 bg-[#E60076]/10 rounded-full blur-3xl"
//         animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
//         transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
//       />

//       {/* Banner Section - Loads Immediately */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 w-full pt-20 sm:mt-10 sm:pt-10"
//       >
//         <div
//           id="banner-container"
//           className="w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] px-4 sm:px-6 lg:px-8"
//         >
//           <Banner />
//         </div>

//         {/* Fixed Scroll Arrow - Only shows when at top */}
//         {showScrollArrow && (
//           <motion.div
//             onClick={handleScrollDown}
//             className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group"
//             animate={{ y: ["0%", "20%", "0%"] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <div className="bg-trasn rounded-full p-2 group-hover:bg-black/50 transition-all">
//               <FaChevronDown className="text-white/70 group-hover:text-white text-xl transition-colors" />
//             </div>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Lazy Loaded Sections with Full Width */}
//       <div className="w-full">
//         <LazySection
//           sectionId="about"
//           isVisible={visibleSections.about}
//           component={About}
//           sectionName="About Section"
//         />

//         <LazySection
//           sectionId="features"
//           isVisible={visibleSections.features}
//           component={Features}
//           sectionName="Features Section"
//         />

//         <LazySection
//           sectionId="suggestion"
//           isVisible={visibleSections.suggestion}
//           component={Suggestion}
//           sectionName="Suggestion Section"
//         />

//         <LazySection
//           sectionId="goals"
//           isVisible={visibleSections.goals}
//           component={Goals}
//           sectionName="Goals Section"
//         />

//         <LazySection
//           sectionId="faq"
//           isVisible={visibleSections.faq}
//           component={FAQ}
//           sectionName="FAQ Section"
//         />

//         <LazySection
//           sectionId="footer"
//           isVisible={visibleSections.footer}
//           component={Footer}
//           sectionName="Footer"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;




// import { useState, useEffect } from 'react';
// import { account } from '../config/appwriteConfig';

// export default function Home({ setIsLoggedIn }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkUser();
//   }, []);

//   const checkUser = async () => {
//     try {
//       const userData = await account.get();
//       setUser(userData);
//       console.log('✅ User data:', userData);
//     } catch (error) {
//       console.error('❌ No user session:', error);
//       // Redirect to login if not authenticated
//       window.location.href = '/login';
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await account.deleteSession('current');
//       localStorage.removeItem("user");
//       setIsLoggedIn(false);
//       setUser(null);
//       window.location.href = '/login';
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="text-lg font-semibold text-gray-700">Loading user data...</div>
//           <div className="mt-2 text-sm text-gray-500">Checking authentication...</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold text-gray-900">Home - Test Auth</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               {user && (
//                 <>
//                   <span className="text-gray-700">
//                     Welcome, <strong>{user.name || user.email}</strong>
//                   </span>
//                   <button
//                     onClick={handleLogout}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     Logout
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             🎉 Authentication Test Successful!
//           </h1>
//           <p className="text-xl text-gray-600">
//             Your Google OAuth and Email/Password authentication are working correctly!
//           </p>
//         </div>
        
//         {/* User Info Card */}
//         {user && (
//           <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-200">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ User Session Info</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
//               <div>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
//                 <p><strong>User ID:</strong> {user.$id}</p>
//               </div>
//               <div>
//                 <p><strong>Status:</strong> <span className="text-green-600 font-semibold">Authenticated</span></p>
//                 <p><strong>Email Verified:</strong> {user.emailVerification ? 'Yes' : 'No'}</p>
//                 <p><strong>Provider:</strong> {user.labels?.includes('oauth2') ? 'Google OAuth' : 'Email/Password'}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Test Results */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">🔐 Authentication Test</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                 Session persistence: Working
//               </li>
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                 User data retrieval: Working
//               </li>
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                 Protected route access: Working
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">🔄 Next Steps</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>• Try logging out and back in</li>
//               <li>• Test Google OAuth flow</li>
//               <li>• Check browser console for errors</li>
//               <li>• Verify localStorage has user data</li>
//             </ul>
//           </div>
//         </div>

//         {/* Debug Info */}
//         <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//           <h4 className="font-semibold text-yellow-800 mb-2">Debug Information</h4>
//           <p className="text-sm text-yellow-700">
//             Check browser console for detailed session information. Look for any errors or warnings.
//           </p>
//           <button
//             onClick={() => {
//               console.log('User object:', user);
//               console.log('LocalStorage:', localStorage.getItem('user'));
//             }}
//             className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
//           >
//             Log Debug Info to Console
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }














// import { account } from '../config/appwriteConfig';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useEffect, useState, useCallback, Suspense, lazy } from 'react';
// import HomeSkeleton from '../components/Homeskeleton';
// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import { FaChevronDown } from 'react-icons/fa';

// // Lazy load only components that are below the fold
// const About = lazy(() => import('../components/Aboutsection'));
// const Features = lazy(() => import('../components/Features'));
// const Suggestion = lazy(() => import('../components/suggestion'));
// const Goals = lazy(() => import('../components/Goals'));
// const FAQ = lazy(() => import('../components/FAQSection'));
// const Footer = lazy(() => import('../components/Footer'));

// // Prefetch function for lazy components
// const prefetchLazyComponents = () => {
//   if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
//     requestIdleCallback(() => {
//       Promise.all([
//         import('../components/Aboutsection'),
//         import('../components/Features'),
//         import('../components/suggestion'),
//         import('../components/Goals'),
//         import('../components/FAQSection'),
//         import('../components/Footer')
//       ]);
//     });
//   }
// };

// // Error Boundary Component for individual sections
// const SectionErrorBoundary = ({ children, sectionName }) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const errorHandler = (error) => {
//       console.error(`Error in ${sectionName}:`, error);
//       setHasError(true);
//     };

//     window.addEventListener('error', errorHandler);
//     return () => window.removeEventListener('error', errorHandler);
//   }, [sectionName]);

//   if (hasError) {
//     return (
//       <div className="w-full min-h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-gray-700 my-8">
//         <div className="text-center text-white">
//           <div className="text-2xl mb-2">⚠️</div>
//           <p className="text-sm text-gray-300">Failed to load {sectionName}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-3 px-4 py-2 bg-[#E60076] text-white rounded-lg text-sm hover:bg-[#F361B0] transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return children;
// };

// // Improved Loading component that maintains full width
// const SectionLoader = ({ minHeight = '400px' }) => (
//   <div
//     className="w-full flex items-center justify-center bg-transparent"
//     style={{ minHeight }}
//   >
//     <div className="flex flex-col items-center space-y-3">
//       <div className="w-8 h-8 border-2 border-[#E60076] border-t-transparent rounded-full animate-spin"></div>
//       <p className="text-gray-400 text-sm">Loading...</p>
//     </div>
//   </div>
// );

// // Section-specific height configurations
// const sectionHeights = {
//   about: '500px',
//   features: '600px',
//   suggestion: '400px',
//   goals: '500px',
//   faq: '600px',
//   footer: '300px'
// };

// // Main LazySection component with full width handling
// const LazySection = ({
//   sectionId,
//   isVisible,
//   component: Component,
//   sectionName,
//   ...props
// }) => {
//   const sectionHeight = sectionHeights[sectionId] || '400px';

//   return (
//     <div
//       id={sectionId}
//       className="w-full"
//       style={{ minHeight: isVisible ? 'auto' : sectionHeight }}
//     >
//       {!isVisible ? (
//         <SectionLoader minHeight={sectionHeight} />
//       ) : (
//         <SectionErrorBoundary sectionName={sectionName}>
//           <Suspense fallback={<SectionLoader minHeight={sectionHeight} />}>
//             <Component {...props} />
//           </Suspense>
//         </SectionErrorBoundary>
//       )}
//     </div>
//   );
// };

// const Home = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true); // Start with true to check auth first
//   const [showScrollArrow, setShowScrollArrow] = useState(true);
//   const [visibleSections, setVisibleSections] = useState({
//     about: false,
//     features: false,
//     suggestion: false,
//     goals: false,
//     faq: false,
//     footer: false
//   });
//   const [prefetchDone, setPrefetchDone] = useState(false);
//   const [authChecked, setAuthChecked] = useState(false);
//   const [authStatus, setAuthStatus] = useState('checking'); // 'checking', 'authenticated', 'unauthenticated'

//   // Check authentication first - MOVE ALL HOOKS TO TOP LEVEL
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         console.log("🔍 Home: Checking authentication...");
//         const user = await account.get();
//         console.log("✅ Home: User authenticated:", user?.email);

//         // Update authentication state
//         setIsLoggedIn(true);
//         localStorage.setItem("user", JSON.stringify(user));
//         setAuthChecked(true);
//         setAuthStatus('authenticated');
        
//         // Only show skeleton if it was specifically set
//         if (localStorage.getItem('showHomeSkeleton')) {
//           setLoading(true);
//           setTimeout(() => setLoading(false), 1200);
//           localStorage.removeItem('showHomeSkeleton');
//         } else {
//           setLoading(false);
//         }

//       } catch (error) {
//         console.error("❌ Home: Auth check failed - redirecting to login:", error);
//         setIsLoggedIn(false);
//         localStorage.removeItem("user");
//         setAuthChecked(true);
//         setAuthStatus('unauthenticated');
//         navigate("/login");
//       }
//     };

//     checkAuth();
//   }, [navigate, setIsLoggedIn]);

//   // Prefetch lazy components on mount and user interaction
//   useEffect(() => {
//     if (authStatus !== 'authenticated') return; // Only prefetch if authenticated

//     const handlePrefetch = () => {
//       if (!prefetchDone) {
//         prefetchLazyComponents();
//         setPrefetchDone(true);
//       }
//     };

//     // Prefetch on mount
//     handlePrefetch();

//     // Prefetch on user interactions
//     const events = ['mousemove', 'touchstart', 'keydown'];
//     const prefetchOnInteraction = () => {
//       handlePrefetch();
//       events.forEach(event => {
//         window.removeEventListener(event, prefetchOnInteraction);
//       });
//     };

//     events.forEach(event => {
//       window.addEventListener(event, prefetchOnInteraction, { once: true });
//     });

//     return () => {
//       events.forEach(event => {
//         window.removeEventListener(event, prefetchOnInteraction);
//       });
//     };
//   }, [prefetchDone, authStatus]);

//   // Intersection Observer to load components when they come into view
//   useEffect(() => {
//     if (authStatus !== 'authenticated') return; // Only set up observer if authenticated

//     const observerOptions = {
//       root: null,
//       rootMargin: '200px',
//       threshold: 0.05
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           setVisibleSections(prev => ({
//             ...prev,
//             [sectionId]: true
//           }));
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const lazySections = [
//       'about',
//       'features',
//       'suggestion',
//       'goals',
//       'faq',
//       'footer'
//     ];

//     setTimeout(() => {
//       lazySections.forEach(sectionId => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           observer.observe(element);
//         }
//       });
//     }, 100);

//     return () => observer.disconnect();
//   }, [authStatus]);

//   // Hide scroll arrow when user scrolls down
//   useEffect(() => {
//     if (authStatus !== 'authenticated') return;

//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowScrollArrow(false);
//       } else {
//         setShowScrollArrow(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [authStatus]);

//   // Fixed scroll function - scrolls to About section
//   const handleScrollDown = useCallback(() => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({
//         behavior: "smooth"
//       });
//     }
//   }, []);

//   // Render loading states - NO HOOKS AFTER THIS POINT
//   if (!authChecked || authStatus === 'checking') {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#080808]">
//         <div className="text-center">
//           <div className="w-12 h-12 border-4 border-[#E60076] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-white/70 text-sm">Checking authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (authStatus === 'unauthenticated') {
//     return null; // Will redirect in useEffect
//   }

//   if (loading) return <HomeSkeleton />;

//   // Main render - ALL HOOKS MUST BE CALLED BEFORE THIS
//   return (
//     <div
//       id="home"
//       className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
//       style={{ backgroundColor: "#080808" }}
//     >
//       <Navbar setIsLoggedIn={setIsLoggedIn} />

//       {/* Background glow blobs */}
//       <motion.div
//         className="absolute -top-20 -right-20 w-72 h-72 bg-[#F361B0]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 w-80 h-80 bg-[#E60076]/10 rounded-full blur-3xl"
//         animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
//         transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
//       />

//       {/* Banner Section - Loads Immediately */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 w-full pt-20 sm:mt-10 sm:pt-10"
//       >
//         <div
//           id="banner-container"
//           className="w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] px-4 sm:px-6 lg:px-8"
//         >
//           <Banner />
//         </div>

//         {/* Fixed Scroll Arrow - Only shows when at top */}
//         {showScrollArrow && (
//           <motion.div
//             onClick={handleScrollDown}
//             className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group"
//             animate={{ y: ["0%", "20%", "0%"] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <div className="bg-trasn rounded-full p-2 group-hover:bg-black/50 transition-all">
//               <FaChevronDown className="text-white/70 group-hover:text-white text-xl transition-colors" />
//             </div>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Lazy Loaded Sections with Full Width */}
//       <div className="w-full">
//         <LazySection
//           sectionId="about"
//           isVisible={visibleSections.about}
//           component={About}
//           sectionName="About Section"
//         />

//         <LazySection
//           sectionId="features"
//           isVisible={visibleSections.features}
//           component={Features}
//           sectionName="Features Section"
//         />

//         <LazySection
//           sectionId="suggestion"
//           isVisible={visibleSections.suggestion}
//           component={Suggestion}
//           sectionName="Suggestion Section"
//         />

//         <LazySection
//           sectionId="goals"
//           isVisible={visibleSections.goals}
//           component={Goals}
//           sectionName="Goals Section"
//         />

//         <LazySection
//           sectionId="faq"
//           isVisible={visibleSections.faq}
//           component={FAQ}
//           sectionName="FAQ Section"
//         />

//         <LazySection
//           sectionId="footer"
//           isVisible={visibleSections.footer}
//           component={Footer}
//           sectionName="Footer"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;






import { account } from '../config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import HomeSkeleton from '../components/Homeskeleton';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { FaChevronDown } from 'react-icons/fa';

// Lazy load components
const About = lazy(() => import('../components/Aboutsection'));
const Features = lazy(() => import('../components/Features'));
const Suggestion = lazy(() => import('../components/suggestion'));
const Goals = lazy(() => import('../components/Goals'));
const FAQ = lazy(() => import('../components/FAQSection'));
const Footer = lazy(() => import('../components/Footer'));

// Simple loader for sections
const SectionLoader = () => (
  <div className="w-full min-h-64 flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center space-y-3">
      <div className="w-8 h-8 border-2 border-[#E60076] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Loading content...</p>
    </div>
  </div>
);

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [user, setUser] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [sectionsLoaded, setSectionsLoaded] = useState(false);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("🔍 Home: Checking Appwrite session...");
        const userData = await account.get();
        setUser(userData);
        setIsLoggedIn(true);
        console.log("✅ Home: User authenticated:", userData.email);
        
        // Check if we should show skeleton
        if (localStorage.getItem('showHomeSkeleton')) {
          setShowSkeleton(true);
          setTimeout(() => {
            setShowSkeleton(false);
            localStorage.removeItem('showHomeSkeleton');
            setLoading(false);
          }, 1200);
        } else {
          setLoading(false);
        }
        
      } catch (error) {
        console.error("❌ Home: No valid Appwrite session - redirecting to login");
        setIsLoggedIn(false);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate, setIsLoggedIn]);

  // Setup Intersection Observer for lazy loading - SIMPLIFIED VERSION
  useEffect(() => {
    if (loading || showSkeleton) return;

    console.log("🔄 Setting up Intersection Observer...");
    
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          console.log(`🎯 Section ${sectionId} is now visible`);
          
          // Mark all sections as loaded after first one is visible
          setSectionsLoaded(true);
          
          // You could also set individual section visibility here
          // For now, we'll load all sections when any one becomes visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections with a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = ['about', 'features', 'suggestion', 'goals', 'faq', 'footer'];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          console.log(`👀 Observing section: ${sectionId}`);
          observer.observe(element);
        } else {
          console.warn(`⚠️ Section not found: ${sectionId}`);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading, showSkeleton]);

  // Hide scroll arrow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setIsLoggedIn(false);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Show skeleton if loading and showSkeleton is true
  if (showSkeleton) {
    return <HomeSkeleton />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#E60076] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70 text-sm">Verifying session...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      <Navbar setIsLoggedIn={setIsLoggedIn} user={user} onLogout={handleLogout} />

      {/* Background glow blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-[#F361B0]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#E60076]/10 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full pt-20 sm:mt-10 sm:pt-10"
      >
        <div
          id="banner-container"
          className="w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] px-4 sm:px-6 lg:px-8"
        >
          <Banner />
        </div>

        {/* Fixed Scroll Arrow */}
        {showScrollArrow && (
          <motion.div
            onClick={handleScrollDown}
            className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-transparent rounded-full p-2 group-hover:bg-black/50 transition-all">
              <FaChevronDown className="text-white/70 group-hover:text-white text-xl transition-colors" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Lazy Loaded Sections - SIMPLIFIED */}
      <div className="w-full">
        {/* About Section */}
        <div id="about" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </div>

        {/* Features Section */}
        <div id="features" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </div>

        {/* Suggestion Section */}
        <div id="suggestion" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <Suggestion />
          </Suspense>
        </div>

        {/* Goals Section */}
        <div id="goals" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <Goals />
          </Suspense>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        </div>

        {/* Footer Section */}
        <div id="footer" className="w-full">
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;