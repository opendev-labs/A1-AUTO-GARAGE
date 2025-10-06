
import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { navLinks, services } from '../constants';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from './icons';
import ThemeToggler from './ThemeToggler';
import AnimatedGearsIcon from './AnimatedGearsIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeId = useScrollSpy(sectionIds, { rootMargin: '-20% 0px -80% 0px' });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const DesktopNavLink: React.FC<{ href: string, label: string }> = ({ href, label }) => {
    const isActive = href === `#${activeId}`;
    return (
      <a
        href={href}
        className={`relative text-lg md:text-base font-medium transition-colors duration-300 ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary dark:bg-primary-light rounded-full hidden md:block" />
        )}
      </a>
    );
  };

  return (
    <>
      <header id="home" className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-base-200/80 dark:bg-dark-base-200/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold font-heading text-primary-dark dark:text-primary-light transition-opacity hover:opacity-80">
              <AnimatedGearsIcon />
              <span>A1 Auto Garage</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                if (link.href === '#services') {
                  return (
                    <div 
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button className={`flex items-center gap-1 text-lg md:text-base font-medium transition-colors duration-300 ${servicesDropdownOpen || activeId === 'services' ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}>
                        {link.label}
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`absolute top-full left-0 mt-3 w-64 origin-top transform-gpu transition-all duration-300 ease-out-quint ${servicesDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                        <div className="bg-base-200/95 dark:bg-dark-base-200/95 backdrop-blur-lg rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                          <div className="p-2">
                            {services.map((service, index) => (
                              <a 
                                key={index} 
                                href="#contact" 
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block w-full text-left px-4 py-3 rounded-md text-base-content dark:text-dark-base-content hover:bg-primary/10 dark:hover:bg-primary-light/10 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                              >
                                <h3 className="font-semibold">{service.title}</h3>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return <DesktopNavLink key={link.href} href={link.href} label={link.label} />;
              })}
            </div>
            <div className="flex items-center space-x-4">
               <ThemeToggler />
              <div className="md:hidden">
                <button onClick={() => setIsOpen(true)} className="p-2" aria-label="Open navigation">
                  <Bars3Icon className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-base-200/95 dark:bg-dark-base-100/95 backdrop-blur-lg transition-opacity duration-400 ease-buttery md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2" aria-label="Close navigation">
          <XMarkIcon className="h-10 w-10" />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.filter(link => link.href !== '#services').map((link) => {
            const isActive = link.href === `#${activeId}`;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold text-center transition-colors duration-300 ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;