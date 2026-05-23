import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
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

      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24 relative z-10 pb-16">
        {PARENT_SLIDES.map((slide, index) => (
          <motion.div
            key={slide.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center py-6 md:py-12"
          >
            {/* 3D Deep Ambient Floor Shadow beneath the image */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-[#231e1a]/15 rounded-full blur-[35px] pointer-events-none z-0 transform scale-x-[1.05]" />
            
            {/* Floating 3D Image Canvas, rotated gently in perspective with NO border framing */}
            <div 
              style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
              className="relative z-10 w-full transition-all duration-700 ease-out"
            >
              <motion.div
                whileHover={{ 
                  rotateX: 0, 
                  rotateY: 0,
                  z: 15,
                  scale: 1.015
                }}
                initial={{
                  rotateX: index % 2 === 0 ? 3 : 2,
                  rotateY: index % 2 === 0 ? -1.5 : 1.5,
                  z: 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-auto select-none overflow-hidden rounded-[16px] md:rounded-[24px] shadow-[0_30px_70px_rgba(35,30,26,0.18),0_15px_30px_rgba(35,30,26,0.12)] bg-[#dfd5c8]"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto block object-contain pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

const ChildPage = () => (
  <>
    <SEO 
      title="child exploration | psylife.shop" 
      description="tactile and virtual environments designed for high-velocity child learning, creative exploration, play, and digital focus mastery." 
      keywords="child exploration, creative play, youth focus, deep curiosity, focus development, tactile play, Epping Sydney"
    />
    <Hero title="child exploration" subtitle="discovery | foundations | play" />
    {splitSection(
      "03", "exploration", "radical curiosity",
      "environments designed for high-velocity learning through tactile immersion and digital mastery.",
      [
        { label: "speed", val: "fast" },
        { label: "play", val: "wild" },
        { label: "intel", val: "deep" },
        { label: "sync", val: "zero" }
      ]
    )}
    {featureSection("the catalyst", "ignite potential.", "start journey")}
  </>
);

const ProductsPage = () => (
  <>
    <SEO 
      title="products & solutions | psylife.shop" 
      description="physical and digital attention anchors designed to ground consciousness in high-volatility environments." 
      keywords="attention anchors, focus products, spatial design, cognitive hardware, study tools, Epping Sydney"
    />
    <Hero images={["https://static.wixstatic.com/media/b20068_74d4970e99f04665803f715c82c91e6c~mv2.jpeg"]} />
    {splitSection(
      "04", "hardware", "tactile anchors",
      "physical objects designed to ground the consciousness in environments of high volatility.",
      [
        { label: "weight", val: "solid" },
        { label: "texture", val: "matte" },
        { label: "form", val: "pure" },
        { label: "use", val: "daily" }
      ]
    )}
    {listSection([
      { title: "neural desk", desc: "an workspace that adapts to your current level of cognitive load." },
      { title: "focus lens", desc: "digital interfaces that filter noise at the source." }
    ])}
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
