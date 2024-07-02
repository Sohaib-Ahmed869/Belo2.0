import React, { useState } from "react";
import FAQ from "./faq";
import ContactForm from "./contactForm";
import Card from "./card";

const cards = [
  { title: "Getting Started", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." },
  { title: "Using BELO", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." },
  { title: "Subscription & Billing", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." },
  { title: "Teams & Access", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." },
  { title: "Integrations", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." },
  { title: "Trouble Shooting", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor." }
];

const faqs = [
  { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Question 4", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Question 5", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const HelpCenter = () => {
  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-4xl font-bold text-center">Help Center</h1>
      <p className="text-center mt-2 mb-8">How can we help you today?</p>
      <div className="text-center mb-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Schedule a demo</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mx-24">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <FAQ faqs={faqs} />
      <ContactForm />
    </div>
  );
};

export default HelpCenter;
