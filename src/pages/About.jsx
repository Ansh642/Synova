import { motion } from "framer-motion";
import { FiAward, FiUsers, FiGlobe } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  const founders = [
    {
      name: "Guneetpal Singh",
      role: "Co-Founder & CEO",
      bio: "AI expert with 10+ years in conversational interfaces. Former lead at Google Dialogflow.",
      image: "founder-1.webp"
    },
    {
      name: "Sarthak Jain",
      role: "Co-Founder & CTO",
      bio: "Scaling specialist who built infrastructure for 3 unicorn startups.",
      image: "founder-2.webp"
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
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description: "We obsess over every customer interaction"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Transparency",
      description: "No hidden fees or lock-in contracts"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing AI boundaries daily"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Building the Future of <span className="text-blue-600">AI Automation</span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Bangalore to the world - helping businesses grow smarter since 2021.
        </p>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Meet The Founders</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={`/src/assets/images/${founder.image}`} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-blue-600 mb-4">{founder.role}</p>
                <p className="text-gray-700">{founder.bio}</p>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
            
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
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-blue-600 ${index % 2 === 0 ? 'right-0 md:right-auto md:-left-2' : '-left-2'}`}></div>
                <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <span className="text-blue-600 font-bold">{milestone.year}</span>
                  <p className="text-gray-800">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're hiring passionate problem solvers.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>

    </div>
  );
}