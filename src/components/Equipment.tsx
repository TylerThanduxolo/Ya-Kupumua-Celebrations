import React from 'react';

const equipment = [
  {
    name: 'Variety of Tables',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Variety of Chairs',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Glassware',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Crockery & Cutlery',
    image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Variety of Backdrops',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Flooring',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Draping Material',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Tents',
    image: '/Tents.jpg'
  }
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Equipment for Rental</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div key={index} className="equipment-card">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="equipment-overlay">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                  <button className="bg-white text-primary px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;