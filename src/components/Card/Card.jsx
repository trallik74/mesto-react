export default function Card(
  { name, link, userId, likes, ownerId, onCardClick },
  key
) {
  return (
    <article className="element" key={key}>
      {ownerId === userId && (
        <button
          className="element__delete-button"
          type="button"
          aria-label="Кнопка удаления"
        />
      )}
      <img className="element__image" alt={name} src={link} onClick={() => {
        onCardClick({name, link})
      }}/>
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-area">
          <button
            className="element__like-button"
            type="button"
            aria-label="Кнопка оценить"
          />
          <span className="element__like-counter">{likes.length}</span>
        </div>
      </div>
    </article>
  );
}
