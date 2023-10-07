import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
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
      />
      <span className="about-error popup__input-error"></span>
    </PopupWithForm>
  );
}
