import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-6 text-center shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
