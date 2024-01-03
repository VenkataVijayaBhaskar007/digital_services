import React, { useEffect, useState } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const initialCards: Card[] = [
  // ... (unchanged)
];

const CardsGallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    setSelectedCard((prevSelectedCard) =>
      prevSelectedCard === cardId ? null : cardId
    );
  };

  return (
    <div className="container">
      <ul className="card-track">
        {initialCards.map((card) => (
          <li key={card.id} className={`card ${selectedCard === card.id ? 'selected' : ''}`}>
            <img src={card.image} alt={card.title} className="card__hero" />
            <div className="card__content-mark">
              <div className="card__content">
                <h1 className="card__title">{text(Math.floor(Math.random() * 9) + 1)}</h1>
                {selectedCard === card.id && (
                  <>
                    <p>{card.description}</p>
                    <h2 className="card__author">TIMOTHY JOHNSTON</h2>
                  </>
                )}
              </div>
            </div>
            <div className="card__avatar"></div>
          </li>
        ))}
      </ul>
      <div className="card-actions">
        
       
      </div>
    </div>
  );
};

export default CardsGallery;

const text = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
};
