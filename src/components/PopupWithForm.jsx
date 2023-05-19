import React from 'react';

function PopupWithForm({
  name,
  popup,
  title,
  children,
  forma,
  onClose,
  isOpen,
}) {
  return (
    <section className="popup popup_type_add">
      <div className="popup__container popup__container_type_add">
        <button
          className="popup__close popup__close_type_add"
          type="button"
        ></button>
        <h2 className="popup__title popup__title_type_add">Новое место</h2>
        <form
          action="./pages/index.js"
          name="card"
          className="popup__form popup__form_type_add"
          noValidate
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
            />
            <span className="url-input-error popup__input-error">
              Необходимо заполнить данное поле
            </span>
          </label>
          <button className="popup__save popup__save_type_add" type="submit">
            Создать
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
