
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Home } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedText from '../ui/AnimatedText';
import { AspectRatio } from '../ui/aspect-ratio';
import biltonInt1 from '@assets/Bilton/interior/10.jpg';
import saphire1 from '@assets/Saphire/19.png';
import mrnur1 from '@assets/MrNurAlam/Interior/nur1.jpg';

const CrownInteriors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Interiors' }
  ];

  const interiors = [
    {
      id: 1,
      title: 'Mr Nur Alam Residency',
      category: 'Resdential',
      image: mrnur1,
      location: 'Electronic City, Bangalore',
      delay: 500,
    },
    {
      id: 2,
      title: 'Bilton Premium',
      category: 'Luxury',
      image: biltonInt1,
      location: 'Wilson Garden, Bangalore',
      delay: 300,
    },
    {
      id: 3,
      title: 'Crown Saphire',
      category: 'Residential',
      image: saphire1,
      location: 'Bomanhalli, Bangalore',
      delay: 400,
    }
  ];

  const filteredInteriors = activeCategory === 'all' 
    ? interiors 
    : interiors.filter(interior => interior.category === activeCategory);

  return (
    <section className="section-padding bg-white" id="interiors">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <ScrollReveal>
              <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Crown Interiors
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <AnimatedText
                text="Transform Your Living Spaces"
                element="h2"
                className="heading-lg mb-6"
                delay={100}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="subtitle max-w-xl">
                Crafting elegant and functional interior designs that reflect your personality and enhance your lifestyle.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={300}>
            <Link to="/interiors" className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300">
              View All Interiors <ArrowRight size={18} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Filter tabs */}
        <ScrollReveal delay={400}>
          <div className="flex overflow-x-auto hide-scrollbar pb-2 -mx-2 px-2 mb-8 md:mb-12 md:flex-wrap md:gap-4 snap-x">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap mr-2 md:mr-0 snap-start transform hover:scale-105 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredInteriors.map((interior) => (
            <ScrollReveal key={interior.id} delay={interior.delay} direction="up">
              <div className="group overflow-hidden rounded-lg shadow-lg relative h-[300px]">
                <AspectRatio ratio={4/5}>
                  <img 
                    src={interior.image} 
                    alt={interior.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-construction-blue to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{interior.title}</h3>
                  <p className="text-construction-yellow mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{interior.location}</p>
                  <Link to={`/interiors/${interior.id}`} className="text-white inline-flex items-center hover:text-construction-yellow transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrownInteriors;
