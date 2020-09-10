import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'

function Login ({ username, password }) {
    const [state, setState] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setState({
            [name]: value
        });
    };

    return (
        <>
        <Header>
            <Link to='sign-up' className='login__signup login__signup_header' >Регистрация</Link>
        </Header>
        <main className='login' >
            <section className='login__enter'>
                <h2 className='login__title' >Вход</h2>
                <form className='login__form' >
                    <input type='email' placeholder='Email' className='login__input login__input_email' />
                    <input type='password' placeholder='Пароль' className='login__input login__input_pswd' />
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
