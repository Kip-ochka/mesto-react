import {useEffect, useState, useContext} from 'react'
import loadAvatar from '../images/icons/loading.svg'
import api from '../utils/Api'
import Card from './Card'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [cards, setCards] = useState([])
    const user = useContext(CurrentUserContext)

    useEffect(() => {
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards)
            })
            .catch((err) => console.log(err))
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(item => item._id === user._id);
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c)
            );
        });
    }

    function handleCardDelete (card) {
        api.removeCard(card._id).then(setCards(cards.filter(item=>item._id!==card._id)))
    }

    return (
        <main className='main'>
            <section className='profile'>
                <div className='profile__wrapper'>
                    <div className='profile__avatar-wrapper'>
                        <img
                            src={user.avatar ? user.avatar : loadAvatar}
                            alt='Аватар профиля'
                            className='profile__avatar'
                        />
                        <div
                            className='profile__avatar-overlay'
                            onClick={onEditAvatar}
                        ></div>
                    </div>
                    <div className='profile__info'>
                        <div className='profile__text-container'>
                            <h1 className='profile__name'>{user.name ? user.name : 'Загрузка...'}</h1>
                            <button
                                type='button'
                                className='profile__edit-button'
                                onClick={onEditProfile}
                            ></button>
                        </div>
                        <p className='profile__job'>{user.about ? user.about : 'Загрузка...'}</p>
                    </div>
                </div>
                <button
                    type='button'
                    className='profile__add-button'
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className='card-grid'>
                {cards.map((card) => {
                    return <Card card={card} onCardClick={onCardClick} key={card._id} user={user}
                                 onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                })}
            </section>
        </main>
    )
}

export default Main
