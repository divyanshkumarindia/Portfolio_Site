
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
      className="absolute top-0 left-0 pointer-events-none w-[420px] h-[420px] rounded-full bg-gradient-to-r from-sky-400/20 via-cyan-300/20 to-blue-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 blur-[90px] will-change-transform z-[1]"
    />
  );
};

function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      {/* Global Zero-Lag GPU Cursor Spotlight */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* GPU Accelerated Cursor Glow (Layer 0: behind all page elements) */}
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
