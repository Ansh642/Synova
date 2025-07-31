import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when scrolled 50% down the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = (scrollPosition / bodyHeight) * 100;

      if (scrollPercentage > 50 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Store dismissal in localStorage to remember user's choice
    localStorage.setItem('popupDismissed', 'true');
  };

  // Check localStorage on component mount
  useEffect(() => {
    const wasDismissed = localStorage.getItem('popupDismissed') === 'true';
    if (wasDismissed) {
      setIsDismissed(true);
    } else {
      // Only show after a delay if not dismissed before
      const timer = setTimeout(() => {
        if (!isDismissed) {
          setIsVisible(true);
        }
      }, 5000); // Show after 5 seconds of page load
      return () => clearTimeout(timer);
    }
  }, []);

  // Don't show if dismissed
  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="p-6 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <FiX size={20} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Explore the Power of AI?</h3>
              <p className="text-gray-600 mb-6">Discover how our AI solutions can transform your business today.</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Get Started
                </a>
                <button
                  onClick={handleDismiss}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopup;
