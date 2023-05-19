import React from 'react';

function PopupTypeDelete({ onClose, isOpen }) {
  return (
    <section
      className={`popup popup_type_delete ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container popup__container_type_delete">
        <button
          className="popup__close popup__close_type_delete"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form
          action="./pages/index.js"
          name="delete"
          className="popup__form popup__form_type_delete"
          noValidate
        >
          <button className="popup__save popup__save_type_delete" type="submit">
            Да
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupTypeDelete;
