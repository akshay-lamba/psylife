import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1b1613] pt-16 pb-12 px-6 md:px-12 border-t border-[#a67958]/10 text-[#ebe6df]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12">
          {/* Left Column - psylife Branding */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-sans font-bold tracking-tight text-[#ebe6df] hover:opacity-85 transition-opacity">
                psylife
              </span>
            </Link>
            <div className="space-y-2 text-sm text-[#ebe6df]/80 font-sans leading-relaxed">
              <p className="text-[#ebe6df]/90">Family | Fun | Foundations</p>
              <p className="text-[#ebe6df]/55 text-xs">A local community AI learning provider.</p>
            </div>
          </div>

          {/* Middle Column - Contact Headquarters */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#9e7556] font-bold">
              contact headquarters
            </h4>
            <div className="space-y-1 text-sm text-[#ebe6df]/85 font-sans leading-relaxed">
              <p>51 Willoughby St</p>
              <p>Epping, NSW, 2121</p>
              <p>Australia</p>
            </div>
            <div className="pt-3 space-y-2.5">
              <a 
                href="tel:0414533042" 
                className="block text-sm text-[#ebe6df]/85 hover:text-[#a67958] transition-colors font-sans"
              >
                0414 533 042
              </a>
              <a 
                href="mailto:info@psylife.shop" 
                className="block text-sm text-[#ebe6df]/85 hover:text-[#a67958] transition-colors font-sans"
              >
                info@psylife.shop
              </a>
            </div>
          </div>

          {/* Right Column - Connect Social Icons */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#9e7556] font-bold">
              connect
            </h4>
            <div className="flex items-center gap-6 text-[#ebe6df]/75 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="instagram" 
                className="hover:text-[#a67958] transition-colors p-1"
              >
                <Instagram className="w-[22px] h-[22px] pointer-events-none" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="linkedin" 
                className="hover:text-[#a67958] transition-colors p-1"
              >
                <Linkedin className="w-[22px] h-[22px] pointer-events-none" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="youtube" 
                className="hover:text-[#a67958] transition-colors p-1"
              >
                <Youtube className="w-6 h-6 pointer-events-none" />
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Divider */}
        <div className="w-full h-px bg-[#a67958]/10 mb-8" />

        {/* Copyright Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] lowercase text-[#ebe6df]/35 font-mono tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} psylife.shop. all rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-[#a67958] transition-colors font-sans text-[10px]">
              contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

