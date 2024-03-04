import React, { useState } from 'react';
import Down from '@/public/nav.svg'

interface FAQ {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isRotated, setIsRotated] = useState(false);
  
  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="flex ml-44 mr-44  mb-6 flex-col justify-center bg-background mt-10 border  shadow-lg">
      <div className="flex p-6 h-20 transform origin-center transition duration-200 ease-out cursor-pointer" onClick={toggleAccordion}>
        <div className="font-base transform origin-center transition duration-200 ease-out  text-left">{question}</div>
        <Down onClick={handleClick}
          style={{ cursor: 'pointer', transition: 'transform 0.5s ease', transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
          className='absolute right-8'
        />
      </div>
      {isOpen && <div className="px-4 pb-4 text-base text-gray-500">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
