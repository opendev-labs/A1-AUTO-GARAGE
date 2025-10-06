
import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ServicesTicker from './components/MobileServicesTicker';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="text-base-content dark:text-dark-base-content font-body transition-colors duration-300 bg-base-100 dark:bg-dark-base-100">
        <Header />
        <main>
          <Hero />
          <ServicesTicker />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
};

export default App;