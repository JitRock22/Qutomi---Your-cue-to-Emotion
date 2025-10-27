// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaArrowLeft, FaExpand, FaCompress, FaRedo, FaMouse, FaMobile, FaCube } from "react-icons/fa";
// import { useState, useRef, useEffect } from "react";

// const Experience3D = () => {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   // Mock 3D model loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current?.requestFullscreen?.();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen?.();
//       setIsFullscreen(false);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
    
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    
//     setRotation({ x: -y, y: x });
//   };

//   const resetRotation = () => {
//     setRotation({ x: 0, y: 0 });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//       </div>

//       {/* Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-50 p-6"
//       >
//         <Link
//           to="/"
//           className="group inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
//         >
//           <motion.div
//             whileHover={{ x: -2 }}
//             transition={{ duration: 0.2 }}
//           >
//             <FaArrowLeft className="text-white/80 group-hover:text-white text-lg" />
//           </motion.div>
//           <span className="text-white/80 group-hover:text-white font-medium">Back to Home</span>
//         </Link>
//       </motion.div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-center mb-8"
//         >
//           {/* Badge */}
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//           >
//             <FaCube className="text-[#F361B0] text-sm" />
//             <span className="text-white/80 text-sm font-medium">3D Experience</span>
//           </motion.div>

//           {/* Main Heading */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//             Explore Our
//             <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent">
//               3D Model
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
//             Interact with our revolutionary product in immersive 3D. Rotate, zoom, and explore every detail from every angle.
//           </p>
//         </motion.div>

//         {/* 3D Viewer Container */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="relative max-w-6xl mx-auto"
//         >
//           {/* 3D Viewer */}
//           <div
//             ref={containerRef}
//             className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm aspect-video w-full"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={() => setRotation({ x: 0, y: 0 })}
//           >
//             {/* Loading State */}
//             {isLoading && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   className="flex flex-col items-center gap-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <div className="w-12 h-12 border-2 border-[#F361B0] border-t-transparent rounded-full animate-spin"></div>
//                   <p className="text-white/80 text-lg">Loading 3D Model...</p>
//                 </motion.div>
//               </div>
//             )}

//             {/* 3D Model Placeholder */}
//             <motion.div
//               className={`w-full h-full flex items-center justify-center ${isLoading ? 'hidden' : 'block'}`}
//               animate={{
//                 rotateX: rotation.x,
//                 rotateY: rotation.y,
//               }}
//               transition={{ type: "spring", stiffness: 100, damping: 15 }}
//             >
//               {/* Mock 3D Cube */}
//               <div className="relative w-64 h-64" style={{ transformStyle: 'preserve-3d' }}>
//                 {/* Front Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#F361B0]/20 to-[#00FFFF]/20 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateZ(32px)' }}
//                 />
//                 {/* Back Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#00FFFF]/20 to-[#F361B0]/20 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateZ(-32px) rotateY(180deg)' }}
//                 />
//                 {/* Top Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#F361B0]/15 to-[#00FFFF]/15 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateY(-32px) rotateX(90deg)' }}
//                 />
//                 {/* Bottom Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#00FFFF]/15 to-[#F361B0]/15 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateY(32px) rotateX(-90deg)' }}
//                 />
//                 {/* Left Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#F361B0]/25 to-[#00FFFF]/25 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateX(-32px) rotateY(-90deg)' }}
//                 />
//                 {/* Right Face */}
//                 <div 
//                   className="absolute w-64 h-64 bg-gradient-to-br from-[#00FFFF]/25 to-[#F361B0]/25 border border-white/20 rounded-xl"
//                   style={{ transform: 'translateX(32px) rotateY(90deg)' }}
//                 />
//               </div>
//             </motion.div>

