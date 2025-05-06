import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ya Kupumua Celebrations</h3>
            <p className="text-gray-400">
              Creating unforgettable moments and transforming spaces into extraordinary experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: hello@yakupumua.co.za</p>
              <p>Phone: 0822174652</p>
              <p>Address: 2312 Kareendouw street, Modelpark,Emalahleni, South Africa</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Yakupumua/"  className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
                <a href="https://www.instagram.com/yakupumuacelebrations/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ya Kupumua Celebrations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;