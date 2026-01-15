'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, 0.1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI-Powered CMS Audit Agent Application',
      role: 'Frontend Developer',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Lucide React', 'Azure', 'MongoDB', 'AI Agents'],
      description:
        'Worked on an enterprise-level AI-Powered CMS Audit Agent application, where the entire frontend was built using Next.js and TypeScript. The application is role-based and provides intelligent auditing, automation, and real-time insights using AI.',
      contributions: [
        '• Integrated the entire application architecture in Next.js using TypeScript',
        '• Designed and developed a role-based dashboard for different user profiles',
        '• Converted complex Figma designs into pixel-perfect UI using Shadcn UI and Tailwind CSS',
        '• Implemented user-based role profiles and permissions',
        '• Integrated an AI chatbot enabling back-and-forth communication about the entire application',
        '• Enabled users to create content, generate files, and perform actions directly via the chatbot',
        '• Worked with 5 AI scrubber agents responsible for auditing, validation, and data processing',
        '• Integrated Azure services and MongoDB for data handling and AI workflows',
      ],
      status: 'Confidential',
      gradient: 'from-accent-cyan via-blue-500 to-accent-purple',
    },
    {
      title: 'Global Providers Discovery & Booking Platform',
      role: 'Frontend Developer',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Maps Integration', 'Voice Search'],
      description:
        'Developed a Next.js + TypeScript platform to discover service providers worldwide, offering advanced search, location-based discovery, and booking functionality.',
      contributions: [
        '• Built a scalable and responsive frontend using Next.js and TypeScript',
        '• Implemented global provider discovery with interactive map integration',
        '• Added voice search functionality for hands-free provider lookup',
        '• Designed detailed provider profiles with all essential information',
        '• Implemented booking and scheduling flow for users',
        '• Ensured smooth UX and performance across devices and regions',
      ],
      status: 'Coming Soon',
      gradient: 'from-accent-purple via-pink-500 to-accent-orange',
    },
    {
      title: 'BDO Uni Bank Project',
      role: 'Frontend Developer',
      tech: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'REST APIs'],
      description:
        'Developed a responsive, production-ready banking application with dynamic features and optimized performance.',
      contributions: [
      " • Built the entire frontend application using React.js and Next.js",
"• Designed and developed a dashboard with dynamic data visualization",
"• Designed and developed a comprehensive dashboard for monitoring and managing application data",
"• Built the entire frontend application end-to-end using React.js and Next.js",
"• Implemented lazy loading and code splitting for performance optimization",
"• Integrated REST APIs for real-time data rendering",
"• Built reusable and scalable UI components",
"• Ensured responsive design and cross-device compatibility",
      ],
      status: 'Coming Soon',
      gradient: 'from-accent-orange via-red-500 to-pink-500',
    },
    {
      title: "P'chaim Project",
      role: 'Frontend Developer',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs'],
      description:
        'Worked on a modern frontend application focusing on clean UI and smooth user interactions.',
      contributions: [
        '• Converted UI designs into pixel-perfect React components',
        '• Integrated APIs and handled data states',
        '• Improved performance and UI consistency',
      ],
      status: 'Coming Soon',
      gradient: 'from-accent-emerald via-green-500 to-teal-500',
    },
  ];

  return (
    <section ref={ref} id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: activeIndex === index ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -18, rotateY: 3, rotateX: -3 }}
              className="group relative cursor-pointer perspective-500"
            >
              {/* CARD */}
              <div
                className={`relative rounded-3xl p-8 md:p-10 backdrop-blur-2xl border shadow-2xl transition-all duration-500 overflow-hidden
                  bg-linear-to-br from-dark-elevated/85 to-dark-surface/70 border-white/12 shadow-black/40
                  ${activeIndex !== null && activeIndex !== index ? 'opacity-70 blur-[0.3px]' : 'opacity-100'}
                `}
              >
                {/* BASE GRADIENT */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-[0.12] group-hover:opacity-[0.32] transition-opacity duration-500 rounded-3xl`}
                />

                {/* MESH PATTERN */}
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* ACCENT LINE INDICATOR - LEFT BORDER ON HOVER */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none z-10`}
                />

                {/* HOVER BORDER & GLOW */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent-cyan/50 transition-all duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* TITLE & ROLE */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium mb-2 group-hover:bg-linear-to-r group-hover:from-accent-cyan group-hover:to-accent-purple group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-accent-purple font-light group-hover:text-accent-cyan transition-colors">
                        {project.role}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="glass px-4 py-2 rounded-full text-xs text-gray-400 group-hover:text-accent-cyan group-hover:shadow-lg group-hover:shadow-accent-cyan/30 transition-all">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="glass px-3 py-1 rounded-full text-xs text-gray-300 group-hover:bg-white/10 group-hover:text-white group-hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">{project.description}</p>

                  {/* CONTRIBUTIONS */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-white">Key Contributions:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.contributions.map((c, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0 group-hover:shadow-lg group-hover:shadow-accent-cyan/50 group-hover:scale-150 transition-all" />
                          <p className="text-sm text-gray-400 font-light group-hover:text-gray-300 transition-colors">{c}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Behind Card */}
              <motion.div
                animate={{
                  opacity: activeIndex === index ? 0.6 : [0.08, 0.14, 0.08],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute inset-0 rounded-3xl bg-linear-to-br ${project.gradient} blur-xl -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
