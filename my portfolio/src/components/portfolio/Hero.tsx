import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react" ;

// Hero section with typing animation and social links.
export default function Hero() {
    const [displayedText, setDisplayedText ] = useState("");
    const fullText = "Enthusiatic quantitative finance developer";

    // Type out the professional title character-by-character.
    useEffect(() => {
        let i= 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.slice(0, i + 1));
                i++;
            } else{
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Scroll to the About section smoothly.
    const scrollToAbout = () => {
        const el = document.getElementById("about");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      {/* Main content */}
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Adeboye Oreoluwa
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl text-gray-200 h-12 flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1 text-blue-400"
            >
              |
            </motion.span>
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting intelligent solutions at the intersection of data science and software engineering.
          Passionate about transforming complex problems into elegant, scalable applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/alaster162023", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/oreoluwa-adeboye-ab5883339", label: "LinkedIn" },
            { icon: Mail, href: "mailto:adeboyeore091@outlook.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <Icon size={24} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-2 rounded-full border border-white/20 hover:border-blue-400/50 transition-colors"
        >
          <ChevronDown size={24} className="text-gray-400" />
        </motion.div>
      </motion.button>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40"
      />
    </div>
  );  
}