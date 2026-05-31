import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Cpu, Layers, BookOpen, Check } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractivePdfCard } from "../components/InteractivePdfCard";

export const LearningPage = () => {
  const [activePlaybook, setActivePlaybook] = useState<number>(0);
  const [activePedagogyTab, setActivePedagogyTab] = useState<"digital" | "physical" | "immersive">("digital");

  const playbooks = [
    {
      num: "01",
      title: "factorial thinking",
      desc: "upgrades cognitive frameworks to systems thinking."
    },
    {
      num: "02",
      title: "build manual",
      desc: "step-by-step physical tech and server architecture."
    },
    {
      num: "03",
      title: "knowledge playbook",
      desc: "frameworks for deep, structured learning and continuous growth."
    },
    {
      num: "04",
      title: "delegation",
      desc: "structuring structural management, task distribution, and human-to-AI workflows."
    },
    {
      num: "05",
      title: "insights",
      desc: "restructuring cognitive load to audit, fact-check, and identify exactly where AI logic or external data fails."
    }
  ];

  return (
    <>
      <SEO 
        title="academic architecture & systems learning | psylife.shop" 
        description="a comprehensive five-layer systems framework designed to mitigate the velocity crisis, optimize cognitive loads, and align biological parent-child learning ecosystems."
        keywords="academic architecture, systems learning, focus, parent coaching, cognitive performance, attention training, local private servers, Epping Sydney"
      />
      
      <div id="learning-framework-container" className="bg-[#dfd5c8] text-[#231e1a] min-h-screen relative overflow-hidden matte-texture py-12 md:py-20 px-4 md:px-8">
        {/* Soft atmospheric radial backlights */}
        <div className="absolute top-[10%] left-[5%] w-[50vw] aspect-square rounded-full bg-[#a67958]/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[3%] w-[45vw] aspect-square rounded-full bg-[#50624d]/4 blur-[130px] pointer-events-none z-0" />

        {/* Blueprint guidelines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
          <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] text-[#a67958]">
            <circle cx="500" cy="500" r="450" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="50" x2="500" y2="950" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="50" y1="500" x2="950" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-20 pb-16 space-y-16 md:space-y-24">
          
          {/* Split Intro Branding Hero Section with Video */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column (5/12 cols scaled): Video with subtle, polished framing */}
            <div className="md:col-span-5 w-full">
              <div className="relative rounded-[2rem] border border-[#a67958]/25 bg-[#ece6dd] p-2 shadow-[0_20px_50px_rgba(27,22,19,0.12)] overflow-hidden">
                {/* Thin dashed inner blueprint line matching page aesthetic */}
                <div className="absolute inset-2 border border-dashed border-[#a67958]/10 pointer-events-none rounded-[1.5rem] z-0" />
                <video
                  src="https://video.wixstatic.com/video/b20068_de3369d844704f3da78a12cfca803c75/720p/mp4/file.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-[1.5rem] object-cover relative z-10 block"
                />
              </div>
            </div>

            {/* Right Column (7/12 cols): Title and Description of the framework */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#231e1a] tracking-tight lowercase leading-none">
                the five layers of academic architecture
              </h1>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                a rigorous, modular educational architecture engineered from the ground up to dismantle cognitive fatigue, promote systems-thinking competence, and secure long-term academic sovereignty.
              </p>
            </div>
          </div>

          {/* 1. Philosophical Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                layer 01 // the foundation
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                1. the philosophical layer (the "why")
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                this foundational layer defines the core human crisis, the impact of accelerating technology, and the systemic antidote required to protect the family unit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 md:p-8 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] flex flex-col justify-between hover:border-[#a67958]/50 transition-colors duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#a67958]">
                    <Clock size={16} />
                    <span className="font-mono text-[8.5px] uppercase tracking-widest font-bold">pace of life</span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase leading-tight">
                    the velocity crisis
                  </h4>
                  <p className="text-xs md:text-sm text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                    recognizes that life has a natural pace, but our current world has accelerated far too fast for human comprehension. this excessive speed fragments human attention, leaving individuals unable to focus or identify simple solutions to complex problems—even when the ideal solution is right in front of their face.
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] flex flex-col justify-between hover:border-[#a67958]/50 transition-colors duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#a67958]">
                    <Cpu size={16} />
                    <span className="font-mono text-[8.5px] uppercase tracking-widest font-bold">cognitive blinding</span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase leading-tight">
                    the technology trap
                  </h4>
                  <p className="text-xs md:text-sm text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                    identifies that the rapid proliferation of modern AI has contributed significantly to this cognitive blinding effect, a phenomenon that is on a trajectory to worsen. this artificial acceleration has created unsustainable cognitive loads within the family ecosystem, bearing down most heavily on children.
                  </p>
                </div>
              </div>
            </div>

            {/* Thesis Panel */}
            <div className="p-6 md:p-8 bg-[#ece6dd]/80 border border-[#a67958]/20 rounded-[2rem] space-y-6 text-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-[#a67958]/15">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#50624d] font-bold">systemic antidote</span>
                  <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase leading-tight">
                    the family | fun | foundations thesis
                  </h4>
                </div>
                <span className="px-3 py-1 bg-[#50624d]/10 text-[#50624d] border border-[#50624d]/25 font-mono text-[8.5px] uppercase tracking-widest rounded-full font-bold">
                  infrastructure reset
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#a67958]/10 text-[#a67958] flex items-center justify-center font-mono text-[9px] font-bold">a</div>
                  <h5 className="font-sans font-bold text-sm text-[#231e1a] lowercase">family</h5>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                    the ultimate core unit that desperately requires a modern structural upgrade just to breathe, slow down, and regain control.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#50624d]/10 text-[#50624d] flex items-center justify-center font-mono text-[9px] font-bold">b</div>
                  <h5 className="font-sans font-bold text-sm text-[#231e1a] lowercase">fun</h5>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                    the essential emotional compass. what is the point of life if it is not fun? integrating the "this is fun" mental model is a critical pedagogical constraint for deep learning, absorption, and true internal motivation.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#a67958]/10 text-[#a67958] flex items-center justify-center font-mono text-[9px] font-bold">c</div>
                  <h5 className="font-sans font-bold text-sm text-[#231e1a] lowercase">foundations</h5>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                    resetting human life with AI as a permanent infrastructure element. technology is not utilized to render human skills irrelevant or obsolete, but rather to explicitly enhance, shield, and amplify them.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Theoretical Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                layer 02 // the blueprint
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                2. the theoretical & methodological layer (the "how")
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                this layer outlines the cognitive blueprint used to restructure how the student and parent process information under a reduced cognitive load.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 hover:border-[#a67958]/35 transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#a67958]/10 text-[#a67958] flex items-center justify-center">
                  <Layers size={16} />
                </div>
                <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                  multi-variable system mapping
                </h4>
                <p className="text-xs text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                  replaces traditional linear progression (fact a → fact b → fact c). it trains the brain to isolate foundational factors that affect any complex scenario, allowing students to deconstruct massive workloads systematically without burning out.
                </p>
              </div>

              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 hover:border-[#a67958]/35 transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#a67958]/10 text-[#a67958] flex items-center justify-center">
                  <Cpu size={16} />
                </div>
                <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                  cognitive offloading
                </h4>
                <p className="text-xs text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                  the precise methodology of utilizing cutting-edge AI technologies to manage, organize, and automate the mundane, repetitive tasks of life. shifting the manual grunt work to AI systems drops the student's daily cognitive load, preserving their active brainpower for high-level thinking and deep reasoning.
                </p>
              </div>

              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 hover:border-[#a67958]/35 transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#a67958]/10 text-[#a67958] flex items-center justify-center">
                  <BookOpen size={16} />
                </div>
                <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                  parent-child systemic alignment
                </h4>
                <p className="text-xs text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                  direct compliance with the reality that cognitive development cannot be sustained in a silo. it dictates that parent and child must learn a common operational framework side by side to lower household cortisol levels, reduce stress, build shared empowerment, and establish a unified domestic strategy in a world moving too fast.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Curriculum Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                layer 03 // the syllabus
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                3. the curriculum & content layer (the "what")
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                this defines the explicit knowledge, competencies, and materials delivered across the framework.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-3 text-left">
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958]/80 font-bold block mb-2 font-normal">the 5 compounding playbooks</span>
                {playbooks.map((p, idx) => {
                  const isSelected = activePlaybook === idx;
                  return (
                    <button
                      key={p.num}
                      type="button"
                      onClick={() => setActivePlaybook(idx)}
                      className={`w-full text-left p-4 rounded-xl border flex gap-4 transition-all duration-300 outline-none cursor-pointer ${
                        isSelected 
                          ? "bg-[#a67958] border-[#a67958] text-[#ece6dd] shadow-md scale-[1.02]" 
                          : "bg-[#ece6dd] border-[#a67958]/12 text-[#231e1a] hover:bg-[#dfd7cc]/40 hover:border-[#a67958]/35"
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold px-2 py-1 rounded select-none ${
                        isSelected ? "bg-[#ece6dd]/20 text-[#ece6dd]" : "bg-[#a67958]/10 text-[#a67958]"
                      }`}>
                        {p.num}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-sans font-bold text-xs lowercase leading-tight">{p.title}</h4>
                        <p className={`text-[10px] lowercase leading-snug ${isSelected ? "text-[#dfd5c8]" : "text-[#231e1a]/60"}`}>
                          {p.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-7 flex flex-col justify-stretch">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePlaybook}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="p-8 rounded-[2rem] border border-[#a67958]/20 bg-[#ece6dd] flex flex-col justify-between h-full text-left"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-[#a67958]/15">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">
                          playbook 0{activePlaybook + 1} spec
                        </span>
                        <span className="font-mono text-[7px] text-[#231e1a]/45 uppercase">delivered across 5 formats</span>
                      </div>
                      
                      <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase">
                        {playbooks[activePlaybook].title} guide
                      </h4>

                      <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                        replaces traditional siloed school subjects with integrated systemic frameworks delivered across multiple formats—audio podcasts, companion video walkthroughs, structured study slides, simple plain-English manuals, and scannable visual blueprints.
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#50624d] font-bold">core competency</span>
                        <p className="text-xs text-[#231e1a]/90 leading-relaxed font-semibold lowercase">
                          {activePlaybook === 0 && "developing multidimensional systems thinking to bypass rote-learning limits."}
                          {activePlaybook === 1 && "configuring local home server architectures and secure network protocols."}
                          {activePlaybook === 2 && "curating lifelong knowledge databases that scale with your educational career."}
                          {activePlaybook === 3 && "identifying and offloading administrative study chore pipelines autonomously."}
                          {activePlaybook === 4 && "auditing complex synthetic variables and cross-check machine logic patterns."}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#a67958]/12 mt-6 flex justify-between items-center text-[7.5px] font-mono text-[#a67958]/80 select-none uppercase tracking-widest">
                      <span>framework system blueprint</span>
                      <span>compiled multi-sensory formats</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Zero Stack Setup */}
            <div className="p-6 md:p-8 bg-[#50624d]/10 border border-[#50624d]/25 rounded-[2rem] text-left space-y-4">
              <div className="flex justify-between items-center border-b border-[#50624d]/15 pb-2">
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#50624d] font-bold">core infrastructure</span>
                <span className="px-2.5 py-0.5 bg-[#50624d]/15 text-[#50624d] font-mono text-[7px] tracking-wider uppercase rounded-full">zero cloud integration</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-base md:text-lg text-[#231e1a] lowercase leading-snug">
                  the zero stack setup
                </h4>
                <p className="text-xs md:text-sm text-[#231e1a]/85 leading-relaxed lowercase font-normal">
                  building a physical, zero-cloud private home network and local virtual private server (vps) locally in the home to secure absolute data sovereignty over personal notes, workflows, and insights—ensuring all data stays local.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Pedagogical Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                layer 04 // the environment
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                4. the pedagogical delivery layer (the execution)
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                this layer outlines the exact delivery mechanics through which a student and family advance, progressing through three distinct, interlinked delivery environments:
              </p>
            </div>

            {/* Tab Swapping Header */}
            <div className="flex justify-center border-b border-[#a67958]/10 pb-4 w-full">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-[#ece6dd] p-1.5 border border-[#a67958]/12 rounded-full shadow-sm max-w-full">
                {[
                  { key: "digital" as const, label: "I. Digital" },
                  { key: "physical" as const, label: "II. Physical" },
                  { key: "immersive" as const, label: "III. Immersive" }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActivePedagogyTab(tab.key)}
                    className={`px-4 py-2 rounded-full font-mono text-[8.5px] uppercase tracking-wider font-bold duration-300 cursor-pointer focus:outline-none ${
                      activePedagogyTab === tab.key
                        ? "bg-[#a67958] text-[#ece6dd] shadow-md"
                        : "text-[#231e1a]/45 hover:text-[#231e1a]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content Node */}
            <AnimatePresence mode="wait">
              {activePedagogyTab === "digital" && (
                <motion.div
                  key="digital"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="p-6 bg-[#ece6dd] border border-[#a67958]/20 rounded-[2rem] space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">operational environment</span>
                      <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase">
                        I. digital (the curious tier)
                      </h4>
                      <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                        the operational workspace focused on initial physical implementation, tech setups, and core skill baseline construction.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#a67958]/12">
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">sovereign setup</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          families configure their private digital study vault using any device running on a private home network.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">the honest truth (no SLAs)</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                          features a raw educational workspace with absolutely no tech backup guarantees or service-level agreements (slas). when infrastructure crashes, families use systems thinking to troubleshoot configuration mismatches from scratch.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">staying on track</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          sustained via a weekly 1-hour workshop designed to companion concrete expectations, check returns, and review multi-format video and audio materials.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activePedagogyTab === "physical" && (
                <motion.div
                  key="physical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="p-6 bg-[#ece6dd] border border-[#a67958]/20 rounded-[2rem] space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">cohort ecosystem</span>
                      <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase">
                        II. physical (the committed tier)
                      </h4>
                      <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                        an intensive program structure designed to move learning entirely out of the house, using specific 5-parent and child cohorts to practicalize concepts in real-world spaces.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#a67958]/12">
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#50624d]/40 pl-3">park execution</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          the core learning areas are practiced directly in the park, utilizing tools and gadgets in natural environments.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#50624d]/40 pl-3">the 5 core learning areas</h5>
                        <ul className="text-xs text-[#231e1a]/80 space-y-1 block list-disc pl-4 lowercase font-normal">
                          <li>factorial thinking (factors)</li>
                          <li>detailed architecture blueprint</li>
                          <li>knowledge map interconnection</li>
                          <li>robot delegation workshop</li>
                          <li>audit-first fact-check</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#50624d]/40 pl-3">synchronized biological rhythms</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          grounded along nature trails to achieve the primary biological benefit over pure digital delivery: dropping family cortisol levels and aligning physiological stress responses.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activePedagogyTab === "immersive" && (
                <motion.div
                  key="immersive"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="p-6 bg-[#ece6dd] border border-[#a67958]/20 rounded-[2rem] space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#a67958] font-bold">spatial retreat</span>
                      <h4 className="font-sans font-bold text-lg text-[#231e1a] lowercase">
                        III. immersive (the creator tier)
                      </h4>
                      <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                        an intensive retreat program structure balanced at a tight ratio to achieve absolute custom process optimization.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#a67958]/12">
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">environment reset</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          moving deep into isolated natural environments to establish a total mental and spatial reset.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">the 5 core tracks</h5>
                        <ul className="text-xs text-[#231e1a]/80 space-y-1 block list-disc pl-4 lowercase font-normal">
                          <li>advanced systems thinking</li>
                          <li>detailed local server blueprint</li>
                          <li>scaled academic asset tree</li>
                          <li>intricate automation clock matrix</li>
                          <li>audit-first insight data analysis</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-sans font-bold text-xs uppercase text-[#231e1a] border-l-2 border-[#a67958]/45 pl-3">the sovereign cloud benefit</h5>
                        <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase">
                          the ultimate integration outcome—leaving with a cohesive family force completely commanding a private AI cloud environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* 5. Evaluative Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                layer 05 // the quality gatekeeper
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                5. the evaluative & quality assurance layer (the gatekeeper)
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                this replaces standard test scoring with functional, real-world proof of capability and domestic time returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 flex flex-col justify-between hover:border-[#a67958]/35 transition-all">
                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#50624d]/10 text-[#50624d] flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                    tangible reality-based outcomes
                  </h4>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                    replaces high-anxiety standardized testing with an actual working system, solution, or project presented directly to a real audience, proving they can deliver practical, real-world human benefit.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 flex flex-col justify-between hover:border-[#a67958]/35 transition-all">
                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#50624d]/10 text-[#50624d] flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                    mundane handover audits
                  </h4>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                    success is measured by how much mundane operational overhead has been successfully handed over to automated AI workflows, directly quantified by the amount of time given back to the family to live their lives and focus on their passions.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#ece6dd] border border-[#a67958]/15 rounded-[2rem] space-y-3 flex flex-col justify-between hover:border-[#a67958]/35 transition-all">
                <div className="space-y-2">
                  <div className="h-6 w-6 rounded-full bg-[#50624d]/10 text-[#50624d] flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <h4 className="font-sans font-bold text-sm md:text-base text-[#231e1a] lowercase leading-tight">
                    comprehensive metric
                  </h4>
                  <p className="text-xs text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                    assurance is achieved when the student demonstrates a customized, private learning toolset that naturally compounds in utility, efficiency, and intelligence over time as they move forward in life.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Structural Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#ece6dd]/40 border border-[#a67958]/20 rounded-[2.5rem] p-6 md:p-10 space-y-8"
          >
            <div className="space-y-2 text-left pb-4 border-b border-[#a67958]/10">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#a67958] font-bold">
                comparative matrix
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase">
                the structural comparison at a glance
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/70 leading-relaxed lowercase font-normal">
                contrasting traditional academic pathways with our integrated systems-thinking paradigm.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-[2rem] border border-[#a67958]/20 bg-[#ece6dd] shadow-sm text-left">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#dfd5c8]/50 border-b border-[#a67958]/20">
                    <th className="p-5 font-mono text-[9px] uppercase tracking-wider text-[#a67958] font-bold w-[20%]">layer</th>
                    <th className="p-5 font-mono text-[9px] uppercase tracking-wider text-[#231e1a]/60 font-semibold w-[40%]">the standard education stack</th>
                    <th className="p-5 font-mono text-[9px] uppercase tracking-wider text-[#50624d] font-bold w-[40%]">the factorial thinking framework</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#a67958]/10 text-xs text-[#231e1a]">
                  {[
                    {
                      layer: "1. philosophical",
                      standard: "constructivism; corporate workforce readiness (human capital theory).",
                      factual: "sovereign humanism; mitigating the velocity crisis; family | fun | foundations."
                    },
                    {
                      layer: "2. theoretical",
                      standard: "bloom's taxonomy (linear, step-by-step cognitive ascent).",
                      factual: "multi-variable system mapping; strategic cognitive offloading; parent-child alignment."
                    },
                    {
                      layer: "3. curriculum",
                      standard: "siloed, disconnected subjects (math, history, science) and rigid timelines.",
                      factual: "integrated systems thinking via 5 compounding playbooks (factorial thinking, build manual, knowledge playbook, delegation, insights) and private vps/home networks."
                    },
                    {
                      layer: "4. pedagogical",
                      standard: "teacher-led direct instruction; passive consumption of content libraries.",
                      factual: "the three tier blueprint: digital (the curious tier), physical (the committed tier), and immersive (the creator tier)."
                    },
                    {
                      layer: "5. evaluative",
                      standard: "high-stakes summative exams; percentile ranking on a standardized bell curve.",
                      factual: "reclaiming time for life and passion; lowering cognitive load; compounding toolsets."
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#dfd7cc]/15 transition-colors">
                      <td className="p-5 font-sans font-bold text-[#231e1a] lowercase">{row.layer}</td>
                      <td className="p-5 text-[#231e1a]/85 lowercase md:pr-10 leading-relaxed">{row.standard}</td>
                      <td className="p-5 text-[#231e1a] font-medium bg-[#50624d]/4 lowercase leading-relaxed">{row.factual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-6 text-left">
              {[
                {
                  layer: "1. philosophical",
                  standard: "constructivism; corporate workforce readiness (human capital theory).",
                  factual: "sovereign humanism; mitigating the velocity crisis; family | fun | foundations."
                },
                {
                  layer: "2. theoretical",
                  standard: "bloom's taxonomy (linear, step-by-step cognitive ascent).",
                  factual: "multi-variable system mapping; strategic cognitive offloading; parent-child alignment."
                },
                {
                  layer: "3. curriculum",
                  standard: "siloed, disconnected subjects (math, history, science) and rigid timelines.",
                  factual: "integrated systems thinking via 5 compounding playbooks (factorial thinking, build manual, knowledge playbook, delegation, insights) and private vps/home networks."
                },
                {
                  layer: "4. pedagogical",
                  standard: "teacher-led direct instruction; passive consumption of content libraries.",
                  factual: "the three tier blueprint: digital (the curious tier), physical (the committed tier), and immersive (the creator tier)."
                },
                {
                  layer: "5. evaluative",
                  standard: "high-stakes summative exams; percentile ranking on a standardized bell curve.",
                  factual: "reclaiming time for life and passion; lowering cognitive load; compounding toolsets."
                }
              ].map((row, idx) => (
                <div key={idx} className="p-6 bg-[#ece6dd] rounded-[2rem] border border-[#a67958]/20 space-y-4">
                  <h5 className="font-sans font-bold text-sm text-[#231e1a] lowercase border-b border-[#a67958]/15 pb-2 font-normal">
                    {row.layer}
                  </h5>
                  
                  <div className="space-y-1 text-left">
                    <span className="font-mono text-[7px] uppercase tracking-widest text-[#231e1a]/40 font-bold font-normal">standard stack</span>
                    <p className="text-xs text-[#231e1a]/80 lowercase leading-relaxed font-normal">{row.standard}</p>
                  </div>

                  <div className="space-y-1 bg-[#50624d]/5 p-3 rounded-xl border border-[#50624d]/10 text-left">
                    <span className="font-mono text-[7px] uppercase tracking-widest text-[#50624d] font-bold font-normal">factorial framework</span>
                    <p className="text-xs text-[#231e1a] font-medium lowercase leading-relaxed font-normal">{row.factual}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive PDF Card Download Alignment Section (As requested) */}
          <div className="p-8 md:p-12 bg-[#ece6dd] border border-[#a67958]/20 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 text-left">
            <div className="space-y-4 max-w-lg">
              <h3 className="text-2xl font-sans font-bold text-[#231e1a] tracking-tight lowercase font-normal">
                claim the complete framework guide
              </h3>
              <p className="text-xs md:text-sm text-[#231e1a]/80 leading-relaxed lowercase font-normal">
                uncover active terminal setup scripts, factorial thinking templates, physical server guides, and step-by-step private domestic blueprints tailored for epping families.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <InteractivePdfCard 
                pdfUrl="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_5c4276697cce45df9c078b4ec19cf2ba.pdf"
                imageUrl="https://static.wixstatic.com/media/b20068_9311a56fd7674097baecf8597e112acd~mv2.jpeg"
                labelText="slide to unlock blueprint"
                successText="unlocked learning booklet..."
              />
            </div>
          </div>

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
              join local families in epping (2121)
            </h2>
            <p className="max-w-md mx-auto text-[#231e1a]/85 text-xs mb-8 leading-relaxed lowercase font-normal">
              our retreats are capped at exactly 5 families per intake to ensure complete tailored engineering for your child. request access to verify availability.
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
