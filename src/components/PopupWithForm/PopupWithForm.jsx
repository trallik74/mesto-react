export default function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  children,
}) {
  return (
    <div
      className={
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__button popup__button_type_close"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}-form`}>
          {children}
          <button
            className="popup__button popup__button_type_submit"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
