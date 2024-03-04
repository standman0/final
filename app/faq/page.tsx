"use client"
import Accordion from '@/app/component/accord'
import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import React from 'react';

interface FAQProps {
  question: string;
  answer:string | JSX.Element; 
}

const Faq: React.FC<FAQProps> = ({ question, answer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>{answer}</div>
    </div>
  );
};

// Define FAQ data
const faqs: FAQProps[] = [ // Use FAQProps[] to ensure TypeScript recognizes the type of answer correctly
  {
    question: 'What is myCircle and how does it work?',
    answer: 'myCircle allows users to create or join saving groups, socialize, and build a community of financially responsible connections and network. Users must download the app and complete their KYC to join or create circle groups.'
  },
  {
    question: 'How do I join a saving group?',
    answer: 'To join a saving group, you need to download the myCircle app, complete your KYC (Know Your Customer), and then search for available saving groups. Once you find a group that fits your requirements, you can request to join.'
  },
  {
    question: 'How do I join myCircle and what is needed from me?',
    answer: (
      <div>
       
        <ul>
            <li>1. Download the myCircle app on your Play Store or Apple Store.</li>
          <li>2. Complete the registration form and upload your KYC requirements - You would need a valid ID and a valid means of authorization, which can be your BVN or Social Security Number, and a selfie photo.</li>
          <li>3. Complete the form - We don’t store your BVN or any other financial data as they are only validated with the regulators for user verification.</li>
        </ul>
        Account verification of the account takes a maximum of 48 hours.
      </div>
    )
  },
  {
    question: 'How does my circle work and how do I create a circle groups and earns?',
    answer: (
      <div>
       
        <ul>
            <li>1.Go to create Circle</li>
          <li>2. Make a secure deposit into your wallet or shop with any of our partners to earn discount that auto credits you..</li>
          <li>3. Choose your type of savings (Target, Challenge or Fixed), select a circle  preference and select the circle privacy</li>
        </ul>
      
      </div>
    )
  },
  {
    question: 'Is my savings or investment balance exposed to everyone?',
    answer: 'myCircle is a user centric product and thus the power is in your hands to flaunt your affluence. You can make your profile public or private as yo deem fit but no one has access to your funds in savings or investment. myCircle is secured and safe and all funds are securely held up with our banks and investment partners with an added insurance.'
  },
  {
    question: 'Is my money accessible to others in the circle groups??',
    answer: 'Each circle groups have their peculiarity and unique terms but one thing that is common to all is the assurance that no one can access your funds. Your money remain yours and yours alone. At the end of circle group maturity, all funds and interest generated are reversed back to your checking wallet for onward saving rounds or withdrawal.'
  },
  {
    question: 'How flexible are the Circle groups, can i exit groups I created or joined?',
    answer: 'You can exit target and challenge based circle savings groups created or joined at any time, however if you exit or liquidate before the circle maturity date, you will be charged a penalty fee for breaking or exiting the group and this can affect your accountability and credibility star rating.'
  },
  {
    question: 'What other service does myCircle offer and how can i earn as a Creator?',
    answer: 'Knowing many earn too little to save, myCircle put your savings on autopilot through spending. As you earn discounts it os saved automatically. You can also save in multiple currencies, you can chat on circle thread groups, build great relationships and earn a percentage of the interest group if you are the creator of a circle with over 1,000 users'
  },
  // Add more FAQ items as needed
];


const Question: React.FC = () => {
  return (
    <>
      <div className="h-screen max-w-7xl mx-auto aria-label w-full bg-white">
        <Header />
        {/* Render each FAQ item from the array */}
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Question;
