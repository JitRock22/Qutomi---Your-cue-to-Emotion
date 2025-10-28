// import { account } from '../config/appwriteConfig';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useEffect, useState, useCallback } from 'react';
// import HomeSkeleton from '../components/Homeskeleton';
// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import About from '../components/Aboutsection';
// import Features from '../components/Features';
// import Suggestion from '../components/suggestion';
// import Footer from '../components/Footer';
// import Goals from '../components/Goals'
// import FAQ from '../components/FAQSection';
// import { FaChevronDown } from 'react-icons/fa';

// const Home = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showScrollArrow, setShowScrollArrow] = useState(true);

//   useEffect(() => {
//     if (localStorage.getItem('showHomeSkeleton')) {
//       setLoading(true);
//       setTimeout(() => setLoading(false), 1200);
//       localStorage.removeItem('showHomeSkeleton');
//     }
//   }, []);

//   // Hide scroll arrow when user scrolls down
//   useEffect(() => {
//     const handleScroll = () => {
//       // Hide arrow when user scrolls down more than 100px
//       if (window.scrollY > 100) {
//         setShowScrollArrow(false);
//       } else {
//         setShowScrollArrow(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
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
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
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

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 pt-20 sm:mt-10 sm:pt-10 w-full px-4 sm:px-6"
//       >
//         <div id="banner-container" className="rounded-3xl overflow-hidden w-full sm:h-[70vh] md:h-[80vh] lg:h-[85vh] max-w-[95vw] mx-auto">
//           <Banner />
//         </div>

//         {/* Fixed Scroll Arrow - Only shows when at top */}
//         {showScrollArrow && (
//           <motion.div
//             onClick={handleScrollDown}
//             className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
//             animate={{ y: ["0%", "20%", "0%"] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <FaChevronDown className="text-white/50 text-3xl" />
//           </motion.div>
//         )}
//       </motion.div>

//       <About />
//       <Features />
//       <Suggestion />
//       <Goals/>
//       <FAQ />
//       <Footer/>
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

// Lazy load only components that are below the fold
const About = lazy(() => import('../components/Aboutsection'));
const Features = lazy(() => import('../components/Features'));
const Suggestion = lazy(() => import('../components/suggestion'));
const Goals = lazy(() => import('../components/Goals'));
const FAQ = lazy(() => import('../components/FAQSection'));
const Footer = lazy(() => import('../components/Footer'));

// Prefetch function for lazy components
const prefetchLazyComponents = () => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      Promise.all([
        import('../components/Aboutsection'),
        import('../components/Features'),
        import('../components/suggestion'),
        import('../components/Goals'),
        import('../components/FAQSection'),
        import('../components/Footer')
      ]);
    });
  }
};

// Error Boundary Component for individual sections
const SectionErrorBoundary = ({ children, sectionName }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(`Error in ${sectionName}:`, error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, [sectionName]);

  if (hasError) {
    return (
      <div className="w-full min-h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-gray-700 my-8">
        <div className="text-center text-white">
          <div className="text-2xl mb-2">⚠️</div>
          <p className="text-sm text-gray-300">Failed to load {sectionName}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-[#E60076] text-white rounded-lg text-sm hover:bg-[#F361B0] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return children;
};

// Improved Loading component that maintains full width
const SectionLoader = ({ minHeight = '400px' }) => (
  <div
    className="w-full flex items-center justify-center bg-transparent"
    style={{ minHeight }}
  >
    <div className="flex flex-col items-center space-y-3">
      <div className="w-8 h-8 border-2 border-[#E60076] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Section-specific height configurations
const sectionHeights = {
  about: '500px',
  features: '600px',
  suggestion: '400px',
  goals: '500px',
  faq: '600px',
  footer: '300px'
};

// Main LazySection component with full width handling
const LazySection = ({
  sectionId,
  isVisible,
  component: Component,
  sectionName,
  ...props
}) => {
  const sectionHeight = sectionHeights[sectionId] || '400px';

  return (
    <div
      id={sectionId}
      className="w-full"
      style={{ minHeight: isVisible ? 'auto' : sectionHeight }}
    >
      {!isVisible ? (
        <SectionLoader minHeight={sectionHeight} />
      ) : (
        <SectionErrorBoundary sectionName={sectionName}>
          <Suspense fallback={<SectionLoader minHeight={sectionHeight} />}>
            <Component {...props} />
          </Suspense>
        </SectionErrorBoundary>
      )}
    </div>
  );
};

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    features: false,
    suggestion: false,
    goals: false,
    faq: false,
    footer: false
  });
  const [prefetchDone, setPrefetchDone] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('showHomeSkeleton')) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1200);
      localStorage.removeItem('showHomeSkeleton');
    }
  }, []);

  // Prefetch lazy components on mount and user interaction
  useEffect(() => {
    const handlePrefetch = () => {
      if (!prefetchDone) {
        prefetchLazyComponents();
        setPrefetchDone(true);
      }
    };

    // Prefetch on mount
    handlePrefetch();

    // Prefetch on user interactions
    const events = ['mousemove', 'touchstart', 'keydown'];
    const prefetchOnInteraction = () => {
      handlePrefetch();
      events.forEach(event => {
        window.removeEventListener(event, prefetchOnInteraction);
      });
    };

    events.forEach(event => {
      window.addEventListener(event, prefetchOnInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, prefetchOnInteraction);
      });
    };
  }, [prefetchDone]);

  // Intersection Observer to load components when they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '200px', // Increased to load earlier
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: true
          }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe only lazy loaded sections (below the fold)
    const lazySections = [
      'about',
      'features',
      'suggestion',
      'goals',
      'faq',
      'footer'
    ];

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      lazySections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

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

  // Fixed scroll function - scrolls to About section
  const handleScrollDown = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, []);

  if (loading) return <HomeSkeleton />;

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      <Navbar setIsLoggedIn={setIsLoggedIn} />

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

      {/* Banner Section - Loads Immediately */}
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

        {/* Fixed Scroll Arrow - Only shows when at top */}
        {showScrollArrow && (
          <motion.div
            onClick={handleScrollDown}
            className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-trasn rounded-full p-2 group-hover:bg-black/50 transition-all">
              <FaChevronDown className="text-white/70 group-hover:text-white text-xl transition-colors" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Lazy Loaded Sections with Full Width */}
      <div className="w-full">
        <LazySection
          sectionId="about"
          isVisible={visibleSections.about}
          component={About}
          sectionName="About Section"
        />

        <LazySection
          sectionId="features"
          isVisible={visibleSections.features}
          component={Features}
          sectionName="Features Section"
        />

        <LazySection
          sectionId="suggestion"
          isVisible={visibleSections.suggestion}
          component={Suggestion}
          sectionName="Suggestion Section"
        />

        <LazySection
          sectionId="goals"
          isVisible={visibleSections.goals}
          component={Goals}
          sectionName="Goals Section"
        />

        <LazySection
          sectionId="faq"
          isVisible={visibleSections.faq}
          component={FAQ}
          sectionName="FAQ Section"
        />

        <LazySection
          sectionId="footer"
          isVisible={visibleSections.footer}
          component={Footer}
          sectionName="Footer"
        />
      </div>
    </div>
  );
};

export default Home;



