// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {

    const { title, description, icon: Icon } = service;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center rounded-xl">
            <div className="flex justify-center mb-4 text-orange-400 text-4xl lg:text-5xl xl:text-5xl">
                <Icon />
            </div>
            <h3 className="text-lg  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
