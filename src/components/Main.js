function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper">
            <img
              src="./images/icons/loading.svg"
              alt="Аватар профиля"
              className="profile__avatar"
            />
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__info">
            <div className="profile__text-container">
              <h1 className="profile__name">Загрузка...</h1>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__job">Загрузка...</p>
          </div>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>

      <section className="card-grid"></section>
    </main>
  )
}

export default Main
