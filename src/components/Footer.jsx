import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 text-gray-800 py-16 px-6 relative overflow-hidden border-t border-gray-200">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-200 mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full bg-yellow-200 mix-blend-multiply filter blur-3xl animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Synova</span>
            </div>
            <p className="text-gray-600">
              Transforming customer interactions with AI-powered intelligence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                <FaDiscord className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Webinars
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMail className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>hello@synova.ai</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>+91 92893 53108</span>
              </li>
              <li className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all text-sm"
                >
                  Get in Touch
                </motion.button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Synova AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="" className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="" className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="" className="text-gray-600 hover:text-blue-500 text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>

      {/* Floating animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </footer>

  );
}

