import React from 'react'
import PopupWithForm from './PopupWithForm'
import loginSuccess from '../images/login-success.svg'
import loginFail from '../images/login-fail.svg'

function InfoTooltip () {
    return (
        <PopupWithForm 
            name='tool-tip'
            form={false}
            isOpen={true}
        >
            <img className='tool-tip__image' src={loginSuccess} alt='картинка о успешной (или нет) регистрации' />
            <h2 className='tool-tip__title' >Вы успешно зарегистировались!</h2>
        </PopupWithForm>
    );
};

export default InfoTooltip;