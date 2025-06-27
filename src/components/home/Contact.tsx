
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from '../ui/ScrollReveal';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const subject = encodeURIComponent(`New Inquiry - ${formData.service || 'General'}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Service Needed: ${formData.service}\n\n` +
          `Message:\n${formData.message}`
        );

        const mailtoLink = `mailto:reach2crown@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        toast({
          title: "Email client opened!",
          description: "Your default email app should open with a pre-filled message. If it doesn't, please email us directly at reach2crown@gmail.com",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } catch (error) {
        toast({
          title: "Unable to open email client",
          description: "Please email us directly at reach2crown@gmail.com or call +91 99025 51309",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 300);
  };
  
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Phone Number',
      info: '+91 99025 51309',
      link: 'tel:+91 99025 51309',
      delay: 300
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Address',
      info: 'reach2crown@gmail.com',
      link: 'mailto:reach2crown@gmail.com',
      delay: 400
    },
    {
      icon: <MapPin size={20} />,
      title: 'Office Location',
      info: '#158 ,8th cross ,HSR Layout main road, bommanhalli-560068',
      link: 'https://maps.google.com',
      delay: 500
    }
  ];

  return (
    <section className="section-padding bg-construction-gray relative" id="contact">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              Contact Us
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="heading-lg mb-6">
              Get In <span className="text-gradient">Touch</span> With Us
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="subtitle">
              Have a project in mind or want to learn more about our services? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={index} delay={item.delay}>
                  <a 
                    href={item.link} 
                    className="bg-white p-6 rounded-lg shadow-lg flex items-start hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-construction-yellow bg-opacity-20 rounded-lg flex items-center justify-center text-construction-blue mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={600} className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
                    />
                  </div>
                  
                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="architecture">Architecture & Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-construction-yellow opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-construction-blue opacity-10 rounded-tr-full"></div>
    </section>
  );
};

export default Contact;
