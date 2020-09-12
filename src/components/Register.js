import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Header from './Header'
import * as auth from './auth'

function Register () {
    const emailRef = React.useRef('');
    const passwordRef = React.useRef('');
    const history = useHistory()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        auth.register(data).then((res) => {
            if (res) {
                return history.push('/sign-in')
            }
            return console.log('message: Что-то пошло не так. Пожалуйста, повторите запрос')
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
        </main>
        </>
    );
};

export default Register;