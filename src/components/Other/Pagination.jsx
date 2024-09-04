import React from 'react';

const Pagination = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-center">
        <ul className="flex space-x-2">
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              &laquo; Previous
            </button>
          </li>
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              1
            </button>
          </li>
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              2
            </button>
          </li>
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              3
            </button>
          </li>
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              Next &raquo;
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
