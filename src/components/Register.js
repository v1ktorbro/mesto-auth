import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

function Register () {
    return (
        <>
        <Header>
            <Link to='sign-in' className='login__signup login__signup_header' >Войти</Link>
        </Header>
        <main className='login' >
            <section className='login__enter'>
                <h2 className='login__title' >Регистрация</h2>
                <form className='login__form' >
                    <input type='email' placeholder='Email' className='login__input login__input_email' />
                    <input type='password' placeholder='Пароль' className='login__input login__input_pswd' />
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