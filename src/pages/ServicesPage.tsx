import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Building, Hammer, Layers, LayoutGrid, Truck, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | Crown Construction';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Building size={40} />,
      title: 'Residential Construction',
      description: 'Building custom homes and residential complexes with attention to detail and quality craftsmanship. From single-family homes to multi-unit developments.',
      features: [
        'Custom Home Building',
        'Multi-Family Residential',
        'Luxury Homes',
        'Residential Renovations'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
    },
    {
      icon: <Layers size={40} />,
      title: 'Commercial Construction',
      description: 'Developing commercial spaces that combine functionality, aesthetics, and structural integrity. We build offices, retail spaces, and industrial facilities.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Restaurants',
        'Healthcare Facilities'
      ],
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb'
    },
    {
      icon: <Settings size={40} />,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces with modern designs and quality renovations for homes and offices. Breathe new life into your property.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Office Renovations',
        'Historic Restorations'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      icon: <Hammer size={40} />,
      title: 'Architecture & Design',
      description: 'Creating innovative architectural designs that blend form and function for sustainable structures. Our team of architects brings your vision to life.',
      features: [
        'Custom Architectural Plans',
        'Interior Design',
        'Sustainable Design',
        '3D Visualization'
      ],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544'
    },
    {
      icon: <LayoutGrid size={40} />,
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring your construction project is completed on time, within budget, and to specification.',
      features: [
        'Budget Management',
        'Timeline Coordination',
        'Resource Allocation',
        'Quality Control'
      ],
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb'
    },
    {
      icon: <Truck size={40} />,
      title: 'Building Materials Supply',
      description: 'Quality building materials sourcing and supply for all types of construction projects. We ensure you get the best materials at competitive prices.',
      features: [
        'Quality Materials',
        'Competitive Pricing',
        'Timely Delivery',
        'Material Consultation'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      icon: <Settings size={40} />,
      title: 'MEP Services',
      description: 'Mechanical, electrical, and plumbing services for residential and commercial projects. Our team ensures all systems work seamlessly together.',
      features: [
        'HVAC Systems',
        'Electrical Installations',
        'Plumbing Systems',
        'Smart Building Technology'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
    },
    {
      icon: <Users size={40} />,
      title: 'Consultation Services',
      description: 'Expert consultation for all construction-related needs. Our experienced consultants provide valuable insights for your project.',
      features: [
        'Project Feasibility',
        'Cost Estimation',
        'Regulatory Compliance',
        'Construction Methods'
      ],
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-construction-gray relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <span className="bg-construction-yellow bg-opacity-20 text-construction-blue px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Our Services
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  Comprehensive <span className="text-gradient">Construction</span> Solutions
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  From concept to completion, we offer a wide range of construction services designed to meet diverse needs and exceed expectations.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>
        
        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={300 + index * 50} className="h-full">
                  <div className="bg-construction-gray rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-construction-yellow bg-opacity-20 rounded-lg flex items-center justify-center text-construction-blue mr-4">
                          {service.icon}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-construction-yellow rounded-full mr-3"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-construction-blue text-white py-16 md:py-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Construction Project?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <Link to="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
