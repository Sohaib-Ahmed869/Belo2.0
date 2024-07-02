import React from "react";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaSearch } from "react-icons/fa";
import CustomEvent from "../Components/customEvents";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Interview",
    allDay: false,
    start: new Date(2024, 4, 1, 8, 0),
    end: new Date(2024, 4, 1, 9, 0),
  },
  {
    title: "Task Name",
    allDay: false,
    start: new Date(2024, 4, 2, 8, 0),
    end: new Date(2024, 4, 2, 9, 0),
  },
];

const Schedule = () => {
  const [view, setView] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());

  // Format the current date to display as "Month Year"
  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: locales["en-US"],
  });

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-2xl">Schedule</h1>
      <p className="text-gray-500 mt-5">Upcoming Events</p>
      <div className="pt-5 p-5 w-full shadow rounded-xl mt-5 border border-gray-100">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{formattedDate}</h2>
            <div className="flex items-start">
              {/* <select
                className="bg-gray-200 p-2 rounded"
                onChange={(e) => setView(e.target.value)}
                defaultValue="month"
              >
                <option value="month">Month</option>
                <option value="week">Week</option>
              </select> */}
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 ">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-gray-600 flex-1"
              />
              <FaSearch className="text-gray-600" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded">
                Add event
              </button>
              <button className="bg-gray-200 p-2 rounded">Filter</button>
            </div>
          </div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            views={["month", "week"]}
            view={view}
            onView={setView}
            onNavigate={(date) => setCurrentDate(date)}
            components={
              {
                //   toolbar: () => null,
                event: CustomEvent,
              }
            }
            className="rbc-calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
