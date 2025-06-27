import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Inquiry - ${formData.service || 'General'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service Needed: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:reach2crown@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email application should open with the pre-filled message. If it doesn't open automatically, please email us directly at reach2crown@gmail.com",
      });
      
      // Reset form
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
  };

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
                  Contact Us
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="heading-xl mb-6">
                  Get In <span className="text-gradient">Touch</span> With Us
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Have a project in mind or want to learn more about our services? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 hero-pattern opacity-50"></div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Phone size={24} />,
                  title: 'Phone',
                  info: '+91 99025 51309',
                  link: 'tel:+91 99025 51309',
                  description: 'Mon-Fri from 8am to 8pm'
                },
                {
                  icon: <Mail size={24} />,
                  title: 'Email',
                  info: 'reach2crown@gmail.com',
                  link: 'mailto:reach2crown@gmail.com',
                  description: 'We reply within 24 hours'
                },
                {
                  icon: <MapPin size={24} />,
                  title: 'Office',
                  info: '#158 ,8th cross ,HSR Layout main road, bommanhalli',
                  link: 'https://maps.google.com',
                  description: 'Banglore 560068'
                },
                {
                  icon: <Clock size={24} />,
                  title: 'Working Hours',
                  info: 'Monday - Saturday',
                  description: '8:00 AM - 8:00 PM'
                }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="bg-construction-gray p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-construction-yellow bg-opacity-20 rounded-full flex items-center justify-center text-construction-blue mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-construction-blue hover:text-construction-yellow transition-colors font-medium">
                        {item.info}
                      </a>
                    ) : (
                      <p className="font-medium">{item.info}</p>
                    )}
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-construction-gray">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <ScrollReveal>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="heading-md mb-6">Send Us A Message</h2>
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

              {/* Map */}
              <ScrollReveal direction="right">
                <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.386717730062!2d77.6547872!3d12.8966642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135ecc5f965b%3A0x7437000d376fdb42!2s8th%20Cross%20St%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1715681234567!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="HSR Layout Location"
                  ></iframe>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="bg-construction-yellow bg-opacity-20 text-construction-blue px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  FAQs
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="heading-lg mb-6">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <p className="subtitle">
                  Find answers to common questions about our services and processes.
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  question: 'What types of projects do you handle?',
                  answer: 'We handle a wide range of construction projects including residential constructions, commercial buildings, industrial facilities, renovations, and custom designs. Our team has extensive experience across different sectors and scales of projects.'
                },
                {
                  question: 'How do I get a quote for my project?',
                  answer: "You can request a quote by filling out our contact form, calling us directly, or sending an email. We'll arrange a consultation to discuss your project requirements and provide a detailed estimate."
                },
                {
                  question: 'What is your typical project timeline?',
                  answer: "Project timelines vary depending on the scope and complexity. Small renovations may take a few weeks, while large commercial buildings could take several months to a year. During the consultation, we'll provide a realistic timeline specific to your project."
                },
                {
                  question: 'Do you provide warranties for your work?',
                  answer: 'Yes, we provide warranties for all our construction work. The warranty period varies depending on the type of project, but typically ranges from 1 to 5 years. We stand behind the quality of our work and materials used.'
                },
                {
                  question: 'Are you licensed and insured?',
                  answer: 'Yes, Crown Construction is fully licensed, bonded, and insured. We maintain all necessary certifications required for construction projects in our operating regions. We can provide verification of our credentials upon request.'
                }
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="mb-6 p-6 bg-construction-gray rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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

export default ContactPage;