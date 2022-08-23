function Card({ card, onCardClick }) {
  return (
    <div className='card'>
      <img
        src={card.link}
        alt={card.name}
        className='card__image'
        onClick={() => {
          onCardClick(card)
        }}
      />
      <button className='card__delete-button'></button>
      <div className='card__title-container'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__like-container'>
          <button type='button' className='card__like-button'></button>
          <p className='card__like-volume'>{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
