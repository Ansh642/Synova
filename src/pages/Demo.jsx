import { motion } from "framer-motion";
import { FiArrowLeft, FiPlay, FiDownload, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DemoPage() {
  // Updated video embed URL (using Google Drive embed format)
  const videoUrl = "https://drive.google.com/file/d/1qrkZZJHIMc-z6OfsA3dhIkaFUv1ZAumb/preview";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="py-6 px-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group">
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center"
          >
            <FiArrowLeft className="mr-1 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </motion.span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm">
            <FiPlay className="text-blue-500" />
            <span>Product Demo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Experience the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Power of Synova</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solution transforms customer interactions in real-time.
          </p>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={videoUrl}
                className="w-full h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Synova Demo Video"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-8 border-white/10 rounded-xl"></div>
            </div>

            <div className="p-6 md:p-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Synova AI Platform Demo</h2>
                  <p className="text-gray-500 mt-1">Watch our comprehensive product walkthrough</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={videoUrl.replace('/preview', '/view')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <FiPlay className="w-4 h-4" /> Fullscreen
                  </a>
                  <a
                    href={`https://drive.google.com/uc?export=download&id=1qrkZZJHIMc-z6OfsA3dhIkaFUv1ZAumb`}
                    className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
                  >
                    <FiDownload className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why <span className="text-blue-600">Industry Leaders</span> Choose Synova
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Always Available",
                description: "24/7 customer engagement without downtime",
                benefits: ["Instant responses", "No missed leads", "Global coverage"],
                icon: (
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                )
              },
              {
                title: "Human-like Interactions",
                description: "Natural conversations that delight customers",
                benefits: ["Advanced NLP", "Context-aware", "Multilingual"],
                icon: (
                  <div className="bg-purple-50 p-4 rounded-xl text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                )
              },
              {
                title: "Seamless Integration",
                description: "Works with your existing tech stack",
                benefits: ["CRM ready", "API access", "Custom workflows"],
                icon: (
                  <div className="bg-green-50 p-4 rounded-xl text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4"></path>
                      <path d="M12 18v4"></path>
                      <path d="M4.93 4.93l2.83 2.83"></path>
                      <path d="M16.24 16.24l2.83 2.83"></path>
                      <path d="M2 12h4"></path>
                      <path d="M18 12h4"></path>
                      <path d="M4.93 19.07l2.83-2.83"></path>
                      <path d="M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-gray-700">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </section>

        <section className="py-16 bg-gray-900 max-w-full  overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Synova in Action?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a personalized demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Request Demo
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

    </div>
  );
}