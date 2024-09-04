// src/pages/AllServices.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function AllServices() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Website Creation Service */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Website+Creation"
            alt="Website Creation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Website Creation
            </h2>
            <p className="text-gray-700 mb-4">
              We create stunning, responsive, and SEO-optimized websites tailored to your business needs.
            </p>
            <Link
              to="/website-services"
              className="text-orange-700 font-semibold hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* Desktop Application Development */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Desktop+Applications"
            alt="Desktop Applications"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Desktop Applications
            </h2>
            <p className="text-gray-700 mb-4">
              Custom desktop software solutions that are powerful, efficient, and tailored to your workflow.
            </p>
            <Link
              to="/desktop-services"
              className="text-orange-700 font-semibold hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* Mobile Application Development */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Mobile+Applications"
            alt="Mobile Applications"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Mobile Applications
            </h2>
            <p className="text-gray-700 mb-4">
              Feature-rich mobile apps that provide a seamless experience across all devices.
            </p>
            <Link
              to="/mobile-application"
              className="text-orange-700 font-semibold hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
