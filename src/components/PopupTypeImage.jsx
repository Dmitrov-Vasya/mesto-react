import React from 'react';

function PopupTypeImage() {
  return (
    <section className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close popup__close_type_image"
          type="button"
        ></button>
        <img src="#" alt="" className="popup__picture" />
        <p className="popup__text"></p>
      </div>
    </section>
  );
}

export default PopupTypeImage;
