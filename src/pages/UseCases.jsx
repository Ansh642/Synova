import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UseCases() {
  const navigate = useNavigate();

  const industries = [
    {
      title: "Real Estate",
      image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
      problem: "Agents miss 40% of property inquiries after hours.",
      solution: "AI engages leads instantly, books viewings 24/7.",
      results: [
        "↑ 30% lead conversion",
        "↓ 80% response time",
        "✓ Qualifies buyers automatically"
      ],
      cta: "See real estate solution",
      color: "bg-pink-100"
    },
    {
      title: "Fitness Studios",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
      problem: "Gyms lose 60% of trial sign-ups due to slow follow-up.",
      solution: "AI schedules classes and memberships instantly.",
      results: [
        "↑ 45% trial conversions",
        "↓ 50% admin workload",
        "✓ 24/7 member support"
      ],
      cta: "Explore fitness automation",
      color: "bg-blue-100"
    },
    {
      title: "Education",
      image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
      problem: "Schools fail to respond to 35% of student inquiries.",
      solution: "AI handles admissions, FAQs, and event bookings.",
      results: [
        "↑ 55% enrollment rate",
        "↓ 90% inquiry response time",
        "✓ Multilingual support"
      ],
      cta: "View education package",
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 relative">
        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-200 mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10"
        >
          Industry-Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">AI Solutions</span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
          See how Synova transforms lead management in your sector.
        </p>
      </section>

      {/* Industry Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-48 object-cover"
              />
              <div className={`p-8 ${industry.color} bg-opacity-30`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {industry.title}
                </h3>
                
                {/* Problem/Solution */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 font-bold">!</span>
                    </div>
                    <p className="text-gray-700">{industry.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <FiCheckCircle className="text-green-500" />
                    </div>
                    <p className="text-gray-700">{industry.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <ul className="space-y-2 mb-6">
                  {industry.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-gray-700">
                      <FiCheckCircle className="text-green-500 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  {industry.cta}
                  <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unified CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our AI adapts to any business. Book a custom demo.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Request Custom Solution
          </motion.button>
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