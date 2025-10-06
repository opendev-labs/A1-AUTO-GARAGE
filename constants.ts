import type { Service, Testimonial, Fact, ContactInfo } from './types';
import { ShieldCheckIcon, DocumentCheckIcon, MapPinIcon, PhoneIcon, ClockIcon, CarIcon, GearIcon } from './components/icons';


export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export const facts: Fact[] = [
    {
        title: "35+ Years of Trust",
        description: "Decades of reliable service and customer satisfaction.",
        icon: ShieldCheckIcon
    },
    {
        title: "4-Wheelers Only",
        description: "Specialized expertise for your cars, SUVs, and more.",
        icon: CarIcon
    },
    {
        title: "Insurance & Claims",
        description: "Hassle-free processing for all types of claims.",
        icon: DocumentCheckIcon
    }
];

export const services: Service[] = [
  {
    title: 'Denting & Painting',
    description: 'From minor scratches to major bodywork, we bring your car back to life with flawless finishes.',
    icon: GearIcon,
  },
  {
    title: 'Damage Repair',
    description: 'All types of damage repaired with precision, ensuring structural integrity and aesthetic perfection.',
    icon: GearIcon,
  },
  {
    title: 'Mechanic Service',
    description: 'Full-service mechanical repairs, diagnostics, and routine maintenance to keep you running smoothly.',
    icon: GearIcon,
  },
  {
    title: '2nd Hand Car Services',
    description: 'Expert inspections, maintenance, and refurbishment for pre-owned vehicles, ensuring quality.',
    icon: GearIcon,
  },
  {
    title: 'Insurance Claims',
    description: 'Seamless processing of all types of insurance claims, making your repair experience stress-free.',
    icon: GearIcon,
  },
  {
    title: 'Polishing & Detailing',
    description: 'Interior and exterior detailing and deep cleaning services to make your car shine like new.',
    icon: GearIcon,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "A1 Auto Garage has been my go-to for years. Kayum Bhai and his team are simply the best. The denting work was flawless!",
    author: 'Rahul Sharma'
  },
  {
    quote: "Excellent service, transparent pricing, and they handled my insurance claim without any hassle. Highly recommend!",
    author: 'Priya Singh'
  },
  {
    quote: "My car looks brand new after the painting and polishing. The pick-up service is a lifesaver. Truly 35 years of trust!",
    author: 'Manoj Kumar'
  },
];

export const contactInfo: ContactInfo[] = [
    {
        title: 'Our Address',
        icon: MapPinIcon,
        lines: [
            { text: 'Patanwala Compound, Opp HP Petrol Pump, LBS Marg, Ghatkopar West-400086' },
            { text: 'View on Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=A1+Auto+Garage+Ghatkopar+Patanwala+Compound' }
        ],
        isMapLink: true,
    },
    {
        title: 'Call Us',
        icon: PhoneIcon,
        lines: [
            { text: '9870130461', href: 'tel:9870130461' },
            { text: '7977573161', href: 'tel:7977573161' }
        ],
    },
    {
        title: 'Working Hours',
        icon: ClockIcon,
        lines: [
            { text: 'Mon - Sun: 9:00 AM - 7:00 PM' },
        ],
    },
];