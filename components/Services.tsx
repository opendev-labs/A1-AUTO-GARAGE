
import React from 'react';
import Section from './Section';
import { services } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="group p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-400 ease-out-quint bg-primary dark:bg-primary-dark text-white"
         style={{ willChange: 'transform, box-shadow' }}>
            <div className="mb-4 p-4 rounded-full bg-white/20">
                <service.icon className="h-12 w-12 transition-transform duration-500 ease-out-quint group-hover:rotate-90 text-accent-light" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 text-white">
                {service.title}
            </h3>
            <p className="text-gray-200">
                {service.description}
            </p>
        </div>
    );
};

const Services: React.FC = () => {
  return (
    <Section id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">
        Our Expert <span className="text-accent dark:text-accent-light">Car Services</span>
      </h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Comprehensive solutions for all your car's needs, delivered with precision and care.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;