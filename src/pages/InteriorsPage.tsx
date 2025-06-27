
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import biltonInt1 from '@assets/Bilton/interior/10.jpg';
import saphire1 from '@assets/Saphire/19.png';
import mrnur1 from '@assets/MrNurAlam/Interior/nur1.jpg';
const InteriorsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Interior Services | Crown Construction';
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Interiors' }
  ];

  const interiors = [
    {
      id: 2,
      title: 'Bilton Premium',
      category: 'Luxury',
      image: biltonInt1,
      location: 'Wilson Garden, Bangalore',
      year: 'Ongoing',
      description: 'Clean lines and open space define this minimalist living room, creating a peaceful atmosphere for relaxation.'
    },
    {
      id: 3,
      title: 'Crown Saphire',
      category: 'Residential',
      image: saphire1,
      location: 'Bomanhalli, Bangalore',
      year: 'Ongoing',
      description: 'Luxurious bedroom with custom furniture and ambient lighting for the perfect balance of comfort and style.'
    },
    {
      id: 1,
      title: 'Mr Nur Alam Residency',
      category: 'Residency',
      image: mrnur1,
      location: 'Electronic City, Bangalore',
      year: 'Ongoing',
      description: 'State-of-the-art kitchen with premium appliances and custom cabinetry designed for both aesthetics and functionality.'
    }
  ];

  const filteredInteriors = activeCategory === 'all' 
    ? interiors 
    : interiors.filter(interior => interior.category === activeCategory);

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
                  Crown Interiors
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  Beautiful <span className="text-gradient">Interior</span> Solutions
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Transforming spaces into beautiful, functional environments that reflect your personal style and enhance your quality of life.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>

        {/* Interiors Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Filter tabs */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full transition-all ${
                      activeCategory === category.id
                        ? 'bg-construction-yellow text-construction-blue font-medium'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Interiors grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInteriors.map((interior, index) => (
                <ScrollReveal key={interior.id} delay={300 + index * 50}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <Link to={`/interiors/${interior.id}`} className="block h-64 overflow-hidden">
                      <img 
                        src={interior.image} 
                        alt={interior.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-construction-yellow bg-opacity-20 text-construction-blue px-3 py-1 rounded-full text-xs font-medium">
                          {interior.category.charAt(0).toUpperCase() + interior.category.slice(1)}
                        </span>
                      </div>
                      <Link to={`/interiors/${interior.id}`}>
                        <h3 className="heading-sm mb-4 hover:text-construction-blue transition-colors">{interior.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-6">{interior.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-construction-yellow" />
                          {interior.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-construction-yellow" />
                          {interior.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredInteriors.length === 0 && (
              <div className="text-center py-16">
                <h3 className="heading-sm mb-4">No interiors found</h3>
                <p className="text-gray-600">
                  No interior projects match your current filter. Please try another category.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Approach Section */}
        <section className="py-16 bg-construction-blue text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 text-white">Our Interior Design Approach</h2>
              <p className="text-gray-100 max-w-3xl mx-auto">
                We follow a comprehensive process to ensure your interior design project exceeds expectations and reflects your unique style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '1', label: 'Consultation & Planning' },
                { number: '2', label: 'Design Development' },
                { number: '3', label: 'Material Selection' },
                { number: '4', label: 'Execution & Installation' }
              ].map((step, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="p-6 border border-white/20 rounded-lg">
                    <div className="w-12 h-12 bg-construction-yellow text-construction-blue rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-construction-yellow">
                      {step.label}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {index === 0 && "We begin by understanding your vision, requirements, and budget to create a tailored approach."}
                      {index === 1 && "Our designers create concept boards and 3D visualizations to bring your interior vision to life."}
                      {index === 2 && "We help you select the perfect materials, furnishings, and finishes that match your style and budget."}
                      {index === 3 && "Our skilled team handles the implementation with precision, ensuring the highest quality standards."}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary flex items-center mx-auto justify-center max-w-xs">
                Get a Free Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InteriorsPage;
