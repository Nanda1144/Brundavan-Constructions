import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
    caption: "Soil Testing & Ground Work",
    tag: "Phase 1"
  },
  {
    img: "https://images.unsplash.com/photo-1517089150560-da015dcaae50?q=80&w=2070&auto=format&fit=crop",
    caption: "Laying the Concrete Foundation",
    tag: "Foundation"
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    caption: "Structural Beam Framework",
    tag: "RCC Construction"
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592dea58ef0e?q=80&w=2070&auto=format&fit=crop",
    caption: "On-site Blueprint Consultation",
    tag: "Planning"
  },
  {
    img: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2066&auto=format&fit=crop",
    caption: "Reinforcement Steel Inspection",
    tag: "Quality Control"
  },
  {
    img: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop",
    caption: "Brickwork & Masonry Excellence",
    tag: "Walls"
  },
  {
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ead?q=80&w=2070&auto=format&fit=crop",
    caption: "Integrated Electrical Layout",
    tag: "Utilities"
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    caption: "Precision Material Unloading",
    tag: "Logistics"
  },
  {
    img: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=2070&auto=format&fit=crop",
    caption: "Luxury Interior Implementation",
    tag: "Finishing"
  }
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="section-padding bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs block mb-3">Our Work in Action</span>
          <h2 className="text-4xl md:text-5xl text-brand-blue mb-4">Site Gallery</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            A behind-the-scenes look at our construction process — from soil testing and blueprints to the final structure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelected(item)}
              className="relative group h-72 overflow-hidden rounded-2xl cursor-pointer shadow-lg"
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Tag badge */}
              <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                {item.tag}
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-outfit text-xl">{item.caption}</h4>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1">Click to expand</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={selected.img} alt={selected.caption} className="w-full max-h-[80vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-blue/90 backdrop-blur-sm px-8 py-4 flex items-center justify-between">
                <div>
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">{selected.tag}</span>
                  <h3 className="text-white font-outfit text-xl">{selected.caption}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold transition-colors flex items-center justify-center text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
