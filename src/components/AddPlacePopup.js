import PopupWithForm from "./PopupWithForm";
import {useForm} from "../hooks/useForm";
import {useEffect} from "react";


const AddPlacePopup = ({isOpen, onClose,onSubmit}) => {
    const cardData ={
        name:'',
        link:''
    }
    const {values, handleChange, setValues} = useForm(cardData)
    useEffect(() => {
        setValues(cardData);
    }, [])
    return (
        <PopupWithForm
            name='add-card'
            title='Новое место'
            buttonText='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
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
                    value={values.name}
                    onChange={handleChange}
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
                    value={values.link}
                    onChange={handleChange}
                />
                <span className='form__input-error form__input-error_type_link'></span>
            </label>
        </PopupWithForm>
    );
};

export default AddPlacePopup;