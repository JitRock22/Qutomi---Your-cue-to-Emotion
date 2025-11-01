import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaSync, FaVideo, FaMoneyBillWave, FaShippingFast, FaEnvelope, FaBan, FaCheckCircle, FaBoxOpen, FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  const sections = [
    {
      icon: FaBan,
      title: "No Return or Cancellation After Delivery",
      content: "All sales are final once the order has been shipped. We do not accept returns, cancellations, or refunds for:",
      points: [
        "Change of mind or preference",
        "Accidental or duplicate orders",
        "Cosmetic differences or packaging variations",
        "Damage caused by misuse, mishandling, or modification"
      ],
      warning: true,
      highlight: "All sales are final once the order has been shipped"
    },
    {
      icon: FaSync,
      title: "Replacement for Defective Products",
      content: "A replacement is provided only if the product arrives damaged or non-functional due to a verified manufacturing defect.",
      conditions: [
        { icon: FaCheckCircle, text: "You contact us within 3 days of delivery", color: "text-green-400" },
        { icon: FaVideo, text: "You provide a clear unboxing video and order details showing the issue", color: "text-blue-400" },
        { icon: FaBoxOpen, text: "Verified manufacturing defect confirmed by our team", color: "text-yellow-400" }
      ],
      note: "If approved, we will ship a replacement unit — not a refund."
    },
    {
      icon: FaVideo,
      title: "Proof Requirement",
      content: "To qualify for replacement, you must provide proper documentation:",
      requirements: [
        "The unboxing video must clearly show the issue at first power-on",
        "The item must be unused and in original packaging"
      ],
      warning: "Requests without proper proof or submitted after 3 days will not be accepted."
    },
    {
      icon: FaMoneyBillWave,
      title: "Refunds",
      content: "Qtomi does not issue refunds, except if:",
      points: [
        "A replacement cannot be provided due to stock unavailability",
        "The product is proven defective and approved by our team"
      ],
      highlight: "In such rare cases, a refund will be issued to the original payment method.",
      warning: true
    },
    {
      icon: FaShippingFast,
      title: "Shipping for Returns",
      content: "If a return is approved for replacement, the customer must securely ship the product to the provided address.",
      points: [
        "Return shipping costs are borne by the customer",
        "We cover shipping only when the error is on Qtomi's end"
      ]
    },
    {
      icon: FaQrcode,
      title: "Product Testing & Quality Assurance",
      content: "Every Qtomi unit undergoes strict functional and visual testing before dispatch to ensure quality and performance.",
      points: [
        "Minor variations in animation speed, brightness, or behavior may occur between units",
        "This is normal and not considered a defect"
      ],
      note: "Each product is carefully built and tested before shipping."
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
              Return & Refund Policy
            </h1>
            <div className="w-24 h-0.5 bg-gray-600 mx-auto rounded-full mb-6" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/3 border border-white/10 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <p className="text-green-400 font-medium text-sm">
                  Effective from November 1, 2025
                </p>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                At <span className="text-[#00FFFF] font-semibold">Qtomi</span>, each product is carefully built and tested before shipping. 
                Because Qtomi is a small electronic companion gadget, we maintain a strict no-return and no-refund policy 
                except for verified manufacturing defects.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                <FaExclamationTriangle className="text-red-400 w-3 h-3" />
                <span className="text-red-400 text-xs font-medium">Strict policy - Please read carefully</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Policy Sections */}
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
                      <div className={`p-3 rounded mb-3 ${
                        section.warning 
                          ? 'bg-red-500/10 border border-red-500/20' 
                          : 'bg-blue-500/10 border border-blue-500/20'
                      }`}>
                        <p className={`text-xs font-medium text-center ${
                          section.warning ? 'text-red-400' : 'text-blue-400'
                        }`}>
                          {section.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Points List */}
                {section.points && (
                  <div className="space-y-2 mb-3">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className={`flex items-start gap-2 p-2 rounded ${
                        section.warning 
                          ? 'bg-red-500/5 border border-red-500/10' 
                          : 'bg-white/5 border border-white/10'
                      }`}>
                        <FaExclamationTriangle className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                          section.warning ? 'text-red-400' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm ${
                          section.warning ? 'text-red-300' : 'text-gray-400'
                        }`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Conditions List */}
                {section.conditions && (
                  <div className="space-y-2 mb-3">
                    {section.conditions.map((condition, conditionIndex) => (
                      <div key={conditionIndex} className="flex items-center gap-2 p-2 bg-green-500/5 border border-green-500/10 rounded">
                        <condition.icon className={`w-3 h-3 ${condition.color}`} />
                        <span className="text-green-300 text-sm">{condition.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Requirements List */}
                {section.requirements && (
                  <div className="space-y-2 mb-3">
                    {section.requirements.map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 p-2 bg-blue-500/5 border border-blue-500/10 rounded">
                        <FaCheckCircle className="text-blue-400 w-3 h-3 flex-shrink-0" />
                        <span className="text-blue-300 text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Note Text */}
                {section.note && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded">
                    <p className="text-green-400 text-xs font-medium text-center">
                      {section.note}
                    </p>
                  </div>
                )}

                {/* Warning Text */}
                {section.warning && !section.highlight && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded">
                    <div className="flex items-start gap-2">
                      <FaExclamationTriangle className="text-red-400 w-3 h-3 mt-0.5 flex-shrink-0" />
                      <p className="text-red-300 text-xs font-medium">
                        {section.warning}
                      </p>
                    </div>
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
              <h3 className="text-lg font-semibold text-white">Replacement Requests</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              For verified defect or replacement requests, please contact us within 3 days of delivery
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
                <span>Contact Support</span>
                <FaEnvelope className="w-3 h-3" />
              </motion.button>
            </Link>
            <Link to="/terms">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <span>Terms of Service</span>
                <FaExclamationTriangle className="w-3 h-3" />
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
              © 2025 Qtomi Inc. • Return & Refund Policy • Version 1.0
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Due to the electronic nature of our products, we maintain strict quality control and limited return options.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;