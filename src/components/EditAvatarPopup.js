import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({}) => {
    return (
        <PopupWithForm
            name='change-avatar'
            title='Обновить аватар'
            buttonText='Сохранить'

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
    );
};
//isOpen={isEditAvatarPopupOpen}
//onClose={closeAllPopup}
export default EditAvatarPopup;