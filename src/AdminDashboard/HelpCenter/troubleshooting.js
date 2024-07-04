import React from "react";
import FAQ from "./Main/faq";
import ContactForm from "./Main/contactForm";

const faqs = [
    { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Question 4", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Question 5", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

const TroubleShooting = () => {
  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-3xl mb-4">Terms & Access</h1>
      <FAQ faqs={faqs} />
      <ContactForm />
    </div>
  );
};

export default TroubleShooting;
