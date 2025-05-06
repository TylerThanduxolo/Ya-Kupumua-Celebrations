import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-playfair font-bold text-primary">About Us</h2>
            <p className="text-lg text-gray-600">
  • Ya Kupumua Celebrations is an event styling, planning, and equipment rental facility. <br />
  • We are located in Modelpark, Witbank. <br />
  • Founded by Sanele Mahlangu, in August 2020.
</p>
          
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">200+</h3>
                <p className="text-gray-600">Events Completed</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/About us image.jpeg"
              alt="Event Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;