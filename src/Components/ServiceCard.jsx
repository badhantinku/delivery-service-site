import React from 'react';

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition-all duration-300">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
