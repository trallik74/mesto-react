import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useEffect, useState } from "react";

export default function AddCardPopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlaceSubmit({
      name,
      link,
    });
  }

  function handleInputChange(evt) {
    if (evt.target.id === "title") {
      setName(evt.target.value);
    } else if (evt.target.id === "url") {
      setLink(evt.target.value);
    }
  }

  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      buttonText={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="title"
        className="popup__input popup__input_type_title"
        type="text"
        placeholder="Название"
        name="add-title-input"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleInputChange}
      />
      <span className="title-error popup__input-error"></span>
      <input
        id="url"
        className="popup__input popup__input_type_url"
        type="url"
        placeholder="Ссылка на картинку"
        name="add-url-input"
        required
        value={link}
        onChange={handleInputChange}
      />
      <span className="url-error popup__input-error"></span>
    </PopupWithForm>
  );
}
