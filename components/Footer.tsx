
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark dark:bg-dark-base-200 text-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <p>&copy; {currentYear} A1 Auto Garage. All rights reserved.</p>
        <p className="text-sm text-gray-400">
          Designed with passion by{' '}
          <a
            href="https://www.instagram.com/iamyash.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent dark:text-accent-light hover:underline"
          >
            @iamyash.io
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
