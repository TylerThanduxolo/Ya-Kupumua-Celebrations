// Removed the unnecessary React import as it's not used in the code
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: 'url("/1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-playfair font-bold mb-6"
        >
          Ya Kupumua Celebrations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-poppins mb-12"
        >
          Creating Unforgettable Moments
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#services" className="btn-primary">
        Our Services
          </a>
          <a href="#contact" className="btn-secondary">
        Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;