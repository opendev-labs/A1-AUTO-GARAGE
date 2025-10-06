
import React, { useState } from 'react';
import Section from './Section';
import { contactInfo } from '../constants';
import type { ContactInfo } from '../types';

const InfoCard: React.FC<{ info: ContactInfo }> = ({ info }) => (
  <div className="bg-base-200 dark:bg-dark-base-200 p-6 rounded-lg shadow-lg flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="bg-primary/10 dark:bg-primary-light/10 p-3 rounded-full">
        <info.icon className="h-8 w-8 text-primary dark:text-primary-light" />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold font-heading mb-2">{info.title}</h3>
      <div className="text-gray-600 dark:text-gray-300">
        {info.lines.map((line, index) => 
          line.href ? (
            <a key={index} href={line.href} target="_blank" rel="noopener noreferrer" className="block hover:text-primary dark:hover:text-primary-light transition-colors duration-200 underline-offset-2 hover:underline">
              {line.text}
            </a>
          ) : (
            <p key={index}>{line.text}</p>
          )
        )}
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name} via A1 Auto Garage Website`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:contact@a1autogarage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">
        Get In <span className="text-accent dark:text-accent-light">Touch</span>
      </h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Have a question or need a quote? We're here to help.
      </p>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <InfoCard key={info.title} info={info} />
          ))}
        </div>
        <div className="bg-base-200 dark:bg-dark-base-200 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold font-heading mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="w-full px-4 py-3 bg-base-100 dark:bg-dark-base-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 ease-out-quint"
                placeholder="e.g., John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full px-4 py-3 bg-base-100 dark:bg-dark-base-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 ease-out-quint"
                placeholder="e.g., john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
                className="w-full px-4 py-3 bg-base-100 dark:bg-dark-base-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 ease-out-quint"
                placeholder="Hi, I'd like to ask about..."
              ></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Send Message via Email
            </button>
            <p className="text-center text-sm text-gray-500">This will open your default email client.</p>
          </form>
        </div>
      </div>
      <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.089855581977!2d72.90666631539266!3d19.0921006562017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c780f2d9f67b%3A0x3b6f0e9b9c9f0e1d!2sHP%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1625901234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="A1 Auto Garage Location"
          className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;