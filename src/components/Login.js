import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header'
import * as auth from './auth'

function Login ({handleLogin}) {
    const emailRef = React.useRef('');
    const passwordRef = React.useRef('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value) {
            return alert('Пожалуйста, введите email и пароль')
        }
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        auth.authorize(data).then((res) => {
            if (res.token) {
                emailRef.current.value = '';
                passwordRef.current.value = '';
                handleLogin()
                history.push('/my-profile');
            }
        })
        .catch((err) => {
            alert('Неправильные почта или пароль')
            return console.log(err)
        })
    };

    return (
        <>
        <Header>
            <Link to='sign-up' className='login__signup login__signup_header' >Регистрация</Link>
        </Header>
        <main className='login' >
            <section className='login__enter'>
                <h2 className='login__title' >Вход</h2>
                <form onSubmit={handleSubmit} className='login__form' >
                    <input ref={emailRef} type='email' placeholder='Email' className='login__input login__input_email' />
                    <input ref={passwordRef} type='password' placeholder='Пароль' className='login__input login__input_pswd' />
                    <button type='submit' className='login__btn-submit' >Войти</button>
                    <div className='login__block-signup'>
                        <p className='login__issue' >Еще не зарегистрированы? 
                            <Link to='sign-up' className='login__signup login__signup_form' > Регистрация</Link>
                        </p>
                    </div>
                </form>
            </section>
        </main>
        </>
    );
};

export default Login;
