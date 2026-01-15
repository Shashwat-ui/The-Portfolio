'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Skills from '@/components/ui/Skills';
import Projects from '@/components/ui/Projects';
import Services from '@/components/ui/Services';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import { Suspense } from 'react';

// Dynamically import 3D canvas (client-side only)
const CanvasContainer = dynamic(
  () => import('@/components/canvas/CanvasContainer'),
  { ssr: false }
);

// Loading fallback for 3D canvas
function CanvasLoader() {
  return (
    <div className="fixed inset-0 -z-10 bg-linear-to-b from-dark-bg via-dark-surface to-dark-bg">
      <div className="absolute inset-0 bg-\[radial-gradient\(ellipse_at_center,_var\(--tw-gradient-stops\)\)\] from-accent-cyan/5 via-transparent to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background Canvas */}
      <Suspense fallback={<CanvasLoader />}>
        <CanvasContainer />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
