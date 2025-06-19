import React from "react";

const ModuleCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-2">
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <a href={link} className="text-blue-500 hover:underline text-sm">
        View Demo
      </a>
    </div>
  );
};

export default ModuleCard;
