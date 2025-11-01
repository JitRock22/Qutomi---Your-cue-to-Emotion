import { motion } from 'framer-motion';
import { FaGavel, FaUserShield, FaCreditCard, FaBox, FaCopyright, FaShieldAlt, FaFileContract, FaEnvelope, FaExclamationTriangle, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const sections = [
    {
      icon: FaGavel,
      title: "About Qtomi",
      content: "Qtomi is a small electronic companion gadget that reacts to user gestures and displays animations. Our website allows users to explore, sign in, and make purchases.",
      highlight: "By accessing or purchasing from our website, you agree to these Terms of Service."
    },
    {
      icon: FaUserShield,
      title: "Accounts",
      content: "Users can sign in using Google login through Appwrite authentication.",
      points: [
        "You are responsible for keeping your login details secure",
        "You are responsible for any activity on your account"
      ],
      warning: true
    },
    {
      icon: FaCreditCard,
      title: "Payments and Orders",
      content: "Payments are processed securely by third-party gateways.",
      points: [
        "Qtomi does not store your card or banking details",
        "Confirmed orders cannot be cancelled after shipment"
      ],
      warning: true
    },
    {
      icon: FaBox,
      title: "Product Details",
      content: "We aim to keep all product and pricing information accurate.",
      points: [
        "Qtomi may update features, prices, or stock at any time without notice"
      ]
    },
    {
      icon: FaCopyright,
      title: "Intellectual Property",
      content: "All 3D product designs, animations, text, images, logos, software, and the Qtomi name and brand identity are owned by Qtomi and protected under copyright and trademark laws.",
      points: [
        "You may not copy, reproduce, or modify any of these materials without our written permission"
      ],
      highlight: "Protected under copyright and trademark laws"
    },
    {
      icon: FaExclamationTriangle,
      title: "Liability",
      content: "Qtomi products are provided 'as is'.",
      points: [
        "We are not responsible for damage or loss caused by misuse or unauthorized modification",
        "Our liability is limited to the product's purchase price"
      ],
      warning: true
    },
    {
      icon: FaShieldAlt,
      title: "Privacy",
      content: "Your use of Qtomi is also governed by our Privacy Policy.",
      points: [
        "By using our site, you agree to our data handling practices"
      ]
    },
    {
      icon: FaFileContract,
      title: "Updates",
      content: "We may update these Terms occasionally.",
      points: [
        "Continued use of Qtomi means you accept the latest version"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#F361B0]/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00FFFF]/2 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Terms of Service
            </h1>
            <div className="w-20 h-0.5 bg-gray-600 mx-auto rounded-full mb-6" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/3 border border-white/10 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                <p className="text-green-600 font-medium text-sm">
                  Effective November 1, 2025
                </p>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Welcome to <span className="text-[#00FFFF] font-semibold">Qtomi</span>.
                By accessing or purchasing from our website, you agree to these Terms of Service.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                <FaExclamationTriangle className="text-yellow-400 w-3 h-3" />
                <span className="text-yellow-400 text-xs font-medium">Please read carefully</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="bg-white/3 border border-white/10 rounded-lg hover:border-white/15 transition-colors duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className={`p-2 border rounded ${
                      section.warning 
                        ? 'bg-red-500/10 border-red-500/20' 
                        : 'bg-white/5 border-white/10'
                    }`}>
                      <section.icon className={`w-4 h-4 ${
                        section.warning ? 'text-red-400' : 'text-gray-300'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-lg font-semibold text-white">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {section.content}
                    </p>

                    {/* Highlighted Text */}
                    {section.highlight && (
                      <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded mb-3">
                        <p className="text-blue-400 text-xs font-medium text-center">
                          {section.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Points List */}
                {section.points && (
                  <div className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className={`flex items-start gap-2 p-2 rounded ${
                        section.warning 
                          ? 'bg-red-500/5 border border-red-500/10' 
                          : 'bg-white/5 border border-white/10'
                      }`}>
                        {section.warning ? (
                          <FaExclamationTriangle className="text-red-400 w-3 h-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <FaCheck className="text-green-400 w-3 h-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          section.warning ? 'text-red-300' : 'text-gray-400'
                        }`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center border-t border-white/10 pt-8"
        >
          <div className="bg-white/3 border border-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaEnvelope className="text-[#00FFFF] w-4 h-4" />
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              For any questions or concerns about these Terms of Service
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FFFF]/10 border border-[#00FFFF]/20 rounded-lg">
              <FaEnvelope className="text-[#00FFFF] w-3 h-3" />
              <span className="text-[#00FFFF] font-medium text-sm">support@qtomi.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <span>Contact Us</span>
                <FaEnvelope className="w-3 h-3" />
              </motion.button>
            </Link>
            <Link to="/privacy-policy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <span>Privacy Policy</span>
                <FaShieldAlt className="w-3 h-3" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-8"
        >
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-500 text-xs">
              © 2025 Qtomi Inc. • Terms of Service • Version 1.0
            </p>
            <p className="text-gray-600 text-xs mt-1">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;