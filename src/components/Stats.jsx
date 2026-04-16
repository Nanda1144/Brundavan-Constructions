import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, HeartPulse, HardHat } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "7+", icon: <HardHat className="text-brand-gold" /> },
  { label: "Completed Projects", value: "20+", icon: <Building2 className="text-brand-gold" /> },
  { label: "Hospital Specialty", value: "Expert", icon: <HeartPulse className="text-brand-gold" /> },
  { label: "Industrial Safety", value: "100%", icon: <Award className="text-brand-gold" /> },
];

const Stats = () => {
  return (
    <div className="bg-brand-blue py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="mb-4 flex justify-center transform transition-transform group-hover:scale-110 duration-300">
              {stat.icon}
            </div>
            <div className="text-4xl md:text-5xl font-outfit font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-brand-gold font-medium uppercase tracking-widest text-xs md:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 p-8 glass-card border-2 border-black rounded-3xl text-center group cursor-default"
      >
        <h3 className="text-black uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">Key Performance Project</h3>
        <p className="text-2xl md:text-4xl font-outfit leading-tight text-brand-gold" style={{ WebkitTextStroke: '0.5px black' }}>
          "Krishna Sindhura Hospitals – A benchmark in healthcare infrastructure"
        </p>
        <div className="mt-6 w-16 h-0.5 bg-brand-gold mx-auto group-hover:w-32 transition-all duration-500" />
      </motion.div>
    </div>
  );
};

export default Stats;
