import React, { useState } from "react";

const initialTemplates = [
  {
    title: "Template Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...",
  },
  {
    title: "Template Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...",
  },
  {
    title: "Template Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...",
  },
];

const Email = () => {
  const [templates, setTemplates] = useState(initialTemplates);

  const handleAddTemplate = () => {
    const newTemplate = {
      title: "New Template Title",
      description: "New template description...",
    };
    setTemplates([...templates, newTemplate]);
  };

  const handleEditTemplate = (index) => {
    // Placeholder for edit functionality
    console.log(`Edit template at index: ${index}`);
  };

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-2xl mb-4">Settings</h1>
      <p className="text-gray-500">
        Manage your account settings and preferences
      </p>

      <div className="mt-8">
        <h2 className="text-xl mb-4">Email Templates</h2>

        <div
          className="border-dashed border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center mb-6 cursor-pointer"
          onClick={handleAddTemplate}
        >
          <span className="text-blue-500">+ Add Email Template</span>
        </div>

        {templates.map((template, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4 border border-gray-100"
          >
            <div className="flex items-center">
              <input type="checkbox" className="mr-4 h-4 w-4" />
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <h3 className="text-lg font-medium">{template.title}</h3>
                  <button
                    className="text-gray-500 text-sm hover:text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full"
                    onClick={() => handleEditTemplate(index)}
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <p className="text-gray-500">{template.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Email;
