import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const FloatingImages = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  // Image data - using simple emoji as fallback
  const images = [
    { emoji: '🤖', top: '15%', left: '10%', size: '30px', color: 'text-blue-500' },
    { emoji: '🧠', top: '25%', left: '85%', size: '28px', color: 'text-purple-500' },
    { emoji: '⚡', top: '60%', left: '15%', size: '32px', color: 'text-yellow-500' },
    { emoji: '🌐', top: '70%', left: '80%', size: '26px', color: 'text-green-500' },
    { emoji: '📱', top: '40%', left: '20%', size: '30px', color: 'text-red-500' },
    { emoji: '☁️', top: '30%', left: '70%', size: '28px', color: 'text-blue-400' },
    { emoji: '🔍', top: '50%', left: '50%', size: '25px', color: 'text-indigo-500' },
    { emoji: '🚀', top: '20%', left: '50%', size: '32px', color: 'text-pink-500' },
    { emoji: '💡', top: '80%', left: '50%', size: '26px', color: 'text-yellow-400' },
  ];

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute ${img.color} text-4xl`}
          style={{
            top: img.top,
            left: img.left,
            fontSize: img.size,
            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
          initial={{ y: 0, rotate: 0, scale: 1 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        >
          {img.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingImages;
