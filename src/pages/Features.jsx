import { motion } from "framer-motion";
import { FiMessageSquare, FiPhone, FiCheckCircle } from "react-icons/fi";


export default function Features() {
  const features = [
    {
      title: "AI Chatbots",
      icon: <FiMessageSquare className="w-10 h-10 text-blue-500" />,
      description: "Instant 24/7 responses on your website, WhatsApp, and social media. Qualifies leads without human intervention.",
      highlights: [
        "Natural language processing",
        "Multi-language support",
        "CRM integration"
      ]
    },
    {
      title: "AI Voice Agents",
      icon: <FiPhone className="w-10 h-10 text-purple-500" />,
      description: "Realistic voice assistants that answer calls, schedule appointments, and follow up with leads.",
      highlights: [
        "Human-like conversations",
        "Call recording & analytics",
        "Seamless human handoff"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Powerful <span className="text-blue-600">AI Automation</span><br />
          For Your Business
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
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
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lead Conversion?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join 500+ businesses automating their sales pipeline with Synova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}