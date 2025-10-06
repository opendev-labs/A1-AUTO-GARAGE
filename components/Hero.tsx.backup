
import React from 'react';

const Hero: React.FC = () => {
    const heroImageUrl = '/hero-background.jpg';

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center text-white text-center bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url('${heroImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-4 animate-fade-in-down"
          style={{ willChange: 'transform, opacity' } as React.CSSProperties}
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2 leading-tight">A1 Auto Garage</span>
          Your Partner for <span className="text-accent dark:text-accent-light">35 Years</span>
        </h1>
        <p 
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl text-gray-200 animate-fade-in-up"
          style={{ animationDelay: '0.3s', willChange: 'transform, opacity' } as React.CSSProperties}
        >
          Expert Denting, Painting, & All-Inclusive Car Care for 4-Wheelers.
        </p>
        <div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" 
          style={{ animationDelay: '0.5s', willChange: 'transform, opacity' } as React.CSSProperties}
        >
          <a href="#contact" className="px-8 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-400 ease-out-quint" style={{ willChange: 'transform, background-color' }}>
            Get a Free Quote
          </a>
          <a href="#about" className="px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-400 ease-out-quint" style={{ willChange: 'transform, background-color' }}>
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-base-100 to-transparent dark:from-dark-base-100"></div>
    </section>
  );
};

export default Hero;