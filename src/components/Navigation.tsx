import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img 
              src="/Ya Kupumua Celebrations Logo.png" 
              alt="Ya Kupumua Celebrations Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}
              />
              <span className="text-primary font-bold text-lg md:text-xl tracking-wide">
              Ya Kupumua Celebrations
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary hover:text-secondary px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-secondary hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;