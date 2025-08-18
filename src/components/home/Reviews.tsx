import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Smith',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    content: 'Devsecure transformed our cybersecurity infrastructure. Their AI-driven solutions have significantly reduced our vulnerability to attacks.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO at DataFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    content: 'The team at Devsecure delivered exceptional results. Their expertise in AI and machine learning helped us automate critical processes.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director at CloudNet',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    content: 'Outstanding service and technical expertise. Devsecure helped us build a robust cloud infrastructure with top-notch security.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.1),rgba(0,0,0,0)_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Client Reviews
            </span>
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;