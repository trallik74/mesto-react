import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ChangeAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name={"avatar-change"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="avatar-url"
        className="popup__input popup__input_type_url"
        type="url"
        placeholder="Ссылка на картинку"
        name="avatar-url-input"
        required
      />
      <span className="avatar-url-error popup__input-error"></span>
    </PopupWithForm>
  );
}
