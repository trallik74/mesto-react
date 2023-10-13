import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";


export default function Card({
  name,
  link,
  likes,
  ownerId,
  onCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = ownerId === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (isLiked ? 'element__like-button element__like-button_active' : 'element__like-button');

  return (
    <article className="element">
      {isOwn && (
        <button
          className="element__delete-button"
          type="button"
          aria-label="Кнопка удаления"
        />
      )}
      <img
        className="element__image"
        alt={name}
        src={link}
        onClick={() => {
          onCardClick({ name, link });
        }}
      />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-area">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Кнопка оценить"
          />
          <span className="element__like-counter">{likes.length}</span>
        </div>
      </div>
    </article>
  );
}
