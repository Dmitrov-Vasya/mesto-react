import React, { useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function PopupTypeEdit({ onClose, isOpen, onUpdateUser }) {
  // Подписка на контекст
  // const currentUser = useContext(CurrentUserContext);
  // const [value, setValue] = useState({});
  // // После загрузки текущего пользователя из API
  // // его данные будут использованы в управляемых компонентах.
  // useEffect(() => {
  //   name: currentUser.name;
  //   about: currentUser.about;
  // }, [currentUser]);

  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();

  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   onUpdateUser(value);
  //   setValue({ [evt.target.name]: '' });
  // }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      // onSubmit={handleSubmit}
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
