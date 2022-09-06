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

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    const [currentUser, setCurrentUser] = useState(false)

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
        api.setUserInfo(userInfo).then(newUserData=>{
            setCurrentUser(newUserData)
            closeAllPopup()
        }).catch(e=>console.log(e))
    }
    function closeAllPopup() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='App'>
                <div className='page'>
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                    />
                    <Footer/>
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>
                    <PopupWithForm
                        name='add-card'
                        title='Новое место'
                        buttonText='Создать'
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopup}
                    >
                        <label className='form__formfield form__formfield_type_place-name'>
                            <input
                                type='text'
                                className='form__input form__input_type_place-name'
                                placeholder='Название'
                                id='name'
                                name='name'
                                required
                                minLength='2'
                                maxLength='40'
                            />
                            <span className='form__input-error form__input-error_type_name'></span>
                        </label>
                        <label className='form__formfield form__formfield_type_link'>
                            <input
                                type='url'
                                className='form__input form__input_type_link'
                                placeholder='Ссылка на картинку'
                                id='link'
                                name='link'
                                required
                            />
                            <span className='form__input-error form__input-error_type_link'></span>
                        </label>
                    </PopupWithForm>
                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} />
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
