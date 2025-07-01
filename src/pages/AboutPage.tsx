
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Users, Award, CheckCircle, Clock, Briefcase, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Crown Construction';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Users size={32} />,
      title: 'Client Focus',
      description: "We prioritize our clients' needs and satisfaction in every project we undertake.",
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from planning to execution.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality',
      description: 'We never compromise on the quality of materials and workmanship.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timeliness',
      description: 'We respect deadlines and strive to complete projects on or ahead of schedule.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Professionalism',
      description: 'Our team maintains the highest standards of professionalism and integrity.',
    },
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We embrace innovative technologies and methods for better construction solutions.',
    },
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
                  About Us
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  Our <span className="text-gradient">Story</span> & Mission
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Learn more about Crown Construction's journey, our team, and what makes us a leading name in the construction industry.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>
        
        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Our Story
                  </span>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <h2 className="heading-lg mb-6">
                    Building a Legacy of <span className="text-gradient">Excellence</span>
                  </h2>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Founded in 1998, Crown Construction began as a small family business with a big vision. Our founder, Shabaz Syed, started the company with just three employees and a commitment to quality craftsmanship.
                    </p>
                    <p>
                      Over the past 25 years, we've grown into a full-service construction company with over 150 employees, completing projects ranging from custom homes to large commercial developments.
                    </p>
                    <p>
                      Throughout our journey, we've maintained our core values of integrity, quality, and customer satisfaction, earning a reputation as one of the most trusted names in construction.
                    </p>
                    <p>
                      Today, we're proud to be a leader in innovative construction solutions, combining traditional craftsmanship with cutting-edge technology to deliver exceptional results for our clients.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal direction="right">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                    alt="Our Story" 
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-construction-yellow opacity-20 rounded-full"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="section-padding bg-construction-gray">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  Our Values
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="heading-lg mb-6">
                  Principles That <span className="text-gradient">Guide</span> Our Work
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Our core values shape every decision we make and every project we undertake, ensuring consistent quality and client satisfaction.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                    <div className="w-16 h-16 bg-construction-yellow bg-opacity-20 rounded-lg flex items-center justify-center text-construction-blue mb-6">
                      {value.icon}
                    </div>
                    <h3 className="heading-sm mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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

export default AboutPage;
