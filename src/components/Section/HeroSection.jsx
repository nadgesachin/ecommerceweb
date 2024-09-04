import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section relative bg-gray-200 p-6">
      {/* Promotional Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Summer Sale - Up to 50% Off!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Don't miss out on our limited-time offers.
          </p>
          <a href="/shop" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full">
            Shop Now
          </a>
        </div>
        <div className="mt-6 sm:mt-0">
          <img
            src="https://i.ibb.co/FmV4Jzr/promo1.jpg"
            alt="Promotional Banner"
            className="w-full sm:w-96"
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/HD8sC6v/product1.jpg"
            alt="Product 1"
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-2">Product 1</h3>
          <p className="text-gray-600">$25.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/p4sg1cL/product2.jpg"
            alt="Product 2"
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-2">Product 2</h3>
          <p className="text-gray-600">$30.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/rMHnQV9/product3.jpg"
            alt="Product 3"
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-2">Product 3</h3>
          <p className="text-gray-600">$15.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/QrFd8k3/product4.jpg"
            alt="Product 4"
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-2">Product 4</h3>
          <p className="text-gray-600">$45.00</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
