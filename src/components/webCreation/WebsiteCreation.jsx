// src/pages/WebsiteCreation.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function WebsiteCreation() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Website Creation Services
      </h1>

      {/* Hero Section */}
      <div className="mb-12">
        <img
          src="https://via.placeholder.com/1200x400?text=Beautiful+Website+Design"
          alt="Website Design"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Transform Your Online Presence
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          In today's digital age, a website is more than just a digital
          address—it's the cornerstone of your online presence. Whether you're a
          small business, a large corporation, or an individual entrepreneur,
          having a well-designed website is essential to connect with your
          audience, showcase your brand, and drive growth.
        </p>
        <p className="text-lg leading-relaxed">
          At <strong>NS Technology</strong>, we specialize in creating visually
          appealing, user-friendly, and highly functional websites tailored to
          your specific needs. Our expertise spans across various industries,
          ensuring that your website not only looks great but also performs
          exceptionally.
        </p>
      </section>

      {/* Our Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Our Website Creation Process
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>
            <strong>Consultation & Planning:</strong> We start by understanding
            your business goals, target audience, and the purpose of your
            website. This helps us create a strategic plan that aligns with your
            vision and objectives.
          </li>
          <li>
            <strong>Design & Development:</strong> Our team of experienced
            designers and developers work closely to create a website that
            reflects your brand's identity. We focus on creating intuitive
            layouts, engaging content, and responsive designs that work
            seamlessly across all devices.
          </li>
          <li>
            <strong>Content Creation:</strong> We help you craft compelling and
            SEO-friendly content that not only informs but also converts
            visitors into customers. Our content creation process includes
            keyword research, content writing, and multimedia integration.
          </li>
          <li>
            <strong>Testing & Launch:</strong> Before going live, we thoroughly
            test your website to ensure it's free of bugs, optimized for speed,
            and fully functional. Once everything is perfect, we launch your
            website and make it available to the world.
          </li>
          <li>
            <strong>Maintenance & Support:</strong> Our relationship doesn't end
            with the launch. We offer ongoing maintenance and support to ensure
            your website remains up-to-date, secure, and performing at its best.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=Custom+Design"
              alt="Custom Design"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">Custom Design</h3>
            <p className="text-lg leading-relaxed">
              Every website we create is unique and tailored to your brand.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=Responsive+Layout"
              alt="Responsive Layout"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">Responsive Layout</h3>
            <p className="text-lg leading-relaxed">
              Your website will look and function beautifully on desktops,
              tablets, and mobile devices.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=SEO+Optimized"
              alt="SEO Optimized"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">SEO Optimized</h3>
            <p className="text-lg leading-relaxed">
              Our websites are built with SEO best practices to help you rank
              higher on search engines and attract more visitors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=Fast+Loading"
              alt="Fast Loading"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">Fast Loading</h3>
            <p className="text-lg leading-relaxed">
              We ensure that your website is optimized for speed, providing a
              smooth experience for your users.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Portfolio</h2>
        <p className="text-lg leading-relaxed mb-6">
          We have successfully delivered websites for a variety of clients
          across different industries. From e-commerce platforms to corporate
          websites, our portfolio showcases the diversity and quality of our
          work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=E-commerce+Website"
              alt="E-commerce Website"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">E-commerce Websites</h3>
            <p className="text-lg leading-relaxed">
              Custom-built online stores that provide an excellent shopping
              experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=Corporate+Website"
              alt="Corporate Website"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">Corporate Websites</h3>
            <p className="text-lg leading-relaxed">
              Professional websites that enhance your brand’s image and
              communication.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/400x300?text=Personal+Blog"
              alt="Personal Blog"
              className="mb-4 w-full h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold">Personal Blogs & Portfolios</h3>
            <p className="text-lg leading-relaxed">
              A platform to share your thoughts, showcase your work, and connect
              with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-700 text-white text-center py-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build Your Website Together</h2>
        <p className="text-lg leading-relaxed mb-6">
          Ready to take your online presence to the next level? Contact us today
          to discuss your website creation needs. We’re excited to help you
          build a website that not only meets your expectations but exceeds
          them.
        </p>
        <Link
              to="/contact"
              className="px-7 ml-5 py-4 bg-white text-orange-700 font-medium rounded-lg hover:bg-gray-100"
            >
              Contact Us &rarr;
            </Link>
        <Link
              to="/website-templates"
              className="px-7 ml-5 py-4 bg-white text-orange-700 font-medium rounded-lg hover:bg-gray-100"
            >
              View Templates &rarr;
            </Link>
      </section>
    </div>
  );
}
