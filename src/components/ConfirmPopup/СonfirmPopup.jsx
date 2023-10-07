import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmPopup() {
  return (
    <PopupWithForm name={"confirm"} title={"Вы уверены?"} buttonText={"Да"} />
  );
}
