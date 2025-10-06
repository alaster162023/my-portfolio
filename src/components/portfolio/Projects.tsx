import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// Projects grid showcasing featured work.
export default function Projects() {
    const projects = [
    {
        title:"Smart Document Analyzer",
        description: "NLP-powered document processing system that extracts insights from unstructured text with 95% accuracy using transformer models.",
        tech: ["Python", "Node.js", "React", "Perplexity.AI"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
        github: "#",
        demo: "#",
        category: "Web App"
    },
    {
        title: "Real-time Analytics Dashboard",
        description: "High-performance dashboard processing millions of events per second with predictive analytics and beautiful data visualizations.",
        tech: ["React", "Node.js", "Fast API", "AWS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
        github: "#",
        demo: "#",
        category: "Web App" 
    },
    ];

    return (
        <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions with implenting AI for data analysis an research
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-blue-400/50 rounded-full transition-all duration-300 group"
          >
            <span className="text-lg font-semibold">View More Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}