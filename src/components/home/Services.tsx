
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Hammer, Layers, ArrowRight, Settings } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building />,
      title: 'Residential Construction',
      description: 'Building custom homes and residential complexes with attention to detail and quality craftsmanship.',
      link: '/services',
      delay: 300
    },
    {
      icon: <Layers />,
      title: 'Commercial Construction',
      description: 'Developing commercial spaces that combine functionality, aesthetics, and structural integrity.',
      link: '/services',
      delay: 400
    },
    {
      icon: <Settings />,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces with modern designs and quality renovations for homes and offices.',
      link: '/services',
      delay: 500
    },
    {
      icon: <Hammer />,
      title: 'Architecture & Design',
      description: 'Creating innovative architectural designs that blend form and function for sustainable structures.',
      link: '/services',
      delay: 600
    },
  ];

  return (
    <section className="section-padding bg-construction-gray relative" id="services">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="heading-lg mb-6">
              Comprehensive <span className="text-gradient">Construction</span> Solutions
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="subtitle">
              From concept to completion, we offer a wide range of construction services designed to meet diverse needs and exceed expectations.
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={service.delay}>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col transition-transform hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-construction-yellow bg-opacity-20 rounded-lg flex items-center justify-center text-construction-blue mb-6">
                  {service.icon}
                </div>
                <h3 className="heading-sm mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link to={service.link} className="text-construction-blue font-semibold inline-flex items-center hover:text-construction-yellow transition-colors">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View all services button */}
        <ScrollReveal delay={700}>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-construction-yellow opacity-10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-construction-blue opacity-10 rounded-tl-full"></div>
    </section>
  );
};

export default Services;
