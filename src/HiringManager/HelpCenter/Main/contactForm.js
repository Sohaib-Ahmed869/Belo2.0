import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <form className=" shadow-md rounded-xl p-10 mb-4 border border-gray-100">
        <div className="mb-4 w-full">
          <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-full">
              <label className="text-xs font-semibold mb-2">First Name</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-xs font-semibold mb-2">Last Name</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
            <label className="text-xs font-semibold mb-2">Email</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
        </div>
        <div className="mb-4">
          <label className="text-xs font-semibold mb-2">Message</label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              Agree to our{" "}
              <a href="/privacy-policy" className="text-blue-500">
                privacy policy
              </a>
            </span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
