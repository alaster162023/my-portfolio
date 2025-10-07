import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Renders the fixed top navigation bar and highlights the active section.
export default function Navigation({ activeSection }: { activeSection?: string }) {
    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About"},
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    // Smooth-scroll to a section by id.
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Mastro Portfolio
          </motion.div>
          
          <NavLinks navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
      </div>
    </motion.nav>
  );
}

function NavLinks({
  navItems,
  activeSection,
  scrollToSection,
}: {
  navItems: { id: string; label: string }[];
  activeSection?: string;
  scrollToSection: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  // Linear interpolation helper
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  useEffect(() => {
    const update = () => {
      const viewY = window.scrollY + 100; // match section detection used elsewhere

      // Gather section tops
      const sectionTops = navItems.map((item) => {
        const el = document.getElementById(item.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });

      // Find current section index
      let curr = 0;
      for (let i = 0; i < sectionTops.length; i++) {
        if (viewY >= sectionTops[i]) curr = i;
        else break;
      }
      const next = Math.min(curr + 1, sectionTops.length - 1);
      const currTop = sectionTops[curr];
      const nextTop = sectionTops[next];
      const denom = nextTop - currTop || 1;
      const t = Math.max(0, Math.min(1, (viewY - currTop) / denom));

      // Measure nav button rects relative to container
      const container = containerRef.current;
      if (!container) return setUnderline((s) => ({ ...s, opacity: 0 }));
      const containerRect = container.getBoundingClientRect();
      const buttons = Array.from(container.querySelectorAll('[data-nav-id]')) as HTMLElement[];
      const btnMap = new Map(buttons.map((b) => [b.dataset.navId!, b.getBoundingClientRect()]));

      const currRect = btnMap.get(navItems[curr].id);
      const nextRect = btnMap.get(navItems[next].id) || currRect;
      if (!currRect || !nextRect) return setUnderline((s) => ({ ...s, opacity: 0 }));

      const left = lerp(currRect.left - containerRect.left, nextRect.left - containerRect.left, t);
      const width = lerp(currRect.width, nextRect.width, t);

      setUnderline({ left, width, opacity: 1 });
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    const onResize = () => {
      // Recompute immediately on resize
      update();
    };

    // Initial measurement
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [navItems]);

  return (
  <div ref={containerRef} className="flex relative space-x-4 md:space-x-8">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          data-nav-id={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-4 py-2 transition-colors ${
            activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </motion.button>
      ))}

      {/* Animated underline that interpolates between nav items as user scrolls */}
      <motion.div
        animate={{ left: underline.left, width: underline.width, opacity: underline.opacity }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ left: 0, width: 0 }}
      />

      {/* Docs link removed per request */}
    </div>
  );
}