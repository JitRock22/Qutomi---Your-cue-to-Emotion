import { motion } from 'framer-motion';
import { FaEnvelope, FaClock, FaPaperPlane, FaHeadset, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEBFORM,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Qtomi Contact Form',
          botcheck: '' // Important for bot protection
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#F361B0]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-72 sm:h-72 bg-[#00FFFF]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:80px_80px]" />
      </div>

      {/* Contact Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6"
          >
            <FaHeadset className="text-[#F361B0] text-xs sm:text-sm" />
            <span className="text-white/80 text-xs sm:text-sm font-medium">Get In Touch</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-[#F361B0] via-[#FF8DC6] to-[#00FFFF] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have questions or need support? We're here to help you with anything related to Qtomi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Talk</h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Reach out to us for any inquiries, technical support, or partnership opportunities. 
                Our team is dedicated to providing you with the best experience.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-[#00FFFF]/30 transition-all duration-300"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-lg sm:rounded-xl flex-shrink-0">
                  <FaEnvelope className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email Us</h3>
                  <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm">Send us an email anytime</p>
                  <div className="text-[#00FFFF] font-medium text-sm sm:text-base truncate">
                    support@qtomi.com
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-[#F361B0]/30 transition-all duration-300"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-r from-[#00FFFF] to-[#F361B0] rounded-lg sm:rounded-xl flex-shrink-0">
                  <FaClock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Response Time</h3>
                  <p className="text-gray-400 mb-1 text-xs sm:text-sm">Typically replies within 24 hours</p>
                  <p className="text-green-400 text-xs sm:text-sm">✓ Quick and helpful responses</p>
                </div>
              </motion.div>

              {/* Support Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-[#00FFFF]/30 transition-all duration-300"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-r from-[#F361B0] to-[#00FFFF] rounded-lg sm:rounded-xl flex-shrink-0">
                  <FaHeadset className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Support Hours</h3>
                  <p className="text-gray-400 mb-1 text-xs sm:text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Weekends: Limited availability</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm p-4 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Fill out the form below and we'll get back to you soon.</p>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg sm:rounded-xl"
              >
                <div className="flex items-center gap-2 sm:gap-3 text-green-400">
                  <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base">Message sent successfully!</p>
                    <p className="text-green-300 text-xs sm:text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Bot Check (Hidden) - Important for Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F361B0]/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#E60076] to-[#F361B0] text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E60076] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl" />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;