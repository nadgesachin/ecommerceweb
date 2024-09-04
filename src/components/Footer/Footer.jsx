import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter Signup</h4>
          <p className="text-gray-400 mb-4">
            Sign up for our newsletter to receive updates and exclusive offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Enter your email"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500">
        &copy; 2024 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
