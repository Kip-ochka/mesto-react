import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <div className="popup popup_type_edit-profile">
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

        <div className="popup popup_type_opened-photo">
          <figure className="popup__container popup__container_type_opened-photo">
            <button
              type="button"
              className="popup__close-button popup__close-button_type_opened-photo"
            ></button>
            <img src="#" alt="Ваше фото" className="popup__opened-photo" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
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
        </div>
      </div>
    </div>
  )
}

export default App
