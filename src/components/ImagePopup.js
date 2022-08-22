function ImagePopup() {
  return (
    <div className="popup popup_type_opened-photo">
      <figure className="popup__container popup__container_type_opened-photo">
        <button
          type="button"
          className="popup__close-button popup__close-button_type_opened-photo"
        ></button>
        <img src="#" alt="Ваше фото" className="popup__opened-photo" />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup
