import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="place">
      <button className="place__button-trash" type="button"></button>
      <img
        src={card.link}
        alt=""
        className="place__photo"
        onClick={handleClick}
      />
      <div className="place__background">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__wrapper">
          <button className="place__button-like" type="button"></button>
          <p className="place__count-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
