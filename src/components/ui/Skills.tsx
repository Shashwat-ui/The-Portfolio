'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import {
  Code2,
  Palette,
  Database,
  Zap,
  Cloud,
  Plug,
  Bot,
  GitBranch,
} from 'lucide-react';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, 0.2);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['• React.js', '• Next.js', '• JavaScript (ES6+)', '• TypeScript', '• HTML5', '• CSS3'],
      color: 'from-accent-cyan to-blue-500',
      icon: Code2,
    },
    {
      title: 'UI & Styling',
      skills: ['• Tailwind CSS', '• Shadcn UI', '• CSS Modules', '• Lucide React'],
      color: 'from-accent-purple to-pink-500',
      icon: Palette,
    },
    {
      title: 'State Management',
      skills: ['• Redux'],
      color: 'from-accent-orange to-red-500',
      icon: Database,
    },
    {
      title: 'Performance & Optimization',
      skills: ['• Lazy Loading', '• Code Splitting', '• Performance Optimization'],
      color: 'from-accent-emerald to-green-500',
      icon: Zap,
    },
    {
      title: 'Backend & Cloud Integration',
      skills: ['• Azure Services', '• MongoDB'],
      color: 'from-cyan-500 to-blue-800',
      icon: Cloud,
    },
    {
      title: 'APIs & Integration',
      skills: ['• REST APIs', '• Swagger API'],
      color: 'from-purple-500 to-indigo-800',
      icon: Plug,
    },
    {
      title: 'AI & Automation',
      skills: ['• AI Chatbots', '• AI Agents'],
      color: 'from-orange-500 to-pink-800',
      icon: Bot,
    },
    {
      title: 'Tools & Workflow',
      skills: ['• Git', '• GitHub', '• VS Code', '• Postman'],
      color: 'from-emerald-500 to-teal-800',
      icon: GitBranch,
    },
  ];

  return (
    <section ref={ref} id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">


        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale:
                    activeIndex === null
                      ? 1
                      : activeIndex === index
                      ? 1.04
                      : 0.95,
                }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -16,
                  rotateY: 8,
                  rotateX: -4,
                }}
                className="group relative cursor-pointer h-full"
              >
                {/* CARD */}
                <div
                  className={`relative h-full flex flex-col rounded-2xl p-6 backdrop-blur-2xl border shadow-xl transition-all duration-500 overflow-hidden
                  bg-linear-to-br from-dark-elevated/90 to-dark-surface/80 border-white/14 shadow-black/50
                  ${
                    activeIndex !== null && activeIndex !== index
                      ? 'opacity-60 blur-[0.3px]'
                      : 'opacity-100'
                  }
                `}
                >
                  {/* BASE COLOR */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-[0.22] group-hover:opacity-[0.35] transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* MESH */}
                  <div
                    className="absolute inset-0 opacity-[0.025] group-hover:opacity-[0.1] transition-opacity duration-500"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                      backgroundSize: '28px 28px',
                    }}
                  />

                  {/* ACCENT LINE INDICATOR - TOP BORDER ON HOVER */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-linear-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none z-10`}
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">
                    {/* ICON */}
                    <motion.div
                      whileHover={{ rotate: 18, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                      className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center bg-linear-to-br ${category.color} shadow-md shadow-black/40 group-hover:shadow-2xl`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold mb-4 text-white/90 group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {category.title}
                    </h3>

                    {/* SKILLS */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="text-sm text-gray-400 flex items-center gap-2 group/skill"
                        >
                          <motion.span
                            whileHover={{ scale: 2, rotate: 180 }}
                            className="w-1 h-1 rounded-full bg-accent-cyan/60 group-hover/skill:bg-accent-cyan group-hover/skill:shadow-lg group-hover/skill:shadow-accent-cyan/50"
                          />
                          <span className="group-hover/skill:text-white group-hover/skill:translate-x-1 transition-all">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BREATHING GLOW */}
                <motion.div
                  animate={{
                    opacity:
                      activeIndex === index ? 0.6 : [0.08, 0.14, 0.08],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.color} blur-xl -z-10`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
