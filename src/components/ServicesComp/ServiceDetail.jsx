import React from "react";

const ServiceDetail = ({ title, description, imageSrc }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col items-center gap-6 lg:gap-12">
          {imageSrc && (
            <div className="flex-shrink-0 w-full lg:w-6/12 xl:w-5/12 mb-6">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto rounded-xl"
              />
            </div>
          )}
          <div className="w-full lg:w-8/12 xl:w-7/12">
            <h1 className="text-2xl text-gray-900 font-bold md:text-4xl mb-6">
              {title}
            </h1>
            <div className="text-gray-600 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
