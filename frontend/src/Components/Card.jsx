import React from 'react';
import { Link } from 'react-router-dom';
//import Lung from '../images/Liver.jpeg';

const cardData = [
  
  {
    image: "https://medlineplus.gov/images/LiverDisease_share.jpg",
    category: "Medical Diagnosis",
    title: "Liver Disease Diagnosis",
    description: "Empower your health decisions with a cutting-edge solution for assessing liver-related health risks.",
    link: "/liver",
  },
  {
    image: "https://t3.ftcdn.net/jpg/06/06/29/34/360_F_606293479_9iTncv5OBYwY2RBMsFa6yTmIedXjR1VZ.jpg",
    category: "Medical Diagnosis",
    title: "Heart Disease Diagnosis",
    description: "Evaluate heart health and detect potential risks using advanced diagnostic algorithms.",
    link: "/heart",
  },
  {
    image: "https://media.istockphoto.com/id/1168180834/photo/man-with-a-brain-tumor.jpg?s=612x612&w=0&k=20&c=LJwD167RnmCbPE3vSlSuedPvmxI5Gvle9hMGgkDFwtw=",
    category: "Medical Diagnosis",
    title: "Brain Tumor Diagnosis",
    description: "Leverage AI to detect and classify brain tumors with high accuracy from medical imaging.",
    link: "/brain",
  },
  {
    image: "data:image/jpeg;base64,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",
    category: "Medical Diagnosis",
    title: "Diabetes Prediction",
    description: "Predict diabetes risk using a patient-centric approach powered by machine learning.",
    link: "/diabetes",
  },
];

export const Card = ({ refe }) => {
  return (
    <section ref={refe} className="text-gray-600 body-font bg-gray-100 py-12">
      <div className="container px-5 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-12">
          Our Technology
        </h1>
        <div className="flex flex-wrap -m-4 justify-center gap-y-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4 w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105"
            >
              <div className="h-full bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-blue-500">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {card.category}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-700 mb-3">
                    {card.description}
                  </p>
                  <div className="flex items-center flex-wrap justify-between">
                    <Link
                      to={card.link}
                      target={card.target || undefined}
                      className="text-blue-500 inline-flex items-center hover:underline"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
