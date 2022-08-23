import { useEffect, useState } from 'react'
import loadAvatar from '../images/icons/loading.svg'
import api from './Api'
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('Загрузка...')
  const [userDescription, setUserDescription] = useState('Загрузка...')
  const [userAvatar, setUserAvatar] = useState(loadAvatar)
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(initialCards)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__wrapper'>
          <div className='profile__avatar-wrapper'>
            <img
              src={userAvatar}
              alt='Аватар профиля'
              className='profile__avatar'
            />
            <div
              className='profile__avatar-overlay'
              onClick={onEditProfile}
            ></div>
          </div>
          <div className='profile__info'>
            <div className='profile__text-container'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                type='button'
                className='profile__edit-button'
                onClick={onEditAvatar}
              ></button>
            </div>
            <p className='profile__job'>{userDescription}</p>
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
          return <Card card={card} onCardClick={onCardClick} key={card._id} />
        })}
      </section>
    </main>
  )
}

export default Main
