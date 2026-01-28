'use client';

import { motion } from 'framer-motion';
import { NewsletterForm } from '../NewsletterForm';
import { useMemo } from 'react';

/**
 * Futuristic AI-Powered Hero Section
 * Features: Tech grid background, floating particles, cyber colors, glowing effects, neural network vibe
 */
export const HeroSection = () => {
  // Generate particles once for performance
  const particles = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    })),
    []
  );

  return (
    <section className="relative py-20 md:py-32 px-4 text-center bg-[#0a0a1a] text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Tech Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Multi-layer Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-purple-600/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-[#00d4ff]/5" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${
              particle.id % 3 === 0 
                ? '#00d4ff' 
                : particle.id % 3 === 1 
                ? '#a855f7' 
                : '#06b6d4'
            }, transparent)`,
            boxShadow: `0 0 ${particle.size * 2}px ${
              particle.id % 3 === 0 
                ? '#00d4ff' 
                : particle.id % 3 === 1 
                ? '#a855f7' 
                : '#06b6d4'
            }`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.line
          x1="10%" y1="20%" x2="90%" y2="80%"
          stroke="#00d4ff"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="90%" y1="20%" x2="10%" y2="80%"
          stroke="#a855f7"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="50%" y1="10%" x2="50%" y2="90%"
          stroke="#06b6d4"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Badge with Glow */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00d4ff]/10 backdrop-blur-sm border border-[#00d4ff]/50 text-sm font-medium shadow-lg relative"
              style={{
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.05)',
              }}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]"></span>
              </span>
              <span className="text-[#00d4ff] font-semibold">✨ AI-Powered Financial Intelligence</span>
            </span>
          </motion.div>

          {/* Main Heading with Cyber Glow */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              textShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3)',
            }}
          >
            Take Control of
            <br />
            <span 
              className="bg-gradient-to-r from-[#00d4ff] via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(168, 85, 247, 0.6)',
              }}
            >
              Your Finances
            </span>
          </motion.h1>

          {/* Subheading with Glow */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              color: '#a0d4f7',
              textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
            }}
          >
            Smart budgeting meets AI-powered insights. Save more, invest smarter, and achieve your financial goals faster with neural-powered intelligence.
          </motion.p>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
          >
            <NewsletterForm />
          </motion.div>

          {/* Trust Indicators with Cyber Style */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { text: '14-day free trial', icon: '✓' },
              { text: 'No credit card required', icon: '✓' },
              { text: 'Cancel anytime', icon: '✓' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 text-cyan-300"
                style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}
              >
                <span 
                  className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center border border-[#00d4ff] font-bold text-[#00d4ff] text-xs"
                  style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}
                >
                  {item.icon}
                </span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Social Proof with Neural Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 flex items-center justify-center gap-6 flex-wrap"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 flex items-center justify-center text-white font-bold shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${
                      i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#06b6d4'
                    }, ${
                      i % 3 === 0 ? '#0891b2' : i % 3 === 1 ? '#7c3aed' : '#0e7490'
                    })`,
                    borderColor: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#06b6d4',
                    boxShadow: `0 0 20px ${
                      i % 3 === 0 ? 'rgba(0, 212, 255, 0.5)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(6, 182, 212, 0.5)'
                    }`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {String.fromCharCode(64 + i)}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5" 
                    fill="#00d4ff" 
                    viewBox="0 0 20 20"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(0, 212, 255, 0.8))' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-cyan-300">
                <span 
                  className="font-bold text-[#00d4ff]"
                  style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
                >
                  50,000+
                </span>{' '}
                happy users
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with Cyber Style */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span 
            className="text-sm text-[#00d4ff]"
            style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}
          >
            Scroll to explore
          </span>
          <svg 
            className="w-6 h-6 text-[#00d4ff]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
