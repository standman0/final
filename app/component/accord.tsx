import React, { useState } from 'react';
import Down from '@/public/nav.svg';

interface FAQ {
  question: string;
  answer: string | JSX.Element;
}

const AccordionItem: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <div className="flex flex-col bg-background mx-[1rem] mb-5 md:mx-[10rem] mt-6 md:mt-10 border shadow-lg">
      <div className="flex px-7 md:p-6 h-16 md:h-20 relative cursor-pointer" onClick={toggleAccordion}>
        <div className="font-base flex-1">{question}</div>
        <Down
          onClick={toggleAccordion}
          className="w-6 h-6 md:w-8 md:h-8 absolute top-1/2 right-4 -mt-3 transform transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      {isOpen && <div className="p-4 md:p-6 text-base text-gray-500">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
