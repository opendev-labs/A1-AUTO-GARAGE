
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Fact {
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface ContactInfo {
    title: string;
    icon: React.ElementType;
    lines: { text: string; href?: string; }[];
    isMapLink?: boolean;
}