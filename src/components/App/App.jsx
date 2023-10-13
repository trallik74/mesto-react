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
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState({ name: "#", link: "#" });

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
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
    setSelectedCard({ name: "#", link: "#" });
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Header />
          <Main
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            handleCardClick={handleCardClick}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ChangeAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
