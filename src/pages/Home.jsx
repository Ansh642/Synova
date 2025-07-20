import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight, FiZap, FiMessageSquare, FiPhone } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        {/* Animated gradient dots background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transform Leads Into<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Paying Customers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            AI-powered chatbots and voice agents that never sleep. Capture, qualify, and convert leads 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Get Started <FiArrowRight />
              </motion.button>
            </Link>
            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all"
              >
                Watch Demo
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "24/7", label: "Availability", icon: <FiZap className="w-8 h-8 mx-auto mb-2 text-blue-600" /> },
              { value: "70%", label: "More Leads Captured", icon: <FiMessageSquare className="w-8 h-8 mx-auto mb-2 text-purple-600" /> },
              { value: "2.5x", label: "Conversion Boost", icon: <FiCheck className="w-8 h-8 mx-auto mb-2 text-green-600" /> },
              { value: "45s", label: "Avg Response Time", icon: <FiPhone className="w-8 h-8 mx-auto mb-2 text-blue-400" /> }
            ].map((stat, index) => (
              <div key={stat.label} className="p-6">
                {stat.icon}
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How <span className="text-blue-600">Synova</span> Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Capture",
                description: "Our AI engages visitors instantly across all channels",
                features: ["Website chat", "Social media", "Email/SMS"],
                icon: "🛒"
              },
              {
                title: "Qualify",
                description: "Intelligent questioning identifies high-value leads",
                features: ["Natural language processing", "Lead scoring", "CRM integration"],
                icon: "🔍"
              },
              {
                title: "Convert",
                description: "Seamless handoff to your sales team with full context",
                features: ["Automated follow-ups", "Meeting scheduling", "Real-time alerts"],
                icon: "💸"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Synova increased our lead conversion by 3x while reducing response time from hours to seconds.",
                name: "Sarah Johnson",
                title: "CMO, TechStart Inc."
              },
              {
                quote: "The AI voice agent handles 80% of our customer inquiries without human intervention.",
                name: "Michael Chen",
                title: "CEO, Global Solutions"
              },
              {
                quote: "Best investment we've made in our sales pipeline. ROI was clear within the first month.",
                name: "David Wilson",
                title: "Sales Director, GrowthLabs"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="text-gray-600 mb-6">"{testimonial.quote}"</div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Seamless <span className="text-blue-600">Integrations</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-12">
            {["Salesforce", "HubSpot", "Zapier", "Slack", "Microsoft Teams", "Google Calendar"].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-40 h-20"
              >
                <span className="font-medium text-gray-700">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
  <div className="container mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-6"
    >
      Ready to Transform Your Business?
    </motion.h2>
    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
      Join thousands of businesses boosting conversions with our AI solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/pricing">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-white text-black rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
        >
          Get Started Today
        </motion.button>
      </Link>
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
        >
          Talk to Sales
        </motion.button>
      </Link>
    </div>
  </div>
</section>

    </main>
  );
}