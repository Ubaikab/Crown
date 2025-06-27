
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import ConstructionPackages from '../components/home/ConstructionPackages';
import ScrollReveal from '../components/ui/ScrollReveal';
import Testimonials from '../components/home/Testimonials';
import WhatsApp from '@/components/home/WhatsApp';
import CrownInteriors from '@/components/home/CrownInteriors';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Crown Construction - Building Excellence';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <CrownInteriors />
        <About />
        <Services />
        <ConstructionPackages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsApp/>
  
    </div>
  );
};

export default Index;
