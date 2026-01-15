"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.2);

  const experiences = [
    "• Developing production-ready React & Next.js applications",
    "• Integrating REST APIs",
    "• Optimizing performance using lazy loading and code splitting",
    "• Building responsive UI using Tailwind CSS",
    "• Working in agile team environments",
  ];

  return (
    <section ref={ref} id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/10 to-accent-purple/10 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden p-1 bg-linear-to-br from-dark-elevated/80 to-dark-surface/60 backdrop-blur-2xl border border-white/8 shadow-2xl shadow-black/40">
                <Image
                  src="/photo.jpeg"
                  alt="Shashwat Shukla"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              I am a passionate Frontend Developer working in a professional
              environment and also open to freelance opportunities. I enjoy
              converting complex requirements into clean, user-friendly
              interfaces. As a Frontend Engineer, I
              architect and deliver high-performance, scalable web platforms
              using React, Next.js, Redux, and Tailwind CSS. My work sits at the
              intersection of product design and engineering translating complex
              requirements into intuitive, resilient user experiences. 
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-accent-cyan mb-4">
                I have hands-on experience in:
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 shrink-0" />
                  <p className="text-gray-400 font-light">{exp}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg text-gray-300 font-light leading-relaxed pt-4 border-t border-white/10"
            >
              I believe in writing clean, maintainable code and delivering
              features that actually solve business problems. I focus
              deeply on performance architecture, intelligent code splitting,
              lazy loading strategies, and seamless API orchestration to ensure
              applications remain fast, accessible, and future-proof as they
              scale.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
