import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, ClipboardList, Layers } from 'lucide-react';

const services = [
  {
    title: "Individual Homes / Bungalows",
    description: "Custom-designed luxury residences tailored to your lifestyle and dreams. Built with premium materials and modern construction techniques to ensure durability and elegance. End-to-end project management from planning and design to execution and final handover.",
    image: "/images/service1.jpg",
    details: {
      process: ["Personalized Architecture", "Soil Testing & Foundation", "RCC Frame Structure", "Premium Interior Finishing"],
      tests: ["Soil Bearing Capacity", "Concrete Slump Test", "Cube Strength Test", "Nondestructive Testing"],
      features: ["Vastu Compliant Design", "Smart Home Integration", "Energy Efficient Systems"],
      planningImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
    }
  },
  {
    title: "Apartment Complexes",
    description: "Modern multi-family housing solutions focusing on community and functionality. Smart space planning with amenities that enhance comfort and lifestyle. Built with a focus on safety, sustainability, and long-term value.",
    image: "/images/service2.jpg",
    details: {
      process: ["Structural Safety Analysis", "High-rise Masonry", "Integrated Plumbing/Electrical", "Community Amenities Design"],
      tests: ["Steel Tensile Strength", "Verticality Checks", "Leakage Hydro-tests", "Acoustic Insulation Tests"],
      features: ["Seismic Resistant Design", "Fire Safety Compliance", "Centralized Water Systems"],
      planningImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    }
  },
  {
    title: "Educational Institutions",
    description: "State-of-the-art learning environments designed for the next generation. Spaces designed to inspire creativity, collaboration, and innovation. Built with safety, accessibility, and future expansion in mind.",
    image: "/images/service3.jpg",
    details: {
      process: ["Acoustic Layout Planning", "Large Span Classroom Structure", "Laboratory Safety Setup", "Auditorium Engineering"],
      tests: ["Impact Resistance Tests", "Light Intensity Analysis", "Ventilation Efficiency", "Material Durability Testing"],
      features: ["Safe Campus Architecture", "Smart Class Infrastructure", "Sports Facility Construction"],
      planningImg: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    title: "Hospitals",
    description: "Specialized healthcare facilities meeting the highest standards of safety and care. Designed to meet strict medical standards and patient-centric requirements. Advanced infrastructure supporting modern medical technologies and operations.",
    image: "/images/service4.jpg",
    details: {
      process: ["Anti-bacterial Flooring", "Oxygen Pipeline Integration", "Radiation Shielding (Lead lining)", "Ergonomic Patient Spaces"],
      tests: ["Air Quality Particle Test", "Static Load Testing", "Equipment Vibration Analysis", "Plumbing Integrity Tests"],
      features: ["NABH Standard Compliance", "Emergency Workflow Design", "Modular OT Infrastructure"],
      planningImg: "https://images.unsplash.com/photo-1580982324076-d95230549339?q=80&w=2071&auto=format&fit=crop"
    }
  },
  {
    title: "Commercial & Industrial Spaces",
    description: "Efficient and robust structures for business growth and industrial operations. Optimized layouts for maximum productivity and operational efficiency. Engineered for durability to support heavy-duty and long-term usage.",
    image: "/images/service5.jpg",
    details: {
      process: ["Industrial Flooring (VDF)", "Heavy Duty Truss Work", "Fire Suppression Systems", "Loading Bay Engineering"],
      tests: ["Floor Flatness (F-number)", "Heavy Load Bearing Tests", "Wind Speed Resistance", "Surface Hardness Test"],
      features: ["Optimized Storage Racking", "Energy Audit Systems", "Scalable Modular Layouts"],
      planningImg: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
    }
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="section-padding bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl text-brand-blue mb-4 font-outfit">What We Offer</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
          <p className="mt-4 text-gray-500 italic uppercase tracking-widest text-sm">Building with Precision & Quality</p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1 w-full relative group overflow-hidden rounded-3xl shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="flex-1 space-y-4">
                <span className="text-brand-gold font-bold text-7xl font-outfit block drop-shadow-lg">0{index + 1}</span>
                <h3 className="text-3xl text-brand-blue font-outfit">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-inter text-justify">
                  {service.description}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setActiveService(service)}
                    className="flex items-center gap-2 font-bold text-brand-blue group hover:text-brand-gold transition-colors font-outfit tracking-wider"
                  >
                    LEARN MORE
                    <div className="w-8 h-[2px] bg-brand-gold transition-all group-hover:w-16" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Half-Screen Side Drawer */}
      <AnimatePresence>
        {activeService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-brand-blue/40 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[101] w-full md:w-1/2 bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                <button
                  onClick={() => setActiveService(null)}
                  className="mb-10 flex items-center gap-2 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <X size={20} />
                  </div>
                  <span className="font-bold text-brand-blue text-sm tracking-widest uppercase">Close Details</span>
                </button>

                <div className="space-y-12">
                  <header>
                    <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-3 block">Construction Excellence</span>
                    <h2 className="text-4xl md:text-5xl font-outfit text-brand-blue mb-6">{activeService.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">{activeService.description}</p>
                  </header>

                  <div className="grid grid-cols-1 gap-12">
                    <section>
                      <h4 className="flex items-center gap-3 text-brand-blue uppercase tracking-widest text-xs font-bold mb-6 border-b border-brand-light pb-4">
                        <ClipboardList size={18} className="text-brand-gold" /> Step-by-Step Methodology
                      </h4>
                      <div className="space-y-4">
                        {activeService.details.process.map((step, i) => (
                          <div key={i} className="flex gap-4 items-start bg-brand-light/50 p-4 rounded-xl border border-transparent hover:border-brand-gold/20 transition-all">
                            <span className="w-6 h-6 rounded-full bg-brand-gold text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                            <p className="text-sm font-medium text-brand-blue leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="flex items-center gap-3 text-brand-blue uppercase tracking-widest text-xs font-bold mb-6 border-b border-brand-light pb-4">
                        <ShieldCheck size={18} className="text-brand-gold" /> Strict Quality Control Tests
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.details.tests.map((test, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                            <CheckCircle size={14} className="text-brand-gold flex-shrink-0" />
                            <span className="text-xs font-semibold text-gray-700">{test}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="flex items-center gap-3 text-brand-blue uppercase tracking-widest text-xs font-bold mb-6 border-b border-brand-light pb-4">
                        <Layers size={18} className="text-brand-gold" /> Planning & Design Preview
                      </h4>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100 group">
                        <img
                          src={activeService.details.planningImg}
                          alt="Planning Preview"
                          className="w-full h-auto max-h-[600px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-brand-blue/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                          <p className="text-white text-[10px] font-bold tracking-widest uppercase">Verified Design Plan</p>
                        </div>
                      </div>
                    </section>

                    <section className="bg-brand-blue p-8 rounded-3xl text-white">
                      <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Key Benefits</h4>
                      <div className="space-y-4">
                        {activeService.details.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                            <p className="text-sm font-medium text-white/90">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={() => setActiveService(null)}
                    className="btn-primary w-full inline-block text-center"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
