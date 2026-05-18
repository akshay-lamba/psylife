import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-32 relative ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Hero = () => (
  <Section id="home" className="matte-texture min-h-screen flex items-center justify-center">
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-12"
      >
        <h1 className="text-[12vw] leading-[0.8] font-sans font-bold tracking-tighter metallic-text lowercase">
          focus <br /><span className="italic opacity-50">simplified.</span>
        </h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-md text-on-background/40 text-[10px] lowercase tracking-[0.5em] leading-relaxed mb-12"
      >
        architecture for the deep mind. <br />
        engineering focus in a chaotic world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"
      />
    </div>

    {/* Floating Abstract Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-64 h-64 border border-white/5 rounded-[60px] glass rotate-12"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[15%] w-80 h-80 border border-white/5 rounded-full liquid-glass -rotate-6"
      />
    </div>
  </Section>
);

export const Focus = () => (
  <Section id="focus" className="bg-background relative overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[9px] lowercase tracking-[0.4em] text-primary/60 mb-6 block">01 / objective</span>
        <h2 className="text-6xl font-sans font-bold mb-8 metallic-text lowercase">neural <br />architecture</h2>
        <p className="text-on-background/30 text-sm leading-loose max-w-sm lowercase">
          we don't teach. we architect. by restructuring the environment of your attention, we create the space for effortless mastery.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "depth", val: "alpha" },
          { label: "resilience", val: "beta" },
          { label: "velocity", val: "gamma" },
          { label: "sync", val: "delta" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 glass rounded-[32px] depth-card flex flex-col justify-between aspect-square"
          >
            <span className="text-[10px] text-primary/40 lowercase tracking-widest">{item.label}</span>
            <span className="italic font-sans font-bold text-3xl metallic-text lowercase">{item.val}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export const Flow = () => (
  <Section id="flow" className="matte-texture">
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5 relative glass"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <span className="text-[10px] lowercase tracking-[1em] mb-12 opacity-30">the flow protocol</span>
          <h2 className="text-7xl font-sans font-bold metallic-text tracking-tighter mb-8 italic lowercase">uninterrupted.</h2>
          <motion.div
            className="px-10 py-4 glass rounded-full cursor-pointer hover:bg-white/5 transition-all text-sm lowercase tracking-widest text-white/60"
            whileHover={{ scale: 1.05 }}
          >
            initiate session
          </motion.div>
        </div>
      </motion.div>
    </div>
  </Section>
);

export const Learning = () => (
  <Section id="learning" className="bg-background">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-20 relative">
        <div className="absolute -left-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        {[
          { title: "visual synthesis", desc: "absorb complex systems through layered spatial visualization." },
          { title: "temporal skew", desc: "master time perception to extend periods of peak cognitive performance." },
          { title: "focus hardening", desc: "techniques to remain unphasable in environments of high volatility." }
        ].map((item, i) => (
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

export const Edge = () => (
  <Section id="edge" className="bg-background flex flex-col items-center justify-center min-h-[80vh]">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center p-24 glass rounded-[80px] w-full max-w-4xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <h2 className="text-6xl md:text-8xl font-sans font-bold metallic-text italic tracking-tighter mb-12 lowercase">claim your edge.</h2>
      <p className="max-w-md mx-auto text-on-background/40 text-sm mb-12 leading-relaxed lowercase">
        the future belongs to those who can master their own attention. join the inner circle of high-fidelity learning.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-5 liquid-glass rounded-full text-white text-[12px] lowercase tracking-[0.4em] font-bold shadow-2xl transition-all"
      >
        request access
      </motion.button>
    </motion.div>
  </Section>
);
