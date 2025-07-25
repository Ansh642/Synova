import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using FormSubmit or your preferred method
      const response = await fetch("https://formsubmit.co/ajax/sarthak4556@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Contact Form Submission",
          _template: "table"
        })
      });

      const data = await response.json();
      
      if (data.success === "true") {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Let's Build Something <span className="text-blue-600">Together</span>
          </motion.h1>
          <p className="text-xl text-gray-600">
            Our team typically responds within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="p-6 bg-green-50 rounded-lg text-green-700 mb-6 border border-green-200">
                <p className="font-medium">Thank you! We've received your message.</p>
                <p>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.submit && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    {errors.submit}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 __________"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-300 bg-red-50" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:sarthak4556@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      sarthak4556@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +91 93893 53108
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office Location</h3>
                    <p className="text-gray-600">
                      Sector 62, Noida<br />
                      Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM IST<br />
                      <span className="font-medium">Weekends:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Noida Location */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <iframe
                title="Google Maps - Noida Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.715001135722!2d77.3678573150809!3d28.5445439824525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call us directly at +91 93893 53108 for urgent inquiries.
          </p>
          <a 
            href="tel:+919876543210"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}