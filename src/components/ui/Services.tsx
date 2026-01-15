'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.2);

  const services = [
    {
      title: 'React / Next.js Website Development',
      description: 'Building modern, fast, and scalable web applications from scratch using the latest technologies.',
      icon: '⚛️',
      gradient: 'from-accent-cyan to-blue-500',
    },
    {
      title: 'Figma to React / Next.js Conversion',
      description: 'Converting your design files into pixel-perfect, production-ready React components.',
      icon: '🎨',
      gradient: 'from-accent-purple to-pink-500',
    },
    {
      title: 'Frontend Bug Fixing & Enhancements',
      description: 'Identifying and resolving frontend issues while adding new features and improvements.',
      icon: '🔧',
      gradient: 'from-accent-orange to-red-500',
    },
    {
      title: 'UI Performance Optimization',
      description: 'Optimizing your application for speed, performance, and better user experience.',
      icon: '⚡',
      gradient: 'from-accent-emerald to-green-500',
    },
    {
      title: 'Responsive Web Design',
      description: 'Creating beautiful, responsive interfaces that work seamlessly across all devices.',
      icon: '📱',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section ref={ref} id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 1, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 1, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 2 }}
              className="group relative cursor-pointer h-full"
            >
              {/* CARD */}
              <div
                className="
                  relative h-full flex flex-col
                  bg-linear-to-br from-dark-elevated/90 to-dark-surface/70
                  backdrop-blur-2xl rounded-2xl p-8
                  border border-white/8
                  shadow-xl shadow-black/40
                  transition-all duration-500
                  group-hover:border-transparent
                  group-hover:shadow-2xl
                  overflow-hidden
                "
              >
                {/* Background gradient (more visible) */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl
                    bg-linear-to-br ${service.gradient}
                    opacity-[0.18]
                    group-hover:opacity-[0.28]
                    transition-opacity duration-500
                  `}
                />

                {/* Mesh overlay (slightly stronger) */}
                <div
                  className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Accent line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
                />

                {/* Accent glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${service.gradient} opacity-[0.15] group-hover:opacity-30 blur-3xl transition-all duration-700 rounded-full group-hover:rotate-180`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [-15, 15, -15, 15, 0] }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-medium mb-3 bg-linear-to-r from-white to-white bg-clip-text text-transparent group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-light leading-relaxed grow">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Outer glow (visible even before hover) */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} opacity-[0.15] group-hover:opacity-60 blur-xl transition-all duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
