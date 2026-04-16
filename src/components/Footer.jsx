import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Brundavan logo" className="w-12 h-12 rounded-lg object-cover shadow-sm" />
              <span className="font-outfit font-bold text-xl tracking-tight text-white">
                BRUNDAVAN <span className="text-brand-gold">CONSTRUCTION</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Excellence in construction and infrastructure development. 
              We build with passion, precision, and a commitment to delivering joy to our clients.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#founder" className="hover:text-brand-gold transition-colors">About Founder</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Our Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-white/60">
              <li>Hospitals & Clinics</li>
              <li>Residential Bunglows</li>
              <li>Commercial Complexes</li>
              <li>Industrial Structures</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2024 Brundavan Construction. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm italic">
            <span>Designed with Excellence</span>
            <span>Built with Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
