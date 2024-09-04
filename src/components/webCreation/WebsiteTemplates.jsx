// src/pages/WebsiteTemplates.js
import React from 'react';
import { Link } from 'react-router-dom';

const templates = [
  {
    name: 'E-commerce Website',
    description: 'A sleek and modern template for online stores. It features a clean product display, shopping cart, and checkout process.',
    imageUrl: 'https://via.placeholder.com/400x300?text=E-commerce+Website',
    serviceId:'ecommerce',
  },
  {
    name: 'Portfolio Website',
    description: 'Ideal for freelancers and creatives. Showcase your work with a beautiful gallery and smooth animations.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Portfolio+Website',
    serviceId:'portfolio',
  },
  {
    name: 'Corporate Website',
    description: 'A professional template designed for businesses. Includes sections for services, team, and contact information.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Corporate+Website',
    serviceId:'corporate',
  },
  {
    name: 'Blog Website',
    description: 'Perfect for bloggers who want to share their thoughts. Features an easy-to-read layout with a sidebar for widgets.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Blog+Website',
    serviceId:'blog',
  },
  {
    name: 'Landing Page',
    description: 'A single-page template for marketing campaigns. It’s designed to convert visitors into customers with strong calls to action.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Landing+Page',
    serviceId:'landing',
  },
  {
    name: 'Restaurant Website',
    description: 'A stylish template for restaurants and cafes. Includes a menu section, reservation form, and location map.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Restaurant+Website',
    serviceId:'restraurant',
  },
  {
    name: 'Educational Website',
    description: 'Ideal for schools and educational institutions. Features course listings, event calendars, and online registration.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Educational+Website',
    serviceId:'education',
  },
  {
    name: 'Real Estate Website',
    description: 'A template for real estate agencies. Includes property listings, search filters, and agent profiles.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Real+Estate+Website',
    serviceId:'realestate',
  },
];

export default function WebsiteTemplates() {
  return (
    
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Website Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((template, index) => (
            <Link to={`/webservice/${template.serviceId}`}>
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={template.imageUrl} alt={template.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{template.name}</h2>
              <p className="text-gray-700">{template.description}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    
  );
}
