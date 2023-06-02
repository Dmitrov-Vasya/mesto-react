import React from 'react';
import Card from './Card';
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  // React.useEffect(() => {
  //   Promise.all([api.getInformationUser(), api.getInitialCards()])
  //     .then(([user, cards]) => {
  //       setUserName(user.name);
  //       setUserDescription(user.about);
  //       setUserAvatar(user.avatar);
  //       setCards(cards);
  //     })
  //     .catch((err) => {
  //       console.log(err); // выведем ошибку в консоль
  //     });
  // }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__edit-avatar"
          type="button"
          onClick={onEditAvatar}
        >
          <img
            src={currentUser.avatar}
            alt="Кусто"
            className="profile__avatar"
          />
        </button>
        <div className="profile__wrapper">
          <div className="profile__info">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <button
              className="profile__edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__info-text">{currentUser.about}</p>
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
