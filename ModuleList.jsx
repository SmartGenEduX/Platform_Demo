
import React from "react";
import ModuleCard from "./ModuleCard";

const ModuleList = ({ modules }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {modules.map((module, index) => (
        <ModuleCard key={index} module={module} />
      ))}
    </div>
  );
};

export default ModuleList;
