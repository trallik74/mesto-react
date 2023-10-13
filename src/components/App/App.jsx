import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddCardPopup from "../AddCardPopup/AddCardPopup";
import ChangeAvatarPopup from "../ChangeAvatarPopup/ChangeAvatarPopup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import ConfirmPopup from "../ConfirmPopup/СonfirmPopup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [selectedCard, setSelectedCard] = useState({ name: "#", link: "#" });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsList()])
      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);
      })
      .catch(console.error);
  }, []);

  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo({ name, about })
      .then((user) => {
        setCurrentUser(user);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .changeAvatar(avatar)
      .then((user) => {
        setCurrentUser(user);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header />
          <Main
            cards={cards}
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            handleCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ChangeAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ConfirmPopup />
        <ImagePopup
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
          selectedCard={selectedCard}
        />
      </CurrentUserContext.Provider>
    </>
  );
}
