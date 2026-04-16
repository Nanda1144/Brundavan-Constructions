import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section id="founder" className="section-padding bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left 30% - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[30%] sticky top-24"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-gold" />
              <img 
                src="/images/founder.jpg" 
                alt="Er. B. Nagendra Babu" 
                className="w-full rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-gold" />
            </div>
          </motion.div>

          {/* Right 70% - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[70%] space-y-8"
          >
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-widest block mb-2">Our Foundation</span>
              <h2 className="text-4xl md:text-5xl text-brand-blue mb-4">Er. B. Nagendra Babu</h2>
              <p className="text-xl text-brand-blue/60 italic">Founder & Lead Engineer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-gray-200">
              <div className="space-y-4">
                <h4 className="text-brand-blue uppercase tracking-wider text-sm">Education</h4>
                <p className="font-semibold text-lg">B.Tech Civil Engineering</p>
                <p className="text-gray-600">ACEM, Madanapalle</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-blue uppercase tracking-wider text-sm">Experience</h4>
                <p className="font-semibold text-lg">7+ Years of Excellence</p>
                <p className="text-gray-600">Specializing in Healthcare & Residential</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-brand-blue">Professional Journey</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-brand-blue">Bhagyashree Constructions (6 Years)</span> - Spearheaded numerous successful residential and infrastructure projects.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-brand-blue">Hetero / Krishna Sindhura Hospitals</span> - Expert oversight of specialized hospital project implementations, ensuring precision and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-brand-blue font-inter font-medium leading-relaxed italic max-w-2xl">
                "Our vision is to redefine the construction landscape by prioritizing quality over quantity and building relationships that last as long as our structures."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
