import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Brundavan logo" className="w-12 h-12 rounded-lg object-cover shadow-sm" />
          <span className={`font-outfit font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            BRUNDAVAN <span className="text-brand-gold">CONSTRUCTION</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-brand-gold ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-gold py-2 px-6 text-sm">Get Quote</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-brand-gold text-brand-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-blue font-semibold text-lg border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
