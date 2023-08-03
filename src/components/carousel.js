import React, { useState } from 'react';
import Card from './card'; // Import the Card component

const Carousel = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const data = [
    { id: 1, title: 'Card 1', image: 'image1.jpg', description: 'Some text for Card 1' },
    { id: 2, title: 'Card 2', image: 'image2.jpg', description: 'Some text for Card 2' },
    { id: 3, title: 'Card 3', image: 'image3.jpg', description: 'Some text for Card 3' },
    { id: 1, title: 'Card 1', image: 'image1.jpg', description: 'Some text for Card 1' },
    { id: 2, title: 'Card 2', image: 'image2.jpg', description: 'Some text for Card 2' },
    { id: 3, title: 'Card 3', image: 'image3.jpg', description: 'Some text for Card 3' },
    { id: 1, title: 'Card 1', image: 'image1.jpg', description: 'Some text for Card 1' },
    { id: 2, title: 'Card 2', image: 'image2.jpg', description: 'Some text for Card 2' },
    { id: 3, title: 'Card 3', image: 'image3.jpg', description: 'Some text for Card 3' },
    { id: 1, title: 'Card 1', image: 'image1.jpg', description: 'Some text for Card 1' },
    { id: 2, title: 'Card 2', image: 'image2.jpg', description: 'Some text for Card 2' },
    { id: 3, title: 'Card 3', image: 'image3.jpg', description: 'Some text for Card 3' },
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
          <Card key={card.id} title={card.title} image={card.image} description={card.description} />
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
