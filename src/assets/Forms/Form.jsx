import React, { useState, useRef, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AiOutlinePhone, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios';
import './form.scss'

const Form = () => {
    const [showPusto, setShowPusto] = useState(true);
    const [activeClass, setActiveClass] = useState('pusto');
    const [activeLink, setActiveLink] = useState('login');


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm(
        { mode: "onBlur" }
    )

    const [password, setPassword] = useState(false)
    const passwordconf = useRef()
    passwordconf.current = watch('password')
    console.log(passwordconf);
    const registerUser = (newUser) => {
        axios.post('http://localhost:3000/register', newUser)
            .then((res) => console.log(res))
            .catch((err) => alert(err.message))
    }
    const loginUser = (newUser) => {
        axios.post('http://localhost:3000/login', newUser)
            .then((res) => console.log(res))
            .catch((err) => alert(err.message))
    }
    const submitForm = (data) => {
        let { confpassword, ...user } = data
        if (loaction.pathname === '/login') {
            loginUser(user)
        } else {
            registerUser(user)
        }
        console.log(user);
    }


    const toggleClass = () => {
        setActiveClass(activeClass === 'pusto' ? 'blue_gal' : 'pusto');
    };

    const toggleClasss = () => {
        setShowPusto(!showPusto);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const loaction = useLocation()

    return (
        <div className="form">
            <div className="container">
                <form className='form1' onSubmit={handleSubmit(submitForm)}>
                    <div className="regiter_and_login">
                        <Link
                            className={`link1 ${location.pathname === '/login' ? 'active' : ''}`}
                            to={'/login'}
                            style={location.pathname === '/login' ? { borderBottom: '3px solid #297FFF' } : {
                                borderBottom: '1px solid black'
                            }}
                        >
                            Вход
                        </Link>
                        <Link
                            className={`link2 ${location.pathname === '/register' ? 'active' : ''}`}
                            to={'/register'}
                            style={location.pathname === '/register' ? { borderBottom: '3px solid #297FFF' } : { borderBottom: '1px solid black' }}
                        >
                            Регистрация
                        </Link>
                    </div>
                    {
                        loaction.pathname === '/register' && <label>Имя*
                            <div className='div'>
                                <input type="text"
                                    placeholder='Введите имя'
                                    {...register('name', {
                                        required: {
                                            message: "Username обязательно к заполнению",
                                            value: true
                                        },
                                        minLength: {
                                            message: "Минимум 2 симвилов",
                                            value: 2
                                        }
                                    })}
                                />
                            </div>
                            <p style={{ color: "red" }}>{errors.name && errors.name?.message}</p>
                        </label>
                    }
                    <label>Номер телефона*
                        <div className='div'>
                            <input type="tel"
                                placeholder='Введите номер телефона'
                                {...register('number', {
                                    required: {
                                        message: "Phone обязательно к заполнению",
                                        value: true
                                    },
                                    minLength: {
                                        message: "Минимум 9 симвилов",
                                        value: 10
                                    },
                                    pattern: {
                                        message: "Правильно укажите номер тел",
                                        // value:/^(0|+996)[0-9]{9,12}$/
                                    }
                                })}
                            />
                        </div>
                        <p style={{ color: "red" }}>{errors.number && errors.number?.message}</p>
                    </label>
                    {
                        loaction.pathname === '/register' &&
                        <label>E-mail
                            <div className='div'>
                                <input type="email"
                                    placeholder='Введите E-mail'
                                    {...register('email', {
                                        required: {
                                            message: "Email обязательно к заполнению",
                                            value: true
                                        },
                                        minLength: {
                                            message: "Минимум 10 симвилов",
                                            value: 10
                                        },
                                        pattern: {
                                            message: "Напишите правиной eamil",
                                            value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                        }
                                    })}
                                />
                            </div>
                            <p style={{ color: "red" }}>{errors.email && errors.email?.message}</p>
                        </label>
                    }


                    <label>Пароль*
                        <div className='div'>
                            <input type={password ? 'text' : "password"}
                                placeholder='Введите пароль'
                                {...register('password', {
                                    required: {
                                        message: "Password обязательно к заполнению",
                                        value: true
                                    },
                                    minLength: {
                                        message: "Минимум 6 симвилов",
                                        value: 6
                                    },
                                    pattern: {
                                        message: "Хотя бы одна заглавная английская буква ,   Хотя бы одна строчная английская буква,    Хотя бы одну цифру,    По крайней мере, один специальный символ,",
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                    }
                                })}

                            />
                            <span className='eye' onClick={() => setPassword(prev => !prev)}>
                                {
                                    password ? <AiFillEye /> : <AiFillEyeInvisible />
                                }
                            </span>
                        </div>
                        <p style={{ color: "red" }}>{errors.password && errors.password?.message}</p>
                    </label>
                    {
                        loaction.pathname === '/register' && <div className="soglacia_for">
                            {showPusto && (
                                <span className='pusto' onClick={toggleClasss}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" stroke="#DDE3EB" />
                                </svg>
                                </span>
                            )}
                            {!showPusto && (

                                <span className='blue_gal' onClick={toggleClasss}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="10" fill="#297FFF" />
                                    <path d="M16 20L18.9995 23L23.9995 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                            )}
                            <p className="soglacia_for_p">Согласие на обработку персональных данных</p>
                        </div>
                    }
                    <button className={`button_login ${activeClass === 'pusto' ? 'disabled' : ''}`}>Войти</button>
                </form>
            </div>
            <div className="form__right"></div>
        </div>
    );
}

export default Form;
