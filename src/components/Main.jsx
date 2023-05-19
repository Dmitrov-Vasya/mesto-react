import React from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInformationUser(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__edit-avatar"
          type="button"
          onClick={onEditAvatar}
        >
          <img src={userAvatar} alt="Кусто" className="profile__avatar" />
        </button>
        <div className="profile__wrapper">
          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1>
            <button
              className="profile__edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__info-text">{userDescription}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
