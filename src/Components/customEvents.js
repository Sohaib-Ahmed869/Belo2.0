import React from "react";

const CustomEvent = ({ event }) => {
  const { title, start } = event;
  const startTime = new Date(start).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const eventColor = {
    "Interview": "text-red-500",
    "Task Name": "text-blue-500",
    "Show Name": "text-green-500"
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`dot ${eventColor[title]}`}></span>
      <span className="event-title">{title}</span>
      <span className="event-time">{startTime}</span>
    </div>
  );
};

export default CustomEvent;