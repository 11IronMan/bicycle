import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AiOutlinePhone, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios';
import './arendtwo.scss'




const Arendtwo = () => {

    const [showPust, setShowPust] = useState(true);
    const [showPus, setShowPus] = useState(true);
    const [showPuss, setShowPuss] = useState(true);
    const [showPusto, setShowPusto] = useState(true);
    const [activeClass, setActiveClass] = useState('pusto');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const location = useLocation()

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

    const registerUser = (newUser) => {
        axios.post('http://localhost:3000/zai', newUser)
            .then((res) => setProducts(res.data))
            .catch((err) => alert(err.message))
        location('/')
    }


    const submitForm = (data) => {
        let { confpassword, ...user } = data
        if (location.pathname === '/login') {
            loginUser(user)
            location('/dost')
        } else {
            registerUser(user);
            location('/')

        }
        console.log(user);
    }





    const toggleClass = () => {
        setActiveClass(activeClass === 'pusto' ? 'blue_gal' : 'pusto');
    };

    const toggleClasss = () => {
        setShowPusto(!showPusto);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const toggleClas = () => {
        setShowPust(!showPust);
    };

    const toggleClast = () => {
        setShowPuss(!showPuss);
    };

    const toggleCla = () => {
        setShowPus(!showPus);
    };

    return (
        <div className='arentwo'>
            <div className="container">
                <form className='form2' onSubmit={handleSubmit(submitForm)}>
                    <div className="arendtwo_main">
                        <div className="arendtwo_main_up">
                            <h1 className="arendtwo_main_up_h1">Заявка на аренду велосипедов</h1>

                            <div className="arendtwo_main_up_data">
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Тип аренды</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Дата и время начала</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Дата и время конца</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Доставка</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                            </div>
                            <div className="arendtwo_main_up_second">
                                <div className="arendtwo_main_up_second_inf">
                                    <div className="arendtwo_main_up_second_inf_name">
                                        <p className='arendtwo_main_up_second_inf_name_p'>Название велосипедов</p>
                                    </div>
                                    <div className="arendtwo_main_up_second_inf_ost">
                                        <div className="arendtwo_main_up_second_inf_ost_left">
                                            <p className='arendtwo_main_up_second_inf_ost_left_p'>Шлем</p>
                                            <p className='arendtwo_main_up_second_inf_ost_left_p'>Фонарик</p>
                                            <p className='arendtwo_main_up_second_inf_ost_left_p'>Замок</p>
                                        </div>
                                        <div className="arendtwo_main_up_second_inf_ost_right">
                                            <p className='arendtwo_main_up_second_inf_ost_right_p'>Стоимость</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="arendtwo_main_up_second_products">

                                <div className="arendtwo_main_up_second_product">
                                    <div className="arendtwo_main_up_second_product_img">
                                        <img src='https://elementalcycle.com/wp-content/uploads/2016/04/064630-1-full.png' alt="" />
                                    </div>
                                    <div className="arendtwo_main_up_second_product_ninty">
                                        <div className="arendtwo_main_up_second_product_ninty_first">
                                            <p className="arendtwo_main_up_second_product_ninty_first_p">Городской велосипед бренда фирмы Schwinn модель Traveler 20”</p>
                                        </div>
                                        <div className="arendtwo_main_up_second_product_ninty_first_trio">
                                            <div className="arendtwo_main_up_second_product_ninty_first_trio_one">
                                                {showPust && (
                                                    <span className='pusto' onClick={toggleClas}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" stroke="#DDE3EB" />
                                                    </svg>
                                                    </span>
                                                )}
                                                {!showPust && (

                                                    <span className='blue_gal' onClick={toggleClas}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="10" fill="#297FFF" />
                                                        <path d="M16 20L18.9995 23L23.9995 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </span>
                                                )}
                                            </div>
                                            <div className="arendtwo_main_up_second_product_ninty_first_trio_one">
                                                {showPuss && (
                                                    <span className='pusto' onClick={toggleClast}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" stroke="#DDE3EB" />
                                                    </svg>
                                                    </span>
                                                )}
                                                {!showPuss && (

                                                    <span className='blue_gal' onClick={toggleClast}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="10" fill="#297FFF" />
                                                        <path d="M16 20L18.9995 23L23.9995 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </span>
                                                )}
                                            </div>
                                            <div className="arendtwo_main_up_second_product_ninty_first_trio_one">
                                                {showPus && (
                                                    <span className='pusto' onClick={toggleCla}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" stroke="#DDE3EB" />
                                                    </svg>
                                                    </span>
                                                )}
                                                {!showPus && (

                                                    <span className='blue_gal' onClick={toggleCla}><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="10" fill="#297FFF" />
                                                        <path d="M16 20L18.9995 23L23.9995 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="arendtwo_main_up_second_product_ninty_last">                                            <p className='arendtwo_main_up_second_inf_ost_right_ps'>
                                        Стоимость</p>180 AED</div>
                                    </div>
                                </div>
                            </div>
                            <div className="arendtwo_main_up_close">
                                <div className="arendtwo_main_up_close_left">
                                    <div className="arendtwo_main_up_close_left_rel">
                                        <span className="arendtwo_main_up_close_left_rel_span1"><svg width="200" height="54" viewBox="0 0 228 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5637 3.48865C31.2545 2.12108 33.3633 1.375 35.5379 1.375H218C223.247 1.375 227.5 5.62829 227.5 10.875V45.875C227.5 51.1217 223.247 55.375 218 55.375H35.5379C33.3633 55.375 31.2545 54.6289 29.5637 53.2614L3.12087 31.8738C0.894086 30.0727 0.894083 26.6773 3.12087 24.8762L29.5637 3.48865Z" stroke="#297FFF" />
                                        </svg>
                                        </span>
                                        <span className="arendtwo_main_up_close_left_rel_span2"><svg width="114" height="28" viewBox="0 0 228 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.5637 3.48865C31.2545 2.12108 33.3633 1.375 35.5379 1.375H218C223.247 1.375 227.5 5.62829 227.5 10.875V45.875C227.5 51.1217 223.247 55.375 218 55.375H35.5379C33.3633 55.375 31.2545 54.6289 29.5637 53.2614L3.12087 31.8738C0.894086 30.0727 0.894083 26.6773 3.12087 24.8762L29.5637 3.48865Z" stroke="#297FFF" />
                                        </svg>
                                        </span>
                                    <Link to={'/'}>
                                        <p className="arendtwo_main_up_close_left_rel_p">Назад к выбору <br/> велосипедов</p>
                                    </Link>
                                    </div>

                                </div>
                                <div className="arendtwo_main_up_close_right">
                                    <div className="arendtwo_main_up_close_right_up">
                                        <p className="arendtwo_main_up_close_right_up_left">Доставка</p>
                                        <p className="arendtwo_main_up_close_right_up_right">0 AED</p>
                                    </div>
                                    <div className="arendtwo_main_up_close_right_botton">
                                    <p className="arendtwo_main_up_close_right_botton_left">Итого</p>
                                        <p className="arendtwo_main_up_close_right_botton_right">360 AED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='center'><svg width="74" height="34" viewBox="0 0 74 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C64.6112 0 57 7.61116 57 17C57 26.3888 64.6112 34 74 34H0C9.38884 34 17 26.3888 17 17C17 7.61116 9.38884 0 0 0Z" fill="#F2F4F7" />
                        </svg>
                        </span>
                        <div className="arendtwo_main_botton">

                            <div className="arendtwo_main_botton1">
                                <div className="arendtwo_main_botton_left">

                                    <form className='form2' onSubmit={handleSubmit(submitForm)}>
                                        <label><p className='online_offline_1'>Контактные данные</p>
                                            <div className='div'>
                                                <input type="text"
                                                    placeholder='Имя*'
                                                    {...register('name', {
                                                        required: {
                                                            message: "Имя* обязательно к заполнению",
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
                                        <label>
                                            <div className='div'>
                                                <input type="tel"
                                                    placeholder='Номер телефона*'
                                                    {...register('number', {
                                                        required: {
                                                            message: "Номер телефона* обязательно к заполнению",
                                                            value: true
                                                        },
                                                        minLength: {
                                                            message: "Минимум 9 симвилов",
                                                            value: 10
                                                        },
                                                        pattern: {
                                                            message: "Правильно укажите тел номер",
                                                            // value:/^(0|+996)[0-9]{9,12}$/
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <p style={{ color: "red" }}>{errors.number && errors.number?.message}</p>
                                        </label>
                                        <label> <p className='online_offline_p'>  Информация о доставке</p>

                                            <div className='div'>
                                                <input type="text"
                                                    placeholder='Адрес*'
                                                    {...register('adres', {
                                                        required: {
                                                            message: "Адрес* обязательно к заполнению",
                                                            value: true
                                                        },
                                                        minLength: {
                                                            message: "Минимум 3 симвилов",
                                                            value: 3
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <p style={{ color: "red" }}>{errors.adres && errors.adres?.message}</p>
                                        </label>

                                        <p className='online_offline_p'>Форма оплаты</p>
                                        <div className="online_offline">
                                            <div className="online">
                                                {showPusto && (
                                                    <span className='online_span' onClick={toggleClasss}>
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="15.5" stroke="#DDE3EB" />
                                                            <circle cx="15.9999" cy="15.9997" r="10.6667" fill="#297FFF" />
                                                        </svg>

                                                    </span>
                                                )}
                                                {!showPusto && (

                                                    <span className='offline_span' onClick={toggleClasss}>
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="15.5" stroke="#DDE3EB" />
                                                        </svg>

                                                    </span>
                                                )}
                                                Онлайн
                                            </div>
                                            <div className="offline">
                                                {showPusto && (
                                                    <span className='offline_span' onClick={toggleClasss}>
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="15.5" stroke="#DDE3EB" />
                                                        </svg>

                                                    </span>
                                                )}
                                                {!showPusto && (
                                                    <span className='online_span' onClick={toggleClasss}>
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="15.5" stroke="#DDE3EB" />
                                                            <circle cx="15.9999" cy="15.9997" r="10.6667" fill="#297FFF" />
                                                        </svg>
                                                    </span>


                                                )}

                                                На месте
                                                {/* <span className='offline_span1'>
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" stroke="#DDE3EB" />
                                                    <path d="M17 17.625C17 16.1753 18.3431 15 20 15C21.6569 15 23 16.1753 23 17.625C23 18.5333 22.4728 19.3339 21.6715 19.8051C20.8384 20.2951 20 21.0335 20 22V22" stroke="#297FFF" stroke-width="2" stroke-linecap="round" />
                                                    <circle cx="20" cy="25" r="1" fill="#297FFF" />
                                                </svg>

                                            </span> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="arendtwo_main_botton_right">
                                    <form className='form2' onSubmit={handleSubmit(submitForm)}>
                                        <p className='online_offline_p'>Фактическая дата возврата велосипеда</p>
                                        <div className="online_offline">
                                            <div className="online">
                                                25.07.21
                                            </div>
                                            <div className="offline">
                                                12:00
                                            </div>
                                        </div>
                                        <label>

                                            <div className='div'>
                                                <input type="text"
                                                    placeholder='Возврат по адресу'
                                                    {...register('vadres', {
                                                        required: {
                                                            message: "Адрес обязательно к заполнению",
                                                            value: true
                                                        },
                                                        minLength: {
                                                            message: "Минимум 3 симвилов",
                                                            value: 3
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <p style={{ color: "red" }}>{errors.vadres && errors.vadres?.message}</p>
                                        </label>

                                    </form>
                                    <div className="arendtwo_main_botton_right_info">
                                        <p className="arendtwo_main_botton_right_info_p">Возвращение велосипеда</p>
                                        <p className="arendtwo_main_botton_right_info_p1">На возвращение велосипеда даётся 1 час.
                                            Задача организации, в особенности же сложившаяся структура организации позволяет выполнять
                                            Важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.</p>
                                        <p className="arendtwo_main_botton_right_info_p">Возвращение велосипеда</p>
                                        <p className="arendtwo_main_botton_right_info_p1">Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bron1">
                                <Link to={'/arendthree'}>
                                    <button className='bron'>Забронировать</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Arendtwo;
