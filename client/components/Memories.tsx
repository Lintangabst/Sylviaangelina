'use client'
import React, { useState } from 'react';

const Memories: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [toggle, setToggle] = useState(false);

  const months = [
    ["/img/mar1.png", "/img/mar2.png", "/img/mar3.png", "/img/mar4.png", "/img/mar5.png", "/img/mar6.png"],
    ["/img/apr1.png", "/img/apr2.png", "/img/apr3.png", "/img/apr4.png"],
    ["/img/may1.png"],
    ["/img/jun1.png", "/img/jun2.png", "/img/jun3.png", "/img/jun4.png", "/img/jun5.png"],
    ["/img/jul4.png", "/img/jul1.png", "/img/jul3.png", "/img/jul2.png", "/img/jul5.png"],
    ["/img/aug1.png", "/img/aug2.png", "/img/aug3.png", "/img/aug4.png", "/img/aug5.png"],
    ["/img/sep1.png", "/img/sep2.png", "/img/sep3.png"],
    ["/img/oct2.png", "/img/oct1.png", "/img/oct5.png", "/img/oct3.png", "/img/oct4.png"],
    ["/img/nov3.png", "/img/nov2.png", "/img/nov1.png", "/img/nov4.png", "/img/nov5.png"],
    ["/img/des2.png", "/img/des1.png", "/img/des5.png", "/img/des3.png", "/img/des4.png"],
    ["/img/jan3.png", "/img/jan2.png", "/img/jan1.png", "/img/jan4.png"],
    ["/img/feb2.png", "/img/feb1.png"]
  ];

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? months.length - 1 : prev - 1));
    setToggle(!toggle);
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === months.length - 1 ? 0 : prev + 1));
    setToggle(!toggle);
  };

  return (
    <div className="mx-auto pb-16 text-center" id='Memories'>
      <div className="flex  justify-center items-center space-x-4 pb-4">
      {toggle ? (
          <hr className="my-2 w-1/2 border-pink-500" />
        ) : (
          <hr className="my-2 w-1/2 border-black" />
        )}
        <h2 className="text-xl font-homemadeApple font-bold">{getMonthName(currentMonth)} Moments</h2>
        {!toggle ? (
          <hr className="my-2 w-1/2 border-pink-500" />
        ) : (
          <hr className="my-2 w-1/2 border-black" />
        )}
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 lg:flex-row lg:space-x-4">
        {months[currentMonth].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${getMonthName(currentMonth)} ${index + 1}`}
            className="w-full lg:w-auto"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={prevMonth}>Previous</button>
        <button onClick={nextMonth}>Next</button>
      </div>
    </div>
  );
};

const getMonthName = (index: number): string => {
  const months = [
    "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"
  ];
  return months[index];
};

export default Memories;

