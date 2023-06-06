import PopupWithForm from './PopupWithForm';
import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setLink(currentUser.link);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      textButton={'Сохранить'}
    >
      <label className="popup__field">
        <input
          id="title-input"
          className="popup__input popup__input_type_title"
          name="name"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          onChange={handleChangeName}
          value={name || ''}
        />
        <span className="title-input-error popup__input-error">
          Необходимо заполнить данное поле
        </span>
      </label>
      <label className="popup__field">
        <input
          id="url-input"
          name="link"
          className="popup__input popup__input_type_url"
          type="url"
          placeholder="Ссылка на картинку"
          required
          onChange={handleChangeLink}
          value={link || ''}
        />
        <span className="url-input-error popup__input-error">
          Необходимо заполнить данное поле
        </span>
      </label>
    </PopupWithForm>
  );
}
