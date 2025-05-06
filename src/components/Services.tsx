import React from 'react';
import { Calendar, Palette, Image, Table, Moon as Balloon, Box } from 'lucide-react';

const services = [
  {
    title: 'Event Planning',
    description: 'Comprehensive event planning services tailored to your vision',
    icon: Calendar,
    image: '/public/Event Planning.jpeg'
  },
  {
    title: 'Event Décor Styling',
    description: 'Transform your space with our elegant décor solutions',
    icon: Palette,
    image: '/public/Event Décor Styling.jpg'
  },
  {
    title: 'Backdrop Styling',
    description: 'Create stunning photo opportunities with custom backdrops',
    icon: Image,
    image: '/public/Backdrop Styling.jpg'
  },
  {
    title: 'Table Scape',
    description: 'Elegant table settings that elevate your dining experience',
    icon: Table,
    image: '/public/Table Scape.jpg'
  },
  {
    title: 'Balloon Art',
    description: 'Creative balloon installations and decorations',
    icon: Balloon,
    image: '/public/Balloon Art.jpg'
  },
  {
    title: 'Equipment Rentals',
    description: 'Quality event equipment for any occasion',
    icon: Box,
    image: '/public/Equipment Rentals.jpg'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-primary hover:text-secondary transition-colors">
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;