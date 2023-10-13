import { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ChangeAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  function handleClose() {
    onClose();
    inputRef.current.value = "";
  }

  return (
    <PopupWithForm
      name={"avatar-change"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-url"
        className="popup__input popup__input_type_url"
        type="url"
        placeholder="Ссылка на картинку"
        name="avatar-url-input"
        ref={inputRef}
        required
      />
      <span className="avatar-url-error popup__input-error"></span>
    </PopupWithForm>
  );
}
