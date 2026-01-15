'use client';

import { motion } from 'framer-motion';

export default function ScrollMouseIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed bottom-6 right-1 flex flex-col items-center gap-3 z-50"
    >
      {/* Scroll text */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-xs text-gray-400 font-light tracking-wider"
      >
        SCROLL
      </motion.p>
      
      {/* Creative mouse with particles */}
      <div className="relative">
        {/* Orbiting particles */}
        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            className="absolute top-1/2 left-1/2 w-20 h-20"
            style={{ transformOrigin: '0 0' }}
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${
              i === 0 ? 'from-cyan-500 to-blue-500' :
              i === 1 ? 'from-purple-500 to-pink-500' :
              'from-orange-500 to-red-500'
            } shadow-lg`} />
          </motion.div>
        ))}
        
        {/* Main mouse icon */}
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative group"
        >
          {/* Outer glow ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-full border-2 border-cyan-500 blur-sm"
          />
          
          {/* Mouse body */}
          <div className="relative w-10 h-14 border-2 border-linear-to-b rounded-full flex justify-center pt-3 bg-linear-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Inner gradient glow */}
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/20 via-purple-500/20 to-orange-500/20" />
            
            {/* Animated scroll wheel */}
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-2 h-4 bg-linear-to-b from-cyan-500 via-purple-500 to-orange-500 rounded-full shadow-lg"
            />
            
            {/* Sparkle effect */}
            <motion.div
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute top-1 w-1 h-1 bg-white rounded-full"
            />
          </div>
          
          {/* Bottom glow */}
          <div className="absolute inset-0 bg-linear-to-t from-cyan-500/30 via-transparent to-transparent blur-xl rounded-full" />
        </motion.div>
      </div>
      
      {/* Animated arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col gap-1"
      >
        <motion.div 
          className="w-0.5 h-6 bg-linear-to-b from-cyan-500 to-transparent rounded-full"
          animate={{ scaleY: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}