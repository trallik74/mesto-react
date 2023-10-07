import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Card from "../Card/Card";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick}) {
  const [userName, setUsername] = useState("unknown");
  const [userDescription, setUserDescription] = useState("unknown");
  const [userAvatar, setUserAvatar] = useState(
    "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg"
  );
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllCards()])
      .then(([user, card]) => {
        setUsername(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setUserId(user._id);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            alt="Аватар профиля"
            src={userAvatar}
          />
          <button
            className="profile__edit-avatar"
            type="button"
            aria-label="Кнопка изменения аватара"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Кнопка изменения профиля"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавления карточки"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки с фотографиями">
        {cards.map((_, i) => (
          <Card
            key={cards[i]._id}
            name={cards[i].name}
            link={cards[i].link}
            ownerId={cards[i].owner._id}
            likes={cards[i].likes}
            userId={userId}
            onCardClick={handleCardClick}
          />
        ))}
      </section>
    </main>
  );
}
