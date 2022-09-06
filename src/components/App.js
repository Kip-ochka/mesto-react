import {useEffect, useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])
    const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard

    useEffect(() => {
        function closeByEscape(evt) {if(evt.key === 'Escape') {closeAllPopup();}}
        if(isOpen) {
            document.addEventListener('keydown', closeByEscape);
            return () => {
                document.removeEventListener('keydown', closeByEscape);
            }
        }
    }, [isOpen])

    useEffect(() => {
        api.getUserInfo().then(userData => {
            setCurrentUser(userData)
        }).catch(err => console.log(err))
    }, [])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setIsImagePopupOpen(true)
    }

    function handleUpdateUser(userInfo) {
        api.setUserInfo(userInfo.values).then(newUserData => {
            setCurrentUser(newUserData)
            closeAllPopup()
        }).catch(e => console.log(e))
    }

    function handleUpdateAvatar(avatar) {
        api.updateAvatar(avatar).then(newUserAvatar => {
            setCurrentUser(newUserAvatar)
            closeAllPopup()
        }).catch(e => console.log(e))
    }

    function handleAddCard(cardData) {
        api.addCard(cardData.values).then(newCard => {
            setCards([newCard, ...cards])
            closeAllPopup()
        }).catch(e => console.log(e))
    }

    function closeAllPopup() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }

    useEffect(() => {
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards)
            })
            .catch((err) => console.log(err))
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(item => item._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        }).catch((err) => console.log(err))
    }

    function handleCardDelete(card) {
        api.removeCard(card._id)
            .then(setCards(cards.filter(item => item._id !== card._id)))
            .catch((err) => console.log(err))
    }

    return (<CurrentUserContext.Provider value={currentUser}>
            <div className='App'>
                <div className='page'>
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        handleCardLike={handleCardLike}
                        handleCardDelete={handleCardDelete}
                    />
                    <Footer/>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup}
                                      onUpdateUser={handleUpdateUser}/>
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} onAddCard={handleAddCard}/>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}
                                     onUpdateAvatar={handleUpdateAvatar}/>
                    <PopupWithForm
                        name='confirm'
                        title='Вы уверены?'
                        buttonText='Да'
                        onClose={closeAllPopup}
                    ></PopupWithForm>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopup}
                        isOpen={isImagePopupOpen}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>

    )
}

export default App
