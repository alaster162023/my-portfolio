
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "adeboyeoreoluwa091@outlook.com", href: "mailto:adeboyeore091@outlook.com" },
    { icon: Phone, label: "Phone", value: "+1 (639) 3843898 ", href: "tel:+16393843898" },
    { icon: MapPin, label: "Location", value: "SASKATOON, SK", href: "https://www.saskatoon.ca/" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alaster162023", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/oreoluwa-adeboye-ab5883339", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, innovative projects, 
                or just having a conversation about technology and machine learning.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <info.icon size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 flex items-center justify-center transition-all duration-300"
                  >
                    <link.icon size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full rounded-md px-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full rounded-md px-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full rounded-md px-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 outline-none"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full rounded-md px-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-32 resize-none outline-none"
                  required
                />
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 transition-all duration-300 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 justify-center">
                      <Send size={18} />
                      Send Message
                    </div>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
            <p className="text-gray-400">
              © 2024 Adeboye Oreoluwa . Crafted with ❤️ using React and modern web technologies.
              <span className="mx-2">|</span>
              <Link to="/documentation" className="text-blue-500 hover:text-blue-400 transition-colors">
                View Docs
              </Link>
            </p>
        </motion.div>
      </div>
    </div>
  );
}
