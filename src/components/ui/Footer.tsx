'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Shashwat-ui',
      icon: Github,
      color: 'hover:text-purple-400',
      delay: 0,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shaswat-shukla-7b2229191/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      delay: 0.1,
    },
    {
      name: 'Email',
      href: 'mailto:shaswatshukla75@gmail.com',
      icon: Mail,
      color: 'hover:text-emerald-400',
      delay: 0.2,
    },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-accent-cyan/5 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            {/* <Sparkles className="w-4 h-4 text-accent-cyan" /> */}
            <Image src="/photo.jpeg" alt="Sparkles Icon" width={24} height={24} className="w-6 h-6 rounded-full" />
            <p className="text-gray-400 font-light text-sm">
              © {currentYear} Shashwat Shukla. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + link.delay }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-3 glass rounded-xl ${link.color} transition-all duration-300`}
                aria-label={link.name}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-accent-cyan/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                
                {/* Icon */}
                <link.icon className="w-5 h-5 relative z-10 text-gray-400 group-hover:text-current transition-colors" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-dark-elevated border border-white/10 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative glass px-4 py-2 rounded-full text-sm text-gray-400 hover:text-accent-cyan transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent-cyan/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
