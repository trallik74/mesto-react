import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddCardPopup from "../AddCardPopup/AddCardPopup";
import ChangeAvatarPopup from "../ChangeAvatarPopup/ChangeAvatarPopup";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import ConfirmPopup from "../ConfirmPopup/СonfirmPopup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "#", link: "#" });

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen((state) => true);
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen((state) => true);
  }

  function onAddPlace() {
    setIsAddPlacePopupOpen((state) => true);
  }

  function onEditAvatar() {
    setIsEditAvatarPopupOpen((state) => true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen((state) => false);
    setIsAddPlacePopupOpen((state) => false);
    setIsEditAvatarPopupOpen((state) => false);
    setIsImagePopupOpen((state) => false);
    setSelectedCard({ name: "#", link: "#" });
  }

  return (
    <>
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
    </>
  );
}
