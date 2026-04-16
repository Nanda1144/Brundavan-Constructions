import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // DEBUG: This will show what is being sent in your browser console (F12)
    console.log("Sending form with Service ID: service_r9t9avb");

    emailjs.sendForm(
      'service_r9t9avb',   // Service ID
      'template_m94tf63',  // Template ID
      form.current,
      'eKUDBkm6jRbtS_ibh'  // Public Key
    )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setStatus('success');
        setLoading(false);
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        // Detailed error for the console to help you fix the IDs
        console.error("EmailJS Error details:", error);
        setStatus('error');
        setLoading(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding bg-brand-light relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side Info */}
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl text-brand-blue mb-6">Let's Build Your <br /><span className="text-brand-gold">Vision Together</span></h2>
              <p className="text-gray-600 text-lg max-w-md">
                Ready to start your next project? Get in touch with us for a detailed consultation and quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold text-brand-blue">+91 94418 89313</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-bold text-brand-blue">brundavanconstructions@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Visit Us</p>
                  <p className="text-xl font-bold text-brand-blue">11-214-1, Gollapalli Main Road,<br></br> Beside Sankaramma, Madanapalle,<br></br>Annammayya Dist, Andhra Pradesh- 517325</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-brand-blue focus:border-brand-gold outline-none transition-colors"
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-brand-blue focus:border-brand-gold outline-none transition-colors"
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-brand-blue focus:border-brand-gold outline-none transition-colors"
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-brand-blue focus:border-brand-gold outline-none transition-colors resize-none"
                  ></textarea>
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
                  >
                    <CheckCircle2 size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
