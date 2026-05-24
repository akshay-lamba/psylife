import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, Download } from "lucide-react";
import { Navigation } from "./components/Navigation";
import { 
  Hero, 
  splitSection, 
  featureSection, 
  listSection, 
  ctaSection,
  YoutubeSection
} from "./components/Sections";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[130px] pointer-events-none z-[1]"
    />
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Pages ---

const HomePage = () => (
  <>
    <SEO 
      title="psylife.shop" 
      description="psylife.shop: Family | Fun | Foundations. Engineering family focus and interactive spatial systems." 
      keywords="psylife.shop, psylife, Family | Fun | Foundations, neural architecture, focus, Epping Sydney, family foundations, learning mastery"
    />
    <Hero title="psylife.shop" subtitle="Family | Fun | Foundations" />
    <YoutubeSection />
  </>
);

const PARENT_SLIDES = [
  {
    num: "01",
    tag: "vision",
    title: "the parent protocol: a better compass",
    src: "https://static.wixstatic.com/media/b20068_df8efa95c19e4a69bf58e369bb5bb883~mv2.jpeg",
    alt: "psylife - architectural intelligence for the deep mind / building a better compass"
  },
  {
    num: "02",
    tag: "realization",
    title: "validating the realization of focus",
    src: "https://static.wixstatic.com/media/b20068_6f5f2607a82243e8b09960ad58229e04~mv2.jpeg",
    alt: "validating the realization - of cognitive attention curves"
  },
  {
    num: "03",
    tag: "future choice",
    title: "a choice for your family's future",
    src: "https://static.wixstatic.com/media/b20068_552c3057a58746ccbe5d839be8c29478~mv2.jpeg",
    alt: "a choice for your family's future - heavy backpack or better compass"
  },
  {
    num: "04",
    tag: "architectures",
    title: "comparing architectures: heavy backpack vs. the better compass",
    src: "https://static.wixstatic.com/media/b20068_e73f0b909fa04bf5af7c271d500f71d5~mv2.jpeg",
    alt: "the heavy backpack focuses on memory, the better compass focuses on evaluation"
  },
  {
    num: "05",
    tag: "attention environment",
    title: "attention environment and spatial engineering",
    src: "https://static.wixstatic.com/media/b20068_3195f8f57d8e4f6aa014ead1d5fd538c~mv2.jpeg",
    alt: "we don't teach. we architect. environments designed for effortless mastery."
  }
];

const ParentPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PARENT_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PARENT_SLIDES.length) % PARENT_SLIDES.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PARENT_SLIDES.length);
  };

  return (
    <>
      <SEO 
        title="the parent protocol | psylife.shop" 
        description="guide the developing mind toward master focus. learn to build beautiful, friction-free environments to naturalise attention without fatigue." 
        keywords="parent protocol, kids focus, attention training, family focus, cognitive parenting, child focus, Epping Sydney"
      />
      <div className="bg-[#dfd5c8] text-[#231e1a] min-h-screen relative overflow-hidden matte-texture py-12 md:py-20 px-4 md:px-8">
        {/* Soft natural radial glows representing sunbeams & alignment */}
        <div className="absolute top-[10%] left-[5%] w-[50vw] aspect-square rounded-full bg-[#a67958]/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[5%] w-[45vw] aspect-square rounded-full bg-[#50624d]/4 blur-[130px] pointer-events-none z-0" />

        {/* Decorative Blueprint Lines representing structural compass alignment */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
          <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] text-[#a67958]">
            <circle cx="500" cy="500" r="450" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="50" x2="500" y2="950" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="50" y1="500" x2="950" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-24 pb-16 flex flex-col items-center">
          {/* Slider Frame */}
          <div 
            className="relative w-full z-10 group" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient backlight glow matching homepage */}
            <motion.div 
              className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
              <div className="w-full h-full relative overflow-hidden flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Blurred Backdrop */}
                    <img 
                      src={PARENT_SLIDES[currentIndex].src} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    {/* Main Image */}
                    <img 
                      src={PARENT_SLIDES[currentIndex].src} 
                      alt={PARENT_SLIDES[currentIndex].alt}
                      className="w-full h-full object-cover relative z-10 select-none block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Right Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Top Rank Badge */}
                <div className="absolute top-6 right-6 z-25 font-mono text-[10px] tracking-widest text-[#a67958] font-semibold bg-[#ece6dd]/75 backdrop-blur px-3 py-1 rounded-full border border-[#a67958]/15 select-none text-center">
                  0{currentIndex + 1} / 0{PARENT_SLIDES.length}
                </div>

                {/* Bottom Dot Bars */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25 flex-wrap justify-center max-w-[90%]">
                  {PARENT_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 outline-none cursor-pointer ${
                        currentIndex === i ? 'w-8 bg-[#a67958]' : 'w-2.5 bg-[#a67958]/25 hover:bg-[#a67958]/60'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Centered Dynamic Title block underneath matching homepage style */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`title-${currentIndex}`}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#a67958]/80 font-bold block mb-3">
              {PARENT_SLIDES[currentIndex].tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#231e1a] tracking-tight lowercase mb-4 max-w-2xl mx-auto px-4">
              {PARENT_SLIDES[currentIndex].title}
            </h1>
          </motion.div>

          {/* Spacer */}
          <div className="h-16 md:h-24 w-full" />

          {/* YouTube video below it matching ChildPage structure */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] border border-[#a67958]/35 bg-[#ece6dd] aspect-video relative z-10"
          >
            <iframe
              src="https://www.youtube.com/embed/lH4QkrgLuCI?autoplay=1&mute=1&loop=1&playlist=lH4QkrgLuCI&playsinline=1"
              title="the parent protocol - audio visual overview"
              className="absolute top-0 left-0 w-full h-full border-0 scale-[1.02]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            {/* Very soft bottom shadow at the bottom boundary */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Spacer */}
          <div className="h-16 md:h-24 w-full" />

          {/* Section 3 - Beautiful 3D Dynamic Interactive PDF document preview card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-center z-10"
          >
            <InteractivePdfCard />
          </motion.div>
        </div>
      </div>
    </>
  );
};

const InteractivePdfCard = ({
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

const CHILD_SLIDES = [
  {
    num: "01",
    tag: "explore",
    title: "tactile exploration and creative play nodes",
    src: "https://static.wixstatic.com/media/b20068_bfac881d783e4513b07f9402b4bd48ef~mv2.jpg",
    alt: "tactile child learning environments with beautifully organized play boxes"
  },
  {
    num: "02",
    tag: "interact",
    title: "collaborative workspace design for spatial reasoning",
    src: "https://static.wixstatic.com/media/b20068_b7fc49e10c794d3fa00df00e234e5f33~mv2.jpg",
    alt: "children interacting with sensory blocks and building modular setups"
  },
  {
    num: "03",
    tag: "refine",
    title: "orderly systems that inspire persistent focus",
    src: "https://static.wixstatic.com/media/b20068_681eecf7a90048acb69aa538c6674558~mv2.jpg",
    alt: "structured geometric wood trays holding focused sorting materials"
  },
  {
    num: "04",
    tag: "synthesize",
    title: "visual tools facilitating dynamic cognitive storage",
    src: "https://static.wixstatic.com/media/b20068_23434e57530c4266a70c439610bf7be6~mv2.jpg",
    alt: "child engineering setup containing color modules and pattern boards"
  },
  {
    num: "05",
    tag: "embody",
    title: "effortless concentration without sensory fatigue",
    src: "https://static.wixstatic.com/media/b20068_e31ca203d246416fb751990cb651c4ee~mv2.jpg",
    alt: "safe bright environment where complex focus is nurtured naturally"
  }
];

const ChildPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CHILD_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + CHILD_SLIDES.length) % CHILD_SLIDES.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % CHILD_SLIDES.length);
  };

  return (
    <>
      <SEO 
        title="child exploration | psylife.shop" 
        description="tactile and virtual environments designed for high-velocity child learning, creative exploration, play, and digital focus mastery." 
        keywords="child exploration, creative play, youth focus, deep curiosity, focus development, tactile play, Epping Sydney"
      />
      <div className="bg-[#dfd5c8] text-[#231e1a] min-h-screen relative overflow-hidden matte-texture py-12 md:py-20 px-4 md:px-8">
        {/* Soft natural radial glows representing sunbeams & alignment */}
        <div className="absolute top-[10%] left-[5%] w-[50vw] aspect-square rounded-full bg-[#a67958]/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[3%] w-[45vw] aspect-square rounded-full bg-[#50624d]/4 blur-[130px] pointer-events-none z-0" />

        {/* Decorative Blueprint Lines representing structural compass alignment */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
          <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] text-[#a67958]">
            <circle cx="500" cy="500" r="450" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="50" x2="500" y2="950" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="50" y1="500" x2="950" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-24 pb-16 flex flex-col items-center">

          {/* Interactive Responsive Carousel Container with hover scale and subtle primary background glow */}
          <div className="relative w-full z-10 group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Subtle backlight glow */}
            <motion.div 
              className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Our brown frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
              <div className="w-full h-full relative overflow-hidden flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Blurred Backdrop */}
                    <img 
                      src={CHILD_SLIDES[currentIndex].src} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    {/* Main Image */}
                    <img 
                      src={CHILD_SLIDES[currentIndex].src} 
                      alt={CHILD_SLIDES[currentIndex].alt}
                      className="w-full h-full object-cover relative z-10 select-none block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Right Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Top Rank Badge */}
                <div className="absolute top-6 right-6 z-25 font-mono text-[10px] tracking-widest text-[#a67958] font-semibold bg-[#ece6dd]/75 backdrop-blur px-3 py-1 rounded-full border border-[#a67958]/15 select-none text-center">
                  0{currentIndex + 1} / 0{CHILD_SLIDES.length}
                </div>

                {/* Bottom Dot Bars */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25 flex-wrap justify-center max-w-[90%]">
                  {CHILD_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 outline-none cursor-pointer ${
                        currentIndex === i ? 'w-8 bg-[#a67958]' : 'w-2.5 bg-[#a67958]/25 hover:bg-[#a67958]/60'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Centered Dynamic Title block underneath matching homepage style */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`title-${currentIndex}`}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#a67958]/80 font-bold block mb-3">
              {CHILD_SLIDES[currentIndex].tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#231e1a] tracking-tight lowercase mb-4 max-w-2xl mx-auto px-4">
              {CHILD_SLIDES[currentIndex].title}
            </h1>
          </motion.div>

          {/* Thin space separated section wrapper */}
          <div className="h-16 md:h-24 w-full" />

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] border border-[#a67958]/35 bg-[#ece6dd] aspect-video relative z-10"
          >
            <iframe
              src="https://www.youtube.com/embed/qU0OYPNC5qE?autoplay=1&mute=1&loop=1&playlist=qU0OYPNC5qE&playsinline=1"
              title="PsyLife Exploration Video"
              className="absolute top-0 left-0 w-full h-full border-0 scale-[1.02]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            {/* Very soft bottom shadow at the bottom boundary */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Thin space separated section wrapper */}
          <div className="h-16 md:h-24 w-full" />

          {/* Section 3 - Beautiful 3D Dynamic Interactive PDF document preview card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-center z-10"
          >
            <InteractivePdfCard />
          </motion.div>
        </div>
      </div>
    </>
  );
};

const ProductsPage = () => {
  const [activeTier, setActiveTier] = useState<"curious" | "committed" | "creator">("curious");
  const [isHovered, setIsHovered] = useState(false);

  const selectTier = (tier: "curious" | "committed" | "creator") => {
    setActiveTier(tier);
    setTimeout(() => {
      document.getElementById("tier-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <>
      <SEO 
        title="products & solutions | psylife" 
        description="physical and digital attention anchors designed to ground consciousness in high-volatility environments." 
        keywords="attention anchors, focus products, spatial design, cognitive hardware, study tools, Epping Sydney, learning programs, private local server, factorial thinking"
      />
      <div className="bg-[#dfd5c8] text-[#231e1a] min-h-screen relative overflow-hidden matte-texture py-12 md:py-20 px-4 md:px-8">
        {/* Soft natural radial glows */}
        <div className="absolute top-[10%] left-[5%] w-[50vw] aspect-square rounded-full bg-[#a67958]/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[3%] w-[45vw] aspect-square rounded-full bg-[#50624d]/4 blur-[130px] pointer-events-none z-0" />

        {/* Decorative Blueprint Lines representing structural compass alignment */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
          <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] text-[#a67958]">
            <circle cx="500" cy="500" r="450" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="50" x2="500" y2="950" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="50" y1="500" x2="950" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-24 pb-8 flex flex-col items-center">
          {/* Dynamic Image Hero Frame with no text on image, centered labels below */}
          <div 
            className="relative w-full z-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Subtle backlight glow */}
            <motion.div 
              className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
              <div className="w-full h-full relative overflow-hidden flex-1">
                {/* Blurred Backdrop for seamless look when aspect ratios don't match */}
                <img 
                  src="https://static.wixstatic.com/media/b20068_b6a3187a24e94e4abca9140398fabdd1~mv2.jpeg" 
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                  referrerPolicy="no-referrer"
                />
                
                <img 
                  src="https://static.wixstatic.com/media/b20068_b6a3187a24e94e4abca9140398fabdd1~mv2.jpeg" 
                  alt="psylife products"
                  className="w-full h-full object-cover relative z-10 select-none block"
                  referrerPolicy="no-referrer"
                />
                {/* Very soft bottom shadow at the bottom boundary */}
                <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </div>

          {/* Centered Dynamic Title block underneath matching homepage style */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#a67958]/80 font-bold block mb-3">
              anchors
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#231e1a] tracking-tight lowercase mb-4 max-w-2xl mx-auto px-4">
              products & solutions
            </h1>
          </motion.div>
        </div>

        {/* Section 2 - Product slides (3 cards horizontally) */}
        <div className="w-full max-w-6xl mx-auto relative z-10 py-12 md:py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {[
              {
                key: "curious" as const,
                tier: "The Curious Tier",
                img: "https://static.wixstatic.com/media/b20068_d6986a7cf7b64fdb81501ab320d735b7~mv2.jpeg",
              },
              {
                key: "committed" as const,
                tier: "The Committed Tier",
                img: "https://static.wixstatic.com/media/b20068_8cbe99385f5348b1911ae0a4fbc9738f~mv2.jpeg",
              },
              {
                key: "creator" as const,
                tier: "The Creator Tier",
                img: "https://static.wixstatic.com/media/b20068_ae5d7cd9b0ac43f2b53fe3fe54ab0971~mv2.jpeg",
              }
            ].map((prod, idx) => {
              const isSelected = activeTier === prod.key;
              return (
                <motion.div
                  key={prod.tier}
                  onClick={() => selectTier(prod.key)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full rounded-2xl md:rounded-[2rem] bg-[#ece6dd] overflow-hidden group select-none cursor-pointer transition-all duration-500 border ${
                    isSelected 
                      ? "border-[#a67958] ring-4 ring-[#a67958]/35 shadow-[0_30px_80px_rgba(166,121,88,0.25)] scale-[1.015]" 
                      : "border-[#a67958]/35 shadow-[0_20px_50px_rgba(27,22,19,0.12)] hover:scale-[1.005] hover:border-[#a67958]/60 hover:shadow-[0_25px_60px_rgba(27,22,19,0.18)]"
                  }`}
                >
                  {/* Selected glowing beacon indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 z-20 w-3.5 h-3.5 rounded-full bg-[#a67958] border-2 border-[#ece6dd] animate-pulse shadow-md" />
                  )}

                  {/* Blurred Backdrop for seamless look */}
                  <img 
                    src={prod.img} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale animate-pulse"
                    referrerPolicy="no-referrer"
                  />
                  
                  <img 
                    src={prod.img} 
                    alt={prod.tier}
                    className="w-full h-auto relative z-10 select-none block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Minimal Tab Switchers */}
        <div className="w-full max-w-4xl mx-auto relative z-10 pt-4 pb-8 px-4 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-[#a67958]/20 pb-4 mb-2 w-full">
            {[
              { key: "curious" as const, label: "digital: curious" },
              { key: "committed" as const, label: "physical: committed" },
              { key: "creator" as const, label: "immersive: creator" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => selectTier(tab.key)}
                className={`font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] pb-2 border-b-2 transition-all duration-300 font-bold focus:outline-none ${
                  activeTier === tab.key
                    ? "border-[#a67958] text-[#231e1a]"
                    : "border-transparent text-[#231e1a]/40 hover:text-[#231e1a]/85"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#a67958]/75 font-semibold">
            click a card above or tap tabs to inspect specifications
          </span>
        </div>

        {/* Detailed specs workspace card */}
        <div id="tier-details" className="w-full max-w-5xl mx-auto relative z-10 py-10 px-4 md:px-8 bg-[#ece6dd] rounded-[2rem] border border-[#a67958]/35 shadow-[0_30px_70px_rgba(27,22,19,0.12)] mb-16 scroll-mt-24">
          <AnimatePresence mode="wait">
            {activeTier === "curious" && (
              <motion.div
                key="curious-spec"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 text-[#231e1a] font-sans"
              >
                {/* Left Column - 5 cols */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">pricing model</span>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1">
                      digital <span className="text-[#a67958]">(the curious tier)</span>
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-[#231e1a] uppercase bg-[#dfd5c8] border border-[#a67958]/20 rounded-full py-1.5 px-4 inline-block mt-3 shadow-sm">
                      $199.99 per month (All-Inclusive)
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">the setup</h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Your Own Private Local VPS
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          We provide your child with a private, secure slice of a digital computer server (called a local VPS) running right here in Epping. It acts as a private digital study vault just for your family. Your child uses it to safely collect all their study notes, university research, and personal data. Because it stays completely local, no big public companies can look at, track, or leak your family's information.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Any Device, Anytime across your Private Home Network
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          Your child can securely connect to their private AI from any device—laptop, phone, or tablet—anytime they are on your private home network. It provides ultimate privacy for deep focus and study right at home.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          The Honest Truth
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          There are no tech backup guarantees (SLAs) or 100% uptime promises on this local server setup. It is intentionally left as a raw, educational workspace so your child learns real-world skills like manually configuring systems, maintaining the physical machine, and fixing local connection errors from scratch—not just playing with a finished commercial app.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">staying on track</h4>
                    <div className="p-5 rounded-2xl bg-[#dfd5c8]/50 border border-[#a67958]/25 space-y-1.5 shadow-sm">
                      <h5 className="font-sans font-bold text-xs lowercase text-[#231e1a]">Weekly 1-Hour Masterclass</h5>
                      <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                        Includes 1 live masterclass every single week for exactly 1 hour. This is our direct time to check in, answer your questions, fix any local tech problems with the server, and make sure your child is actively using these local tools in real life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - 7 cols */}
                <div className="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l border-[#a67958]/20">
                  <div className="space-y-2">
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">academic acceleration syllabus</span>
                    <h4 className="text-lg font-sans font-bold text-[#231e1a] tracking-tight lowercase">the 5 included learning playbooks</h4>
                    <p className="text-xs text-[#231e1a]/70 lowercase leading-relaxed">
                      Every single playbook is fully delivered in 5 easy-to-use, multi-sensory formats: Audio, Video, Slides, Simple Documents, and Scannable Charts/Infographics.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      {
                        num: "01",
                        title: "Playbook 1: Factorial Thinking Guide",
                        text: "Upgrades your child’s brain from old-school high school memorization into advanced systems thinking. It gives them the mental framework needed to link complex ideas together and handle massive university workloads without breaking under pressure."
                      },
                      {
                        num: "02",
                        title: "Playbook 2: Private Local Server Build Manual",
                        text: "A direct, step-by-step instruction guide that takes away the confusion of physical tech setup. It teaches you and your child exactly how to build, run, and control your private local server right from your own desk."
                      },
                      {
                        num: "03",
                        title: "Playbook 3: Real-World Long-Term Learning Playbook",
                        text: "A highly practical workbook showing your child how to turn their private local server into a lifetime educational partner. It ensures that as they move through university and into their career, their accumulated knowledge stays organized and scales with them over the years."
                      },
                      {
                        num: "04",
                        title: "Playbook 4: Reclaiming Time & Task Delegation Playbook",
                        text: "A practical guide to stop your child from wasting hundreds of hours on low-level, repetitive study tasks, administrative chores, and transactional school prep. We teach them how to safely hand over these time-wasting tasks to automated personal helper tools running entirely on their private local server, reclaiming their time for high-level strategy and deep focus."
                      },
                      {
                        num: "05",
                        title: "Playbook 5: Finding Smart Insights & The Double-Check Playbook",
                        text: "Teaches your child how to use artificial intelligence safely to uncover deep, unique insights that others miss. Most importantly, it teaches an \"audit-first\" mindset: never blindly trust a computer's answer, and always double-check machine outputs against real-world facts so they don't fall into common public tool traps."
                      }
                    ].map((playbook) => (
                      <div key={playbook.num} className="flex gap-4 items-start p-4 bg-[#dfd5c8]/25 rounded-xl border border-[#a67958]/12 duration-300 hover:border-[#a67958]/35 transition-colors">
                        <span className="font-mono text-xs tracking-wider text-[#a67958] font-bold bg-[#ece6dd] px-2.5 py-1.5 rounded border border-[#a67958]/25 block shrink-0 select-none">
                          {playbook.num}
                        </span>
                        <div className="space-y-1">
                          <h5 className="font-sans font-bold text-[13px] text-[#231e1a] lowercase leading-tight">{playbook.title}</h5>
                          <p className="text-xs leading-relaxed text-[#231e1a]/80 lowercase">{playbook.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTier === "committed" && (
              <motion.div
                key="committed-spec"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 text-[#231e1a] font-sans"
              >
                {/* Left Column - 5 cols */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">cohort program</span>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1">
                      physical <span className="text-[#a67958]">(the committed tier)</span>
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-[#231e1a] uppercase bg-[#dfd5c8] border border-[#a67958]/20 rounded-full py-1.5 px-4 inline-block mt-3 shadow-sm">
                      $499.99 (All-Inclusive)
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">program structure</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "duration", value: "5 one-hour discussions" },
                        { label: "location", value: "outdoors in Epping Park" },
                        { label: "cohort limit", value: "max 5 parent-child pairs" },
                        { label: "audience type", value: "exclusively parent & child" }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-[#dfd5c8]/50 rounded-xl border border-[#a67958]/20 text-center flex flex-col justify-center">
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#a67958]/80 font-bold block">{item.label}</span>
                          <span className="text-xs font-sans font-semibold text-[#231e1a] lowercase mt-1 block leading-tight">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">included core experiences</h4>
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Gadget Integration
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          Hands-on learning loops utilizing our specialized physical gadgets alongside your family's personal study notes and materials.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Shared Learning Environment
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          Families bring their gadgets directly into the park to apply, talk through, and practice the core material in a live setting. This creates a shared local environment where parent-and-child pairs problem-solve together, build accountability, and learn directly from each other's real-time experiences.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Walk in the Park
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          Regular, structured outdoor sessions for our 5 pairs to step away from screens, reset their focus, and ground heavy, multi-layered cognitive work in nature and physical movement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#a67958]/20 bg-[#dfd5c8]/30 p-5 rounded-2xl border border-[#a67958]/15">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">the core benefit over digital</h4>
                    <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                      Screen-based study alone creates isolated stress blocks for both parents and kids. By physically gathering in Epping Park, we consciously lower stress levels through nature exposure and movement. Moving together naturally synchronizes biological rhythms—balancing your family's stress hormones (cortisol) so you can process complex data side-by-side with clear, calm minds.
                    </p>
                  </div>
                </div>

                {/* Right Column - 7 cols */}
                <div className="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l border-[#a67958]/20">
                  <div className="space-y-2">
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">nature integrated curriculum</span>
                    <h4 className="text-lg font-sans font-bold text-[#231e1a] tracking-tight lowercase">the 5 core learning areas practiced in the park</h4>
                    <p className="text-xs text-[#231e1a]/70 lowercase leading-relaxed">
                      Transform theoretical knowledge into concrete bodily habits. Conducted directly inside Epping Park to synchronize focus parameters.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      {
                        num: "01",
                        title: "Area 1: Factorial Thinking in Action",
                        text: "Moving away from standard high school memorization. Pairs practice linking complex, multi-layered real-world ideas together under pressure, testing frameworks out in the open air to build fluid systems thinking."
                      },
                      {
                        num: "02",
                        title: "Area 2: Live Local Server Architecture Talk",
                        text: "Working through the real-world setup and mechanical realities of building and running a secure local server right from a home desk, clearing up any tech confusion together."
                      },
                      {
                        num: "03",
                        title: "Area 3: Long-Term Knowledge Mapping",
                        text: "Mapping out how to structure your personal server so it works as a dynamic, lifelong educational partner that successfully captures university and career data as your child grows."
                      },
                      {
                        num: "04",
                        title: "Area 4: Safe Task Delegation Workshops",
                        text: "Reviewing how to identify low-level, repetitive school chores and administrative busywork, mapping out exactly how to safely offload these distractions to personal local helper tools so your child reclaims deep focus time."
                      },
                      {
                        num: "05",
                        title: "Area 5: Finding Insights & Spotting Errors",
                        text: "Practicing how to push AI tools to find unique, smart insights that others miss, while drilling the \"audit-first\" habit of checking machine answers against hard, real-world facts."
                      }
                    ].map((area) => (
                      <div key={area.num} className="flex gap-4 items-start p-4 bg-[#dfd5c8]/25 rounded-xl border border-[#a67958]/12 duration-300 hover:border-[#a67958]/35 transition-colors">
                        <span className="font-mono text-xs tracking-wider text-[#a67958] font-bold bg-[#ece6dd] px-2.5 py-1.5 rounded border border-[#a67958]/25 block shrink-0 select-none">
                          {area.num}
                        </span>
                        <div className="space-y-1">
                          <h5 className="font-sans font-bold text-[13px] text-[#231e1a] lowercase leading-tight">{area.title}</h5>
                          <p className="text-xs leading-relaxed text-[#231e1a]/80 lowercase">{area.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTier === "creator" && (
              <motion.div
                key="creator-spec"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 text-[#231e1a] font-sans"
              >
                {/* Left Column - 5 cols */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">elite strategic retreat</span>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1">
                      immersive <span className="text-[#a67958]">(the creator tier)</span>
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-[#231e1a] uppercase bg-[#dfd5c8] border border-[#a67958]/20 rounded-full py-1.5 px-4 inline-block mt-3 shadow-sm">
                      $2999.99 (All-Inclusive)
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">program structure</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "duration", value: "strictly 5 days long" },
                        { label: "location", value: "Blue Mountains, NSW (Bali available)" },
                        { label: "cohort limit", value: "max 5 families (strictly capped)" },
                        { label: "audience type", value: "parent-child strategic partners" }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-[#dfd5c8]/50 rounded-xl border border-[#a67958]/20 text-center flex flex-col justify-center">
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#a67958]/80 font-bold block">{item.label}</span>
                          <span className="text-xs font-sans font-semibold text-[#231e1a] lowercase mt-1 block leading-tight">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-[#a67958]/20">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">included core experiences</h4>
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Environment Reset
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          A deeply focused 5-day environment disruption completely away from daily home routines and distractions, designed for intensive rest, clear perspective shifts, and nature integration.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h5 className="font-sans font-bold text-[13px] lowercase text-[#231e1a] border-l-2 border-[#a67958]/55 pl-3">
                          Custom Process Optimization
                        </h5>
                        <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                          Five full days dedicated entirely to isolating, building, and refining your family's customized data processes and independent learning workflows out in a premium, quiet retreat setting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#a67958]/20 bg-[#dfd5c8]/30 p-5 rounded-2xl border border-[#a67958]/15">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">the core benefit</h4>
                    <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                      A complete 5-day environment reset transforms your home dynamic. By completely stepping out of everyday home routines and distractions, your family unites into a tightly aligned team. You return home not just with a technological setup, but as a cohesive force to be reckoned with—fully commanding a private AI environment that belongs entirely to your family.
                    </p>
                  </div>
                </div>

                {/* Right Column - 7 cols */}
                <div className="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l border-[#a67958]/20">
                  <div className="space-y-2">
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">premium master planning</span>
                    <h4 className="text-lg font-sans font-bold text-[#231e1a] tracking-tight lowercase">the 5 core strategic tracks solved during the retreat</h4>
                    <p className="text-xs text-[#231e1a]/70 lowercase leading-relaxed">
                      Emerge with direct physical execution blocks. Establish complete operational and data hegemony for your family.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      {
                        num: "01",
                        title: "Track 1: Mastered Factorial Thinking",
                        text: "Dedicating extended, undistracted time to completely reset your child's cognitive habits, changing their core approach from linear school memory work to advanced, multidimensional systems architecture."
                      },
                      {
                        num: "02",
                        title: "Track 2: Complete Local Server Blueprinting",
                        text: "Deep diving into the technical mechanics of setting up a secure, private local vault, ensuring both parent and child completely understand how to build and control their private network from the ground up."
                      },
                      {
                        num: "03",
                        title: "Track 3: The Multi-Year Academic Asset",
                        text: "Designing the lifetime dynamic database structure that will sit on your private local server, ensuring your child's accumulated school and university knowledge scales seamlessly as they transition into their future career."
                      },
                      {
                        num: "04",
                        title: "Track 4: The Automation & Time-Reclamation Matrix",
                        text: "Building out the custom automated personal helper tools on your server, systematically mapping and delegating low-level admin tasks so your child returns home with hours of daily study time completely reclaimed."
                      },
                      {
                        num: "05",
                        title: "Track 5: The \"Audit-First\" Insight Drill",
                        text: "Intensively training the family team to generate rare, competitive insights through AI while firmly grounding them in a strict double-check workflow, ensuring they never blindly trust automated machine output."
                      }
                    ].map((track) => (
                      <div key={track.num} className="flex gap-4 items-start p-4 bg-[#dfd5c8]/25 rounded-xl border border-[#a67958]/12 duration-300 hover:border-[#a67958]/35 transition-colors">
                        <span className="font-mono text-xs tracking-wider text-[#a67958] font-bold bg-[#ece6dd] px-2.5 py-1.5 rounded border border-[#a67958]/25 block shrink-0 select-none">
                          {track.num}
                        </span>
                        <div className="space-y-1">
                          <h5 className="font-sans font-bold text-[13px] text-[#231e1a] lowercase leading-tight">{track.title}</h5>
                          <p className="text-xs leading-relaxed text-[#231e1a]/80 lowercase">{track.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section 3 - PDF for Download and CTA */}
        <div className="w-full max-w-4xl mx-auto relative z-10 pb-12 px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center justify-center z-10"
          >
            <InteractivePdfCard 
              pdfUrl="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_43947898694c404b974043f69fe64077.pdf"
              imageUrl="https://static.wixstatic.com/media/b20068_f750f553758547128e12ae8756d97a8d~mv2.jpeg"
              labelText="slide to download"
              successText="downloading blueprint..."
            />

            <div className="mt-8 flex flex-col items-center gap-6">
              <motion.a
                href="/learning"
                whileHover={{ scale: 1.02 }}
                className="group flex items-center justify-between gap-4 px-6 py-3 rounded-full border border-[#a67958]/35 bg-[#ece6dd] hover:bg-[#a67958]/10 text-on-background shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">learning programs</span>
                <ChevronRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1 text-[#a67958]" />
              </motion.a>

              {/* www.psylife.shop text */}
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#a67958]/80 font-bold">
                  find out more at: <a href="https://www.psylife.shop" target="_blank" rel="noopener noreferrer" className="font-sans font-normal lowercase hover:text-[#231e1a] hover:underline cursor-pointer select-text pointer-events-auto">www.psylife.shop</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const LearningPage = () => (
  <>
    <SEO 
      title="learning modules & mastery | psylife.shop" 
      description="synthesis protocols, attention hardening, and temporal skew techniques to achieve peak cognitive endurance." 
      keywords="cognitive training, focus guides, attention hardening, flow mastery, productivity learning, Epping Sydney"
    />
    <Hero title="learning modules" subtitle="synthesis | protocol | mastery" youtubeId="ctx0uUiB2iE" />
    {listSection([
      { title: "visual synthesis", desc: "absorb complex systems through layered spatial visualization." },
      { title: "temporal skew", desc: "master time perception to extend periods of peak cognitive performance." },
      { title: "focus hardening", desc: "techniques to remain unphasable in environments of high volatility." }
    ])}
    {ctaSection("claim your edge.", "the future belongs to those who can master their own attention. join the inner circle.", "request access")}
  </>
);

const AboutPage = () => (
  <>
    <SEO 
      title="about us & genesis | psylife.shop" 
      description="the genesis of psylife.shop. we build premium, architected environments to curate digital permanence and focus." 
      keywords="psylife story, attention architecture, focus research, team alpha, Epping Sydney"
    />
    <Hero title="about psylife" subtitle="engineering focused futures" />
    {splitSection(
      "05", "identity", "our genesis",
      "born from the necessity of silence in a world of endless noise. we architect the future of attention.",
      [
        { label: "born", val: "2024" },
        { label: "team", val: "alpha" },
        { label: "goal", val: "focus" },
        { label: "status", val: "live" }
      ]
    )}
    {featureSection("the manifesto", "permanence.", "read more")}
  </>
);

const CompliancePage = () => (
  <>
    <SEO 
      title="compliance & security standards | psylife.shop" 
      description="reviewed ethical protocols and privacy footprint data sovereignty encryption. secure and compliant attention design." 
      keywords="data security, ethical AI, privacy policy, user compliance, data sovereignty, Epping Sydney"
    />
    <Hero title="compliance" subtitle="standards | ethics | security" />
    {listSection([
      { title: "data integrity", desc: "your neural footprint is your own. we encrypt at the cognitive level." },
      { title: "ethical framing", desc: "built with psychologist-verified protocols for safe immersion." }
    ])}
    {ctaSection("secure access.", "review our data sovereignty protocols.", "download report")}
  </>
);

const ContactPage = () => (
  <>
    <SEO 
      title="contact & direct link | psylife.shop" 
      description="direct transmission link for high-level inquiries and custom architectural consultations with psylife.shop." 
      keywords="contact psylife, focus consulting, custom neural design, contact sydney, Epping Sydney"
    />
    <Hero title="contact us" subtitle="direct link | office | channel" />
    {splitSection(
      "06", "channel", "open link",
      "direct transmission for high-level inquiries and architectural consultations.",
      [
        { label: "mail", val: "intel" },
        { label: "sec", val: "hq" },
        { label: "node", val: "local" },
        { label: "type", val: "vox" }
      ]
    )}
    {ctaSection("initiate link.", "we respond to clarity. state your objective clearly.", "send intel")}
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background text-on-background selection:bg-primary selection:text-[#ece6dd] overflow-x-hidden relative min-h-screen">
        <MouseGlow />
        
        {/* Texture mask */}
        <div className="fixed inset-0 pointer-events-none z-[5] matte-texture opacity-30" />
        
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<ParentPage />} />
            <Route path="/parents" element={<ParentPage />} />
            <Route path="/child" element={<ChildPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
