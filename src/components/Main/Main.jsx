import { useContext, useEffect, useState } from "react";
import { api } from "../../utils/api";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  handleCardClick,
}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getAllCards()
      .then((card) => {
        setCards(card);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            alt="Аватар профиля"
            src={currentUser.avatar}
          />
          <button
            className="profile__edit-avatar"
            type="button"
            aria-label="Кнопка изменения аватара"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Кнопка изменения профиля"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавления карточки"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки с фотографиями">
        {cards.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            ownerId={card.owner._id}
            likes={card.likes}
            onCardClick={handleCardClick}
          />
        ))}
      </section>
    </main>
  );
}
