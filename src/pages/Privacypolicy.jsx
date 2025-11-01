import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaCookie, FaCreditCard, FaRocket, FaEnvelope, FaCheckCircle, FaEye, FaTrash, FaEdit, FaDownload, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FaUserLock,
      title: "Information We Collect",
      content: "We collect your name, email, and payment details when you sign up or make a purchase. Login is handled securely through Google Sign-In and Appwrite Authentication.",
      features: [
        "Personal Information (Name, Email)",
        "Secure Authentication via Google & Appwrite",
        "Payment Details (processed externally)",
        "Usage Analytics (Browser, IP, Device)"
      ]
    },
    {
      icon: FaRocket,
      title: "How We Use Your Information",
      content: "Your data helps us provide and improve our services while maintaining the highest security standards.",
      points: [
        "Create and manage your account",
        "Process payments and orders securely",
        "Send important updates and support",
        "Enhance product performance"
      ],
      highlight: "We never sell your personal information to third parties."
    },
    {
      icon: FaCreditCard,
      title: "Payments & Security",
      content: "Your financial safety is our top priority. All payments are handled by industry-leading secure payment gateways.",
      features: [
        "PCI DSS Compliant Processors",
        "No Card Data Stored on Our Servers",
        "Encrypted Transaction Channels",
        "Instant Payment Confirmation"
      ]
    },
    {
      icon: FaCookie,
      title: "Cookies & Tracking",
      content: "We use minimal, essential cookies to enhance your browsing experience and website functionality.",
      features: [
        "Session Management",
        "Performance Analytics",
        "Personalized Experience",
        "Opt-out Available Anytime"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Data Protection",
      content: "Your data is protected with enterprise-grade security measures and encrypted storage systems.",
      features: [
        "Appwrite Encrypted Database",
        "Regular Security Audits",
        "SSL/TLS Encryption",
        "Secure API Endpoints"
      ]
    },
    {
      icon: FaCheckCircle,
      title: "Your Rights",
      content: "We respect your privacy and aim to keep you informed about how your data is used. As a Qtomi user, you have the right to:",
      rights: [
        { icon: FaEye, text: "Request to view the personal information we hold about you (such as your name and email)" },
        { icon: FaEdit, text: "Request corrections or deletion of your data by contacting our support team" },
        { icon: FaEnvelope, text: "Withdraw consent for marketing communications at any time" },
        { icon: FaInfoCircle, text: "Ask how your data is stored, secured, and used" }
      ],
      warning: "Currently, Qtomi does not provide an in-app option to edit or delete your account directly. However, you can contact us at support@qtomi.com to make any such requests, and we'll handle them manually within a reasonable time."
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
              Privacy Policy
            </h1>
            <div className="w-20 h-0.5 bg-gray-600 mx-auto rounded-full mb-6" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/3 border border-white/10 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <p className="text-green-500 font-medium text-sm">
                  Effective November 1, 2025
                </p>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                At <span className="text-[#00FFFF] font-semibold">Qtomi</span>, we value your privacy and are committed to protecting your personal information.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <FaShieldAlt className="text-blue-400 w-3 h-3" />
                <span className="text-blue-400 text-xs font-medium">Your privacy matters</span>
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
                        ? 'bg-yellow-500/10 border-yellow-500/20' 
                        : 'bg-white/5 border-white/10'
                    }`}>
                      <section.icon className={`w-4 h-4 ${
                        section.warning ? 'text-yellow-400' : 'text-gray-300'
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
                      <div className="p-3 bg-green-500/10 border border-green-500/20 rounded mb-3">
                        <p className="text-green-400 text-xs font-medium text-center">
                          {section.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                {section.features && (
                  <div className="space-y-2 mb-3">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Points List */}
                {section.points && (
                  <div className="space-y-2 mb-3">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400 w-3 h-3 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Rights List */}
                {section.rights && (
                  <div className="space-y-2 mb-3">
                    {section.rights.map((right, rightIndex) => (
                      <div key={rightIndex} className="flex items-start gap-2 p-2 bg-blue-500/5 border border-blue-500/10 rounded">
                        <right.icon className="text-blue-400 w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{right.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Warning Text */}
                {section.warning && (
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
                    <div className="flex items-start gap-2">
                      <FaExclamationTriangle className="text-yellow-400 w-3 h-3 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-300 text-xs font-medium">
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
              <h3 className="text-lg font-semibold text-white">Privacy Concerns</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              For any privacy-related inquiries or to exercise your data rights
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
                <span>Contact Privacy Team</span>
                <FaEnvelope className="w-3 h-3" />
              </motion.button>
            </Link>
            <Link to="/terms-of-service">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <span>Terms of Service</span>
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
              © 2025 Qtomi Inc. • Privacy Policy • Version 2.1
            </p>
            <p className="text-gray-600 text-xs mt-1">
              We are committed to protecting your privacy and being transparent about our data practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;