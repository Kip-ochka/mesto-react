function Card({ card }) {
  return (
    <div class="card">
      <img src={card.link} alt="Картинка" class="card__image" />
      <button className="card__delete-button"></button>
      <div className="card__title-container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button"></button>
          <p className="card__like-volume">{card.likes.langth}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
