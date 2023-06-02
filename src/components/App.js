import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupTypeEdit from './PopupTypeEdit';
import PopupTypeAdd from './PopupTypeAdd';
import ImagePopup from './PopupTypeImage';
import PopupTypeDelete from './PopupTypeDelete';
import PopupTypeAvatar from './PopupTypeAvatar';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import Card from './Card';
import '../index.css';
import { CurrentUserContext, currentUser } from '../context/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  //  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState();

  useEffect(() => {
    api
      .getInformationUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardDelete() {}

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupTypeEdit
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupTypeAdd isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupTypeDelete />
        <PopupTypeAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
      x
    </>
  );
}

export default App;
