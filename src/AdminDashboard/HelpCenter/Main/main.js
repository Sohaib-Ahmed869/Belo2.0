import React, { useState } from "react";
import FAQ from "./faq";
import ContactForm from "./contactForm";
import Card from "./card";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Datepicker, Flowbite, CustomFlowbiteTheme } from "flowbite-react";
const cards = [
  {
    title: "Getting Started",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
  {
    title: "Using BELO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
  {
    title: "Subscription & Billing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
  {
    title: "Teams & Access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
  {
    title: "Integrations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
  {
    title: "Trouble Shooting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
  },
];

const faqs = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 4",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 5",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const times = [
  "10:00AM",
  "10:30AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
];

const HelpCenter = () => {
  const [showScheduleDemo, setShowScheduleDemo] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const customTheme = {
    root: {
      base: "relative",
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner: "inline-block rounded-lg bg-white p-4 shadow-lg",
      },
      header: {
        base: "",
        title:
          "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "mb-2 flex justify-between",
          button: {
            base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
            prev: "",
            next: "",
            view: "",
          },
        },
      },
      view: {
        base: "p-1",
      },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
          today: "bg-blue-500 text-white hover:bg-blue-600 hidden",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 hidden",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title:
            "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
            selected: "bg-blue-500 text-white hover:bg-blue-600",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
            selected: "bg-blue-500 text-white hover:bg-blue-600",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
            selected: "bg-blue-500 text-white hover:bg-blue-600",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
            selected: "bg-blue-500 text-white hover:bg-blue-600",
            disabled: "text-gray-500",
          },
        },
      },
    },
  };

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-4xl font-bold text-center">Help Center</h1>
      <p className="text-center mt-2 mb-8">How can we help you today?</p>
      <div className="text-center mb-8">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
          onClick={() => {
            setShowScheduleDemo(true);
          }}
        >
          Schedule a demo
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mx-24">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <FAQ faqs={faqs} />
      <ContactForm />
      <Modal
        show={showScheduleDemo}
        onHide={() => setShowScheduleDemo(false)}
        centered
        className=""
        style={{
          maxWidth: "",
          width: "100%",
          margin: "",
          alignSelf: "center",
          right: "0",
          left: "0",
          top: "0",
          bottom: "0",
        }}
      >
        <Modal.Body>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-xl rounded-xl shadow-lg p-10">
              <div className="flex justify-between items-center mb-4 w-full">
                <Modal.Title>Schedule a demo</Modal.Title>
                <button
                  onClick={() => setShowScheduleDemo(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="w-full">
                <p className="text-sm font-semibold">Select Date & Time</p>
                <div className="flex w-full p-5 mt-2 rounded-xl border border-gray-100 shadow">
                  <div className="flex flex-col items-start border-r border-gray-300 pr-4 mr-4">
                    <span className="text-gray-600 mb-2">Today</span>
                    {times.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimeClick(time)}
                        className={`py-2 px-4 rounded-md text-left w-full ${
                          selectedTime === time
                            ? "bg-blue-100 text-blue-700"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <Datepicker
                      inline
                      value={value}
                      onChange={setValue}
                      theme={customTheme}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <button
                  type="button"
                  className="w-full py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 mt-4"
                  onClick={() => setShowScheduleDemo(false)}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HelpCenter;
