
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { ArrowLeft, Calendar, MapPin, Play, Tag } from 'lucide-react';

import crownSapphire from '@assets/images/projects/Crown-sapphire.jpg';

import mrAyub from '@assets/images/projects/Mr-ayub-residency.jpg';
import mrAyub1 from '@assets/MrAyub/MrAyub1.jpg';
import mrAyub2 from '@assets/MrAyub/MrAyub2.jpg';

import mrGibis from '@assets/images/projects/Mr-gibis-residency.jpg';

import mrNayaz1 from '@assets/images/projects/Mr-nayaz-1.jpg';
import mrNayaz2 from '@assets/images/projects/Mr-nayaz-2.jpg';
import mrNayaz3 from '@assets/images/projects/Mr-nayaz-3.jpg';
import mrNayaz4 from '@assets/images/projects/Mr-nayaz-4.jpg';

import mrNizamuddin from '@assets/images/projects/Mr-nizamuddin-residency.jpg';

import mrNurAlam from '@assets/images/projects/Mr-nur-alam-residency.jpg';
import mrNurAlam1 from '@assets/images/projects/Mr-nur-alam-residency-1.jpg';
import mrNurAlam2 from '@assets/images/projects/Mr-nur-alam-residency-2.jpg';
import mrNurAlam3 from '@assets/images/projects/Mr-nur-alam-residency-3.jpg';
import mrNurAlam4 from '@assets/images/projects/Mr-nur-alam-residency-4.jpg';
import mrNurAlam5 from '@assets/images/projects/Mr-nur-alam-residency-5.jpg';
import mrNurAlam6 from '@assets/images/projects/Mr-nur-alam-residency-6.jpg';
import mrNurAlam7 from '@assets/images/projects/Mr-nur-alam-residency-7.jpg';

import mrSahaDev from '@assets/images/projects/Mr-Saha-Dev-residency.jpg';

import mrZaib from '@assets/images/projects/Mr-zaib-recidency.jpg';

import mrZaibBro1 from '@assets/images/projects/Mrzaib-brothers-residency-1.jpg';
import mrZaibBro2 from '@assets/images/projects/Mrzaib-brothers-residency-2.jpg';

import mrZabi from '@assets/images/projects/Mr-zabi-residency.jpg';


import bilton from '@assets/Bilton/construct/1.jpg';
import bilton1 from '@assets/Bilton/construct/2.jpg';
import bilton2 from '@assets/Bilton/construct/3.jpg';
import bilton3 from '@assets/Bilton/construct/4.jpg';
import bilton4 from '@assets/Bilton/construct/5.jpg';
import bilton5 from '@assets/Bilton/construct/6.jpg';
import bilton6 from '@assets/Bilton/construct/7.jpg';


import mrNurAlamVideo1 from '@assets/videos/projects/Mr-nur-alam-residency-1.mp4';
import mrNurAlamVideo2 from '@assets/videos/projects/Mr-nur-alam-residency-2.mp4';
import mrNurAlamVideo3 from '@assets/videos/projects/Mr-nur-alam-residency-3.mp4';
import mrNurAlamVideo4 from '@assets/videos/projects/Mr-nur-alam-residency-4.mp4';
import mrNurAlamVideo5 from '@assets/videos/projects/Mr-nur-alam-residency-5.mp4';
import mrNurAlamVideo6 from '@assets/videos/projects/Mr-nur-alam-residency-6.mp4';
import mrNurAlamVideo7 from '@assets/videos/projects/Mr-nur-alam-residency-7.mp4';
import mrNurAlamVideo8 from '@assets/videos/projects/Mr-nur-alam-residency-8.mp4';
import biltonvid from '@assets/Bilton/construct/bilton-vid.mp4';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';


// Define the Project type
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
  longDescription?: string;
  features?: string[];
  gallery?: string[];
  videos?: string[];
}

