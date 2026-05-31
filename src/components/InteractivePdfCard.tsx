import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Download, ChevronRight } from "lucide-react";

export const InteractivePdfCard = ({
  pdfUrl = "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_5c4276697cce45df9c078b4ec19cf2ba.pdf",
  imageUrl = "https://static.wixstatic.com/media/b20068_9311a56fd7674097baecf8597e112acd~mv2.jpeg",
  labelText = "slide to learn",
  successText = "displaying blueprint..."
}: {
  pdfUrl?: string;
  imageUrl?: string;
  labelText?: string;
  successText?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for card rotate X and Y
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 15 });

  // Glossy reflection overlay values
  const glossX = useTransform(x, [-0.5, 0.5], ["30%", "70%"]);
  const glossY = useTransform(y, [-0.5, 0.5], ["30%", "70%"]);

  const [sliderCompleted, setSliderCompleted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const triggerDownload = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDragEnd = (_e: any, info: any) => {
    // Width of dragging is constrained to 216px, trigger if dragged past 180px
    if (info.offset.x > 180) {
      setSliderCompleted(true);
      triggerDownload();
      setTimeout(() => {
        setSliderCompleted(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-2 mb-10">
      {/* Dynamic 3D Perspective Wrapper */}
      <div className="w-full max-w-sm" style={{ perspective: "1000px" }}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full rounded-2xl md:rounded-[2.2rem] bg-[#ece6dd] border border-[#a67958]/25 shadow-[0_30px_70px_rgba(27,22,19,0.18),0_15px_30px_rgba(27,22,19,0.1)] overflow-hidden p-6 md:p-8 flex flex-col items-center hover:shadow-[0_45px_85px_rgba(166,121,88,0.22),0_15px_30px_rgba(166,121,88,0.12)] group select-none cursor-pointer"
          onClick={triggerDownload}
        >
          {/* Subtle dynamic gloss light highlight effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glossX} ${glossY}, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />

          {/* Decorative blueprint coordinates in background of card */}
          <div className="absolute inset-4 border border-dashed border-[#a67958]/10 pointer-events-none z-0 rounded-xl" />

          {/* Beautiful 3D Floating Book/Document Frame */}
          <motion.div
            style={{ transform: "translateZ(30px)" }}
            className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#a67958]/15 shadow-2xl relative z-10 mb-5 bg-[#dfd5c8] flex items-center justify-center"
          >
            {/* The PDF Document image thumbnail matching requested */}
            <img
              src={imageUrl}
              alt="PDF Document Blueprint Preview"
              className="w-full h-full object-cover select-none pointer-events-none scale-100 group-hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay for modern editorial feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1613]/50 via-transparent to-transparent pointer-events-none z-10 opacity-70" />
            
            {/* Hover floating download emblem badge overlay */}
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15 backdrop-blur-[2px]">
              <div className="p-4 rounded-full bg-[#ece6dd] text-[#a67958] border border-[#a67958]/20 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                <Download size={24} strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* 3D Dynamic Slide-To-Unlock Bar */}
          <motion.div
            style={{ transform: "translateZ(20px)" }}
            className="relative w-full max-w-[280px] h-12 rounded-full bg-[#dfd5c8]/80 border border-[#a67958]/20 p-1 flex items-center overflow-hidden z-20 shadow-inner"
            onClick={(e) => e.stopPropagation() /* Prevent clicking card trigger */}
          >
            {/* Swipe prompt track background text */}
            <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#a67958]/60 font-bold">
                {sliderCompleted ? successText : labelText}
              </span>
            </div>

            {/* Drag Handle with Framer Motion */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 216 }}
              dragElastic={0.05}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-[#ece6dd] shadow-md border border-[#a67958]/35 flex items-center justify-center cursor-ew-resize text-[#a67958] hover:text-[#231e1a] hover:bg-[#ece6dd] transition-colors duration-200"
            >
              {sliderCompleted ? (
                <span className="text-emerald-700 font-bold text-xs select-none">✓</span>
              ) : (
                <ChevronRight size={18} strokeWidth={2.5} className="animate-pulse" />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
