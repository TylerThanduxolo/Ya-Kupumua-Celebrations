import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4">
            <a href="https://instagram.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://twitter.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <div className="text-sm text-gray-600">
            Call us: +1 (234) 567-8900
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;