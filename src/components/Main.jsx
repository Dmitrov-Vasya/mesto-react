import React from 'react';
import profileAvatar from '../images/Kysto.jpg';
import PopupTypeAvatar from './PopupTypeAvatar';

function Main() {
  const profileEditAvatarButton = document.querySelector(
    '.profile__edit-avatar'
  );
  const Maine = document.querySelector('.main');

  const popupTypeAvatar = document.querySelector('.popup_type_avatar');
  console.log(popupTypeAvatar);
  function handleEditAvatarClick() {
    popupTypeAvatar.classList.add('popup_opened');
  }
  // profileEditAvatarButton.addEventListener('click', handleEditAvatarClick);
  // const handleEditAvatarClick = () => {
  //   openPopup(popupTypeAvatar);
  // };
  // const handleEditProfileClick = document.querySelector('.profile__edit');
  // const handleAddPlaceClick = document.querySelector('.profile__add');

  return (
    <>
      <main className="main">
        <section className="profile">
          <button
            className="profile__edit-avatar"
            type="button"
            onClick={handleEditAvatarClick}
          >
            <img src={profileAvatar} alt="Кусто" className="profile__avatar" />
          </button>
          <div className="profile__wrapper">
            <div className="profile__info">
              <h1 className="profile__info-name">Василий</h1>
              <button className="profile__edit" type="button"></button>
            </div>
            <p className="profile__info-text">Будущий Веб-разработчик</p>
          </div>
          <button className="profile__add" type="button"></button>
        </section>
        <section className="places"></section>
      </main>
      <section className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_avatar">
          <button
            className="popup__close popup__close_type_avatar"
            type="button"
          ></button>
          <h2 className="popup__title popup__title_type_avatar">
            Обновить аватар
          </h2>
          <form
            action="./pages/index.js"
            name="avatar"
            className="popup__form popup__form_type_avatar"
            noValidate
          >
            <label className="popup__field">
              <input
                id="avatar-input"
                name="link"
                className="popup__input popup__input_type_url"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="avatar-input-error popup__input-error">
                Необходимо заполнить данное поле
              </span>
            </label>
            <button
              className="popup__save popup__save_type_avatar"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Main;
