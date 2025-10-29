import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExpand, FaCompress, FaRedo, FaMouse, FaMobile, FaCube, FaHome } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';

// Simple Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full bg-red-500/10 rounded-2xl border border-red-500/20">
          <div className="text-center p-6">
            <div className="text-red-400 text-lg mb-2">3D Scene Error</div>
            <p className="text-red-300 text-sm">Failed to load 3D experience</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 3D Model Component for your qtomi.glb
function Model({ url, onError }) {
  const [error, setError] = useState(false);
  const modelRef = useRef();
  
  const { scene, error: loadError } = useGLTF(url, true);

  useEffect(() => {
    if (loadError) {
      console.error('Failed to load model:', loadError);
      setError(true);
      onError?.();
    }
  }, [loadError, onError]);

  // Auto-rotation when not interacting
  useFrame((state, delta) => {
    if (modelRef.current && !error) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  if (error || loadError) {
    return <FallbackModel />;
  }

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={0.02}
      position={[0, 0, 0]}
    />
  );
}

// Fallback component if model fails to load
function FallbackModel() {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
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
            Qtomi
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
          Loading Qtomi model...
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
          <Model url={modelUrl} onError={() => setIsLoading(false)} />
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

  // Use your local qtomi.glb file
  const modelUrl = "/models/qtomi.glb";

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Loading timeout
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

  const handleModelError = () => {
    setModelError(true);
  };

  return (
    <ErrorBoundary>
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
              Explore
              <span className="block bg-gradient-to-r from-[#F361B0] to-[#00FFFF] bg-clip-text text-transparent mt-1 sm:mt-2">
                Qtomi Virtually
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
              Interact with Qtomi from every perspective in 3D
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
    </ErrorBoundary>
  );
};

export default Experience3D;