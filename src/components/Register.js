import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import * as auth from './auth';
import InfoTooltip from './InfoTooltip';

function Register ({ handleRegister }) {
  const emailRef = React.useRef('');
  const passwordRef = React.useRef('');
  const [error, setError] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError(false);
    if(!emailRef.current.value || !passwordRef.current.value) {
      setMessageError('Пожалуйста, введите email и пароль');
      return setError(true);
    }
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    auth.register(data).then((res) => {
      //если пришли данные пользователя, то отправляем их в шапку и открываем главную страницу
      if (res.data) {
        return handleRegister(res.data);
      }
      //иначе записываем ошибку и возвращаем pop-up с этой ошибкой
      setMessageError(res.error || res.message);
      return setError(true);
    })

  };

  return (
    <>
    <Header>
        <Link to='sign-in' className='login__signup login__signup_header' >Войти</Link>
    </Header>
    <main className='login' >
      <section className='login__enter'>
        <h2 className='login__title' >Регистрация</h2>
        <form onSubmit={handleSubmit} className='login__form' >
          <input ref={emailRef} type='email' name='email' placeholder='Email' className='login__input login__input_email' />
          <input ref={passwordRef} type='password' name='password' placeholder='Пароль' className='login__input login__input_pswd' />
          <button type='submit' className='login__btn-submit' >Зарегистрироваться</button>
          <div className='login__block-signup'>
            <p className='login__issue' >Уже зарегистрированы? 
              <Link to='sign-up' className='login__signup login__signup_form' > Войти</Link>
            </p>
          </div>
        </form>
      </section>
      { error && <InfoTooltip success={false} message={messageError} /> }
    </main>
    </>
  );
};

export default Register;