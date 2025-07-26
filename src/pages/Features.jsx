import { motion } from "framer-motion";
import { FiMessageSquare, FiPhone, FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function Features() {
  const features = [
    {
      title: "AI Chatbots",
      icon: <FiMessageSquare className="w-10 h-10 text-pink-500" />,
      description: "Instant 24/7 responses on your website, WhatsApp, and social media. Qualifies leads without human intervention.",
      highlights: [
        "Natural language processing",
        "Multi-language support",
        "CRM integration"
      ],
      color: "bg-pink-100"
    },
    {
      title: "AI Voice Agents",
      icon: <FiPhone className="w-10 h-10 text-blue-500" />,
      description: "Realistic voice assistants that answer calls, schedule appointments, and follow up with leads.",
      highlights: [
        "Human-like conversations",
        "Call recording & analytics",
        "Seamless human handoff"
      ],
      color: "bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">
        {/* Floating color bubbles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-200 mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative z-10"
        >
          Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">AI Automation</span><br />
          For Your Business
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
          Our AI solutions handle lead engagement so you can focus on closing deals.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className={`w-48 h-48 rounded-full ${feature.color} flex items-center justify-center shadow-lg`}>
                  {feature.icon}
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <FiCheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Learn More <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Lead Conversion?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join 500+ businesses automating their sales pipeline with Synova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-lg hover:bg-gray-50 transition-all"
            >
              Contact Sales
            </motion.button>
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
    </div>
  );
}