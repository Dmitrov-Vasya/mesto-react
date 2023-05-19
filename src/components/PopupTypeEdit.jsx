import React from 'react';

function PopupTypeEdit({ onClose, isOpen }) {
  return (
    <section
      className={`popup popup_type_edit ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button
          className="popup__close popup__close_type_edit"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          action="./pages/index.js"
          name="profile"
          className="popup__form"
          noValidate
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
          <button className="popup__save" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupTypeEdit;
