
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-blue text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-construction-yellow">Crown</span> Construction & Interiors
            </h3>
            <p className="mb-6 text-gray-300">
              Building dreams into reality with innovative designs and quality construction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/crownconstructions_?igsh=MXRyZnZpZmFwd2lhNw==" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/interiors" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Interiors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Architecture & Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-construction-yellow mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  #158 ,8th cross ,HSR Layout main road, bommanhalli-560068
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-construction-yellow flex-shrink-0" size={18} />
                <a href="tel:+91 98457 21786" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  +91 98457 21786
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-construction-yellow flex-shrink-0" size={18} />
                <a href="tel:+91 99025 51309" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  +91 99025 51309
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-construction-yellow flex-shrink-0" size={18} />
                <a href="tel:+91 84978 66816" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  +91 84978 66816
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-construction-yellow flex-shrink-0" size={18} />
                <a href="mailto:reach2crown@gmail.com" className="text-gray-300 hover:text-construction-yellow transition-colors">
                  reach2crown@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-construction-yellow flex-shrink-0" size={18} />
                <span className="text-gray-300">Mon - Sat: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Crown Construction & Interiors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
