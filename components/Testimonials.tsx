import React, { useState } from 'react';
import Section from './Section';
import { testimonials as initialTestimonials } from '../constants';
import { ChatBubbleLeftRightIcon } from './icons';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(initialTestimonials);
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && quote.trim()) {
      setReviews([...reviews, { author, quote }]);
      setAuthor('');
      setQuote('');
    }
  };

  return (
    <Section id="testimonials" className="bg-primary-dark dark:bg-dark-base-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-white">
        What Our Customers Say
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          {reviews.map((testimonial, index) => (
            <div key={index} className="bg-base-200 dark:bg-dark-base-100 p-8 rounded-lg shadow-xl relative transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-400 ease-out-quint" style={{ willChange: 'transform, box-shadow' }}>
              <ChatBubbleLeftRightIcon className="absolute top-4 left-4 h-12 w-12 text-accent/20 dark:text-accent-light/20" />
              <p className="relative text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-right text-primary dark:text-primary-light">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-base-200 dark:bg-dark-base-100 p-8 rounded-lg shadow-xl sticky top-24">
          <h3 className="text-2xl font-bold font-heading mb-6 text-center text-primary-dark dark:text-white">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="review-author" className="block mb-2 font-medium text-base-content dark:text-dark-base-content">Your Name</label>
              <input 
                type="text" 
                id="review-author" 
                name="author" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required 
                className="w-full px-4 py-3 bg-base-100 dark:bg-dark-base-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 ease-out-quint" 
                placeholder="e.g., Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="review-quote" className="block mb-2 font-medium text-base-content dark:text-dark-base-content">Your Review</label>
              <textarea 
                id="review-quote" 
                name="quote" 
                rows={5} 
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                required 
                className="w-full px-4 py-3 bg-base-100 dark:bg-dark-base-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 ease-out-quint"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;