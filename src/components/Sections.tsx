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
  "https://static.wixstatic.com/media/b20068_af785ee72ca743b08b87890371caf1ef~mv2.jpeg",
  "https://static.wixstatic.com/media/b20068_35e7268eb36c4d35b128afbb65d8043b~mv2.jpeg",
  "https://static.wixstatic.com/media/b20068_85ca72b89c5d445fa42bfa5611a79eba~mv2.jpeg",
  "https://static.wixstatic.com/media/b20068_9de72c643cdb486d8b6273d06c1ca81f~mv2.jpeg",
  "https://static.wixstatic.com/media/b20068_6d5e49d0a4804384b63f33e1c9b0bdcb~mv2.jpeg"
];

export const Hero = ({ title, subtitle, images = HERO_IMAGES, youtubeId }: { title?: string, subtitle?: string, images?: string[], youtubeId?: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (youtubeId) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, youtubeId]);

  return (
    <section className="matte-texture min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24 px-4 md:px-8 relative w-full">
      {/* Subtle theme-color backlight glow (#a67c52 / var(--primary)) */}
      <motion.div 
        className="absolute w-full max-w-4xl aspect-video rounded-none bg-primary/10 blur-[100px] pointer-events-none z-0 mix-blend-screen"
        animate={{
          scale: isHovered ? 1.05 : 0.96,
          opacity: isHovered ? 0.6 : 0.35,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        <motion.div 
          className="relative w-full aspect-video z-10 group cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 rounded-none overflow-hidden border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.22),0_15px_30px_rgba(27,22,19,0.15)]">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&playsinline=1`}
                title="PsyLife Hero Video"
                className="absolute top-0 left-0 w-full h-full border-0 scale-[1.02]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Blurred Backdrop for seamless look when aspect ratios don't match */}
                  <img 
                    src={images[currentSlide]} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  
                  <img 
                    src={images[currentSlide]} 
                    alt="immersive environment"
                    className="w-full h-full object-contain relative z-10 select-none block"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-center"
        >
          {title && <h1 className="text-4xl md:text-6xl font-sans font-bold metallic-text lowercase mb-4">{title}</h1>}
          {subtitle !== "" && (
            <p className="text-[11px] font-medium tracking-[0.6em] lowercase text-on-background/40">
              {subtitle || "family | fun | foundations"}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] left-[5%] w-64 h-64 border border-[#a67958]/12 rounded-[60px] rotate-12"
        />
      </div>
    </section>
  );
};

export const splitSection = (num: string, label: string, title: string, desc: string, items: {label: string, val: string, href?: string, img?: string}[]) => (
  <Section className="bg-[#dfd7cc] text-[#231e1a] relative overflow-hidden border-t border-b border-[#a67958]/12">
    {/* Sunlit forest light beam dapple */}
    <div className="absolute top-0 right-0 w-[50vw] aspect-square rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />
    <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-sans font-bold mb-8 metallic-text lowercase">{title}</h2>
        <p className="text-[#231e1a]/70 text-sm leading-loose max-w-sm lowercase">
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
  <Section className="matte-texture bg-[#cbd2c5] text-[#231e1a] relative overflow-hidden py-24 border-t border-b border-[#a67958]/12">
    {/* Pine tree silhouette backlight */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] aspect-square rounded-full bg-primary/5 blur-[130px] pointer-events-none z-0" />
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden border border-[#a67958]/15 relative glass shadow-lg"
      >
        {videoUrl ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-opacity duration-1000 ${(!sub && !title && !btn) ? 'opacity-100' : 'opacity-40'}`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#a67958]/10 via-transparent to-transparent" />
        )}
        
        {(sub || title || btn) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
            {sub && <span className="text-[10px] lowercase tracking-[1em] mb-12 opacity-40">{sub}</span>}
            {title && <h2 className="text-4xl md:text-7xl font-sans font-bold metallic-text tracking-tighter mb-8 italic lowercase">{title}</h2>}
            {btn && (
              <motion.div
                className="px-10 py-4 glass border border-[#a67958]/15 bg-background/35 rounded-full cursor-pointer hover:bg-background/50 transition-all text-sm lowercase tracking-widest text-[#231e1a]/70"
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
  <Section className="bg-background text-on-background relative overflow-hidden">
    {/* Subtle sylvan shadow backlight */}
    <div className="absolute top-1/2 left-0 w-[40vw] aspect-square rounded-full bg-[#374635]/5 blur-[120px] pointer-events-none z-0" />
    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="space-y-20 relative">
        <div className="absolute -left-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
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
              <span className="text-[10px] text-on-background/40 font-mono tracking-widest lowercase">module_0{i+1}</span>
            </div>
            <p className="text-sm text-on-background/60 leading-relaxed max-w-sm lowercase">
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

// --- Realization Chart (Slide 2) ---
export const RealizationChart = () => (
  <Section className="bg-background relative overflow-hidden">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-5 space-y-8">
        <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight metallic-text lowercase">
          validating the realization.
        </h2>
        <p className="text-on-background/40 text-sm leading-loose lowercase max-w-md">
          the tightness in your chest is not a malfunction. it is an alarm certifying that the modern curriculum is drifting further and further away from reality.
        </p>
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="flex items-start gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#555555] mt-2" />
            <p className="text-xs text-on-background/30 lowercase"><strong className="text-on-background/50">traditional trajectory:</strong> fixed memorization, local competition, and repetitive task drills designed for an industrial stack.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 animate-pulse" />
            <p className="text-xs text-on-background/30 lowercase"><strong className="text-primary/80">engineered acceleration:</strong> evaluation, navigation, spatial intelligence, and permanent focus systems crafted for the high-velocity deep mind.</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex justify-center">
        <div className="w-full max-w-2xl p-8 glass rounded-[40px] depth-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#a67c52]/5 to-transparent pointer-events-none" />
          
          {/* Custom Architectural Grid Chart */}
          <div className="relative aspect-[16/10] w-full">
            <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
              <line x1="40" y1="20" x2="40" y2="260" stroke="rgba(32, 26, 21, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="260" x2="480" y2="260" stroke="rgba(32, 26, 21, 0.15)" />
              <line x1="480" y1="20" x2="480" y2="260" stroke="rgba(32, 26, 21, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
              
              <path d="M 40 260 C 150 240, 300 230, 480 220" fill="none" stroke="rgba(32, 26, 21, 0.1)" strokeWidth="1.5" />
              
              {/* Curve 1: Traditional Schools Line (Flat progression) */}
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                d="M 40 260 L 480 220" 
                fill="none" 
                stroke="#9c9b97" 
                strokeWidth="2" 
              />
              
              {/* Curve 2: Exponential Future Requirements Line */}
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 40 260 C 200 250, 350 180, 480 40" 
                fill="none" 
                stroke="#a67958" 
                strokeWidth="3.5" 
                className="glow-primary"
              />

              <circle cx="480" cy="40" r="5" fill="#a67958" className="animate-ping" />
              <circle cx="480" cy="40" r="3" fill="#a67958" />
              
              <circle cx="480" cy="220" r="3" fill="#9c9b97" />

              <line x1="300" y1="130" x2="350" y2="220" stroke="rgba(166, 121, 88, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="130" r="2" fill="#a67958" />
            </svg>

            <div className="absolute bottom-[10%] right-[3%] text-[9px] font-mono text-on-background/40 tracking-wider">t_time (generations)</div>
            
            <div className="absolute top-[4%] right-[2%] text-right">
              <span className="text-[10px] font-sans font-medium text-primary uppercase tracking-widest block">what the future requires</span>
              <span className="text-[8px] text-on-background/30 block mt-0.5">exponential spatial capabilities</span>
            </div>
            
            <div className="absolute top-[68%] right-[2%] text-right">
              <span className="text-[10px] font-sans text-on-background/50 uppercase tracking-wider block">what traditional schools teach</span>
              <span className="text-[8px] text-on-background/20 block mt-0.5">static standardized containment</span>
            </div>

            <div className="absolute top-[42%] left-[45%] text-center max-w-[140px] glass p-3 rounded-xl border border-primary/20">
              <span className="text-[8px] font-mono text-primary uppercase tracking-widest block mb-1">divergent crisis</span>
              <p className="text-[8px] text-on-background/40 font-mono tracking-tight leading-relaxed">
                the tightness in your chest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// --- Beautiful Publication Download Experience Section (Section 2 Request) ---
export const PublicationDownload = () => (
  <Section id="publication-download" className="bg-[#cbd5c8] text-[#231e1a] relative overflow-hidden border-t border-b border-[#a67958]/12 py-24">
    <div className="absolute -left-1/4 top-0 w-2/3 aspect-square rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="absolute -right-1/4 bottom-0 w-2/3 aspect-square rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="space-y-8"
      >
        <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight metallic-text lowercase">
          a choice for your family's future.
        </h2>
        
        <p className="text-[#231e1a]/70 text-sm leading-relaxed lowercase max-w-lg">
          if you can feel the gap between what you are currently buying for your child and what the world actually requires from them, you have two choices:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-[24px] border border-[#a67958]/15 bg-[#231e1a]/5 space-y-4">
            <span className="text-[9px] uppercase tracking-widest text-on-background/40 font-mono block">option A</span>
            <h4 className="text-lg font-sans font-medium text-on-background/70 lowercase">the heavy backpack</h4>
            <ul className="space-y-2 text-[11px] text-on-background/50 list-disc pl-4 lowercase">
              <li>focuses on passive memory and content retrieval.</li>
              <li>delivers continuous monthly tutoring bills.</li>
              <li>structurally separates the parent from the child.</li>
            </ul>
          </div>
          <div className="p-6 rounded-[24px] border border-primary/20 bg-primary/10 space-y-4 shadow-xl shadow-primary/5">
            <span className="text-[9px] uppercase tracking-widest text-[#a67958] font-mono block">option B</span>
            <h4 className="text-lg font-sans font-medium text-[#a67958] lowercase">the better compass</h4>
            <ul className="space-y-2 text-[11px] text-[#a67958]/80 list-disc pl-4 lowercase">
              <li>focuses on spatial navigation and evaluation.</li>
              <li>builds permanent, owned, friction-free systems.</li>
              <li>unifies the family on a single shared screen.</li>
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <a 
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_00cbc29729da47b8be8779b64433abc0.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 bg-[#a67958] text-[#ece6dd] rounded-full hover:bg-primary/95 transition-all font-sans font-bold text-xs lowercase tracking-wider shadow-lg shadow-primary/20"
          >
            <Download size={14} className="stroke-[2.5]" />
            download family presentation PDF
          </a>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="relative group w-full max-w-sm aspect-[4/5] rounded-[36px] overflow-hidden depth-card border border-[#a67958]/35 bg-[#ece6dd] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(27,22,19,0.12)]"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://static.wixstatic.com/media/b20068_1b13aa81cccf4621a74250db3c9a3fbc~mv2.jpg" 
              alt="publication cover"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d251c] via-[#1d251c]/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d251c] via-transparent to-transparent opacity-80" />
          </div>

          <div className="z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-background/20 backdrop-blur-md border border-background/20 text-[8px] font-mono tracking-widest text-[#a67958]">
              PDF DOCUMENT
            </span>
            <span className="text-[9px] font-mono text-[#ece6dd]/55 tracking-tight">
              1.4 MB • version_3.0
            </span>
          </div>

          <div className="z-10 space-y-6 pt-32">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#a67958]">psylife publications</p>
              <h3 className="text-2xl font-sans font-bold leading-tight tracking-tight text-[#ece6dd] lowercase mt-1">
                building a better compass: spatial attention systems
              </h3>
            </div>

            <div className="block p-4 rounded-2xl glass border border-[#a67958]/15 hover:bg-background/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#a67958] tracking-widest uppercase block">digital transmission</span>
                  <span className="text-xs text-[#ece6dd]/70 block lowercase font-medium">licensed under lambaweb publishing</span>
                </div>
                <a 
                  href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_00cbc29729da47b8be8779b64433abc0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#ebe6df] flex items-center justify-center text-[#231e1a] hover:scale-110 transition-transform cursor-pointer"
                >
                  <Download size={14} className="stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

// --- "We Don't Teach. We Architect" (Slide 5-6 Elements) ---
export const ArchitectSection = () => (
  <Section className="bg-background relative overflow-hidden">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <motion.div 
          className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden border border-[#a67958]/35 bg-[#ece6dd] shadow-[0_30px_70px_rgba(27,22,19,0.18),0_15px_30px_rgba(27,22,19,0.1)] depth-card"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://static.wixstatic.com/media/b20068_85ca72b89c5d445fa42bfa5611a79eba~mv2.jpeg" 
            alt="architect blueprint lounge sketch" 
            className="w-full h-full object-cover grayscale contrast-110 opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass border border-white/5">
            <span className="text-[8px] font-mono tracking-widest text-primary uppercase block mb-1">focus zone synthesis</span>
            <p className="text-[10px] text-on-background/50 font-mono tracking-tight leading-relaxed">
              we restructure physical & psychological geometry. layout: 01.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
        <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight metallic-text lowercase">
          we don't teach. we architect.
        </h2>
        <p className="text-on-background/40 text-sm leading-loose lowercase">
          by restructuring the environment of your attention, we create the perfect geometry for effortless cognitive flow. focus is not an isolated genetic trait—it is an engineered architectural state.
        </p>
        <blockquote className="border-l-2 border-primary/40 pl-6 py-1">
          <p className="text-xl font-sans text-primary/80 italic tracking-tight lowercase">
            "we operate at the absolute threshold of biological constraints."
          </p>
        </blockquote>
      </div>
    </div>
  </Section>
);

// --- The Flow Protocol & Unified Screen Triangle (Slide 6 & 7) ---
export const FlowProtocolSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    { title: "remove distraction", val: "we purge attention leaks at the system root, restoring the cognitive slate back to absolute zero." },
    { title: "architect environment", val: "we build physical and tactile attention anchors designed to secure family connection." },
    { title: "natural focus emerges", val: "consciousness lands naturally inside fluid interactive zones without requiring force." }
  ];

  return (
    <Section className="bg-[#dfd5c8] text-[#231e1a] relative overflow-hidden border-t border-[#a67958]/12 py-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight metallic-text lowercase">
              the flow protocol.
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-6 rounded-[24px] border transition-all cursor-pointer ${activeTab === i ? 'border-[#a67958]/40 bg-primary/10 shadow-lg' : 'border-[#231e1a]/10 hover:border-[#231e1a]/20'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] ${activeTab === i ? 'bg-[#a67958] text-[#ece6dd]' : 'bg-[#231e1a]/5 text-[#231e1a]/40'}`}>
                    01
                  </span>
                  <h3 className="text-sm font-sans font-medium text-on-background lowercase tracking-wide">{step.title}</h3>
                </div>
                {activeTab === i && (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#231e1a]/70 text-xs mt-3 pl-10 lowercase leading-relaxed"
                  >
                    {step.val}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-md p-8 glass rounded-[40px] border border-[#a67958]/15 text-center relative overflow-hidden space-y-8 shadow-xl">
            <div className="absolute top-0 right-0 p-3 bg-primary/10 rounded-bl-[20px] text-[8px] font-mono uppercase tracking-widest text-primary/70">
              immutable rule
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-sans font-bold italic metallic-text lowercase">the unified screen</h3>
              <p className="text-on-background/60 text-[11px] leading-relaxed lowercase">
                parent and child are never separated. we reject babysitting models. engineering focus is a shared family state.
              </p>
            </div>

            <div className="relative py-6 aspect-square w-48 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(166, 121, 88, 0.08)" strokeWidth="1" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(166, 121, 88, 0.12)" strokeWidth="0.5" />
                
                <line x1="20" y1="80" x2="80" y2="80" stroke="rgba(35, 30, 26, 0.4)" strokeWidth="2.5" />
                <line x1="20" y1="80" x2="50" y2="25" stroke="#a67958" strokeWidth="2" strokeDasharray="1 1" />
                <line x1="80" y1="80" x2="50" y2="25" stroke="#a67958" strokeWidth="2" strokeDasharray="1 1" />

                <path d="M 45 35 L 50 25 L 55 35" fill="none" stroke="#a67958" strokeWidth="2" />
                <path d="M 42 39 L 50 25 L 58 39" fill="none" stroke="rgba(166, 121, 88, 0.4)" strokeWidth="1" />

                <circle cx="20" cy="80" r="5" fill="#50624d" />
                <circle cx="80" cy="80" r="5" fill="#a67958" />
                <circle cx="50" cy="25" r="5" fill="#9c9b97" />
              </svg>

              <div className="absolute bottom-[2%] left-[-10%] text-[8px] font-mono tracking-wider text-on-background/50">parent</div>
              <div className="absolute bottom-[2%] right-[-10%] text-[8px] font-mono tracking-wider text-primary">child</div>
              <div className="absolute top-[8%] left-[2%] right-[2%] text-center text-[7px] font-mono text-on-background/70 tracking-widest uppercase">the unified screen / architecture</div>
            </div>

            <div className="pt-4 border-t border-on-background/10">
              <p className="text-[10px] text-on-background/60 leading-relaxed font-mono italic">
                "focus is not about isolating your child with better tutors. it's about restructuring the shared environment so you can work together."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Your Pathway of Focus Commitment Section (Slide 10-11) ---
export const PathwayOfFocusSection = () => {
  const levels = [
    { title: "architected space", price: "level 01", desc: "restructuring the physical room geometry. adding sensory anchors and tactical flow zones to prime awareness." },
    { title: "temporal calibration", price: "level 02", desc: "introducing flow interval hardware, synchronization routines, and family cognitive clocks to block cognitive decay." },
    { title: "quantum protocol", price: "level 03", desc: "a complete architectural upgrade of all digital and analog layers. bespoke deep living coaching for sustained focus." }
  ];

  return (
    <Section className="bg-background relative overflow-hidden border-b border-[#a67958]/12">
      <div className="text-center max-w-3xl mx-auto space-y-8 mb-20 relative">
        <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-[8px] font-mono tracking-[0.4em] uppercase mb-4 animate-pulse">
          strictly limited • exactly 5 families per intake
        </div>
        
        <h2 className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tight metallic-text lowercase">
          your pathway of focus.
        </h2>
        <p className="text-on-background/40 text-sm leading-relaxed max-w-xl mx-auto lowercase">
          three distinct, non-diluted levels of dedication designed to scale your family's bond & learning performance at your own pace.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {levels.map((level, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -12 }}
            className={`p-10 rounded-[36px] glass flex flex-col justify-between relative overflow-hidden ${i === 1 ? 'border-[#a67958]/55 bg-[#a67958]/5' : 'border-[#a67958]/15'}`}
          >
            {i === 1 && (
              <div className="absolute top-4 right-4 text-[7px] tracking-widest font-mono text-[#a67958] uppercase border border-primary/30 px-2 py-0.5 rounded-full">
                recommended
              </div>
            )}
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary/70 block">{level.price}</span>
              <h3 className="text-2xl font-sans font-bold text-on-background lowercase tracking-tight italic">{level.title}</h3>
              <p className="text-on-background/60 text-xs leading-loose lowercase">{level.desc}</p>
            </div>

            <div className="pt-10 mt-10 border-t border-[#a67958]/15 flex items-center justify-between">
              <span className="text-[9px] font-mono text-[#50624d]/75 uppercase tracking-widest">status: limited</span>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-primary text-[10px] font-mono uppercase tracking-[0.3em] font-bold flex items-center gap-2"
              >
                apply spot
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const ctaSection = (title: string, desc: string, btn: string) => (
  <Section className="bg-background flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center p-12 md:p-24 bg-[#cbd2c5]/40 border border-[#a67958]/20 rounded-[60px] md:rounded-[80px] w-full max-w-4xl relative overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#a67958]/10 via-transparent to-transparent pointer-events-none" />
      <h2 className="text-5xl md:text-8xl font-sans font-bold metallic-text italic tracking-tighter mb-12 lowercase">{title}</h2>
      <p className="max-w-md mx-auto text-on-background/70 text-sm mb-12 leading-relaxed lowercase">
        {desc}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-5 bg-[#50624d] text-[#ece6dd] hover:bg-[#3d4b3b] rounded-full text-[12px] lowercase tracking-[0.4em] font-bold shadow-2xl transition-all cursor-pointer"
      >
        {btn}
      </motion.button>
    </motion.div>
  </Section>
);

// --- Youtube Video Section (Section 2) ---
export const YoutubeSection = () => {
  return (
    <Section className="bg-[#dfd5c8] text-[#231e1a] relative overflow-hidden py-16 border-t border-[#a67958]/12">
      {/* Soft primary ambient backlight for a warm, cozy feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Compact Video Frame & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3 col-title text-left">
              <h2 className="text-3xl font-sans font-bold leading-tight tracking-tight text-[#231e1a] lowercase">
                real talk for epping families
              </h2>
              <p className="text-[#231e1a]/60 text-xs font-mono lowercase">
                [no marketing talk. just the reality of the learning landscape.]
              </p>
            </div>

            {/* Compact rectangular Video player */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-video rounded-none overflow-hidden border border-[#a67958]/25 bg-[#231e1a]/60 shadow-[0_20px_50px_rgba(27,22,19,0.15)] relative"
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/lH4QkrgLuCI?autoplay=0&rel=0&modestbranding=1"
                title="psylife | architectural intelligence"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            </motion.div>

            <div className="p-4 bg-[#ece6dd]/60 border border-[#a67958]/15 text-[10.5px] text-[#231e1a]/60 lowercase italic leading-relaxed text-left">
              * we do not replace school curricula; we construct the physical and attention coordinates required to make them work.
            </div>
          </div>

          {/* Right Column: Direct Parent Diagnosis (The 3 Generations of Getting Ahead) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2 text-left">
              <h3 className="text-lg font-sans font-bold text-[#231e1a] lowercase">
                what is actually happening right now?
              </h3>
              <p className="text-[#231e1a]/85 text-xs md:text-sm leading-relaxed lowercase">
                the way people get ahead in life has completely shifted across three generations, but the school system and local tutoring centers are still using an old playbook:
              </p>
            </div>

            {/* The Timeline Blocks */}
            <div className="space-y-3 text-left">
              <div className="p-4 bg-[#ece6dd]/50 border border-[#a67958]/15 flex gap-4 items-start duration-200 hover:border-[#a67958]/35">
                <span className="font-mono text-xs text-primary/70 pt-0.5">01</span>
                <div className="space-y-0.5">
                  <span className="text-xs font-sans font-bold text-[#231e1a] block lowercase">the library era (generation 1)</span>
                  <p className="text-xs text-[#231e1a]/70 leading-relaxed lowercase">
                    getting ahead meant <strong>memorization</strong>. books were hard to find, so the kid who could remember the most facts won.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#ece6dd]/50 border border-[#a67958]/15 flex gap-4 items-start duration-200 hover:border-[#a67958]/35">
                <span className="font-mono text-xs text-primary/70 pt-0.5">02</span>
                <div className="space-y-0.5">
                  <span className="text-xs font-sans font-bold text-[#231e1a] block lowercase">the internet era (generation 2)</span>
                  <p className="text-xs text-[#231e1a]/70 leading-relaxed lowercase">
                    getting ahead meant <strong>searching</strong>. facts became free on google. the kid who could find information fast and filter bad sites won. most parents today grew up in this era.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 flex gap-4 items-start relative overflow-hidden">
                <span className="font-mono text-xs text-primary pt-0.5 font-bold animate-pulse">03</span>
                <div className="space-y-0.5">
                  <span className="text-xs font-sans font-bold text-primary block lowercase">the AI era (generation 3 - right now)</span>
                  <p className="text-xs text-[#231e1a]/90 leading-relaxed lowercase font-medium">
                    finding information is no longer a skill. AI gives instant, clear answers. but AI gives different answers depending on prompt design and is often confidently wrong.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#ece6dd] border-l-2 border-primary/30 italic lowercase text-[#231e1a]/85 text-xs leading-relaxed text-left">
              being smart today doesn’t mean knowing or finding things. it means looking at ten different answers and having the judgment to <strong>choose the right one and double-check it</strong>.
            </div>
          </div>

        </div>

        {/* Central Card with Subtle 3D Glassy Finish */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-[#ece6dd]/20 backdrop-blur-md border border-[#a67958]/35 p-8 md:p-10 relative overflow-hidden shadow-[0_30px_70px_rgba(27,22,19,0.12),_inset_0_1px_2px_rgba(255,255,255,0.45)] cursor-default"
        >
          {/* Subtle glassy gradient overlay for 3D depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ece6dd]/10 via-transparent to-[#ece6dd]/20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a67958]/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-r border-[#a67958]/20 pb-6 md:pb-0 md:pr-8 text-left">
              <span className="inline-block px-2 py-0.5 text-[8px] tracking-widest bg-red-900/10 text-red-900 border border-red-900/15 font-mono uppercase">
                the epping crisis
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                the ATAR trap
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-left">
              <p className="text-[#231e1a]/85 text-xs md:text-sm lg:text-[14.5px] leading-relaxed lowercase font-normal">
                most parents in epping are caught in a financial and emotional pressure cooker. because the future feels unpredictable, they default to the only clear goal they know: <strong className="font-semibold text-[#a67958]">the ATAR score</strong>.
              </p>
              <p className="text-[#231e1a]/70 text-xs md:text-sm leading-relaxed lowercase">
                they spend thousands on coaching colleges and weekend tutoring. this drilling helps kids memorize content to pass exam papers. but that training is built for generation 2—it teaches kids to be passive consumers. it does not teach them how to think when they face a world where machines do the basic work.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

// --- How To Fix Section (Section 3) ---
export const HowToFixSection = () => {
  const cards = [
    {
      num: "01",
      tag: "infrastructure",
      title: "bring the tech home",
      desc: "instead of letting kids get distracted by cloud apps that track their data, families can run their own private computer server right at home. this keeps data safe and forces the teenager to learn how real systems work. when a local connection drops or software needs tweaking, they have to fix it themselves. that is a real-world problem-solving skill."
    },
    {
      num: "02",
      tag: "integrity",
      title: "learn to audit, not just trust",
      desc: "kids must be trained to never blindly trust a computer's output. they need to treat AI text as a rough first draft that requires a human to check the facts and evaluate logical continuity."
    },
    {
      num: "03",
      tag: "efficiency",
      title: "save time on chores",
      desc: "instead of spending hundreds of hours on repetitive study tasks, note-taking, and school prep, teenagers can use local automation tools to do the heavy lifting. this frees up their time to focus on deep understanding and actual strategy."
    },
    {
      num: "04",
      tag: "alignment",
      title: "do it together",
      desc: "the goal isn't to replace school or ignore the ATAR. the goal is to build an insurance policy for after the exams. the best way a child learns tech resilience is by watching their parents sit down next to them, look at these new tools, and figure out how they work together as a team."
    }
  ];

  return (
    <Section className="bg-[#ece6dd] text-[#231e1a] relative overflow-hidden py-24 border-b border-[#a67958]/12">
      {/* Soft warm background light */}
      <div className="absolute bottom-0 right-0 w-[45vw] aspect-square rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold leading-none tracking-tight text-[#231e1a] lowercase">
            how to fix it.
          </h2>
          <p className="text-[#231e1a]/70 text-base leading-relaxed max-w-2xl lowercase">
            instead of trying to compete with fast technology, teenagers need to learn how to manage it. this is done by shifting from a high school memorization mindset to a practical, hands-on family workspace.
          </p>
        </div>

        {/* Clean, Modular Card Grid - 100% Rectangular, Wellness & Minimalism Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative bg-[#dfd5c8]/30 hover:bg-[#dfd5c8]/50 border border-[#a67958]/15 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 rounded-none cursor-default shadow-sm"
            >
              {/* Subtle accent hover indicator - elegant and thin */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-300" />
              
              <div className="space-y-6">
                {/* Meta details */}
                <div className="flex justify-between items-center border-b border-[#a67958]/12 pb-4">
                  <span className="text-xs font-mono text-primary font-bold">{card.num}</span>
                  <span className="text-[9px] lowercase font-mono tracking-widest text-[#231e1a]/50">[ {card.tag} ]</span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-[#231e1a]/75 leading-relaxed lowercase font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Minimalist interactive label */}
              <div className="pt-6 flex items-center justify-between text-[10px] font-mono text-primary/0 group-hover:text-primary/70 transition-all duration-300 lowercase">
                <span>practical integration coordinate</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PDF Download CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-12 bg-[#dfd5c8]/30 border border-[#a67958]/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="space-y-2 max-w-2xl text-left">
            <h3 className="text-xl md:text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
              realization: validating the realization of focus
            </h3>
            <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
              our framework details how we help the developing mind build durable evaluation muscles—enabling your child to master their attention and coordinate complex workflows independently.
            </p>
          </div>
          <a
            href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_00cbc29729da47b8be8779b64433abc0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#a67958] text-[#dfd5c8] hover:bg-[#231e1a] duration-300 font-sans text-xs font-bold uppercase tracking-wider h-11 shrink-0"
          >
            learn more
          </a>
        </motion.div>

      </div>
    </Section>
  );
};

