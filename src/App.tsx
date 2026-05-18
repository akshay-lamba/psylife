import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero, Focus, Flow, Learning, Edge } from "./components/Sections";
import { Footer } from "./components/Footer";

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

export default function App() {
  useEffect(() => {
    // Smoother scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-white overflow-x-hidden relative min-h-screen">
      <MouseGlow />
      
      {/* Texture mask */}
      <div className="fixed inset-0 pointer-events-none z-[5] matte-texture opacity-30" />
      
      <Navigation />
      
      <main className="relative z-10 px-6 md:px-12">
        <Hero />
        <Focus />
        <Flow />
        <Learning />
        <Edge />
      </main>

      <Footer />
    </div>
  );
}
