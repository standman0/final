import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex mb-6 flex-col justify-center bg-background border border-solid border-grayscale-600">
      <div className="flex p-6 h-20 transform origin-center transition duration-200 ease-out cursor-pointer" onClick={toggleAccordion}>
        <div className="font-base transform origin-center transition duration-200 ease-out  text-left">{question}</div>

      </div>
      {isOpen && <div className="px-4 pb-4 text-base text-gray-500">{answer}</div>}
    </div>
  );
};

const FAQPage: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },
    {
      question: 'What is myCircle and how does it work?',
      answer:
        'myCircle allows users to create or join saving groups, socialize & build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.',
    },

  ];

  return (
    <div className="grid h-fit mb-16 mt-10 ml-44 ">
    <div className="max-w-4xl  overflow-hidden  text-base font-medium">
      <div className="text-base">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
