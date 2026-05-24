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

const ParentPage = () => (
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

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col relative z-10 pt-24 pb-16"
      >
        <div className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] border border-[#a67958]/15 bg-[#dfd5c8] flex flex-col">
          {/* Ambient Video Hero Slide nested seamlessly */}
          <div className="w-full aspect-video relative overflow-hidden bg-[#dfd5c8]">
            <iframe
              src="https://www.youtube.com/embed/lH4QkrgLuCI?autoplay=1&mute=1&loop=1&playlist=lH4QkrgLuCI&playsinline=1"
              title="PsyLife Video"
              className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none scale-[1.02]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            {/* Very soft bottom shadow at the bottom boundary */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
          </div>

          {PARENT_SLIDES.map((slide, index) => (
            <div 
              key={slide.num} 
              className="w-full relative overflow-hidden -mt-[1px]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto block select-none pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Very soft bottom shadow at the bottom of intermediate slides to suggest depth */}
              {index < PARENT_SLIDES.length - 1 && (
                <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </>
);

const InteractivePdfCard = () => {
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

  const PDF_URL = "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_5c4276697cce45df9c078b4ec19cf2ba.pdf";

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
    window.open(PDF_URL, "_blank", "noopener,noreferrer");
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
              src="https://static.wixstatic.com/media/b20068_9311a56fd7674097baecf8597e112acd~mv2.jpeg"
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
                {sliderCompleted ? "displaying blueprint..." : "slide to learn"}
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
  "https://static.wixstatic.com/media/b20068_bfac881d783e4513b07f9402b4bd48ef~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_b7fc49e10c794d3fa00df00e234e5f33~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_681eecf7a90048acb69aa538c6674558~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_23434e57530c4266a70c439610bf7be6~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_e31ca203d246416fb751990cb651c4ee~mv2.jpg"
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
                      src={CHILD_SLIDES[currentIndex]} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    {/* Main Image */}
                    <img 
                      src={CHILD_SLIDES[currentIndex]} 
                      alt={`child exploration workspace - slide ${currentIndex + 1}`}
                      className="w-full h-full object-contain relative z-10 select-none block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Right Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full border border-[#a67958]/15 bg-[#ece6dd]/75 backdrop-blur flex items-center justify-center text-[#a67958]/70 hover:text-[#a67958] hover:bg-[#ece6dd] hover:scale-105 transition-all outline-none focus:ring-1 focus:ring-[#a67958]/30"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                {/* Top Rank Badge */}
                <div className="absolute top-6 right-6 z-25 font-mono text-[10px] tracking-widest text-[#a67958] font-semibold bg-[#ece6dd]/75 backdrop-blur px-3 py-1 rounded-full border border-[#a67958]/15 select-none text-center">
                  0{currentIndex + 1} / 0{CHILD_SLIDES.length}
                </div>

                {/* Bottom Dot Bars */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25">
                  {CHILD_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 outline-none ${
                        currentIndex === i ? 'w-8 bg-[#a67958]' : 'w-2.5 bg-[#a67958]/25 hover:bg-[#a67958]/60'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Thin space separated section wrapper */}
          <div className="h-16 md:h-24 w-full" />

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] border border-[#a67958]/15 bg-[#dfd5c8] aspect-video relative z-10"
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

const ProductsPage = () => (
  <>
    <SEO 
      title="products & solutions | psylife" 
      description="physical and digital attention anchors designed to ground consciousness in high-volatility environments." 
      keywords="attention anchors, focus products, spatial design, cognitive hardware, study tools, Epping Sydney"
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

      <div className="max-w-4xl mx-auto relative z-10 pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Heading */}
        <div className="text-center mb-10 z-10">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#231e1a] lowercase mb-3 tracking-tight">products</h1>
          <p className="text-[11px] font-medium tracking-[0.6em] lowercase text-on-background/40">attention | anchors | design</p>
        </div>

        {/* Ambient Video Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)] border border-[#a67958]/15 bg-[#dfd5c8] aspect-video relative z-10"
        >
          <iframe
            src="https://www.youtube.com/embed/ctx0uUiB2iE?autoplay=1&mute=1&loop=1&playlist=ctx0uUiB2iE&playsinline=1"
            title="PsyLife Products Video"
            className="absolute top-0 left-0 w-full h-full border-0 scale-[1.02]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          {/* Very soft bottom shadow at the bottom boundary */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#1b1613]/5 to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
    </div>
  </>
);

const LearningPage = () => (
  <>
    <SEO 
      title="learning modules & mastery | psylife.shop" 
      description="synthesis protocols, attention hardening, and temporal skew techniques to achieve peak cognitive endurance." 
      keywords="cognitive training, focus guides, attention hardening, flow mastery, productivity learning, Epping Sydney"
    />
    <Hero title="learning modules" subtitle="synthesis | protocol | mastery" />
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
