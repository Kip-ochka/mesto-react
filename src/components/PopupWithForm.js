function PopupWithForm({ name, title, children, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        <form name={name} className="form">
          <fieldset className="form__fieldset">{children}</fieldset>
          <button type="submit" className="form__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
