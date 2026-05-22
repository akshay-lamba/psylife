import { motion, AnimatePresence } from "motion/react";
import { ReactNode, useState, useEffect } from "react";
import { Download } from "lucide-react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-32 relative ${className}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {children}
    </div>
  </section>
);

const HERO_IMAGES = [
  "https://static.wixstatic.com/media/b20068_862b2dba3b5545eea41060bbed1eb668~mv2.jpeg",
  "https://static.wixstatic.com/media/b20068_fcbcbb260241418d94f1e11d828f9e7a~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_a2214479f41648ad8775b9666ff6e0b6~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_a5803972e8f24cfab0dc79cca5570d66~mv2.jpg",
  "https://static.wixstatic.com/media/b20068_85ca72b89c5d445fa42bfa5611a79eba~mv2.jpeg"
];

export const Hero = ({ title, subtitle, images = HERO_IMAGES }: { title?: string, subtitle?: string, images?: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Section className="matte-texture min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Subtle theme-color backlight glow (#a67c52 / var(--primary)) */}
      <motion.div 
        className="absolute w-[80vw] md:w-[55vw] aspect-[4/3] md:aspect-video rounded-[60px] bg-primary/10 blur-[100px] pointer-events-none z-0 mix-blend-screen"
        animate={{
          scale: isHovered ? 1.08 : 0.95,
          opacity: isHovered ? 0.75 : 0.45,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div 
        className="relative w-[90vw] md:w-[65vw] aspect-[4/3] md:aspect-video z-10 mt-12 group cursor-crosshair"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10 glass shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-[#080705]"
            >
              {/* Blurred Backdrop for seamless look when aspect ratios don't match */}
              <img 
                src={images[currentSlide]} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 grayscale"
                referrerPolicy="no-referrer"
              />
              
              <motion.img 
                src={images[currentSlide]} 
                alt="immersive environment"
                className="w-full h-full object-contain relative z-10"
                animate={{ 
                  filter: isHovered ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(75%)"
                }}
                transition={{ duration: 0.8 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080705] via-transparent to-transparent opacity-40 pointer-events-none z-20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 text-center"
      >
        {title && <h1 className="text-4xl md:text-6xl font-sans font-bold metallic-text lowercase mb-4">{title}</h1>}
        <p className="text-[11px] font-medium tracking-[0.6em] lowercase text-on-background/40">
          {subtitle || "family | fun | foundations"}
        </p>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] left-[5%] w-64 h-64 border border-white/5 rounded-[60px] rotate-12"
        />
      </div>
    </Section>
  );
};

export const splitSection = (num: string, label: string, title: string, desc: string, items: {label: string, val: string, href?: string, img?: string}[]) => (
  <Section className="bg-background relative overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[9px] lowercase tracking-[0.4em] text-primary/60 mb-6 block">{num} / {label}</span>
        <h2 className="text-6xl font-sans font-bold mb-8 metallic-text lowercase">{title}</h2>
        <p className="text-on-background/30 text-sm leading-loose max-w-sm lowercase">
          {desc}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {items.map((item, i) => {
          const Content = (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 glass rounded-[32px] depth-card flex flex-col justify-between aspect-square group/item relative overflow-hidden"
            >
              {item.img && (
                <div className="absolute inset-0 z-0 opacity-10 group-hover/item:opacity-20 transition-opacity">
                  <img 
                    src={item.img} 
                    alt="thumbnail" 
                    className="w-full h-full object-contain mix-blend-screen brightness-150 contrast-125"
                    style={{
                      maskImage: 'radial-gradient(circle, black 20%, transparent 75%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 75%)'
                    }}
                  />
                </div>
              )}

              <div className="flex flex-col h-full justify-between items-start z-10 relative">
                <span className="text-[10px] text-primary/40 lowercase tracking-widest">{item.label}</span>
                <span className="italic font-sans font-bold text-3xl metallic-text lowercase">{item.val}</span>
              </div>
              
              {item.href && (
                <div className="absolute bottom-4 right-4 text-primary/20 group-hover/item:text-primary transition-colors">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Download size={16} />
                  </motion.div>
                </div>
              )}
              
              {item.href && (
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
              )}
            </motion.div>
          );

          if (item.href) {
            return (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                {Content}
              </a>
            );
          }

          return Content;
        })}
      </div>
    </div>
  </Section>
);

export const featureSection = (sub?: string, title?: string, btn?: string, videoUrl?: string) => (
  <Section className="matte-texture">
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5 relative glass"
      >
        {videoUrl ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-opacity duration-1000 ${(!sub && !title && !btn) ? 'opacity-100' : 'opacity-50'}`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        )}
        
        {(sub || title || btn) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
            {sub && <span className="text-[10px] lowercase tracking-[1em] mb-12 opacity-30">{sub}</span>}
            {title && <h2 className="text-4xl md:text-7xl font-sans font-bold metallic-text tracking-tighter mb-8 italic lowercase">{title}</h2>}
            {btn && (
              <motion.div
                className="px-10 py-4 glass rounded-full cursor-pointer hover:bg-white/5 transition-all text-sm lowercase tracking-widest text-white/60"
                whileHover={{ scale: 1.05 }}
              >
                {btn}
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  </Section>
);

export const listSection = (items: {title: string, desc: string}[]) => (
  <Section className="bg-background">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-20 relative">
        <div className="absolute -left-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-3xl font-sans font-bold italic text-on-background group-hover:text-primary transition-colors tracking-tighter lowercase">{item.title}</h3>
              <span className="text-[10px] opacity-20 font-mono tracking-widest lowercase">module_0{i+1}</span>
            </div>
            <p className="text-sm text-on-background/30 leading-relaxed max-w-sm lowercase">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="relative">
        <div className="aspect-square glass rounded-[60px] flex items-center justify-center p-12 depth-card overflow-hidden">
           <div className="absolute inset-0 matte-texture opacity-20" />
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             className="w-full h-full border border-primary/10 rounded-full flex items-center justify-center p-8"
           >
             <div className="w-full h-full border border-primary/20 rounded-full flex items-center justify-center p-8">
               <div className="w-full h-full border border-primary/30 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-sm" />
             </div>
           </motion.div>
           <div className="absolute z-10 flex flex-col items-center">
             <span className="metallic-text font-sans font-bold italic text-6xl">84%</span>
             <span className="text-[8px] lowercase tracking-[0.5em] opacity-30 mt-4 text-on-background">cognitive sync</span>
           </div>
        </div>
      </div>
    </div>
  </Section>
);

export const ctaSection = (title: string, desc: string, btn: string) => (
  <Section className="bg-background flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center p-24 glass rounded-[80px] w-full max-w-4xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <h2 className="text-6xl md:text-8xl font-sans font-bold metallic-text italic tracking-tighter mb-12 lowercase">{title}</h2>
      <p className="max-w-md mx-auto text-on-background/40 text-sm mb-12 leading-relaxed lowercase">
        {desc}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-5 liquid-glass rounded-full text-white text-[12px] lowercase tracking-[0.4em] font-bold shadow-2xl transition-all"
      >
        {btn}
      </motion.button>
    </motion.div>
  </Section>
);
