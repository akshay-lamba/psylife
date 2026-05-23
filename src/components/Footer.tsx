import { Link } from "react-router-dom";

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

        {/* Social Link List */}
        <div className="flex flex-wrap justify-center gap-8 text-[11px] lowercase text-[#8fa38c] font-mono tracking-widest z-10">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a67958] transition-colors">x platform</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a67958] transition-colors">instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a67958] transition-colors">tiktok</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a67958] transition-colors">youtube</a>
        </div>

        {/* Copyright */}
        <div className="text-[9px] lowercase text-[#ebe6df]/30 font-mono tracking-wider z-10">
          &copy; {new Date().getFullYear()} psylife.shop.
        </div>
      </div>
    </footer>
  );
};
