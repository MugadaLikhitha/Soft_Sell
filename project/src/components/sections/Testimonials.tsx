import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "SoftSell helped our company recoup over $200,000 from unused Adobe and Microsoft licenses. The process was seamless, and the valuation was higher than we expected. I highly recommend their service to any business looking to optimize their software expenses.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Innovate Solutions",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      content: "As a financial controller, I'm always looking for ways to reduce costs. SoftSell provided an unexpected revenue stream by helping us sell enterprise software licenses we no longer needed. Their platform is secure, and their team is extremely helpful.",
      author: "Michael Chen",
      role: "Financial Controller",
      company: "TechGlobal Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      content: "We were skeptical at first, but SoftSell exceeded our expectations. We sold our excess SAP licenses in just under a week and received payment promptly. Their valuation was fair and the transaction was handled professionally.",
      author: "Emma Rodriguez",
      role: "IT Director",
      company: "Nexus Group",
      rating: 4,
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what companies using SoftSell have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;