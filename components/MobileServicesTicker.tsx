
import React from 'react';
import { services } from '../constants';

const ServicesTicker: React.FC = () => {
  // Duplicate the services array to create a seamless looping effect for the marquee.
  const tickerServices = [...services, ...services];

  return (
    // This container is now part of the document flow, below the hero section.
    // The `group` class is used to control the animation play state on hover.
    <div className="bg-primary-dark dark:bg-dark-base-200 text-white overflow-hidden group py-3">
      {/* This inner container holds the scrolling items. 
          The `animate-marquee` class applies the custom animation.
          The animation is paused when the parent `group` is hovered. */}
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
        {tickerServices.map((service, index) => (
          <React.Fragment key={index}>
            <a href="#contact" className="py-2 mx-4 text-sm font-semibold tracking-wider text-accent-light hover:underline">
              {service.title}
            </a>
            {/* Add a separator for visual distinction, but not after the very last item */}
            {index < tickerServices.length - 1 && <span className="text-primary-light/50 select-none">&bull;</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesTicker;