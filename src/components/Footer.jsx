import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 text-gray-400 py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Section: Branding, Socials, and Copyright */}
        <div className="md:w-1/3 lg:w-1/4">
          <h3 className="text-5xl font-bold text-text-color">Qutomi</h3>
          <p className="mt-2 text-sm">Your cue to Emotions.</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-5 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={22} />
            </a>
          </div>

          {/* Copyright Notice */}
          <p className="text-xs mt-8">&copy; 2025 Qutomi. All Rights Reserved.</p>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="md:w-2/3 lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white tracking-wider">Product</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/" className="hover:text-[#F361B0] transition-colors">Home</Link></li>
              <li><Link to="/#features" className="hover:text-[#F361B0] transition-colors">Features</Link></li>
              <li><Link to="/suggestions" className="hover:text-[#F361B0] transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider">Community</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/#about" className="hover:text-[#F361B0] transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-[#F361B0] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-[#F361B0] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F361B0] transition-colors">Return Policy</a></li>
               <li><a href="#" className="hover:text-[#F361B0] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;