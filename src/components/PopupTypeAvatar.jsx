import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupTypeAvatar({ onClose, isOpen }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      textButton={'Сохранить'}
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
    </PopupWithForm>
  );
}

export default PopupTypeAvatar;
