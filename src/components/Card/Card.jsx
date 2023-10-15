import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Card({
  card,
  onCardClick,
  onCardLike,
  onCardDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked
    ? "element__like-button element__like-button_active"
    : "element__like-button";

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card);
  }

  return (
    <article className="element">
      {isOwn && (
        <button
          className="element__delete-button"
          type="button"
          aria-label="Кнопка удаления"
          onClick={handleDeleteClick}
        />
      )}
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={() => {
          onCardClick({ name: card.name, link: card.link });
        }}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-area">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Кнопка оценить"
            onClick={handleLikeClick}
          />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
