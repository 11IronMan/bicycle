import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AiOutlinePhone, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios';
import './arendthree.scss'


const Arendthree = () => {
    const [showPust, setShowPust] = useState(true);
    const [showPus, setShowPus] = useState(true);
    const [showPuss, setShowPuss] = useState(true);







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
        <div className="arendthree">
            <div className="container">
                <div className="arendtwo_main_up">
                <div className="arendtwo_main_up1">
                            <h1 className="arendtwo_main_up_h1">Ваш заказ успешно оформлен</h1>
                            <div className="arendtwo_main_up_data">
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Тип аренды</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                                <div className="arendtwo_main_up_data_type">
                                    <p className='arendtwo_main_up_data_type_p1'>Доставка</p>
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
                                    <p className='arendtwo_main_up_data_type_p1'>Метод оплаты</p>
                                    <p className='arendtwo_main_up_data_type_p2'></p>
                                </div>
                            </div>
                        </div>
                        <div className="arendtwo_main_up_second">
                                <div className="arendtwo_main_up_second_inf">
                                    <div className="arendtwo_main_up_second_inf_name">
                                        <p className='arendtwo_main_up_second_inf_name_p'>Название велосипедов</p>
                                    </div>
                                    <div className="arendtwo_main_up_second_inf_ost">
                                        <div className="arendtwo_main_up_second_inf_ost_right">
                                            <p className='arendtwo_main_up_second_inf_ost_right_p'>Стоимость</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="arendtwo_main_up_second_products">
                                <div className="arendtwo_main_up_second_product">
                                    <div className="arendtwo_main_up_second_product_img"></div>
                                    <div className="arendtwo_main_up_second_product_ninty">
                                        <div className="arendtwo_main_up_second_product_ninty_first">
                                            <p className="arendtwo_main_up_second_product_ninty_first_p">Городской велосипед бренда фирмы Schwinn модель Traveler 20”</p>
                                        </div>
                                        <div className="arendtwo_main_up_second_product_ninty_last"><p className='arendtwo_main_up_second_inf_ost_right_ps'>
                                        Стоимость</p>180 AED</div>
                                    </div>
                                </div>
                            </div>
                            <div className="arendtwo_main_up_close">
                                <div className="arendtwo_main_up_close_left">

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
                            <div className="arendtwo_main_up_buttons">
                                <Link to={'/forms'}>
                                <button className='arendtwo_main_up_buttons_left'>В личный кабинет</button>
                                </Link>
                                <Link to={'/'}>
                                <button className='arendtwo_main_up_buttons_right'>Назад на главную</button>
                                </Link>
                            </div>
                </div>
            </div>
        </div>
    );
}

export default Arendthree;
