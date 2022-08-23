import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

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

  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          buttonText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
        >
          <label className='form__formfield form__formfield_type_name'>
            <input
              type='text'
              className='form__input form__input_type_name'
              placeholder='Имя'
              id='profilename'
              name='name'
              minLength='2'
              maxLength='40'
              required
            />
            <span className='form__input-error form__input-error_type_name'></span>
          </label>
          <label className='form__formfield form__formfield_type_job '>
            <input
              type='text'
              className='form__input form__input_type_job'
              placeholder='О себе'
              id='about'
              name='about'
              minLength='2'
              maxLength='200'
              required
            />
            <span className='form__input-error form__input-error_type_about'></span>
          </label>
        </PopupWithForm>
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
        <PopupWithForm
          name='change-avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <label className='form__formfield form__formfield_type_link'>
            <input
              type='url'
              className='form__input form__input_type_link'
              placeholder='Ссылка на картинку'
              id='avatar'
              name='avatar'
              required
            />
            <span className='form__input-error form__input-error_type_link'></span>
          </label>
        </PopupWithForm>
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
        {/* <div className="popup popup_type_edit-profile">
          <div className="popup__container popup__container_type_edit">
            <button
              type="button"
              className="popup__close-button popup__close-button_type_edit"
            ></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form name="profile" className="form form_type_edit-profile">
              <fieldset className="form__fieldset">
                <label className="form__formfield form__formfield_type_name">
                  <input
                    type="text"
                    className="form__input form__input_type_name"
                    placeholder="Имя"
                    id="profilename"
                    name="name"
                    minLength="2"
                    maxLength="40"
                    required
                  />
                  <span className="form__input-error form__input-error_type_name"></span>
                </label>
                <label className="form__formfield form__formfield_type_job ">
                  <input
                    type="text"
                    className="form__input form__input_type_job"
                    placeholder="О себе"
                    id="about"
                    name="about"
                    minLength="2"
                    maxLength="200"
                    required
                  />
                  <span className="form__input-error form__input-error_type_about"></span>
                </label>
              </fieldset>
              <button
                type="submit"
                className="form__button form__button_type_edit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_add-card">
          <div className="popup__container popup__container_type_add">
            <button
              type="button"
              className="popup__close-button popup__close-button_type_add"
            ></button>
            <h3 className="popup__title">Новое место</h3>
            <form name="addcard" className="form form_type_add-card">
              <fieldset className="form__fieldset">
                <label className="form__formfield form__formfield_type_place-name">
                  <input
                    type="text"
                    className="form__input form__input_type_place-name"
                    placeholder="Название"
                    id="name"
                    name="name"
                    required
                    minLength="2"
                    maxLength="40"
                  />
                  <span className="form__input-error form__input-error_type_name"></span>
                </label>
                <label className="form__formfield form__formfield_type_link">
                  <input
                    type="url"
                    className="form__input form__input_type_link"
                    placeholder="Ссылка на картинку"
                    id="link"
                    name="link"
                    required
                  />
                  <span className="form__input-error form__input-error_type_link"></span>
                </label>
              </fieldset>
              <button
                type="submit"
                className="form__button form__button_type_add"
              >
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_confirm">
          <div className="popup__container popup__container_typer_confirm">
            <button
              type="button"
              className="popup__close-button popup__close-button_type_confirm"
            ></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <form name="confirm" className="form form_type_confirm" noValidate>
              <button
                type="submit"
                className="form__button form__button_type_confirm"
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container popup__container_typer_avatar">
            <button
              type="button"
              className="popup__close-button popup__close-button_type_avatar"
            ></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form name="avatar" className="form form_type_avatar" noValidate>
              <label className="form__formfield form__formfield_type_link">
                <input
                  type="url"
                  className="form__input form__input_type_link"
                  placeholder="Ссылка на картинку"
                  id="avatar"
                  name="avatar"
                  required
                />
                <span className="form__input-error form__input-error_type_link"></span>
              </label>
              <button
                type="submit"
                className="form__button form__button_type_avatar"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default App
