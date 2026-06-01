import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#25201d] py-12 px-6 md:px-12 border-t border-[#a67958]/15 text-[#ebe6df]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Info */}
        <div className="flex flex-col md:items-start items-center gap-1.5 z-10">
          <span className="text-[9px] lowercase tracking-[0.3em] text-[#a67958]">direct connection</span>
          <Link to="/contact" className="text-xs text-[#ebe6df]/60 hover:text-[#a67958] transition-all font-sans tracking-wide lowercase">
            contact us
          </Link>
        </div>

        {/* Social Link List with Icons */}
        <div className="flex justify-center items-center gap-6 text-[#8fa38c] z-10">
          <a href="https://www.facebook.com/psylifeaus" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="hover:text-[#a67958] transition-colors p-1">
            <Facebook className="w-5 h-5 pointer-events-none" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="hover:text-[#a67958] transition-colors p-1">
            <Instagram className="w-5 h-5 pointer-events-none" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="youtube" className="hover:text-[#a67958] transition-colors p-1">
            <Youtube className="w-5 h-5 pointer-events-none" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[9px] lowercase text-[#ebe6df]/30 font-mono tracking-wider z-10">
          &copy; {new Date().getFullYear()} psylife.shop.
        </div>
      </div>
    </footer>
  );
};
