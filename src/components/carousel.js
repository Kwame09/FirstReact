import React, { useState } from 'react';

const Carousel = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const data = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    // Add more cards here as needed
  ];

  const sets = [
    data.slice(0, 3),
    data.slice(3, 6),
    data.slice(6, 9),
    data.slice(9),
  ];

  const handleClick = (setNumber) => {
    setCurrentSet(setNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        {sets[currentSet - 1].map((card) => (
          <div key={card.id} className="bg-gray-300 rounded p-4">
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        {[1, 2, 3, 4].map((setNumber) => (
          <button
            key={setNumber}
            className={`w-4 h-4 rounded-full ${
              setNumber === currentSet ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleClick(setNumber)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
