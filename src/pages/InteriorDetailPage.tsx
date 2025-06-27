
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, ArrowRight, Home, Layers, Check, Play } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import biltonInt1 from '@assets/Bilton/interior/10.jpg';
import biltonInt2 from '@assets/Bilton/interior/12.jpg';
import biltonInt3 from '@assets/Bilton/interior/14.jpg';
import biltonInt4 from '@assets/Bilton/interior/16.jpg';
import biltonInt5 from '@assets/Bilton/interior/18.jpg';
import biltonInt6 from '@assets/Bilton/interior/20.jpg';
import biltonInt7 from '@assets/Bilton/interior/22.jpg';
import biltonInt8 from '@assets/Bilton/interior/24.jpg';
import biltonInt9 from '@assets/Bilton/interior/25.jpg';
import biltonInt10 from '@assets/Bilton/interior/27.jpg';
import biltonInt11 from '@assets/Bilton/interior/29.jpg';
import saphire1 from '@assets/Saphire/19.png';
import saphire2 from '@assets/Saphire/21.png';
import saphire3 from '@assets/Saphire/23.png';
import saphire5 from '@assets/Saphire/26.png';
import saphire6 from '@assets/Saphire/28.png';
import saphire7 from '@assets/Saphire/30.png';
import saphire8 from '@assets/Saphire/32.png';
import saphire9 from '@assets/Saphire/34.png';
import saphire10 from '@assets/Saphire/35.png';
import saphire11 from '@assets/Saphire/37.png';
import saphire12 from '@assets/Saphire/39.png';
import mrnur1 from '@assets/MrNurAlam/Interior/nur1.jpg';
import mrnur2 from '@assets/MrNurAlam/Interior/nur2.jpg';
import mrnur3 from '@assets/MrNurAlam/Interior/nur3.jpg';
import mrnur4 from '@assets/MrNurAlam/Interior/nur4.jpg';
import mrnur5 from '@assets/MrNurAlam/Interior/nur5.jpg';
import mrnur6 from '@assets/MrNurAlam/Interior/nur6.jpg';
import mrnur7 from '@assets/MrNurAlam/Interior/nur7.jpg';
import mrnur8 from '@assets/MrNurAlam/Interior/nur8.jpg';
import mrnur9 from '@assets/MrNurAlam/Interior/nur9.jpg';
import mrnur10 from '@assets/MrNurAlam/Interior/nur10.jpg';

import biltonvid1 from '@assets/Bilton/interior/biltoninterior1.mp4';
import saphirevid from '@assets/Saphire/saphirevid.mp4';




interface InteriorDetail {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  client: string;
  scope: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  videos: string[];
}

const InteriorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [interior, setInterior] = useState<InteriorDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedInteriors, setRelatedInteriors] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulating data fetch
    setTimeout(() => {
      const interiorData = getInteriorById(Number(id));
      setInterior(interiorData);
      
      if (interiorData) {
        document.title = `${interiorData.title} | Crown Interiors`;
        // Get related interiors from the same category
      }
      
      setLoading(false);
    }, 300);
  }, [id]);

  // Mock data functions
  const getInteriorById = (id: number): InteriorDetail | null => {
    const interiors = [
      {
        id: 2,
        title: 'Bilton Premium',
        category: 'Luxury',
        location: 'Wilson Garden, Bangalore',
        year: 'Ongoing',
        description: 'Clean lines and open space define this minimalist living room, creating a peaceful atmosphere for relaxation.',
        fullDescription: 'This modern minimalist living room was designed to create a serene environment that promotes relaxation while maintaining functionality. The neutral color palette is accented with subtle textures and carefully selected furniture pieces that combine comfort and style. Natural light floods the space through large windows, highlighting the clean lines and thoughtful details throughout the design.',
        client: 'Private Residence',
        scope: 'Complete Interior Design and Furnishing',
        mainImage: biltonInt1,
        gallery: [
         biltonInt1,
         biltonInt2,
         biltonInt3,
         biltonInt4,
         biltonInt5,
         biltonInt6,
         biltonInt7,
         biltonInt8,
         biltonInt9,
         biltonInt10,
         biltonInt11
        ],
        features: [
          'Custom built-in storage solutions',
          'Energy-efficient LED lighting system',
          'Acoustically treated walls for sound optimization',
          'Smart home integration for climate and lighting control',
          'Sustainably sourced materials and furniture'
        ],
        videos: [
          biltonvid1
        ]
      },
      {
        id: 3,
        title: 'Crown Saphire',
        category: 'Residential',
        location: 'Bomanhalli, Bangalore',
        year: 'Ongoing',
        description: 'Luxurious bedroom with custom furniture and ambient lighting for the perfect balance of comfort and style.',
        fullDescription: 'This contemporary bedroom suite was designed as a personal sanctuary that balances luxury with comfort. The design features a custom-built headboard, integrated ambient lighting, and a thoughtfully curated color palette that promotes restfulness. The suite includes a walk-in closet and an attached seating area, creating a comprehensive private retreat within the home.',
        client: 'Private Residence',
        scope: 'Bedroom Design and Custom Furniture',
        mainImage: saphire1,
        gallery: [
          saphire1,
          saphire2,
          saphire3,
          saphire5,
          saphire6,
          saphire7,
          saphire8,
          saphire9,
          saphire10,
          saphire11,
          saphire12
        ],
        features: [
          'Custom built-in wardrobe with specialized storage',
          'Premium quality mattress and bedding',
          'Blackout window treatments for optimal sleep',
          'Integrated charging stations and tech solutions',
          'Hypoallergenic materials for improved air quality'
        ],
        videos:[
          saphirevid
        ]

      },
      {
        id: 1,
        title: 'Mr Nur Alam Residency',
        category: 'Residential',
        location: 'Electronic City, Bangalore',
        year: 'Ongoing',
        description: 'Luxurious bedroom with custom furniture and ambient lighting for the perfect balance of comfort and style.',
        fullDescription: 'This contemporary bedroom suite was designed as a personal sanctuary that balances luxury with comfort. The design features a custom-built headboard, integrated ambient lighting, and a thoughtfully curated color palette that promotes restfulness. The suite includes a walk-in closet and an attached seating area, creating a comprehensive private retreat within the home.',
        client: 'Private Residence',
        scope: 'Bedroom Design and Custom Furniture',
        mainImage: mrnur1,
        gallery: [
          mrnur2,
          mrnur3,
          mrnur4,
          mrnur5,
          mrnur6,
          mrnur7,
          mrnur8,
          mrnur9,
          mrnur10
        ],
        features: [
          'Custom built-in wardrobe with specialized storage',
          'Premium quality mattress and bedding',
          'Blackout window treatments for optimal sleep',
          'Integrated charging stations and tech solutions',
          'Hypoallergenic materials for improved air quality'
        ],

      },
      
    ];
    
    return interiors.find(item => item.id === id) || null;
  };
    

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-xl text-construction-blue">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!interior) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="heading-lg mb-4">Interior Not Found</h2>
            <p className="subtitle mb-8">The interior project you're looking for doesn't exist or has been removed.</p>
            <Link to="/interiors" className="btn-primary">
              View All Interiors
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-construction-gray relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-4">
                    <Link to="/interiors" className="text-sm text-gray-500 hover:text-construction-blue">
                      Interiors
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-sm text-construction-blue">{interior?.title}</span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                  <h1 className="heading-lg mb-4">{interior?.title}</h1>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Home size={16} className="mr-2 text-construction-yellow" />
                      {interior?.category.charAt(0).toUpperCase() + interior?.category.slice(1)}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-construction-yellow" />
                      {interior?.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-construction-yellow" />
                      {interior?.year}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal direction="right">
                <div className="mt-6 md:mt-0">
                  <Link to="/contact" className="btn-primary">
                    Request a Quote
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>

        {/* Main Image */}
        <section className="pb-16 -mt-6">
          <div className="container-custom">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={interior?.mainImage} 
                  alt={interior?.title} 
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="mb-10">
                    <h2 className="heading-md mb-6">Project Overview</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {interior?.fullDescription}
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                  <div className="mb-10">
                    <h2 className="heading-md mb-6">Features & Highlights</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {interior?.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-construction-yellow bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Image Gallery */}
                <ScrollReveal delay={200}>
                  <div className="mb-12">
                    <h2 className="heading-md mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {interior?.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <AspectRatio ratio={4/3}>
                            <img 
                              src={image} 
                              alt={`${interior?.title} - Image ${index + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </AspectRatio>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                
                {/* Video Gallery - New Section */}
                {interior?.videos && interior.videos.length > 0 && (
                  <ScrollReveal delay={300}>
                    <div className="mb-12">
                      <h2 className="heading-md mb-6">Video Tour</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {interior.videos.map((video, index) => (
                          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <AspectRatio ratio={16/9}>
                              <video 
                                src={video} 
                                controls
                                className="w-full h-full object-cover"
                                poster={interior.mainImage}
                              >
                                Your browser does not support the video tag.
                              </video>
                            </AspectRatio>
                            <div className="p-3 bg-construction-gray bg-opacity-50">
                              <p className="text-sm font-medium flex items-center">
                                <Play size={16} className="mr-2 text-construction-yellow" />
                                {interior.title} - Video Tour {index + 1}
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
                <ScrollReveal direction="right">
                  <div className="bg-construction-gray p-8 rounded-lg sticky top-24 mb-8">
                    <h3 className="heading-sm mb-6">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 mb-1">Client</p>
                        <strong>{interior?.client}</strong>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Location</p>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-construction-yellow" />
                          <strong>{interior?.location}</strong>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Completion Year</p>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-construction-yellow" />
                          <strong>{interior?.year}</strong>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Category</p>
                        <div className="flex items-center">
                          <Home size={16} className="mr-2 text-construction-yellow" />
                          <strong>{interior?.category.charAt(0).toUpperCase() + interior?.category.slice(1)}</strong>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Project Scope</p>
                        <div className="flex items-center">
                          <Layers size={16} className="mr-2 text-construction-yellow" />
                          <strong>{interior?.scope}</strong>
                        </div>
                      </div>
                    </div>
                    
                    <hr className="my-6 border-gray-300" />
                    
                    <h4 className="font-semibold mb-4">Need a similar design?</h4>
                    <p className="text-gray-600 mb-6">Contact us to discuss your interior design needs and requirements.</p>
                    
                    <Link to="/contact" className="btn-primary w-full justify-center">
                      Contact Us
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-construction-blue">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="heading-lg text-white mb-6">Transform Your Space with Crown Interiors</h2>
                <p className="text-gray-300 mb-8">
                  Let our expert designers help you create the perfect interior that reflects your style and meets your needs.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get a Free Consultation <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InteriorDetailPage;