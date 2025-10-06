import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from './icons';

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <SunIcon className="h-4 w-4 text-yellow-500" />
        ) : (
          <MoonIcon className="h-4 w-4 text-indigo-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggler;
