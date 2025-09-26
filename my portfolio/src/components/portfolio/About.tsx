import {motion} from "framer-motion"
import {Brain, Code, Database, Zap} from "lucide-react";

// About section with bio and highlights grid.
export default function About() {
    const highlights = [
        {
            icon:Brain,
            title: "Machine Learning",
            description: " Deep learning, NLP, computer vision, and MLOps expertise"
        },
        {
            icon:Code,
            title:"Full stack development",
            description:"React, Python, Node.js, and modern web development"
        },
        {
            icon: Database,
            title: "Data Engineering",
            description: "Building scalable data pipelines and analytics platforms"
        },
        {
            icon:Zap,
            title:"Performance Optimizer",
            description: "Optimizing models and applications for production scale"
        }
    ];

    return(
        <div className="min-h-screen flex items-center py-20 px-6">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate technologist who bridges the gap between data science and software engineering. 
              With over 5 years of experience, I specialize in building production-ready ML systems that solve 
              real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey began with a fascination for how machines can learn from data. Today, I architect 
              end-to-end solutions that not only deliver accurate predictions but also provide seamless user 
              experiences through elegant interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest research papers, contributing to open 
              source projects, or sharing knowledge with the developer community.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-3">
                    <item.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}