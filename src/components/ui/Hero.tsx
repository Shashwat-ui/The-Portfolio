'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [ scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(mousePosition, scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="glass px-4 py-2 rounded-full text-xs md:text-sm text-gray-200 font-light tracking-wider mt-28"
          style={{background: "#3f3f46"}}
          >
            Frontend Developer | React • Next.js • JavaScript
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
        >
          Building{' '}
          <span className="gradient-text font-normal">fast</span>,{' '}
          <span className="gradient-text font-normal">responsive</span>
          <br />
          and{' '}
          <span className="gradient-text font-normal">scalable</span>{' '}
          web interfaces
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-s md:text-md text-gray-200 font-light max-w-3xl mx-auto mb-8 leading-relaxed rounded-full p-2"
          style={{background: "#18181b"}}
        >
          I&apos;m a Frontend Developer with professional experience in building modern
          web applications using React and Next.js. I focus on clean UI, performance
          optimization, and scalable code architecture.
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12 "
          
        >
          {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Redux'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="glass px-4 py-2 rounded-full text-sm text-gray-300 cursor-default"
              style={{background: "#18181b"}}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(125, 211, 252, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-cyan/40 glass rounded-full text-white font-medium text-lg cursor-pointer shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-shadow"
          >
            Hire Me
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(125, 211, 252, 0.3)' }}
            whileTap={{ scale: 0.95 }}
           className="px-8 py-4 bg-accent-cyan/40 glass rounded-full text-white font-medium text-lg cursor-pointer shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-shadow"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-dark-bg pointer-events-none" />
    </section>
  );
}
