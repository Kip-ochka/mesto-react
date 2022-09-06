import PopupWithForm from "./PopupWithForm";
import {useRef, useState} from "react";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
    const [inputValue, setInputValue] = useState('')
    const avatarInput = useRef()

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: inputValue,
        })
        avatarInput.current.value = ''
    }

    return (
        <PopupWithForm
            name='change-avatar'
            title='Обновить аватар'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className='form__formfield form__formfield_type_link'>
                <input
                    type='url'
                    className='form__input form__input_type_link'
                    placeholder='Ссылка на картинку'
                    id='avatar'
                    name='avatar'
                    required
                    ref={avatarInput}
                    onChange={handleChange}
                />
                <span className='form__input-error form__input-error_type_link'></span>
            </label>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;