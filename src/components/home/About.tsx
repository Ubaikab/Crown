
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, Award, CheckCircle, Star } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Image with decorative elements */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative z-20">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop"
                  alt="About Crown Construction"
                  className="rounded-xl shadow-2xl w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </ScrollReveal>
            
            {/* Experience badge */}
            <ScrollReveal delay={300}>
              <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-construction-yellow text-construction-blue p-4 md:p-6 rounded-lg shadow-xl z-30 border-4 border-white">
                <p className="text-3xl md:text-5xl font-bold">25+</p>
                <p className="text-sm md:text-base font-medium">Years of Excellence</p>
              </div>
            </ScrollReveal>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-40 md:w-64 h-40 md:h-64 bg-gradient-to-br from-construction-gray/50 to-construction-gray/10 rounded-lg z-10"></div>
            <div className="absolute -top-8 -right-8 w-24 md:w-32 h-24 md:h-32 border-8 border-construction-yellow rounded-lg opacity-30 z-0 animate-pulse-subtle"></div>
          </div>

          {/* Right side - Text content */}
          <div>
            <ScrollReveal>
              <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                About Crown Construction
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h2 className="heading-lg mb-6">
                Building <span className="text-construction-yellow">Excellence</span>, Delivering Exceptional Results
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 1998, Crown Construction has established itself as a leading construction company delivering exceptional quality and innovative solutions across residential and commercial projects throughout the region.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With a team of highly skilled professionals and a commitment to excellence, we have successfully completed over 350 projects, each characterized by superior craftsmanship, attention to detail, and client satisfaction. Our mission is to transform your vision into reality while maintaining the highest standards of quality and safety.
              </p>
            </ScrollReveal>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              {[
                { icon: <Building size={22} />, title: "Expert Engineering", delay: 500 },
                { icon: <Users size={22} />, title: "Dedicated Teams", delay: 600 },
                { icon: <Award size={22} />, title: "Award Winning", delay: 700 },
                { icon: <CheckCircle size={22} />, title: "Quality Guaranteed", delay: 800 }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={item.delay}>
                  <div className="flex items-center p-3 md:p-4 rounded-lg hover:bg-gray-100 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-construction-yellow bg-opacity-20 flex items-center justify-center text-construction-blue mr-3 md:mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Premium service</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link to="/about" className="btn-primary inline-flex items-center group">
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-4">
                  <div className="h-10 w-10 rounded-full border-2 border-construction-yellow flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call us today</p>
                    <p className="font-medium text-sm md:text-base">+91 99025 51309</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Stats section */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
            {[
              { number: "350+", text: "Projects Completed" },
              { number: "120+", text: "Expert Team Members" },
              { number: "25+", text: "Years of Experience" },
              { number: "98%", text: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6 backdrop-blur-sm bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl md:text-4xl font-bold text-construction-yellow mb-1 md:mb-2">{stat.number}</h3>
                <p className="text-sm md:text-base text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
