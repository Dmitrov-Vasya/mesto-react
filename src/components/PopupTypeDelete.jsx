import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupTypeDelete({ onClose, isOpen }) {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      textButton={'Да'}
    ></PopupWithForm>
  );
}

export default PopupTypeDelete;
