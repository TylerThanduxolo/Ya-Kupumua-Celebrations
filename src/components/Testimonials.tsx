import React from 'react';

const testimonials = [
  {
    name: "Derene Barnes",
    text: "Ya Kupumua Celebrations transformed our vision into reality. Their attention to detail and professional service made our event truly unforgettable.",
    role: "Wedding Client"
  },
  {
    name: "Montsay Van Papendorp",
    text: "Exceptional service from start to finish. The team's creativity and dedication to excellence made our corporate event a tremendous success.",
    role: "Corporate Event"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;