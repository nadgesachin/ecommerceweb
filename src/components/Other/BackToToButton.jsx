import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
