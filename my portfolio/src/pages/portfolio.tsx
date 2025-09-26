import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";
import Navigation from"../components/portfolio/Navigation";

// Page container that renders all sections, manages activeSection and scroll progress.
export default function Portfolio(){
    const [activeSection, setActiveSection] = useState("hero");
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position and current section for navigation highlight and progress bar.
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleSectionChange = () => {
            const sections = ["hero", "about", "projects", "skills", "contact"];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element){
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100; 
                }
                return false;
            });
            if(currentSection) setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleSectionChange);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleSectionChange);
        };
    },[]);


    return (
        <div className ="bg-black text-white overflow-x-hidden">
            {/* Gradient overlay for depth */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none" />

            {/* Animated background particles */}
            <div className= "fixed inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                        animate={{
                             x: [0, Math.random() * window.innerWidth],
                            y: [0, Math.random() * window.innerHeight],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <Navigation activeSection={activeSection} />

            <main className="relative z-10">
            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
            </section>
            
            <section id="contact">
                <Contact />
            </section>
            </main>

            {/* scroll progress indicator*/}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
                style={{
                    scaleX: scrollY / (document.body.scrollHeight - window.innerHeight),
                }}
            />
         </div>
     );
}