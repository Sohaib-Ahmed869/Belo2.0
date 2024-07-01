import React from "react";

const content = {
  title: "BELO",
  link: "", // Example YouTube link
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat.`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat.`,
  ],
};

const TermsAccess = () => {
  return (
    <div className="w-full mx-auto px-10 py-8">
      <h1 className="text-3xl mb-4">Terms & Access</h1>
      <h2 className="text-xl mb-4">{content.title}</h2>
      {content.description.map((desc, index) => (
        <p key={index} className="mb-4">
          {desc}
        </p>
      ))}
    </div>
  );
};

export default TermsAccess;