//             {/* Controls Overlay */}
//             {!isLoading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4"
//               >
//                 {/* Control Buttons */}
//                 <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
//                   <button
//                     onClick={toggleFullscreen}
//                     className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
//                   >
//                     {isFullscreen ? (
//                       <FaCompress className="text-white/80 group-hover:text-white text-lg" />
//                     ) : (
//                       <FaExpand className="text-white/80 group-hover:text-white text-lg" />
//                     )}
//                   </button>
                  
//                   <button
//                     onClick={resetRotation}
//                     className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
//                   >
//                     <FaRedo className="text-white/80 group-hover:text-white text-lg" />
//                   </button>
//                 </div>
//               </motion.div>
//             )}

//             {/* Instructions */}
//             {!isLoading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 className="absolute top-6 left-6"
//               >
//                 <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
//                   <div className="flex items-center gap-2 text-white/70">
//                     <FaMouse className="text-[#F361B0]" />
//                     <span className="text-sm font-medium">Drag to rotate</span>
//                   </div>
//                   <div className="w-px h-4 bg-white/20"></div>
//                   <div className="flex items-center gap-2 text-white/70">
//                     <FaMobile className="text-[#00FFFF]" />
//                     <span className="text-sm font-medium">Pinch to zoom</span>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </div>

//           {/* Features Grid */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
//           >
//             {[
//               {
//                 icon: "🎯",
//                 title: "Interactive Controls",
//                 description: "Rotate, zoom, and pan for complete control"
//               },
//               {
//                 icon: "🔍",
//                 title: "Detailed View",
//                 description: "Examine every detail with high precision"
//               },
//               {
//                 icon: "📱",
//                 title: "Responsive Design",
//                 description: "Perfect experience on all devices"
//               }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
//               >
//                 <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-white font-semibold text-lg mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <div className="inline-flex flex-col sm:flex-row gap-4">
//             <Link
//               to="/suggestions"
//               className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
//               <div className="relative z-10 flex items-center gap-3">
//                 <span className="text-lg">Share Your Feedback</span>
//               </div>
//             </Link>
            
//             <Link
//               to="/"
//               className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
//             >
//               <span className="text-lg">Explore More</span>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Experience3D;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExpand, FaCompress, FaRedo, FaMouse, FaMobile, FaCube, FaHome } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';

// 3D Model Component with error handling
function Model({ url }) {
  const [error, setError] = useState(false);
  const { scene, error: loadError } = useGLTF(url, undefined, undefined, (e) => {
    console.error('Failed to load model:', e);
    setError(true);
  });
  
  const modelRef = useRef();

  // Auto-rotation when not interacting
  useFrame((state, delta) => {
    if (modelRef.current && !error) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  if (error || loadError) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#F361B0" 
          emissive="#F361B0" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    );
  }

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

// Fallback component if model fails to load
function FallbackModel() {
  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#F361B0" 
          emissive="#F361B0" 
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial 
          color="#00FFFF" 
          emissive="#00FFFF" 
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

// Custom Controls
function CustomControls({ controlsRef }) {
  const { camera, gl } = useThree();
  
  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={3}
      maxDistance={15}
      rotateSpeed={0.8}
      zoomSpeed={0.8}
      panSpeed={0.8}
      target={[0, 0, 0]}
    />
  );
}

// Professional Minimal Loader Component
function CustomLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a]">
      <div className="text-center max-w-md mx-auto px-6">
        
        {/* Professional Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Qutomi
          </h1>
          <div className="h-px w-16 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm font-light">
            Loading 3D Experience
          </p>
        </motion.div>

        {/* Modern Dot Loader */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                backgroundColor: [
                  "rgb(156, 163, 175)",
                  "rgb(243, 97, 176)",
                  "rgb(156, 163, 175)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="max-w-xs mx-auto">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F361B0] to-[#00FFFF]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>

        {/* Subtle Status */}
        <motion.p
          className="text-gray-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Initializing 3D environment...
        </motion.p>

      </div>
    </div>
  );
}

