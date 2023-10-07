import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function AddCardPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      buttonText={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
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
      />
      <span className="title-error popup__input-error"></span>
      <input
        id="url"
        className="popup__input popup__input_type_url"
        type="url"
        placeholder="Ссылка на картинку"
        name="add-url-input"
        required
      />
      <span className="url-error popup__input-error"></span>
    </PopupWithForm>
  );
}
