import React from 'react';

function PopupTypeImage({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_add ${card._id ? 'popup_opened' : ''}`}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close popup__close_type_image"
          type="button"
          onClick={onClose}
        ></button>
        <img src={card.link} alt="" className="popup__picture" />
        <p className="popup__text">{card.name}</p>
      </div>
    </section>
  );
}

export default PopupTypeImage;
