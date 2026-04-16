import React from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Founder from './components/Founder';
import Approvals from './components/Approvals';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <div className="relative min-h-screen">
      <Modal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Founder />
        <Approvals />
        <Contact />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;
