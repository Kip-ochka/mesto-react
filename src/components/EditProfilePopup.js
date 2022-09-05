import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({isOpen, onClose}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleChange(e) {
        console.log(e.target)
    }

    return (
        <PopupWithForm
            name='edit-profile'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
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
                    value={name}
                    onChange={handleChange}
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
                    value={description}
                    onChange={handleChange}
                />
                <span className='form__input-error form__input-error_type_about'></span>
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;