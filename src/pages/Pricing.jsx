import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";


export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const plans = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? "$99" : "$89/month",
      description: "For small businesses getting started",
      features: [
        "1 AI Chatbot",
        "500 chats/month",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Scale",
      price: billingCycle === "monthly" ? "$299" : "$249/month",
      description: "For growing teams",
      features: [
        "3 AI Chatbots",
        "2,000 chats/month",
        "AI Voice Agent",
        "CRM integration",
        "Priority support"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited chatbots",
        "Dedicated AI voice agents",
        "Custom integrations",
        "24/7 support",
        "Personalized onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade anytime."
    },
    {
      id: 2,
      question: "Is there a contract?",
      answer: "No contracts. Cancel anytime with 30-day notice."
    },
    {
      id: 3,
      question: "Do you offer discounts?",
      answer: "We offer 15% discount for annual billing."
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
          Simple, Transparent Pricing
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Pay only for what you need. Scale up or down as your business grows.
        </p>
      </section>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center bg-white p-1 rounded-lg shadow-sm border border-gray-200">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-md ${billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-md ${billingCycle === "annual" ? "bg-blue-600 text-white" : "text-gray-700"}`}
          >
            Annual (15% off)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl p-8 shadow-lg border ${plan.popular ? "border-blue-500 bg-white" : "border-gray-200 bg-white"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-500">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FiCheck className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left pb-4">Feature</th>
                <th className="text-center pb-4">Starter</th>
                <th className="text-center pb-4">Scale</th>
                <th className="text-center pb-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                "AI Chatbots",
                "AI Voice Agents",
                "CRM Integration",
                "Priority Support",
                "Custom Branding"
              ].map((feature, i) => (
                <tr key={feature} className={`${i % 2 === 0 ? "bg-gray-50" : ""} border-b border-gray-200`}>
                  <td className="py-4 font-medium">{feature}</td>
                  <td className="text-center py-4">
                    {["AI Chatbots", "CRM Integration"].includes(feature) ? (
                      <FiCheck className="mx-auto text-green-500" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="text-center py-4">
                    {feature !== "Custom Branding" ? (
                      <FiCheck className="mx-auto text-green-500" />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="text-center py-4">
                    <FiCheck className="mx-auto text-green-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                {activeFaq === faq.id ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {activeFaq === faq.id && (
                <div className="px-6 pb-6 pt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is ready to help you choose the perfect plan.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </section>

    </div>
  );
}