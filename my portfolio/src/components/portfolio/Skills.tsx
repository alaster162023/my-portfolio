import { motion } from "framer-motion";
// Skills with animated progress bars grouped by category.
export default function Skills() {
    const skillCategories = [
        {
            title: "Machine Learning & AI",
            skills: [
                { name: "Python", level: 95 },
                { name: "TensorFlow/PyTorch", level: 90 },
                { name: "Scikit-learn", level: 92 },
                { name: "Deep Learning", level: 88 },
                { name: "NLP/Transformers", level: 85 },
                { name: "Computer Vision", level: 82 }
             ]
        },
        {
            title: "Full Stack Development",
            skills: [
                { name: "React/Next.js", level: 93 },
                { name: "Node.js", level: 87 },
                { name: "TypeScript", level: 90 },
                { name: "GraphQL", level: 85 },
                { name: "PostgreSQL", level: 88 },
                { name: "Docker/Kubernetes", level: 83 }
            ]
        },
        {
            title: "Data & Cloud",
            skills: [
                { name: "Apache Spark", level: 86 },
                { name: "AWS/GCP", level: 89 },
                { name: "MLOps", level: 84 },
                { name: "Apache Kafka", level: 81 },
                { name: "Elasticsearch", level: 78 },
             { name: "Monitoring & Logging", level: 85 }
            ]
        }
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
              Technical Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning the entire ML and software development lifecycle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications/achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Machine Learning Specialty",
              "Google Cloud ML Engineer", 
              "TensorFlow Developer Certificate",
              "Kubernetes Administrator (CKA)",
              "Open Source Contributor"
            ].map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-sm text-gray-300"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}