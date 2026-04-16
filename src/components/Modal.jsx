import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    const autoClose = setTimeout(() => {
      setIsOpen(false);
    }, 6000); // 1s delay + 5s display

    return () => {
      clearTimeout(timer);
      clearTimeout(autoClose);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-blue/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl glass-card rounded-3xl p-8 md:p-12 text-center overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold" />
            
            <h2 className="text-3xl md:text-4xl text-brand-blue mb-6">Our Philosophy & Vision</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-inter">
              <p className="font-semibold italic text-brand-blue/80">
                "Go beyond customer satisfaction to achieve customer delight."
              </p>
              <p>
                We are passionate about building quality homes and spaces of lasting value for our esteemed customers.
              </p>
              <p className="text-brand-gold font-bold">
                The best compliment you can give us is to recommend us to others.
              </p>
            </div>

            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            >
              <div className="h-1 bg-brand-gold/30 rounded-full w-full max-w-xs overflow-hidden">
                <motion.div 
                   className="h-full bg-brand-gold"
                   initial={{ x: "-100%" }}
                   animate={{ x: "0%" }}
                   transition={{ duration: 5, ease: "linear" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
