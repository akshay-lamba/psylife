import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "parents", href: "/parents" },
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
      className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <div
        className={`w-[95%] max-w-7xl transition-all duration-500 rounded-[2rem] border border-[#a67958]/20 px-6 md:px-12 pointer-events-auto flex justify-between items-center ${
          isScrolled ? "py-2" : "py-3"
        }`}
        style={{
          background: 'rgba(37, 32, 29, 0.94)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <nav className="flex justify-between items-center w-full">
          <Link 
            to="/"
            className="cursor-pointer flex items-center justify-start shrink-0"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
              <img 
                src="https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" 
                alt="logo" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-[#a67958]/25 shadow-sm" 
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:inline-block font-sans text-[10px] md:text-[11px] tracking-[0.25em] text-[#ebe6df]/85 font-medium lowercase">
                family | fun | foundations
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`text-[10px] font-medium tracking-[0.3em] lowercase transition-colors duration-300 ${
                    location.pathname === item.href ? "text-[#a67958] font-semibold" : "text-[#ebe6df]/60 hover:text-[#a67958]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-6 py-2 bg-[#ebe6df]/10 hover:bg-[#ebe6df]/20 text-[#ebe6df] text-[10px] lowercase tracking-widest rounded-full border border-[#a67958]/15 transition-all backdrop-blur-md cursor-pointer"
              >
                lets talk
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-[#ebe6df]/60 hover:text-[#ebe6df] transition-colors"
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
              className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-[#25201d]/98 border-t border-[#a67958]/15 rounded-[2rem] mt-2 px-6 py-6"
            >
              <ul className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`text-[11px] font-medium tracking-[0.4em] lowercase block ${
                        location.pathname === item.href ? "text-[#a67958]" : "text-[#ebe6df]/60 whitespace-nowrap"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-[#a67958]/15">
                  <Link to="/contact" className="w-full block">
                    <button className="w-full py-4 bg-[#ebe6df]/10 hover:bg-[#ebe6df]/20 rounded-2xl text-[10px] lowercase tracking-[0.5em] text-[#ebe6df]/70 cursor-pointer">
                      lets talk
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
