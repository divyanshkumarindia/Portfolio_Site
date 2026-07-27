
import React, { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const CursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth linear interpolation (LERP) for buttery zero-lag trailing
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 pointer-events-none w-[360px] h-[360px] rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 blur-[80px] will-change-transform z-0"
    />
  );
};

function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      {/* Global High-Tech Grid & Zero-Lag GPU Cursor Spotlight */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Continuous High-Tech Grid across entire site */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* GPU Accelerated Cursor Glow */}
        <CursorSpotlight />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
