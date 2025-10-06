
import React from 'react';
import Section from './Section';
import { facts } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">
        About <span className="text-accent dark:text-accent-light">A1 Auto Garage</span>
      </h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Your Trusted Car Care Partner Since 35 Years
      </p>
      <div className="bg-base-200 dark:bg-dark-base-200 rounded-xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Welcome to A1 Auto Garage, proudly owned by Kayum Bhai. For over 35 years, we've been the trusted name in professional car care in Ghatkopar West. Our legacy is built on precision, reliability, and an unwavering commitment to customer satisfaction.
            </p>
            <p>
              We specialize exclusively in <strong className="text-primary-dark dark:text-primary-light">4-wheelers</strong>, offering a comprehensive range of services from intricate denting and painting to all types of damage repair. With decades of experience, our skilled technicians ensure your vehicle receives the best care, restoring it to its pristine condition.
            </p>
            <p>
              We're not just a garage; we're a part of the community, built on trust and excellent service. Experience the difference that 35 years of dedicated craftsmanship makes.
            </p>
            <a href="#contact" className="inline-block mt-4 px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
              Talk to Kayum Bhai
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1621996346565-e326b20f5451?q=80&w=600&auto=format&fit=crop" alt="Mechanic working at A1 Auto Garage" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out-quint" loading="lazy" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <div key={fact.title} className="bg-base-100 dark:bg-dark-base-100 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-400 ease-out-quint" style={{ willChange: 'transform, box-shadow' }}>
              <fact.icon className="h-16 w-16 mx-auto mb-4 text-primary dark:text-primary-light" />
              <h3 className="text-xl font-bold font-heading mb-2">{fact.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;