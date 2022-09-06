import {useContext, useEffect, useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import {useForm} from "../hooks/useForm";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const user = useContext(CurrentUserContext)
    // const [name, setName] = useState(' ')
    // const [description, setDescription] = useState(' ')
    const {values, handleChange, setValues}  = useForm('')

    useEffect(() => {
        setValues(user.name);
        setValues(user.about);
    }, [user])

    // function handleChangeName(e) {
    //     setsetName(e.target.value)
    // }
    //
    // function handleChangeDescription(e) {
    //     setsetDescription(e.target.value)
    // }

     function handleSubmit (e) {
         e.preventDefault()
         onUpdateUser({
             values,
         })
     }

    return (
        <PopupWithForm
            name='edit-profile'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            // onSubmit={handleSubmit}
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
                    value={values}
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
                    value={values}
                    onChange={handleChange}
                />
                <span className='form__input-error form__input-error_type_about'></span>
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;