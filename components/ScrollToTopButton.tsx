
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg transition-all duration-400 ease-out-back transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      aria-label="Scroll to top"
      style={{ willChange: 'transform, opacity' }}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;