import { useState, useEffect, useContext } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleClose() {
    setName(currentUser.name);
    setDescription(currentUser.about);
    onClose();
  }

  function handleInputChange(evt) {
    if (evt.target.id === "name") {
      setName(evt.target.value);
    } else if (evt.target.id === "about") {
      setDescription(evt.target.value);
    }
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
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
        onChange={handleInputChange}
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
        onChange={handleInputChange}
      />
      <span className="about-error popup__input-error"></span>
    </PopupWithForm>
  );
}
