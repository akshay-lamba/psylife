import { motion } from "motion/react";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background py-24 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          className="mb-12 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" 
            alt="psylife logo" 
            className="h-24 w-auto mix-blend-screen brightness-90 contrast-150" 
            style={{
              maskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 80%)'
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-24 w-full mb-24 opacity-40">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] lowercase tracking-widest text-primary font-bold">philosophy</span>
            <p className="text-[11px] leading-loose lowercase">
              we operate at the threshold of biological constraints. focus is not a trait, it is an engineered state.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] lowercase tracking-widest text-primary font-bold">connect</span>
            <ul className="text-[11px] flex flex-col gap-2 lowercase">
              <li className="hover:text-primary transition-colors cursor-pointer">x platform</li>
              <li className="hover:text-primary transition-colors cursor-pointer">instagram</li>
              <li className="hover:text-primary transition-colors cursor-pointer">discord internal</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] lowercase tracking-widest text-primary font-bold">newsletter</span>
            <div className="flex border-b border-white/10 pb-2">
              <input type="text" placeholder="intel@psylife.office" className="bg-transparent text-[11px] focus:outline-none w-full lowercase" />
              <button className="text-[10px] lowercase tracking-widest hover:text-primary">join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full pt-12 border-t border-white/5 text-[9px] lowercase tracking-[0.5em] text-on-background/20 font-bold">
          <span>&copy; 2024 psylife systems. all rights reserved.</span>
          <div className="flex gap-12 mt-4 md:mt-0">
            <a href="#" className="hover:text-on-background transition-colors">privacy</a>
            <a href="#" className="hover:text-on-background transition-colors">compliance</a>
            <a href="#" className="hover:text-on-background transition-colors">legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
