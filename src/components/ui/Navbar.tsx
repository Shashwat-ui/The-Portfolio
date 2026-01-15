'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(()=>[
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Navbar container with crazy glass effect */}
      <div className="relative mx-4 mt-4">
        <div
          className={`relative transition-all duration-500 ${
            scrolled
              ? 'bg-linear-to-r from-dark-elevated/90 via-dark-surface/85 to-dark-elevated/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/40'
              : 'bg-dark-elevated/60 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20'
          } rounded-2xl overflow-hidden`}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Mesh pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          {/* Top gradient line */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent-cyan to-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 100%' }}
          />
          
          <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
            <div className="flex items-center justify-between">
              {/* Logo with creative effects */}
              <Link href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative text-2xl md:text-3xl font-bold cursor-pointer group"
                >
                  {/* Animated gradient background layer */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-orange opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Main text with gradient stroke effect */}
                  <div className='flex items-center justify-center gap-2'>
                   <Image src="/photo.jpeg" alt="Sparkles Icon" width={24} height={24} className="w-8 h-8 rounded-full" />
                  
                  <span className="relative z-10 text-white transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    Shashwat Shukla
                  </span>
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Particle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-accent-cyan rounded-full animate-ping" />
                    <div className="absolute top-0 right-0 w-1 h-1 bg-accent-purple rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-accent-orange rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Navigation with crazy hover effects */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="relative group cursor-pointer"
                    >
                      <div
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? 'text-white'
                            : 'text-gray-300'
                        }`}
                      >
                        {/* Background pill on hover/active */}
                        <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? 'bg-linear-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30'
                            : 'bg-white/0 group-hover:bg-white/5 border border-transparent group-hover:border-white/10'
                        }`} />
                        
                        {/* Glow effect on active */}
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            layoutId="navGlow"
                            className="absolute inset-0 bg-linear-to-r from-accent-cyan to-accent-purple opacity-20 blur-xl rounded-xl"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        
                        <span className="relative z-10">{item.name}</span>
                        
                        {/* Animated bottom line */}
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-cyan rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CTA Button with crazy animations */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block relative px-8 py-3 rounded-xl text-white text-sm font-bold cursor-pointer overflow-hidden group"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-orange"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-orange opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10">Let&apos;s Talk 🚀</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden relative text-white p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
