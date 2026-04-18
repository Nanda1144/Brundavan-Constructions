import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    title: "Official Approval Certificate",
    authority: "Government of Andhra Pradesh",
    number: "AP/CONST/APPR/2021/00892",
    issued: "2024",
    valid: "Ongoing",
    description: "This official approval certificate issued by the Government of Andhra Pradesh confirms that Brundavan Construction meets all regulatory, structural, and environmental standards required for residential and commercial construction.",
    highlights: ["Government Certified", "Legal Compliance Verified", "Environmental Standards Met", "Full Project Authorization"],
    image: "/images/approvals.jpg",
    badge: <ShieldCheck size={28} className="text-brand-gold" />,
    isReal: true,
  },
];

const Approvals = () => {
  return (
    <section id="approvals" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs block mb-3">Verified & Trusted</span>
          <h2 className="text-4xl md:text-5xl text-brand-blue mb-4">Approvals & Certifications</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Every project we undertake is backed by industry-recognized certifications and government approvals — 
            giving you complete confidence in your investment.
          </p>
        </div>

        <div className="space-y-32">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-16 items-center"
            >
              {/* Left 60% — Content */}
              <div className="w-full lg:w-[60%] space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-brand-gold" />
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">{cert.authority}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl text-brand-blue font-outfit leading-tight">{cert.title}</h3>
                  <p className="text-gray-600 text-xl leading-relaxed font-inter">
                    {cert.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-brand-gold shadow-sm group hover:bg-white transition-colors">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Issue Date</p>
                    <p className="text-brand-blue text-2xl font-bold font-outfit">{cert.issued}</p>
                  </div>
                  <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-green-500 shadow-sm group hover:bg-white transition-colors">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Validity Status</p>
                    <p className="text-green-700 text-2xl font-bold font-outfit">{cert.valid}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-brand-blue font-bold text-xs uppercase tracking-[0.3em] pb-4 border-b border-gray-100">Project Compliance Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cert.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={14} className="text-brand-gold" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 40% — Certificate Display */}
              <div className="w-full lg:w-[40%]">
                <div className="relative group">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 bg-brand-gold/5 rounded-[40px] blur-2xl group-hover:bg-brand-gold/10 transition-colors" />
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border border-gray-100">
                    {/* Certificate Top Bar */}
                    <div className="absolute top-0 left-0 right-0 bg-brand-blue/90 backdrop-blur-md z-10 py-4 px-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {cert.badge}
                        <div className="hidden sm:block">
                          <p className="text-brand-gold text-[8px] font-bold uppercase tracking-widest">Official Document</p>
                          <p className="text-white text-[10px] font-semibold truncate max-w-[120px]">{cert.authority}</p>
                        </div>
                      </div>
                      <div className="bg-brand-gold text-brand-blue text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                        ✓ Verified
                      </div>
                    </div>

                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-blue/90 backdrop-blur-sm py-4 px-6 flex items-center justify-between">
                      <div>
                        <p className="text-brand-gold text-[8px] font-bold uppercase tracking-widest">Reg No.</p>
                        <p className="text-white text-xs font-mono">{cert.number}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-400 font-bold">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        ACTIVE
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating verification badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                     <div className="flex items-center gap-3 text-brand-blue font-bold text-xs uppercase tracking-widest">
                        <ShieldCheck size={20} className="text-brand-gold" />
                        Govt. Approved
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-brand-blue rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl text-white font-outfit mb-2">Building with Trust & Transparency</h3>
            <p className="text-white/60 max-w-lg">All our certifications are verified, up-to-date, and available for review upon request during any project consultation.</p>
          </div>
          <a href="#contact" className="btn-gold flex-shrink-0 whitespace-nowrap">
            Verify & Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Approvals;
