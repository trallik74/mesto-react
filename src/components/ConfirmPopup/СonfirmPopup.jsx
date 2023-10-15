import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmPopup({ isOpen, onClose, card, onCardDelete }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name={"confirm"}
      title={"Вы уверены?"}
      buttonText={"Да"}
      isOpen={isOpen}
      onClose={onClose}
      card={card}
      onSubmit={handleSubmit}
    />
  );
}
