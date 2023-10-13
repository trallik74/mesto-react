import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(evt){
    if(evt.target.id === 'name'){
      setName(evt.target.value)
    }
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="name"
        className="popup__input popup__input_type_title"
        placeholder="Имя"
        type="text"
        name="edit-title-input"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className="name-error popup__input-error"></span>
      <input
        id="about"
        className="popup__input popup__input_type_subtitle"
        placeholder="О себе"
        type="text"
        name="edit-subtitle-input"
        minLength="2"
        maxLength="200"
        required
        value={description}
      />
      <span className="about-error popup__input-error"></span>
    </PopupWithForm>
  );
}