// Scene component that contains all the 3D elements
function Scene({ modelUrl, modelError, setIsLoading, controlsRef }) {
  const { camera } = useThree();

  // Center the camera on the model
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    
    if (controlsRef.current) {
      controlsRef.current.update();
    }
    
    setIsLoading(false);
  }, [camera, controlsRef, setIsLoading]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      
      {/* Model - Centered */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {modelError ? (
          <FallbackModel />
        ) : (
          <Model url={modelUrl} />
        )}
      </Float>
      
      {/* Custom Controls */}
      <CustomControls controlsRef={controlsRef} />
      
      {/* Environment */}
      <Environment preset="studio" />
    </>
  );
}

const Experience3D = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modelError, setModelError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const controlsRef = useRef();

  // Using reliable 3D model URLs
  const modelUrls = [
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf",
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/FlightHelmet/glTF/FlightHelmet.gltf",
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SciFiHelmet/glTF/SciFiHelmet.gltf"
  ];

  // Select a random reliable model
  const modelUrl = modelUrls[0]; // Using the first reliable URL

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Faster loading - only show loader for 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#F361B0]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 p-4 sm:p-6"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowLeft className="text-white/80 group-hover:text-white text-lg" />
          </motion.div>
          <span className="text-white/80 group-hover:text-white font-medium text-sm sm:text-base">Back to Home</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-4 sm:mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FaCube className="text-[#F361B0] text-sm" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">3D Experience</span>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent mt-1 sm:mt-2">
              Qutomi Virtually
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
            Interact with our premium design from every perspective
          </p>
        </motion.div>

        {/* 3D Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* 3D Viewer with Three.js */}
          <div
            ref={containerRef}
            className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm w-full"
            style={{ 
              height: isMobile ? '70vh' : '60vh',
              minHeight: isMobile ? '500px' : '600px'
            }}
          >
            {isLoading ? (
              <CustomLoader />
            ) : (
              <Canvas
                camera={{ position: [0, 0, 5], fov: isMobile ? 60 : 45 }}
                style={{ background: 'transparent' }}
                gl={{ antialias: true }}
                dpr={[1, 2]}
              >
                <Scene 
                  modelUrl={modelUrl}
                  modelError={modelError}
                  setIsLoading={setIsLoading}
                  controlsRef={controlsRef}
                />
              </Canvas>
            )}

            {/* Controls Overlay - Left side for desktop */}
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`absolute ${isMobile ? 'bottom-3 left-1/2 -translate-x-1/2' : 'bottom-6 left-6'}`}
              >
                <div className={`flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/10 ${isMobile ? 'flex-row' : 'flex-col'}`}>
                  {/* Reset View */}
                  <button
                    onClick={resetView}
                    className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:scale-110"
                    title="Reset View"
                  >
                    <FaRedo className="text-white/80 group-hover:text-white text-sm sm:text-lg" />
                  </button>
                  
                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:scale-110"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  >
                    {isFullscreen ? (
                      <FaCompress className="text-white/80 group-hover:text-white text-sm sm:text-lg" />
                    ) : (
                      <FaExpand className="text-white/80 group-hover:text-white text-sm sm:text-lg" />
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Instructions */}
            {!isLoading && !isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 right-6"
              >
                <div className="flex flex-col items-center gap-3 bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-white/70">
                    <FaMouse className="text-[#F361B0] text-sm" />
                    <span className="text-sm font-medium">Drag to rotate</span>
                  </div>
                  <div className="w-full h-px bg-white/20"></div>
                  <div className="flex items-center gap-2 text-white/70">
                    <FaMobile className="text-[#00FFFF] text-sm" />
                    <span className="text-sm font-medium">Scroll to zoom</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mobile Instructions */}
            {!isLoading && isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-3 left-3 right-3"
              >
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <p className="text-white/70 text-xs font-medium">Touch and drag to rotate • Pinch to zoom</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/suggestions"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F361B0] to-[#FF9CDA] text-white font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-xl sm:rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-lg text-white">Share Your Experience</span>
              </div>
            </Link>
            
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience3D;