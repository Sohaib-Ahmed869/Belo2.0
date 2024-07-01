import React from "react";
import helpChat from "../../../Assets/help-chat.png";

const Card = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-6 text-center shadow-md">
      <div className="mb-4">
        <img
          src={helpChat}
          alt="card"
          className="w-12 h-12 mx-auto mb-4"
        />
      </div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
