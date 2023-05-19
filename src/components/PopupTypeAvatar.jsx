import React from 'react';

function PopupTypeAvatar({ onClose, isOpen }) {
  return (
    <section
      className={`popup popup_type_avatar ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container popup__container_type_avatar">
        <button
          className="popup__close popup__close_type_avatar"
          type="button"
          onClick={onClose}
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
          <button className="popup__save popup__save_type_avatar" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupTypeAvatar;
