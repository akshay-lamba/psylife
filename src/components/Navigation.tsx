import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "parent", href: "/parent" },
  { label: "child", href: "/child" },
  { label: "products", href: "/products" },
  { label: "learning", href: "/learning" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 rounded-[2rem] border border-white/5 px-6 md:px-12 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: 'rgba(8, 7, 5, 0.95)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <nav className="flex justify-between items-center w-full">
        <Link 
          to="/"
          className="cursor-pointer flex items-center justify-start shrink-0"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <img 
              src="https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" 
              alt="psylife logo" 
              className="h-12 md:h-20 w-auto mix-blend-screen brightness-95 contrast-150" 
              style={{
                maskImage: 'radial-gradient(circle, black 30%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 75%)'
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`text-[10px] font-medium tracking-[0.3em] lowercase transition-colors duration-300 ${
                  location.pathname === item.href ? "text-primary" : "text-white/60 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] lowercase tracking-widest rounded-full border border-white/10 transition-all backdrop-blur-md"
          >
            enter
          </motion.button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-6 py-8 border-t border-white/5 mt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`text-[11px] font-medium tracking-[0.4em] lowercase block ${
                      location.pathname === item.href ? "text-primary" : "text-white/60 whitespace-nowrap"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5">
                <button className="w-full py-4 glass rounded-2xl text-[10px] lowercase tracking-[0.5em] text-white/60">
                  enter session
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
