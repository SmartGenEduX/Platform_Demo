
import React from "react";

const SchoolSelector = ({ schools, onSelect }) => {
  return (
    <div className="school-selector">
      <h2>Select Your School</h2>
      <select onChange={(e) => onSelect(e.target.value)} className="p-2 border rounded">
        <option value="">--Choose a school--</option>
        {schools.map((school) => (
          <option key={school.code} value={school.code}>
            {school.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SchoolSelector;
