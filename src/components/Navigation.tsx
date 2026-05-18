import { motion } from "motion/react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Focus", href: "#focus" },
  { label: "Flow", href: "#flow" },
  { label: "Learning", href: "#learning" },
  { label: "Edge", href: "#edge" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        background: 'linear-gradient(135deg, rgba(93, 64, 55, 0.95) 0%, rgba(166, 124, 82, 0.9) 50%, rgba(20, 15, 10, 0.95) 100%)',
      }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-full border border-white/5 px-12 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: 'rgba(8, 7, 5, 0.95)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <nav className="flex justify-between items-center w-full">
        <motion.div 
          className="cursor-pointer flex items-center justify-start shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" 
            alt="psylife logo" 
            className="h-20 w-auto mix-blend-screen brightness-95 contrast-150" 
            style={{
              maskImage: 'radial-gradient(circle, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 75%)'
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <ul className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] font-medium tracking-[0.3em] lowercase text-white/60 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] lowercase tracking-widest rounded-full border border-white/10 transition-all backdrop-blur-md"
        >
          enter
        </motion.button>
      </nav>
    </motion.header>
  );
};
