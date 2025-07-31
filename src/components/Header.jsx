import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { 
      name: "Features", 
      path: "/features",
      special: true
    },
    { 
      name: "Pricing", 
      path: "/pricing",
      special: true
    },
    { 
      name: "Use Cases", 
      path: "/use-cases",
      special: true 
    },
    { 
      name: "About", 
      path: "/about",
      special: true 
    },
    { 
      name: "Contact", 
      path: "/contact",
      special: true 
    }
  ];

  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-50/80 via-yellow-50/80 to-blue-50/80 backdrop-blur-md z-50 shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Synova
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full">
            <div className="flex items-center h-full space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.path}
                  className="relative h-full cursor-pointer flex items-center"
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-5 py-2 relative group ${item.special ? 'px-4' : ''} hover:bg-blue-50/30 rounded-lg transition-colors`}
                  >
                    <span className={`relative z-10 ${item.special ? 'px-3 py-1.5' : ''}`}>
                      {item.name}
                    </span>
                    {item.special ? (
                      <motion.span 
                        className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredItem === item.path ? 1 : 0,
                          borderColor: hoveredItem === item.path ? 'rgba(59, 130, 246, 1)' : 'transparent',
                          boxShadow: hoveredItem === item.path ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none',
                        }}
                      />
                    ) : (
                      <motion.span
                        initial={{ height: 0, bottom: '-2px' }}
                        animate={{
                          height: hoveredItem === item.path ? '2px' : 0,
                          bottom: hoveredItem === item.path ? '-2px' : '-4px'
                        }}
                        className="absolute left-4 w-[70%] bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full cursor-pointer"
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="ml-6">
              <Link
                to="/pricing"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Get Started <FiChevronDown className="transform rotate-90" />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-3 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 rounded-xl shadow-2xl border border-blue-100 overflow-hidden mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-6 py-4 text-blue-900 hover:bg-blue-50/50 transition-colors border-b border-blue-50 last:border-0 font-medium ${item.special ? 'font-semibold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="p-4 border-t border-blue-50">
              <Link
                to="/pricing"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}