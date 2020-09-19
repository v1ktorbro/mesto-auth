/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function PopupWithForm({
  title, name, inputSignature,
  children, isOpen, onClose,
  onSubmit, isForm,
}) {
  return (
    <section className={`popup-${name} popup ${!isOpen && 'popup_closed'}`}>
      <form name={name} className="popup__container" onSubmit={onSubmit} noValidate>
        <span className="popup__close" onClick={onClose} />
        { isForm && <h2 className="popup__title">{title}</h2> }
        {children}
        { isForm && (
        <button type="submit" className="popup__input-save">
          <p className="popup__text-color">{inputSignature}</p>
        </button>
        ) }
      </form>
    </section>
  );
}

export default PopupWithForm;
