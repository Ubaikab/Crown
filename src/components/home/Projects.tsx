
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedText from '../ui/AnimatedText';
import mrNuralam from '@assets/images/projects/Mr-nur-alam-residency.jpg';
import biltonHotel from '@assets/Bilton/construct/1.jpg';
import mrAyub from '@assets/images/projects/Mr-ayub-residency.jpg';
import mrNayaz1 from '@assets/images/projects/Mr-nayaz-1.jpg';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Mr. Nur Alam Residency',
      category: 'residential',
      image: mrNuralam,
      location: 'Electronic City, Banglore',
      delay: 300,
    },
    {
      id: 2,
      title: 'Bilton Premium Hotel',
      category: 'Luxury',
      image: biltonHotel,
      location: 'Wilson Garden, Banglore',
      delay: 500,
    },
    {
      id: 3,
      title: 'Mr. Nayaz [Fanarr Enclave]',
      category: 'residential',
      image: mrNayaz1,
      location: 'Seva Nagar, Banglore',
      delay: 600,
    },
    {
      id: 4,
      title: 'Mr. Ayub Residency',
      category: 'residential',
      image: mrAyub,
      location: 'Bommanhalli, Banglore',
      delay: 400,
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <ScrollReveal>
              <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Our Projects
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <AnimatedText
                text="Featured Construction Projects"
                element="h2"
                className="heading-lg mb-6"
                delay={100}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="subtitle max-w-xl">
                Explore our diverse portfolio of completed projects showcasing our expertise and commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={300}>
            <Link to="/projects" className="btn-primary inline-flex items-center hover:scale-105 transition-transform duration-300">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Filter tabs - enhanced scrolling experience */}
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ScrollReveal key={project.id} delay={project.delay} direction="up">
              <div className="group overflow-hidden rounded-lg shadow-lg relative h-[280px] sm:h-[320px] xl:h-[350px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-construction-blue to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <p className="text-construction-yellow mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.location}</p>
                  <Link to={`/projects/${project.id}`} className="text-white inline-flex items-center hover:text-construction-yellow transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
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

export default Projects;
