
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Calendar, MapPin } from 'lucide-react';
import crownSapphire from '@assets/images/projects/Crown-sapphire.jpg';
import mrAyub from '@assets/images/projects/Mr-ayub-residency.jpg';
import mrGibis from '@assets/images/projects/Mr-gibis-residency.jpg';
import mrNayaz1 from '@assets/images/projects/Mr-nayaz-1.jpg';
import mrNizamuddin from '@assets/images/projects/Mr-nizamuddin-residency.jpg';
import mrNurAlam from '@assets/images/projects/Mr-nur-alam-residency.jpg';
import mrSahaDev from '@assets/images/projects/Mr-Saha-Dev-residency.jpg';
import mrZaib from '@assets/images/projects/Mr-zaib-recidency.jpg';
import mrZaibBro1 from '@assets/images/projects/Mrzaib-brothers-residency-1.jpg';
import mrzabi from '@assets/images/projects/Mr-zabi-residency.jpg';
import bilton from '@assets/Bilton/construct/1.jpg';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Crown Construction';
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' }
  ];

  const projects = [
    {
      id: 6,
      title: 'Crown Sapphire',
      category: 'residential',
      image: crownSapphire,
      location: 'Bommanhalli, Banglore',
      year: 'Ongoing',
      description: 'Luxury residential tower with modern amenities and high-end design.'
    },
    {
      id: 4,
      title: 'Mr. Ayub Residency', 
      category: 'residential',
      image: mrAyub,
      location: 'Bommanhalli, Banglore',
      year: '2023',
      description: 'Elegant apartment building designed with functionality and style.'
    },
    {
      id: 11,
      title: 'Mr. Gibis Residency',
      category: 'residential',
      image: mrGibis,
      location: 'PNT Colony, Banglore',
      year: '2016',
      description: 'Contemporary home built with a focus on natural lighting and ventilation.'
    },
    {
      id: 3,
      title: 'Mr. Nayaz [Fanarr Enclave]',
      category: 'residential',
      image: mrNayaz1,
      location: 'Seva Nagar, Banglore',
      year: '2014',
      description: 'Personal residence combining traditional elements with modern design.'
    },
    {
      id: 5,
      title: 'Mr. Nizamuddin Residency',
      category: 'residential',
      image: mrNizamuddin,
      location: 'Electronic City, Banglore',
      year: '2021',
      description: 'Spacious multistorey home built for family comfort and aesthetics.'
    },
    {
      id: 1,
      title: 'Mr. Nur Alam Residency',
      category: 'residential',
      image: mrNurAlam,
      location: 'Electronic City, Banglore',
      year: 'Ongoing',
      description: 'Compact and modern living space with energy-efficient design.'
    },
    {
      id: 7,
      title: 'Mr. Saha Dev Residency',
      category: 'residential',
      image: mrSahaDev,
      location: 'Kengeri, Banglore',
      year: '2017',
      description: 'Charming bungalow offering comfort and style for small families.'
    },
    {
      id: 8,
      title: 'Mr. Zabi Residency',
      category: 'residential',
      image: mrZaib,
      location: 'HSR Layout, Banglore',
      year: '2020',
      description: 'Stylish and functional duplex crafted with precision and care.'
    },
    {
      id: 9,
      title: 'Mr. Zabi Brothers Residency',
      category: 'residential',
      image: mrZaibBro1,
      location: 'Rammurthy Nagar, Banglore',
      year: '2023',
      description: 'Joint residential project with distinct architecture and community vision.'
    },
    {
      id: 10,
      title: 'Mr Zabi Residency',
      category: 'residential',
      image: mrzabi,
      location: 'HSR Layout, Banglore',
      year: '2019',
      description: 'Compact and modern living space with energy-efficient design.'
    },
    {
      id: 2,
      title: 'Bilton Premium Hotel',
      category: 'Luxury',
      image: bilton,
      location: 'Wilson Garden, Banglore',
      year: 'Ongoing',
      description: 'An exquisite retreat offering luxury and comfort in every detail.'
    }
  ];  

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                  Our Projects
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  Showcasing Our <span className="text-gradient">Best Work</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Explore our diverse portfolio of completed projects that demonstrate our expertise and commitment to excellence.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>

        {/* Projects Section */}
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

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={300 + index * 50}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <Link to={`/projects/${project.id}`} className="block h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-construction-yellow bg-opacity-20 text-construction-blue px-3 py-1 rounded-full text-xs font-medium">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                      <Link to={`/projects/${project.id}`}>
                        <h3 className="heading-sm mb-4 hover:text-construction-blue transition-colors">{project.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-construction-yellow" />
                          {project.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-construction-yellow" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <h3 className="heading-sm mb-4">No projects found</h3>
                <p className="text-gray-600">
                  No projects match your current filter. Please try another category.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-construction-blue text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '350+', label: 'Projects Completed' },
                { number: '25+', label: 'Years of Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '150+', label: 'Team Members' }
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="p-6">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 text-construction-yellow">
                      {stat.number}
                    </h3>
                    <p className="text-lg">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
