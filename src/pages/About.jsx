import { motion } from "framer-motion";
import { FiAward, FiUsers, FiGlobe, FiArrowRight } from "react-icons/fi";
import image1 from "../assets/sarthak.jpeg";
import image2 from "../assets/co-founder.jpeg";

export default function About() {
  const founders = [
    {
      name: "Guneetpal Singh",
      role: "Co-Founder & CEO",
      bio: "AI expert with 10+ years in conversational interfaces. Former lead at Google Dialogflow.",
      image: `${image2}`,
      color: "bg-pink-100"
    },
    {
      name: "Sarthak Jain",
      role: "Co-Founder & CTO",
      bio: "Scaling specialist who built infrastructure for 3 unicorn startups.",
      image: `${image1}`,
      color: "bg-blue-100"
    }
  ];

  const milestones = [
    { year: "2021", event: "Company founded in Bangalore" },
    { year: "2022", event: "Launched first AI chatbot MVP" },
    { year: "2023", event: "Onboarded 100+ paying customers" },
    { year: "2024", event: "Expanded to international markets" }
  ];

  const values = [
    {
      icon: <FiAward className="w-8 h-8 text-pink-500" />,
      title: "Excellence",
      description: "We obsess over every customer interaction",
      color: "bg-pink-50"
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-500" />,
      title: "Transparency",
      description: "No hidden fees or lock-in contracts",
      color: "bg-blue-50"
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-purple-500" />,
      title: "Innovation",
      description: "Pushing AI boundaries daily",
      color: "bg-purple-50"
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
          Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">AI Automation</span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
          From Bangalore to the world - helping businesses grow smarter since 2021.
        </p>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Meet The Founders</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl ${founder.color} bg-opacity-30`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={`${founder.image}`} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">{founder.name}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-4">{founder.role}</p>
                  <p className="text-gray-700">{founder.bio}</p>
                  <div className="flex gap-4 mt-6 justify-center md:justify-start">
                    <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-pink-300 to-blue-300 transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 md:pr-0 md:pl-8 text-left md:text-right' : 'pl-8 text-left'}`}
                style={{
                  marginLeft: index % 2 === 0 ? '0' : '50%',
                  marginRight: index % 2 === 0 ? '50%' : '0'
                }}
              >
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 ${index % 2 === 0 ? 'right-0 md:right-auto md:-left-2' : '-left-2'}`}></div>
                <div className={`p-6 bg-white rounded-lg shadow-md border border-gray-200 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-bold">{milestone.year}</span>
                  <p className="text-gray-800">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              whileHover={{ y: -5 }}
              className={`${value.color} p-8 rounded-xl shadow-md text-center border border-white`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're hiring passionate problem solvers.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
          >
            View Open Positions <FiArrowRight />
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