// Sample projects data - in a real app, this would come from an API or database
const projectsData: Project[] = [
  {
    id: 6,
    title: 'Crown Sapphire Residency',
    category: 'residential',
    image: crownSapphire,
    location: 'Bommanhalli, Banglore',
    year: 'Ongoing',
    description: 'A premium residential project with modern lifestyle amenities.',
    longDescription: 'This residential development is a blend of elegance and functionality, offering luxury apartments with contemporary architecture and community-centric design.',
    features: [
      'Spacious apartments',
      'Modern interiors',
      '24/7 security',
      'Landscaped gardens',
      'Gym and clubhouse',
      'Underground parking'
    ],
    gallery: []
  },
  {
    id: 4, 
    title: 'Mr. Ayub Residency',
    category: 'residential',
    image: mrAyub,
    location: 'Bommanhalli, Banglore',
    year: '2023',
    description: 'A thoughtfully designed residential complex in the heart of the city.',
    longDescription: 'The project combines convenience and comfort, providing premium facilities and excellent connectivity.',
    features: [
      'Close to schools and hospitals',
      'Modern architecture',
      'Energy-efficient lighting',
      'Children’s play area',
      'Community hall',
      'Rainwater harvesting system'
    ],
    gallery: [
      mrAyub,
      mrAyub1,
      mrAyub2
    ]
  },
  {
    id: 11,
    title: 'Mr. Gibis Residency',
    category: 'residential',
    image: mrGibis,
    location: 'PNT Colony, Banglore',
    year: '2016',
    description: 'A serene living space away from city hustle.',
    longDescription: 'Designed for peaceful living, this project includes spacious flats, green surroundings, and modern conveniences.',
    features: [
      'Eco-friendly construction',
      'Spacious balconies',
      'High-speed elevators',
      'Power backup',
      'Secure gated community',
      'Walking track'
    ],
    gallery: []
  },
  {
    id: 3,
    title: 'Mr. Nayaz [Fanarr Enclave]',
    category: 'residential',
    image: mrNayaz1,
    location: 'Seva Nagar, Banglore',
    year: '2014',
    description: 'A modern residential building offering luxurious yet affordable living.',
    longDescription: 'Mr. Zaib Residency is a refined blend of comfort and convenience, designed with families in mind. This structure combines functional aesthetics and thoughtful planning to maximize space and natural light.',
    features: [
      'Spacious 2 & 3 BHK units',
      'Dedicated parking area',
      'Elevator access',
      'Secure gated premises',
      'Rainwater harvesting system',
      'High-quality construction materials'
    ],
    gallery: [
      mrNayaz1,
      mrNayaz2,
      mrNayaz3,
      mrNayaz4
    ]
  },
  {
    id: 5,
    title: 'Mr. Nizamuddin Residency',
    category: 'residential',
    image: mrNizamuddin,
    location: 'Electronic City, Banglore',
    year: '2021',
    description: 'A modern residential complex with comfort and affordability.',
    longDescription: 'This residency brings together quality construction and affordability for modern families.',
    features: [
      'Affordable pricing',
      'Modern floor plans',
      'Maintenance staff',
      'Lift facilities',
      'Open parking',
      '24/7 water supply'
    ],
    gallery: []
  },
  {
    id: 1,
    title: 'Mr. Nur Alam Residency',
    category: 'residential',
    image: mrNurAlam,
    location: 'Electronic City, Banglore',
    year: 'Ongoing',
    description: 'A compact residential tower with premium fittings.',
    longDescription: 'Designed for urban families looking for a secure and comfortable home within the city.',
    features: [
      'Marble flooring',
      'CCTV monitoring',
      'Visitor parking',
      'Backup generator',
      'Modern facade',
      'Yoga and meditation zone'
    ],
    gallery: [
      mrNurAlam,
      mrNurAlam1,
      mrNurAlam2,
      mrNurAlam3,
      mrNurAlam4,
      mrNurAlam5,
      mrNurAlam6,
      mrNurAlam7
    ],
    videos: [
      mrNurAlamVideo1,
      mrNurAlamVideo2,
      mrNurAlamVideo3,
      mrNurAlamVideo4,
      mrNurAlamVideo5,
      mrNurAlamVideo6,
      mrNurAlamVideo7,
      mrNurAlamVideo8
    ]
  },
  {
    id: 7,
    title: 'Mr. Saha Dev Residency',
    category: 'residential',
    image: mrSahaDev,
    location: 'Kengeri, Banglore',
    year: '2017',
    description: 'A calm and peaceful residential development.',
    longDescription: 'Focuses on mental wellness with tranquil surroundings and stress-free living spaces.',
    features: [
      'Peaceful locality',
      'Ample natural light',
      'Pet-friendly layout',
      'Solar-powered common areas',
      'Waste segregation',
      'Green rooftop'
    ],
    gallery: []
  },
  {
    id: 8,
    title: 'Mr. Zabi Residency',
    category: 'residential',
    image: mrZaib,
    location: 'HSR Layout, Banglore',
    year: '2020',
    description: 'Modern apartments built with quality craftsmanship.',
    longDescription: 'Offers spacious layouts, contemporary designs, and all the essentials for a modern lifestyle.',
    features: [
      'Smart lighting solutions',
      'Acoustic windows',
      'Fitness studio',
      'Bike racks',
      'Video intercoms',
      'Water recycling system'
    ],
    gallery: []
  },
  {
    id: 9,
    title: 'Mr. Zabi Brothers Residency',
    category: 'residential',
    image: mrZaibBro1,
    location: 'Rammurthy Nagar, Banglore',
    year: '2023',
    description: 'First phase of an elegant group housing project.',
    longDescription: 'Focuses on providing families with beautiful living spaces within a vibrant community.',
    features: [
      'Multi-story towers',
      'Intercom facility',
      'LED lighting',
      'Multipurpose hall',
      'Borewell and municipal water',
      'Security cabins'
    ],
    gallery: [
      mrZaibBro1,
      mrZaibBro2
    ]
  },
  {
    id: 10,
    title: 'Mr Zabi Residency',
    category: 'residential',
    image: mrSahaDev,
    location: 'HSR Layout, Banglore',
    year: '2019',
    description: 'A calm and peaceful residential development.',
    longDescription: 'Focuses on mental wellness with tranquil surroundings and stress-free living spaces.',
    features: [
      'Peaceful locality',
      'Ample natural light',
      'Pet-friendly layout',
      'Solar-powered common areas',
      'Waste segregation',
      'Green rooftop'
    ],
    gallery: []
  },
  {
    id: 2,
    title: 'Bilton Premium Hotel',
    category: 'Luxury',
    image: bilton,
    location: 'Wilson Garden, Banglore',
    year: 'Ongoing',
    description: 'An exquisite retreat offering luxury and comfort in every detail.',
    longDescription: 'Crafted for discerning travelers, this premium hotel features elegantly appointed rooms, lush surroundings, and world-class amenities for an unforgettable stay.',
    features: [
      'Eco-friendly construction',
      'Spacious balconies',
      'High-speed elevators',
      'Power backup',
      'Secure gated community',
      'Walking track'
    ],
    gallery: [
      bilton,
      bilton1,
      bilton2,
      bilton3,
      bilton4,
      bilton5,
      bilton6
    ],
    videos: [
      biltonvid
    ]
  }
];

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projectsData.find(p => p.id === Number(id));
    
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Crown Construction`;
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!project) {
    // ... keep existing code (not found state)
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-lg">Project Not Found</h1>
            <p className="subtitle mb-8">The project you are looking for doesn't exist or has been removed.</p>
            <Link to="/projects" className="btn-primary">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

 return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-construction-gray relative overflow-hidden">
          {/* ... keep existing code (Hero Section content) */}
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-construction-blue mb-6">
                  <ArrowLeft size={18} className="mr-2" /> Back to Projects
                </Link>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <span className={`bg-construction-yellow bg-opacity-20 text-construction-blue px-4 py-1 rounded-full text-sm font-medium inline-block mb-4`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  {project.title}
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-construction-yellow" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-construction-yellow" />
                    {project.year}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>

        {/* Main Image Section */}
        <section className="bg-white py-12">
          {/* ... keep existing code (Main Image Section content) */}
          <div className="container-custom">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="heading-md mb-6">Project Overview</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-6">{project.longDescription}</p>
                  </div>
                </ScrollReveal>
                
                {/* Features */}
                {project.features && (
                  <ScrollReveal delay={200}>
                    <div className="mt-10">
                      <h3 className="heading-sm mb-6">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-construction-yellow bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-blue" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                )}
                
                {/* Image Gallery */}
                {project.gallery && project.gallery.length > 1 && (
                  <ScrollReveal delay={300}>
                    <div className="mt-12">
                      <h3 className="heading-sm mb-6">Project Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.slice(1).map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <AspectRatio ratio={16/9}>
                              <img 
                                src={image} 
                                alt={`${project.title} - Gallery ${index + 1}`} 
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
                
                {/* Video Gallery - New Section */}
                {project.videos && project.videos.length > 0 && (
                  <ScrollReveal delay={400}>
                    <div className="mt-16">
                      <h3 className="heading-sm mb-6">Project Videos</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.videos.map((video, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <AspectRatio ratio={16/9}>
                              <video 
                                src={video} 
                                controls
                                className="w-full h-full object-cover"
                                poster={project.gallery && project.gallery[0]}
                              >
                                Your browser does not support the video tag.
                              </video>
                            </AspectRatio>
                            <div className="p-3 bg-construction-gray bg-opacity-50">
                              <p className="text-sm font-medium flex items-center">
                                <Play size={16} className="mr-2 text-construction-yellow" />
                                {project.title} - Video {index + 1}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>
              
              {/* Sidebar */}
              <div>
                {/* ... keep existing code (Sidebar content) */}
                <ScrollReveal direction="right">
                  <div className="bg-construction-gray p-8 rounded-lg">
                    <h3 className="heading-sm mb-6">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 mb-1">Category</p>
                        <div className="flex items-center">
                          <Tag size={16} className="mr-2 text-construction-yellow" />
                          <strong>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</strong>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Location</p>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-construction-yellow" />
                          <strong>{project.location}</strong>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Completion Year</p>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-construction-yellow" />
                          <strong>{project.year}</strong>
                        </div>
                      </div>
                    </div>
                    
                    <hr className="my-6 border-gray-300" />
                    
                    <h4 className="font-semibold mb-4">Need a similar project?</h4>
                    <p className="text-gray-600 mb-6">Contact us to discuss your project needs and requirements.</p>
                    
                    <Link to="/contact" className="btn-primary w-full justify-center">
                      Contact Us
                    </Link>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="right" delay={200}>
                  <div className="mt-8 bg-construction-yellow bg-opacity-10 p-8 rounded-lg">
                    <h3 className="heading-sm mb-4 text-construction-blue">Related Projects</h3>
                    
                    <div className="space-y-4">
                      {projectsData
                        .filter(p => p.category === project.category && p.id !== project.id)
                        .slice(0, 3)
                        .map((relatedProject) => (
                          <Link 
                            key={relatedProject.id} 
                            to={`/projects/${relatedProject.id}`}
                            className="flex items-center bg-white p-3 rounded hover:shadow-md transition-shadow"
                          >
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title} 
                              className="w-16 h-16 object-cover rounded mr-4"
                            />
                            <div>
                              <h4 className="font-medium">{relatedProject.title}</h4>
                              <p className="text-sm text-gray-600">{relatedProject.location}</p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
