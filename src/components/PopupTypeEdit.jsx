import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupTypeEdit({ onClose, isOpen }) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      textButton={'Сохранить'}
    >
      <label className="popup__field">
        <input
          id="name-input"
          className="popup__input popup__input_type_name"
          name="name"
          type="text"
          placeholder="Жак-Ив Кусто"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error popup__input-error">
          Необходимо заполнить данное поле
        </span>
      </label>
      <label className="popup__field">
        <input
          id="info-input"
          name="info"
          className="popup__input popup__input_type_info"
          type="text"
          placeholder="Исследователь океана"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="info-input-error popup__input-error">
          Необходимо заполнить данное поле
        </span>
      </label>
    </PopupWithForm>
  );
}

export default PopupTypeEdit;
