import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Navigation } from "./components/Navigation";
import { 
  Hero, 
  splitSection, 
  featureSection, 
  listSection, 
  ctaSection 
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
      title="psylife | architectural intelligence for the deep mind" 
      description="psylife: engineering focus in a chaotic world. architectural intelligence, flow protocols, and neural performance curation for high-fidelity living." 
      keywords="psylife, neural architecture, focus, flow state, attention engineering, family focus, cognitive optimization, deep focus, Epping Sydney, family foundations, learning mastery"
    />
    <Hero />
    {splitSection(
      "01", "objective", "neural architecture",
      "we don't teach. we architect. by restructuring the environment of your attention, we create the space for effortless mastery.",
      [
        { 
          label: "01", 
          val: "stacked life",
          href: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_69360b15cda04e4db547209d89c113d3.pdf",
          img: "https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg"
        },
        { label: "02", val: "factorial thinking", img: "https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" },
        { label: "03", val: "zero stack", img: "https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" },
        { label: "04", val: "architecting ai", img: "https://static.wixstatic.com/media/b20068_bae679114153424cb246f3b55c6ffa3f~mv2.jpeg" }
      ]
    )}
    {featureSection(
      undefined, 
      undefined, 
      undefined,
      "https://video.wixstatic.com/video/b20068_c8a1bb2770194605b05a34ced2c1de59/720p/mp4/file.mp4"
    )}
  </>
);

const ParentPage = () => (
  <>
    <SEO 
      title="the parent protocol | psylife" 
      description="guide the developing mind toward master focus. learn to build beautiful, friction-free environments to naturalise attention without fatigue." 
      keywords="parent protocol, kids focus, attention training, family focus, cognitive parenting, child focus, Epping Sydney"
    />
    <Hero title="the parent protocol" subtitle="stewarding focus | guiding growth" />
    {splitSection(
      "02", "guidance", "cognitive framing",
      "learn to build environments that naturally foster focus in the developing mind without friction or fatigue.",
      [
        { label: "clarity", val: "prime" },
        { label: "patience", val: "vibe" },
        { label: "rhythm", val: "flow" },
        { label: "safety", val: "core" }
      ]
    )}
    {listSection([
      { title: "spatial anchors", desc: "using physical space to trigger deep work states in children." },
      { title: "feedback loops", desc: "building positive reinforcement systems for sustained attention." }
    ])}
  </>
);

const ChildPage = () => (
  <>
    <SEO 
      title="child exploration | psylife" 
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
      title="products & solutions | psylife" 
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
      title="learning modules & mastery | psylife" 
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
      title="about us & genesis | psylife" 
      description="the genesis of psylife systems. we build premium, architected environments to curate digital permanence and focus." 
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
      title="compliance & security standards | psylife" 
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
      title="contact & direct link | psylife" 
      description="direct transmission link for high-level inquiries and custom architectural consultations with psylife systems." 
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
      <div className="bg-background text-on-background selection:bg-primary selection:text-white overflow-x-hidden relative min-h-screen">
        <MouseGlow />
        
        {/* Texture mask */}
        <div className="fixed inset-0 pointer-events-none z-[5] matte-texture opacity-30" />
        
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parent" element={<ParentPage />} />
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
