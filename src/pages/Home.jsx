import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight, FiStar, FiZap, FiMessageSquare, FiPhone } from "react-icons/fi";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import FloatingShapes from '../components/FloatingShapes';
import FloatingImages from '../components/FloatingImages';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
        {/* 3D Background Shapes */}
        <div className="absolute inset-0 opacity-10 z-0">
          <FloatingShapes />
        </div>
        
        {/* Floating Emoji Icons */}
        <div className="absolute inset-0 z-10">
          <FloatingImages />
        </div>
        
        {/* Color effect bubbles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-200 mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
          <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full bg-yellow-200 mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>

        <div className="container relative z-10 px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight relative z-10"
          >
            Transform Leads Into<br />
            <span className="bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
              Paying Customers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10"
          >
            AI-powered chatbots and voice agents that never sleep. Capture, qualify, and convert leads 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div className="inline-flex">
              <Link to="/pricing">
                <motion.button
                  initial={{ background: 'linear-gradient(to right, #4f46e5, #7c3aed)' }}
                  whileHover={{
                    background: [
                      'linear-gradient(to right, #4f46e5, #7c3aed)',
                      'linear-gradient(to right, #7c3aed, #4f46e5)'
                    ],
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    background: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
                    scale: { type: 'spring', stiffness: 300 }
                  }}
                  className="inline-flex items-center px-6 py-3 text-white rounded-lg font-medium text-base shadow-md hover:shadow-lg relative z-10 overflow-hidden"
                >
                  Get Started <FiArrowRight className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div className="inline-flex">
              <Link to="/demo">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#f9fafb'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg font-medium text-base shadow-md hover:shadow-lg transition-all"
                >
                  Watch Demo
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-gray-500 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Animated Divider */}
      <div className="relative h-24 bg-gradient-to-b from-transparent via-white/80 to-white -mt-24">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
        />
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                value: "24/7", 
                label: "Availability", 
                icon: <FiZap className="w-10 h-10 text-pink-500" />,
                bg: "bg-pink-50"
              },
              { 
                value: "70%", 
                label: "More Leads Captured", 
                icon: <FiMessageSquare className="w-10 h-10 text-blue-500" />,
                bg: "bg-blue-50"
              },
              { 
                value: "2.5x", 
                label: "Conversion Boost", 
                icon: <FiCheck className="w-10 h-10 text-green-500" />,
                bg: "bg-green-50"
              },
              { 
                value: "45s", 
                label: "Avg Response Time", 
                icon: <FiPhone className="w-10 h-10 text-yellow-500" />,
                bg: "bg-yellow-50"
              }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${stat.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white`}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-white shadow-sm">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-5xl font-extrabold text-gray-800 mb-3">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-gray-600">{stat.label}</p>
                <div className="mt-6 h-1.5 w-16 mx-auto bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-80"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>  

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            How <span className="text-blue-500">Synova</span> Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16 relative z-10">
            {[
              {
                title: "Capture",
                description: "Our AI engages visitors instantly across all channels",
                features: ["Website chat", "Social media", "Email/SMS"],
                icon: "🛒",
                color: "bg-blue-100"
              },
              {
                title: "Qualify",
                description: "Intelligent questioning identifies high-value leads",
                features: ["Natural language processing", "Lead scoring", "CRM integration"],
                icon: "🔍",
                color: "bg-green-100"
              },
              {
                title: "Convert",
                description: "Seamless handoff to your sales team with full context",
                features: ["Automated follow-ups", "Meeting scheduling", "Real-time alerts"],
                icon: "💸",
                color: "bg-pink-100"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                //transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full h-full bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  duration: 0.3,
                  boxShadow: { duration: 0.3 }
                }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-gray-700">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Updated with Black Card Boundaries */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </motion.h2>

          <div className="relative h-[300px] w-full overflow-x-visible py-4">
            <motion.div
              className="absolute cursor-pointer top-0 left-0 flex gap-8"
              animate={controls}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: ["0%", "-100%"],
                  transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  },
                })
              }
            >
              {[
                {
                  quote:
                    "Synova increased our lead conversion by 3x while reducing response time from hours to seconds.",
                  name: "Sarah Johnson",
                  title: "CMO, TechStart Inc.",
                  stars: 5,
                  accent: "bg-pink-500"
                },
                {
                  quote:
                    "The AI voice agent handles 80% of our customer inquiries without human intervention.",
                  name: "Michael Chen",
                  title: "CEO, Global Solutions",
                  stars: 5,
                  accent: "bg-blue-500"
                },
                {
                  quote:
                    "Best investment we've made in our sales pipeline. ROI was clear within the first month.",
                  name: "David Wilson",
                  title: "Sales Director, GrowthLabs",
                  stars: 5,
                  accent: "bg-green-500"
                },
                {
                  quote:
                    "Implementation was seamless and our sales team adopted it immediately.",
                  name: "Emily Rodriguez",
                  title: "VP Sales, NexTech",
                  stars: 4,
                  accent: "bg-yellow-500"
                },
                {
                  quote:
                    "The analytics dashboard gives us incredible insights into customer behavior.",
                  name: "James Peterson",
                  title: "Director of Marketing",
                  stars: 5,
                  accent: "bg-purple-500"
                },
                // Duplicates
                {
                  quote:
                    "Synova increased our lead conversion by 3x while reducing response time from hours to seconds.",
                  name: "Sarah Johnson",
                  title: "CMO, TechStart Inc.",
                  stars: 5,
                  accent: "bg-pink-500"
                },
                {
                  quote:
                    "The AI voice agent handles 80% of our customer inquiries without human intervention.",
                  name: "Michael Chen",
                  title: "CEO, Global Solutions",
                  stars: 5,
                  accent: "bg-blue-500"
                },
                {
                  quote:
                    "Best investment we've made in our sales pipeline. ROI was clear within the first month.",
                  name: "David Wilson",
                  title: "Sales Director, GrowthLabs",
                  stars: 5,
                  accent: "bg-green-500"
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={`${index}-${testimonial.name}`}
                  className="w-[350px] flex-shrink-0 bg-white p-8 rounded-xl border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Accent Border Top */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${testimonial.accent}`}></div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-yellow-400 fill-current w-4 h-4"
                      />
                    ))}
                  </div>
                  <div className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses boosting conversions with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-lg hover:bg-gray-50 transition-all"
              >
                Talk to Sales
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

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
    </main>
  );
}