import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, Download, Play, Pause, Volume2, Headphones, Video, Layers, Sparkles, Cpu, Clock, Check, BarChart2, BookOpen } from "lucide-react";
import { Navigation } from "./components/Navigation";
import { 
  Hero, 
  splitSection, 
  featureSection, 
  listSection, 
  ctaSection,
  YoutubeSection,
  HowToFixSection
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
      keywords="psylife.shop, psylife, Family | Fun | Foundations, neural architecture, focus, Epping Sydney, family foundations, learning and attention"
    />
    <Hero title="psylife.shop" subtitle="Family | Fun | Foundations" />
    <YoutubeSection />
    <HowToFixSection />
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
    alt: "we don't teach. we architect. environments designed for effortless focus."
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
        description="guide the developing mind toward deep focus. learn to build beautiful, friction-free environments to naturalise attention without fatigue." 
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
              className="absolute inset-0 rounded-none bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
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
        description="tactile and virtual environments designed for high-velocity child learning, creative exploration, play, and digital focus." 
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
              className="absolute inset-0 rounded-none bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Our brown frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
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
              className="absolute inset-0 rounded-none bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
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
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1 flex flex-col items-start gap-1">
                      <span>digital</span>
                      <span className="text-[#a67958] text-[13px] font-mono font-bold leading-normal block mt-1">the curious teir</span>
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
                      <h5 className="font-sans font-bold text-xs lowercase text-[#231e1a]">Weekly 1-Hour Session</h5>
                      <p className="text-xs leading-relaxed text-[#231e1a]/85 lowercase">
                        Includes 1 live session every single week for exactly 1 hour. This is our direct time to check in, answer your questions, fix any local tech problems with the server, and make sure your child is actively using these local tools in real life.
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
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1 flex flex-col items-start gap-1">
                      <span>physical</span>
                      <span className="text-[#a67958] text-[13px] font-mono font-bold leading-normal block mt-1">the committed teir</span>
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
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">5-day retreat</span>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1 flex flex-col items-start gap-1">
                      <span>immersive</span>
                      <span className="text-[#a67958] text-[13px] font-mono font-bold leading-normal block mt-1">the creator teir</span>
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
                        { label: "location", value: "Blue Mountains" },
                        { label: "cohort limit", value: "max 5 families (strictly capped)" },
                        { label: "audience type", value: "parent & child" }
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
                          Five full days dedicated entirely to isolating, building, and refining your family's customized data processes and independent learning workflows out in a quiet retreat setting.
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
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#a67958] font-bold">retreat plan</span>
                    <h4 className="text-lg font-sans font-bold text-[#231e1a] tracking-tight lowercase">the 5 tracks solved during the retreat</h4>
                    <p className="text-xs text-[#231e1a]/70 lowercase leading-relaxed">
                      Emerge with direct physical execution blocks. Establish complete operational and data agency for your family.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    {[
                      {
                        num: "01",
                        title: "Track 1: Factorial Thinking",
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

const LEARNING_PLAYBOOKS = [
  {
    num: "01",
    tag: "systems thinking",
    title: "Factorial Thinking Guide",
    focus: "Upgrading your child’s brain from old-school high school memorization into advanced systems thinking.",
    inside: "Deep-dive materials designed to replace simple, linear rote-learning with first-principles logic. It installs the mental architecture your child needs to map complex, multi-layered real-world ideas together and successfully handle massive workloads without breaking under pressure.",
    src: "https://static.wixstatic.com/media/b20068_df8efa95c19e4a69bf58e369bb5bb883~mv2.jpeg",
    alt: "upgrading child's brain from old-school memorization to advanced systems thinking",
    audio: {
      title: "factorial_vs_linear_01.mp3",
      description: "exploring the breakdown of traditional high school memory paradigms.",
      transcript: "linear thinking works for simple, repetitive historical datasets, but fails catastrophically under modern multi-layered complexity. factorial logic installs deep-mind first-principles logic so your child can map complex systems together effortlessly."
    },
    video: {
      title: "first principles cognitive geometry",
      chapters: ["00:00 - introduction to linear limits", "03:15 - system-variable mapping", "10:45 - deep-focus execution loops"],
      caption: "we are upgrading the mind's background operating system here in Epping 2121. replacing lists with beautiful relational logic."
    },
    slides: {
      slidesData: [
        "slide 1: traditional linear vs. advanced factorial. static memory decays immediately; system maps grow stronger with load.",
        "slide 2: parsing variables. kids isolate independent causal factors, map interactive links of study materials.",
        "slide 3: real world deployment. establishing clean structural anchors at the home desk to shield attention streams.",
        "slide 4: Epping cognitive synergy. mapping school curriculums directly into modular structural notes."
      ]
    },
    document: {
      title: "THE COMPREHENSIVE FACTORIAL THINKING MANIFESTO",
      body: "The traditional tutoring cycle is self-repeating loop of content delivery and administrative drills that exhaust the developing mind. This playbook bypasses that exhausting trajectory by installing a complete first-principles thinking blueprint directly. When your child learns of a system, they don't simply write down facts; they classify variables into coordinates, evaluate weight and dependencies, and map causal linkages across topics."
    },
    chart: {
      title: "factorial constellation map",
      nodes: ["biological constraints", "relational connection", "causal weight", "attention feedback"]
    }
  },
  {
    num: "02",
    tag: "private local server",
    title: "Private Local Server Build Manual",
    focus: "A direct, step-by-step instruction guide that takes away all the confusion of technical setup.",
    inside: "Practical, bottom-up manuals that teach you and your child exactly how to build, deploy, configure, and control your family’s private local VPS server right from your own desk. It focuses on hands-on deployment and managing software from scratch.",
    src: "https://static.wixstatic.com/media/b20068_ae5d7cd9b0ac43f2b53fe3fe54ab0971~mv2.jpeg",
    alt: "step-by-step instruction guide for private local server VPS setup",
    audio: {
      title: "sovereign_vps_setup_02.mp3",
      description: "building custom servers for unconstrained family safety.",
      transcript: "building and commanding an independent node removes corporate data leverage. it introduces your child to real linux execution, networking, port protocols, and server deployment bottom-up."
    },
    video: {
      title: "sovereign home-server terminal mapping",
      chapters: ["00:00 - physical architecture vs VPS virtual node", "04:30 - shell configurations and root keys", "09:12 - mapping clean data pipelines"],
      caption: "this is physical technology. we configure VPS virtual servers and connect safe client vaults directly from first-principles."
    },
    slides: {
      slidesData: [
        "slide 1: local VPS setup rules. we build on secure independent servers to prevent telemetry tracing.",
        "slide 2: key generation steps. parent & child establish matching credentials together on a unified screen.",
        "slide 3: port routing logic. blocking external telemetry trackers while maintaining high-speed localized sync.",
        "slide 4: data persistence loops. backing up family knowledge maps in encrypted offline vaults."
      ]
    },
    document: {
      title: "BOTTOM-UP VPS SERVER CONFIGURATION MANUAL",
      body: "Modern technology has trained our children to be passive consumers of locked interfaces. This workbook establishes the exact opposite logic. By configuring, launching, and commanding a private Virtual Private Server, your family gains complete control of your computational space. It teaches systems administration, dockerization, networking, and security keys."
    },
    chart: {
      title: "encrypted network loop model",
      nodes: ["family home clients", "encrypted gateway", "sovereign VPS vault", "automated data sync"]
    }
  },
  {
    num: "03",
    tag: "academic assets",
    title: "Real-World Long-Term Learning Playbook",
    focus: "Turning your private server into a lifetime educational partner and a permanent family asset.",
    inside: "A highly tactical workbook showing your child how to systematically organize, capture, and structure their personal learning notes and research. It ensures that as they transition through Year 11, move into university (like USYD or UNSW), and step into their career, their accumulated knowledge scales dynamically with them over the years.",
    src: "https://static.wixstatic.com/media/b20068_681eecf7a90048acb69aa538c6674558~mv2.jpg",
    alt: "tactical workbook for organizing knowledge vault over multi-year span",
    audio: {
      title: "permanent_knowledge_vault_03.mp3",
      description: "building and scaling multi-year academic assets.",
      transcript: "knowledge decays unless it lives inside structured relational directories. this playbook sets up an active knowledge capture vault that scales with them through HSC, university, and career."
    },
    video: {
      title: "structuring long-term relational databases",
      chapters: ["00:00 - traditional folder trees are dead", "03:55 - setting up dynamic relational tags", "08:15 - knowledge consolidation systems"],
      caption: "their accumulated knowledge becomes an actual physical asset, growing with them year after year."
    },
    slides: {
      slidesData: [
        "slide 1: permanent asset philosophy. every notes file acts as a structured investment that pays dividends for years.",
        "slide 2: relational indexing. tags represent contextual links across schools (such as Year 11, USYD, UNSW).",
        "slide 3: database triggers. creating automatic references so related concepts cluster organically.",
        "slide 4: active reading models. extracting hard core insights from dry, traditional public textbooks."
      ]
    },
    document: {
      title: "TRANSITIONAL ACADEMIC ASSET WORKBOOK",
      body: "High school kids threw away their study folders immediately after exams because those files lack systematic utility. This playbook implements a lifetime database directory. By standardizing capture structures on their private server, the notes your child writes in Year 11 become the exact foundations they leverage during university lectures and eventually inside executive workplace environments."
    },
    chart: {
      title: "lifetime knowledge asset hierarchy",
      nodes: ["capture inputs", "dynamic relation tags", "central vault core", "long-term outputs"]
    }
  },
  {
    num: "04",
    tag: "automation mechanics",
    title: "Reclaiming Time & Task Delegation Playbook",
    focus: "Stopping your child from wasting hundreds of hours on low-level, repetitive study chores and administrative tasks.",
    inside: "A step-by-step guide on how to safely identify and hand over transactional busywork (like formatting notes, manual scheduling, and sorting academic data) to automated personal helper tools running entirely on their private local server. This allows them to protect their limited cognitive energy and reclaim their time for high-level strategy and deep focus.",
    src: "https://static.wixstatic.com/media/b20068_d6986a7cf7b64fdb81501ab320d735b7~mv2.jpeg",
    alt: "reclaiming study hours by delegating transactional task workloads",
    audio: {
      title: "study_chore_automation_04.mp3",
      description: "how to program helper scripts to clear administrative busywork.",
      transcript: "admin study chores consume limited mental concentration. we show they can program helper scripts on their local server to auto-sort notes, auto-format study schedules and protect strategy time."
    },
    video: {
      title: "scripting automated study helpers",
      chapters: ["00:00 - identifying cognitive leaks", "05:10 - configuring auto-sorter daemons", "09:44 - time reclamation metrics"],
      caption: "save hundreds of hours. delegate routine tasks to personal automated tools running on your server."
    },
    slides: {
      slidesData: [
        "slide 1: transactional study leakage. formatting notes, filing folders, and typing summaries is expensive busywork.",
        "slide 2: delegation mechanics. how to program light cron jobs to sort incoming study PDFs autonomously.",
        "slide 3: mental energy protection. keeping 100% of cognitive focus high-level on strategy, logic and deep study.",
        "slide 4: Epping 2121 schedule optimization. automated calendars that adapt in real-time to family rhythms."
      ]
    },
    document: {
      title: "STUDY TASKS DELEGATION PROTOCOL",
      body: "Attention is a finite resource. When a child spends hours formatting, copying text, or manually organizing files, they deplete their willpower before deep learning even starts. This guide defines a clear delegation pipeline. We map all mechanical workloads and write secure scripts on their personal local VPS to handle them, protecting and reserving cognitive energy for deep focus."
    },
    chart: {
      title: "delegation workflow matrix",
      nodes: ["low-level inputs", "automation script pool", "filtered study files", "deep focus hours"]
    }
  },
  {
    num: "05",
    tag: "audit-first insights",
    title: "Finding Smart Insights & The Double-Check Playbook",
    focus: "Uncovering unique insights using AI while installing a strict \"audit-first\" safety mindset.",
    inside: "Advanced frameworks that teach your child how to push artificial intelligence tools to find deep, non-obvious ideas that others miss. Crucially, it drills the habit of never blindly trusting a computer's answer, mapping out exactly how to double-check machine outputs against hard, real-world facts so they never fall into the passive public tool trap.",
    src: "https://static.wixstatic.com/media/b20068_f750f553758547128e12ae8756d97a8d~mv2.jpeg",
    alt: "advanced frameworks for AI prompt inquiry with strict double check auditing",
    audio: {
      title: "audit_first_prompt_logic_05.mp3",
      description: "tactics for generating rare insights while protecting accuracy.",
      transcript: "blind trust is an attention trap. we drill the strict audit habit: using prompts to locate hidden linkages, then aggressively cross-referencing all AI answers against physical books."
    },
    video: {
      title: "audit-first prompting frameworks",
      chapters: ["00:00 - pushing prompt constraints", "04:12 - locating hallucinated data points", "09:50 - the physical validation loop"],
      caption: "never blindly trust a computer's answer. we map prompt sequences and establish rigid verification drills."
    },
    slides: {
      slidesData: [
        "slide 1: prompt constraints. how to prevent generic outputs by feeding the system rigorous datasets.",
        "slide 2: locating subtle hallucinations. teaching kids to find contradictions and false machine logic.",
        "slide 3: real verification rules. matching automated text with reliable physical books or verified sources.",
        "slide 4: spatial output. transforming drafts into analytical papers."
      ]
    },
    document: {
      title: "THE STRICT COGNITIVE AUDIT PROTOCOL",
      body: "The standard use of AI tools creates passive, dependent students. To prevent this public tool trap, this workbook installs an 'audit-first' safety protocol. We outline prompt methodologies that force systems to generate counter-intuitive angles, while implementing strict guidelines to verify every output against hard real-world constraints before adopting it."
    },
    chart: {
      title: "recursive validation feedback model",
      nodes: ["advanced prompt query", "raw machine response", "rigorous audit checklist", "verified output"]
    }
  }
];

const LearningPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFormat, setActiveFormat] = useState<"audio" | "video" | "slides" | "document" | "chart">("audio");

  // Audio Player Simulated States
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<"1x" | "1.25x" | "1.5x" | "2x">("1x");
  const [audioProgress, setAudioProgress] = useState(38);

  // Video Player Simulated States
  const [activeVideoChapter, setActiveVideoChapter] = useState(0);
  const [isCaptionOpen, setIsCaptionOpen] = useState(true);

  // Slides Mini-Deck State
  const [miniSlideIndex, setMiniSlideIndex] = useState(0);

  // Simple Document Reading Mode State
  const [textScale, setTextScale] = useState<"regular" | "large">("regular");

  // Chart Interactive Node selection State
  const [activeChartNode, setActiveChartNode] = useState<number | null>(null);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LEARNING_PLAYBOOKS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + LEARNING_PLAYBOOKS.length) % LEARNING_PLAYBOOKS.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % LEARNING_PLAYBOOKS.length);
  };

  useEffect(() => {
    setMiniSlideIndex(0);
    setIsPlaying(false);
    setActiveChartNode(null);
  }, [currentIndex]);

  return (
    <>
      <SEO 
        title="learning playbooks for families | Epping 2121 | psylife.shop" 
        description="5 comprehensive learning playbooks structured in plain English & delivered across 5 multi-sensory formats: audio, video, slides, simple documents, and scannable charts."
        keywords="learning playbooks, kids study, Epping 2121, Epping parents, focus training, academic playbooks, cognitive architecture Epping, study automation"
      />
      <div id="learning-page-container" className="bg-[#dfd5c8] text-[#231e1a] min-h-screen relative overflow-hidden matte-texture py-12 md:py-20 px-4 md:px-8">
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
          {/* Playbooks Carousel Slider */}
          <div 
            id="playbooks-carousel-wrapper"
            className="relative w-full z-10 group" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient backlight glow matching homepage */}
            <motion.div 
              className="absolute inset-0 rounded-none bg-primary/10 blur-[60px] pointer-events-none z-0 mix-blend-screen"
              animate={{
                scale: isHovered ? 1.05 : 0.96,
                opacity: isHovered ? 0.6 : 0.35,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] z-10 flex flex-col">
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
                      src={LEARNING_PLAYBOOKS[currentIndex].src} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    {/* Main Image */}
                    <img 
                      src={LEARNING_PLAYBOOKS[currentIndex].src} 
                      alt={LEARNING_PLAYBOOKS[currentIndex].alt}
                      className="w-full h-full object-cover relative z-10 select-none block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  id="button-playbook-prev"
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer text-center items-center"
                  aria-label="Previous playbook"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Right Arrow */}
                <button
                  id="button-playbook-next"
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30 cursor-pointer text-center items-center"
                  aria-label="Next playbook"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Top Rank Badge */}
                <div className="absolute top-6 right-6 z-25 font-mono text-[10px] tracking-widest text-[#a67958] font-semibold bg-[#ece6dd]/75 backdrop-blur px-3 py-1 rounded-full border border-[#a67958]/15 select-none text-center">
                  0{currentIndex + 1} / 0{LEARNING_PLAYBOOKS.length}
                </div>

                {/* Bottom Dot Bars */}
                <div id="dots-indicator-container" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25 flex-wrap justify-center max-w-[90%]">
                  {LEARNING_PLAYBOOKS.map((_, i) => (
                    <button
                      id={`dot-${i}`}
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 outline-none cursor-pointer ${
                        currentIndex === i ? 'w-8 bg-[#a67958]' : 'w-2.5 bg-[#a67958]/25 hover:bg-[#a67958]/60'
                      }`}
                      aria-label={`Go to playbook ${i + 1}`}
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
              {LEARNING_PLAYBOOKS[currentIndex].tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#231e1a] tracking-tight lowercase mb-4 max-w-2xl mx-auto px-4">
              {LEARNING_PLAYBOOKS[currentIndex].title}
            </h1>
          </motion.div>

          {/* Playbook Description Content Cards */}
          <motion.div 
            id="playbook-active-text-card"
            key={`desc-card-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="p-8 rounded-[2rem] border border-[#a67958]/25 bg-[#ece6dd]/60 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold block mb-3">the focus</span>
                <p className="text-sm font-sans text-[#231e1a]/95 leading-relaxed lowercase">
                  {LEARNING_PLAYBOOKS[currentIndex].focus}
                </p>
              </div>
              <div className="pt-6 border-t border-[#a67958]/15 mt-6 flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#231e1a]/50">Epping (2121)</span>
                <span className="font-mono text-[8px] text-[#a67958] uppercase font-bold tracking-widest">Format Agnostic</span>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] border border-[#50624d]/25 bg-[#ece6dd]/60 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#50624d] font-bold block mb-3">what's inside</span>
                <p className="text-sm font-sans text-[#231e1a]/85 leading-relaxed lowercase">
                  {LEARNING_PLAYBOOKS[currentIndex].inside}
                </p>
              </div>
              <div className="pt-6 border-t border-[#a67958]/15 mt-6 flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#231e1a]/50">Plain English Prose</span>
                <span className="font-mono text-[8px] text-[#50624d] uppercase font-bold tracking-widest">Deep-Dive Material</span>
              </div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="h-12 md:h-16 w-full" />

          {/* Format Selection header */}
          <div className="text-center w-full max-w-2xl px-4">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#231e1a] tracking-tight lowercase mb-3">
              choose your format
            </h2>
            <p className="text-xs text-[#231e1a]/60 leading-relaxed lowercase max-w-md mx-auto">
              every single playbook is delivered across 5 multi-sensory formats so your child can learn exactly how they like best.
            </p>
          </div>

          <div className="h-6 w-full" />

          {/* Interactive Format Selector Tabs Bar */}
          <div 
            id="format-interactive-selector" 
            className="w-full flex justify-center flex-wrap gap-2 md:gap-3 px-2 py-2 bg-[#ece6dd]/40 border border-[#a67958]/15 rounded-full backdrop-blur-sm shadow-sm md:max-w-3xl"
          >
            {[
              { type: "audio", label: "audio track", icon: Headphones },
              { type: "video", label: "video walk", icon: Video },
              { type: "slides", label: "slides deck", icon: Layers },
              { type: "document", label: "simple doc", icon: FileText },
              { type: "chart", label: "scannable chart", icon: BarChart2 }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeFormat === tab.type;
              return (
                <button
                  id={`format-tab-${tab.type}`}
                  key={tab.type}
                  type="button"
                  onClick={() => setActiveFormat(tab.type as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold duration-300 pointer-events-auto cursor-pointer border ${
                    isActive 
                      ? "bg-[#a67958] border-[#a67958] text-[#ece6dd] shadow-md scale-[1.03]" 
                      : "bg-[#ece6dd] border-[#a67958]/15 text-[#231e1a]/60 hover:text-[#a67958] hover:bg-[#ece6dd]/80"
                  }`}
                >
                  <TabIcon size={12} strokeWidth={2.5} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="h-8 w-full" />

          {/* Sensory Format Rendering Frame Workspace */}
          <div className="w-full relative min-h-[420px] flex flex-col justify-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${activeFormat}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex-1"
              >
                {activeFormat === "audio" && (
                  <div id="audio-player-block" className="w-full p-6 md:p-8 rounded-[2.5rem] border border-[#a67958]/25 bg-[#ece6dd]/85 shadow-lg flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Retro Casing / Imagery on left for Desktop */}
                    <div className="w-full md:w-1/3 aspect-square rounded-[2rem] bg-[#231e1a] relative flex flex-col items-center justify-center overflow-hidden p-6 shadow-md border border-[#a67958]/20 shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#a67958]/15 via-transparent to-transparent z-0" />
                      
                      {/* Interactive pulsing waveform when playing */}
                      <div className="w-24 h-24 rounded-full border border-[#a67958]/35 flex items-center justify-center relative z-10 bg-[#ece6dd]/10 backdrop-blur-sm">
                        <Headphones className="text-[#a67958]" size={36} />
                        {isPlaying && (
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 rounded-full border border-[#a67958]/60"
                          />
                        )}
                      </div>

                      <div className="text-center z-10 mt-6 max-w-full">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#a67958]/90 font-bold max-w-full block px-2 whitespace-normal break-words leading-relaxed">
                          {LEARNING_PLAYBOOKS[currentIndex].audio.title}
                        </span>
                        <span className="font-mono text-[7px] text-[#ece6dd]/40 tracking-[0.2em] block mt-1 uppercase">
                          epping broadcast logic
                        </span>
                      </div>
                    </div>

                    {/* Integrated player details / Transcript controls on right */}
                    <div className="flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">multi-sensory format: audio</span>
                            <h3 className="text-xl font-sans font-bold text-[#231e1a] lowercase tracking-tight mt-1">
                              {LEARNING_PLAYBOOKS[currentIndex].title} — podcast lesson
                            </h3>
                          </div>
                          
                          {/* Playback speed trigger */}
                          <button
                            id="button-audio-speed"
                            type="button"
                            onClick={() => {
                              const speeds: ("1x" | "1.25x" | "1.5x" | "2x")[] = ["1x", "1.25x", "1.5x", "2x"];
                              const idx = speeds.indexOf(audioSpeed);
                              setAudioSpeed(speeds[(idx + 1) % speeds.length]);
                            }}
                            className="px-3 py-1 border border-[#a67958]/20 bg-[#ece6dd] rounded-full font-mono text-[8px] tracking-wider text-[#a67958] hover:bg-[#a67958] hover:text-[#ece6dd] duration-300 font-bold select-none cursor-pointer"
                          >
                            {audioSpeed} SPEED
                          </button>
                        </div>

                        <p className="text-xs text-[#231e1a]/60 leading-snug lowercase">
                          {LEARNING_PLAYBOOKS[currentIndex].audio.description}
                        </p>
                      </div>

                      {/* Wave anim design and progress seek */}
                      <div className="space-y-2 bg-[#dfd7cc]/30 p-4 rounded-2xl border border-[#a67958]/12">
                        {/* Interactive dynamic waves */}
                        <div className="h-8 flex items-end justify-center gap-1">
                          {Array.from({ length: 28 }).map((_, waveIdx) => (
                            <motion.div
                              key={waveIdx}
                              animate={{
                                height: isPlaying 
                                  ? [
                                      `${8 + Math.sin(waveIdx + Math.random()) * 20}px`, 
                                      `${2 + Math.cos(waveIdx + Math.random()) * 12}px`, 
                                      `${8 + Math.sin(waveIdx) * 20}px`
                                    ] 
                                  : "6px"
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: waveIdx * 0.04
                              }}
                              className={`w-1 rounded-full ${waveIdx < (audioProgress / 100) * 28 ? 'bg-[#a67958]' : 'bg-[#a67958]/20'}`}
                            />
                          ))}
                        </div>

                        {/* Timeline scrubber slider */}
                        <div className="flex justify-between items-center text-[8px] font-mono text-[#231e1a]/55 px-1 pt-1 selection:bg-transparent">
                          <span>04:12</span>
                          <div 
                            onClick={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const clickX = e.clientX - rect.left;
                              setAudioProgress(Math.floor((clickX / rect.width) * 100));
                            }}
                            className="flex-1 mx-4 h-1.5 bg-[#a67958]/15 rounded-full relative cursor-pointer group"
                          >
                            <div 
                              className="h-full bg-[#a67958] rounded-full relative"
                              style={{ width: `${audioProgress}%` }}
                            >
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a67958] ring-4 ring-[#ece6dd] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                          <span>12:45</span>
                        </div>
                      </div>

                      {/* Main play button controls */}
                      <div className="flex gap-4 items-center">
                        <button
                          id="button-audio-play"
                          type="button"
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="flex items-center gap-2 px-6 py-3 bg-[#a67958] text-[#ece6dd] rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold hover:bg-primary duration-300 shadow-md cursor-pointer"
                        >
                          {isPlaying ? (
                            <>
                              <Pause size={12} strokeWidth={2.5} />
                              <span>pause lesson</span>
                            </>
                          ) : (
                            <>
                              <Play size={12} fill="currentColor" />
                              <span>play lesson audio</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-2 px-3 py-2 bg-[#dfd7cc]/30 rounded-2xl border border-[#a67958]/12">
                          <Volume2 size={12} className="text-[#a67958]" />
                          <span className="font-mono text-[8px] tracking-wider text-[#a67958] font-bold">100% VOLUME</span>
                        </div>
                      </div>

                      {/* Interactive live transcript lines snippet */}
                      <div className="p-4 rounded-2xl bg-[#231e1a]/90 text-[#ece6dd] border border-[#a67958]/35 font-mono text-[9.5px] leading-relaxed relative">
                        <span className="absolute top-2 right-3 font-mono text-[6.5px] tracking-widest text-[#a67958] font-bold bg-[#ece6dd]/10 px-2 py-0.5 rounded-full uppercase">live transcript</span>
                        <p className="text-[#ece6dd]/90 select-text pr-12 lowercase leading-normal text-left">
                          <span className="text-[#a67958] font-bold">" </span>
                          {LEARNING_PLAYBOOKS[currentIndex].audio.transcript}
                          <span className="text-[#a67958] font-bold"> "</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeFormat === "video" && (
                  <div id="video-console-block" className="w-full p-4 md:p-6 rounded-[2.5rem] border border-[#a67958]/25 bg-[#ece6dd]/85 shadow-lg flex flex-col gap-6">
                    {/* Simulated High fidelity cinematic video player framing */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#a67958]/35 bg-[#231e1a] shadow-md flex items-center justify-center group/video">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1b1613]/55 via-transparent to-[#1b1613]/35 z-10 pointer-events-none" />
                      
                      {/* Blurred backdrop visual mapping */}
                      <img 
                        src={LEARNING_PLAYBOOKS[currentIndex].src} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover opacity-15 blur-2xl grayscale"
                        referrerPolicy="no-referrer"
                      />

                      {/* Playback image representation */}
                      <img 
                        src={LEARNING_PLAYBOOKS[currentIndex].src} 
                        alt="video screen" 
                        className="w-full h-full object-cover filter contrast-125 brightness-[0.4] select-none scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Center floating dynamic overlays */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                        {/* Top detail bar */}
                        <div className="flex justify-between items-center">
                          <span className="px-3 py-1 bg-[#231e1a]/85 border border-[#a67958]/35 text-[#ece6dd] font-mono text-[8px] tracking-widest uppercase rounded-full select-none">
                            multi-sensory tutorial console
                          </span>
                          <span className="text-[8px] font-mono text-[#ece6dd]/75 bg-[#231e1a]/70 px-2 py-1 rounded select-none">
                            status: active simulation
                          </span>
                        </div>

                        {/* Mid floating play button */}
                        <div className="flex justify-center items-center">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 rounded-full bg-[#ece6dd]/96 border border-[#a67958]/45 flex items-center justify-center text-[#231e1a] shadow-xl hover:bg-[#ece6dd] cursor-pointer"
                          >
                            <Play size={20} fill="currentColor" className="ml-1" />
                          </motion.button>
                        </div>

                        {/* Bottom interactive caption frame */}
                        <AnimatePresence>
                          {isCaptionOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="w-full text-center max-w-xl mx-auto bg-[#231e1a]/95 border border-[#a67958]/35 px-4 py-3 rounded-xl backdrop-blur-sm shadow-md"
                            >
                              <p className="font-mono text-[9px] text-[#ece6dd] lowercase leading-normal tracking-wide">
                                {LEARNING_PLAYBOOKS[currentIndex].video.caption}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Integrated bottom interface for chapter selector & triggers */}
                    <div className="grid md:grid-cols-12 gap-6 pt-2 text-left">
                      <div className="md:col-span-8 space-y-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">screencast video module</span>
                          <h3 className="text-lg font-sans font-bold text-[#231e1a] lowercase tracking-tight">
                            {LEARNING_PLAYBOOKS[currentIndex].title} — tutorial walks
                          </h3>
                        </div>
                        <p className="text-xs text-[#231e1a]/60 leading-relaxed lowercase">
                          this visual screencast walkthrough covers bottom-up logical setup rules, direct prompt testing, local server connections, and Epping family focus guidelines in plain English.
                        </p>
                      </div>

                      <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-[#a67958]/15 md:pl-6 text-left">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold block">chapters (interactive simulation)</span>
                        <div className="space-y-2">
                          {LEARNING_PLAYBOOKS[currentIndex].video.chapters.map((chapterStr, chapterIdx) => (
                            <button
                              id={`chapter-link-${chapterIdx}`}
                              key={chapterIdx}
                              type="button"
                              onClick={() => {
                                setActiveVideoChapter(chapterIdx);
                                setIsCaptionOpen(true);
                              }}
                              className={`w-full text-left p-2.5 rounded-xl border font-mono text-[8.5px] uppercase tracking-wider block transition-all hover:scale-102 cursor-pointer ${
                                activeVideoChapter === chapterIdx 
                                  ? "bg-[#a67958] text-[#ece6dd] border-[#a67958] font-bold" 
                                  : "bg-[#ece6dd] border-[#a67958]/12 text-[#231e1a]/70 hover:bg-[#dfd7cc]/30"
                              }`}
                            >
                              {chapterStr}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFormat === "slides" && (
                  <div id="slides-deck-blocks" className="w-full p-4 md:p-6 rounded-none border border-[#a67958]/25 bg-[#ece6dd]/85 shadow-lg flex flex-col gap-6">
                    {/* Active Mini-slide rendering node */}
                    <div className="relative w-full aspect-[16/10] rounded-none overflow-hidden border border-[#a67958]/35 bg-[#ece6dd] shadow-inner p-8 flex flex-col justify-between">
                      {/* Blueprint grid coordinates for design style */}
                      <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#a67958]">
                          <line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="90" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
                          <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.1" />
                        </svg>
                      </div>

                      <div className="flex justify-between items-start z-10 w-full select-none uppercase">
                        <span className="px-3 py-1 bg-[#a67958]/10 text-[#a67958] border border-[#a67958]/25 font-mono text-[8.5px] uppercase tracking-widest rounded-full font-bold">
                          slide 0{miniSlideIndex + 1}
                        </span>
                        <div className="text-right">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#a67958]/80 font-bold block">playbook slides</span>
                          <span className="text-[7px] text-[#231e1a]/40 tracking-wider block font-mono">ep_0{currentIndex + 1} / card_deck</span>
                        </div>
                      </div>

                      <div className="z-10 py-6 text-center max-w-xl mx-auto">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={miniSlideIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg md:text-2xl font-sans text-[#231e1a] font-semibold leading-relaxed tracking-tight lowercase text-center px-4 md:px-6"
                          >
                            {LEARNING_PLAYBOOKS[currentIndex].slides.slidesData[miniSlideIndex].split('.')[0]}
                          </motion.p>
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={`desc-${miniSlideIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="text-[11px] text-[#231e1a]/60 leading-relaxed font-sans mt-4 max-w-md mx-auto lowercase text-center"
                          >
                            {LEARNING_PLAYBOOKS[currentIndex].slides.slidesData[miniSlideIndex].split('.')[1]}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      {/* Control buttons inside slide layout */}
                      <div className="flex justify-between items-center z-10 select-none">
                        <button
                          id="button-mini-slide-prev"
                          type="button"
                          onClick={() => setMiniSlideIndex((p) => (p - 1 + 4) % 4)}
                          className="w-9 h-9 border border-[#a67958]/15 bg-[#ece6dd] hover:bg-[#a67958] hover:text-[#ece6dd] rounded-full flex items-center justify-center text-[#a67958]/70 hover:scale-105 duration-300 transition-all outline-none cursor-pointer text-center"
                          aria-label="Previous mini slide"
                        >
                          <ChevronLeft size={16} strokeWidth={2.5} />
                        </button>

                        <div className="flex gap-2">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <button
                              id={`mini-slide-dot-${i}`}
                              key={i}
                              type="button"
                              onClick={() => setMiniSlideIndex(i)}
                              className={`h-1.5 rounded-full transition-all duration-300 outline-none cursor-pointer ${
                                miniSlideIndex === i ? "w-6 bg-[#a67958]" : "w-1.5 bg-[#a67958]/20"
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          id="button-mini-slide-next"
                          type="button"
                          onClick={() => setMiniSlideIndex((p) => (p + 1) % 4)}
                          className="w-9 h-9 border border-[#a67958]/15 bg-[#ece6dd] hover:bg-[#a67958] hover:text-[#ece6dd] rounded-full flex items-center justify-center text-[#a67958]/70 hover:scale-105 duration-300 transition-all outline-none cursor-pointer text-center"
                          aria-label="Next mini slide"
                        >
                          <ChevronRight size={16} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeFormat === "document" && (
                  <div id="document-reader-block" className="w-full p-6 md:p-8 rounded-[2.5rem] border border-[#a67958]/25 bg-[#ece6dd]/85 shadow-lg flex flex-col gap-6 text-left">
                    {/* Top console bar */}
                    <div className="flex justify-between items-center pb-4 border-b border-[#a67958]/15">
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} className="text-[#a67958]" />
                        <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#a67958] font-bold">plain english document mode</span>
                      </div>
                      
                      {/* Font selector trigger for luxury reading feedback */}
                      <button
                        id="button-reader-scale-toggle"
                        type="button"
                        onClick={() => setTextScale((p) => (p === "regular" ? "large" : "regular"))}
                        className="px-3 py-1 border border-[#a67958]/15 bg-[#ece6dd]/80 rounded-full font-mono text-[8px] tracking-wider text-[#a67958] hover:scale-103 duration-350 cursor-pointer uppercase font-bold"
                      >
                        {textScale === "regular" ? "increase text size" : "decrease text size"}
                      </button>
                    </div>

                    {/* Luxurious reading paper text box */}
                    <article className="max-w-2xl mx-auto py-4 px-2 md:px-6">
                      <h4 className="font-sans font-bold text-center tracking-tight text-xl md:text-2xl text-[#231e1a] lowercase mb-6">
                        {LEARNING_PLAYBOOKS[currentIndex].document.title}
                      </h4>
                      
                      <div className={`text-[#231e1a]/90 font-sans leading-relaxed text-left lowercase space-y-4 ${
                        textScale === "large" ? "text-base md:text-lg" : "text-xs md:text-sm"
                      }`}>
                        <p>{LEARNING_PLAYBOOKS[currentIndex].document.body}</p>
                        <p>
                          our families in epping (2121) are uniquely situated adjacent to australia's leading research hubs (usyd, unsw, and local technical industries). this playbook is optimized to cultivate independent research capabilities that give your child an immediate structural advantage in key fields.
                        </p>
                        <p>
                          the playbook features beautiful step-by-step blueprints, reference examples, clear terminal codes, layout matrices, prompt loops and validation drills designed for instant setup directly from your own home.
                        </p>
                      </div>
                    </article>

                    {/* Download prompt link container */}
                    <div className="bg-[#dfd7cc]/30 p-5 rounded-2xl border border-[#a67958]/12 text-center flex flex-col items-center gap-3">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">download full publication library</span>
                      <p className="text-xs text-[#231e1a]/70 max-w-md lowercase">
                        claim the full compiled playbooks collection in pristine offset print PDF format containing active blueprints, templates and terminal scripts.
                      </p>
                      <a 
                        id="button-document-direct-download"
                        href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_5c4276697cce45df9c078b4ec19cf2ba.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#a67958] text-[#ece6dd] rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold hover:bg-[#8e6545] transition-colors cursor-pointer"
                      >
                        <Download size={12} strokeWidth={2.5} />
                        download pdf document (1.2 MB)
                      </a>
                    </div>
                  </div>
                )}

                {activeFormat === "chart" && (
                  <div id="chart-model-block" className="w-full p-4 md:p-6 rounded-[2.5rem] border border-[#a67958]/25 bg-[#ece6dd]/85 shadow-lg flex flex-col md:flex-row gap-6">
                    {/* SVG Constellation System Graph on Left */}
                    <div className="flex-1 rounded-2xl border border-[#a67958]/35 bg-[#ece6dd] shadow-inner p-6 aspect-square md:aspect-auto flex flex-col justify-between relative overflow-hidden">
                      {/* System Chart Coordinates Header */}
                      <div className="flex justify-between items-center z-10 w-full mb-4 select-none uppercase">
                        <span className="px-3 py-1 bg-[#50624d]/10 text-[#50624d] border border-[#50624d]/25 font-mono text-[8.5px] uppercase tracking-widest rounded-full font-bold">
                          interactive system map
                        </span>
                        <span className="font-mono text-[80px] md:text-[8px] text-[#231e1a]/55">
                          {LEARNING_PLAYBOOKS[currentIndex].chart.title}
                        </span>
                      </div>

                      {/* SVG Vector Map */}
                      <div className="flex-1 relative w-full flex items-center justify-center">
                        <svg viewBox="0 0 400 300" className="w-full h-full max-h-[250px] overflow-visible select-none">
                          {/* Outer orbital rings */}
                          <circle cx="200" cy="150" r="110" fill="none" stroke="rgba(166, 121, 88, 0.08)" strokeWidth="1" />
                          <circle cx="200" cy="150" r="70" fill="none" stroke="rgba(166, 121, 88, 0.12)" strokeWidth="0.5" />
                          
                          {/* Interactive connection axes */}
                          <line x1="200" y1="40" x2="200" y2="260" stroke="rgba(166, 121, 88, 0.12)" strokeWidth="0.5" strokeDasharray="3 3" />
                          <line x1="90" y1="150" x2="310" y2="150" stroke="rgba(166, 121, 88, 0.12)" strokeWidth="0.5" strokeDasharray="3 3" />

                          {/* Node Connection Vectors linking the four coordinates */}
                          <path d="M 200 40 L 310 150 L 200 260 L 90 150 Z" fill="none" stroke="#a67958" strokeWidth="1.5" strokeDasharray="2 2" />

                          {/* SVG Interlocking loop paths connecting to center */}
                          <path d="M 200 150 Q 250 95, 200 40" fill="none" stroke="rgba(80, 98, 77, 0.15)" strokeWidth="1" />
                          <path d="M 200 150 Q 255 205, 310 150" fill="none" stroke="rgba(80, 98, 77, 0.15)" strokeWidth="1" />
                          <path d="M 200 150 Q 150 205, 200 260" fill="none" stroke="rgba(80, 98, 77, 0.15)" strokeWidth="1" />
                          <path d="M 200 150 Q 145 95, 90 150" fill="none" stroke="rgba(80, 98, 77, 0.15)" strokeWidth="1" />

                          {/* Center Focus Orb */}
                          <circle cx="200" cy="150" r="30" fill="#ece6dd" stroke="#a67958" strokeWidth="2" />
                          <circle cx="200" cy="150" r="22" fill="#a67958" className="opacity-10" />
                          <text x="200" y="153" textAnchor="middle" fill="#a67958" fontSize="6.5" fontFamily="monospace" fontWeight="bold">S_SYNC</text>

                          {/* Node Coordinates */}
                          {[
                            { x: 200, y: 40, label: "01" },
                            { x: 310, y: 150, label: "02" },
                            { x: 200, y: 260, label: "03" },
                            { x: 90, y: 150, label: "04" }
                          ].map((nodeObj, nodeIdx) => {
                            const isNodeSelected = activeChartNode === nodeIdx;
                            return (
                              <g 
                                key={nodeIdx} 
                                className="cursor-pointer group" 
                                onClick={() => setActiveChartNode(nodeIdx)}
                              >
                                <circle 
                                  cx={nodeObj.x} 
                                  cy={nodeObj.y} 
                                  r={isNodeSelected ? 11 : 8} 
                                  fill="#ece6dd" 
                                  stroke={isNodeSelected ? "#50624d" : "#a67958"} 
                                  strokeWidth={isNodeSelected ? 2.5 : 1.5}
                                  className="transition-all duration-300"
                                />
                                <text 
                                  x={nodeObj.x} 
                                  y={nodeObj.y + 2.5} 
                                  textAnchor="middle" 
                                  fill={isNodeSelected ? "#50624d" : "#a67958"} 
                                  fontSize="7" 
                                  fontFamily="monospace" 
                                  fontWeight="bold"
                                >
                                  {nodeObj.label}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>

                      <div className="z-10 text-center select-none">
                        <p className="font-mono text-[7px] text-[#231e1a]/40 uppercase tracking-[0.3em]">
                          click on nodes to decode structural first-principles vectors
                        </p>
                      </div>
                    </div>

                    {/* Node details / Explain card on Right */}
                    <div className="w-full md:w-1/3 p-5 rounded-2xl bg-[#dfd7cc]/30 border border-[#a67958]/15 flex flex-col justify-between shrink-0 text-left">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold block mb-3">node evaluation</span>
                        {activeChartNode === null ? (
                          <div className="py-8 text-center text-[#231e1a]/55 italic font-sans text-xs">
                            tap any node coordinate map on the constellation visualizer to unpack details.
                          </div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                          >
                            <span className="font-mono text-xs font-bold bg-[#ece6dd] px-2.5 py-1.5 rounded-xl border border-[#a67958]/15 tracking-wider text-[#a67958] inline-block select-none">
                              NODE 0{activeChartNode + 1}
                            </span>
                            
                            <h4 className="font-sans font-bold text-sm text-[#231e1a] lowercase leading-tight">
                              {LEARNING_PLAYBOOKS[currentIndex].chart.nodes[activeChartNode]}
                            </h4>

                            <p className="text-[11.5px] leading-relaxed text-[#231e1a]/80 lowercase">
                              {activeChartNode === 0 && "this core represents Epping biological and cognitive triggers—ensuring environmental alignment perfectly shields focus."}
                              {activeChartNode === 1 && "this coordinate tracks how knowledge vectors connect dynamically over a multi-year duration."}
                              {activeChartNode === 2 && "this represents the secure local server vault where families contain encrypted knowledge assets directly on their desk."}
                              {activeChartNode === 3 && "this node acts as the validation checking routine, grounding synthetic insights in physical text real-world validation data."}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-[#a67958]/15 mt-4 flex items-center justify-between text-[7px] font-mono text-on-background/40 select-none uppercase tracking-widest">
                        <span>system: fully mapped</span>
                        <span>0{currentIndex + 1}_V3.0</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Spacer */}
          <div className="h-16 md:h-24 w-full" />

          {/* Section 3 - Beautiful Sliding PDF summary card specifically for learning page */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-center z-10"
          >
            <InteractivePdfCard 
              pdfUrl="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_5c4276697cce45df9c078b4ec19cf2ba.pdf"
              imageUrl="https://static.wixstatic.com/media/b20068_9311a56fd7674097baecf8597e112acd~mv2.jpeg"
              labelText="slide to download learning blueprint"
              successText="unlocked learning booklet..."
            />
          </motion.div>

          {/* Spacer */}
          <div className="h-12 md:h-16 w-full" />

          {/* Custom CTA matching playbooks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-12 md:p-20 bg-[#cbd2c5]/40 border border-[#a67958]/20 rounded-[3rem] w-full relative overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#a67958]/10 via-transparent to-transparent pointer-events-none" />
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#50624d] font-bold block mb-4">the outcome awaits</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-[#231e1a] lowercase mb-6">
              join families in epping (2121)
            </h2>
            <p className="max-w-md mx-auto text-[#231e1a]/85 text-xs mb-8 leading-relaxed lowercase">
              our 5-day retreats are strictly capped at exactly 5 families per intake to ensure complete tailored engineering for your child. request access to verify availability in epping.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-4 bg-[#50624d] text-[#ece6dd] hover:bg-[#3d4b3b] rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-md transition-all cursor-pointer"
              >
                request access
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const AboutPage = () => (
  <>
    <SEO 
      title="about us & genesis | psylife.shop" 
      description="the genesis of psylife.shop. we build architected environments to curate digital permanence and focus." 
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
