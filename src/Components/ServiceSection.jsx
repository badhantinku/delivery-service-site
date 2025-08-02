import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/servicesData';

// import specific icons
import { FaShippingFast, FaMapMarkedAlt, FaWarehouse, FaMoneyBillWave, FaHandshake, FaUndoAlt } from 'react-icons/fa';

// map icon strings to actual components
const iconMap = {
  FaShippingFast,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt,
};

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white rounded-2xl ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments – we deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <ServiceCard
              key={idx}
              Icon={Icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
