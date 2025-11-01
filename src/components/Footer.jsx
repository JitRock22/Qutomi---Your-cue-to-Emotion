import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#080808] to-[#0a0a0a] border-t border-white/5 text-gray-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#F361B0]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Brand Section */}
            <motion.div
              className="lg:col-span-5 xl:col-span-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F361B0] to-[#00FFFF] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Qtomi
                </h3>
              </div>

              <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Your cue to emotion — Smart. Expressive. Alive. Welcome to the next generation of companions.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: <FaTwitter size={18} />, href: "https://twitter.com", color: "hover:text-blue-400" },
                  { icon: <FaInstagram size={18} />, href: "https://instagram.com", color: "hover:text-pink-500" },
                  { icon: <FaGithub size={18} />, href: "https://github.com", color: "hover:text-white" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
  {
    title: "Product",
    links: [
      { name: "Home", to: "/" },
      { name: "Features", to: "#features" },
      { name: "Feedback", to: "/suggestions" }
    ]
  },
  {
    title: "Company", 
    links: [
      { name: "About Us", to: "#about" },
      { name: "Our Goals", to: "#goals" },
      { name: "Contact", to: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms of Service", to: "/terms-of-service" },
      { name: "Return Policy", to: "/refund-policy" }
    ]
  }
].map((section, sectionIndex) => (
  <div key={sectionIndex} className="text-center sm:text-left">
    <h4 className="font-bold text-white text-lg mb-4 lg:mb-6">
      {section.title}
    </h4>
    <ul className="space-y-3 lg:space-y-4">
      {section.links.map((link, linkIndex) => (
        <li key={linkIndex}>
          {link.to.startsWith('#') ? (
            // Use regular anchor tag for anchor links
            <a 
              href={link.to}
              className="group flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-all duration-300 text-sm lg:text-base"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </a>
          ) : (
            // Use Link for actual routes
            <Link 
              to={link.to}
              className="group flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-all duration-300 text-sm lg:text-base"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              {/* Copyright */}
              <motion.p
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                &copy; 2025 Qtomi.com All rights reserved.
              </motion.p>

              {/* Made with love - Separate line on mobile */}
              <motion.p
                className="text-sm text-gray-500 flex items-center justify-center gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Made with <FaHeart className="text-[#F361B0]" /> for a better tomorrow.
              </motion.p>

              {/* Additional Links */}
              <div className="flex gap-4 text-sm flex-wrap justify-center">
                <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;