import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop", // Modern Kitchen
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", // Home Exterior
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop", // Living Room
  "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop", // Bedroom
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Hall / Entrance
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", // Garden
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070&auto=format&fit=crop", // Luxury Bathroom
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop", // Modern Home Front
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070&auto=format&fit=crop", // Balcony
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop", // Modern Interior
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark perspective-[2000px]">
      {/* Center Hinge Flip Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ rotateY: 90, opacity: 0, scale: 1.1, x: "10%" }}
            animate={{ rotateY: 0, opacity: 1, scale: 1, x: 0 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.95, x: "-10%" }}
            transition={{
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for more natural flip
            }}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              originX: 0.5
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The actual image with a slow zoom (Ken Burns Effect) */}
            <motion.div
              animate={{ scale: [1, 1.08] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            
            {/* Dynamic Interactive Overlays */}
            {/* 1. The 'Central Page Crease' Shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-50" />
            
            {/* 2. Transition Glow (Gives it that 'Premium' feel) */}
            <motion.div 
               initial={{ x: "-100%", opacity: 0 }}
               animate={{ x: "200%", opacity: [0, 0.3, 0] }}
               transition={{ duration: 2.5, ease: "easeInOut" }}
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10"
            />

            {/* 3. Global Vignette */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="text-brand-gold font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-4 block drop-shadow-xl">
            Crafting Excellence Since 2017
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-outfit leading-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Building Spaces of <br />
            <span className="text-brand-gold">Lasting Value</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-medium">
            Premium construction services specializing in residential, commercial,
            and healthcare infrastructure with a commitment to quality and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-gold shadow-2xl">Explore Services</a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold backdrop-blur-md bg-black/30 hover:bg-white/10 transition-all shadow-2xl">Start Your Project</a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20 drop-shadow-lg"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
