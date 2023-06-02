import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Далее в разметке используем переменную для условного рендеринга
  {
    isOwn && (
      <button className="place__button-trash" onClick={handleDeleteClick} />
    );
  }
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="place">
      <button
        className="place__button-trash"
        onClick={handleDeleteClick}
        type="button"
      ></button>
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
          <p className="place__count-like" onClick={handleLikeClick}>
            {card.likes.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
