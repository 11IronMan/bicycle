import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AiOutlinePhone, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios';
import './contacts.scss'
// import Geo from '../../assets/Components/Geo';
import SimpleMap from '../../assets/Components/Geo';

const Contacts = () => {
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
    axios.post('http://localhost:3000/questions', newUser)
      .then((res) => alert('Ваша заявка успешно отправлена.'))
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



  return (
    <div className='contacts'>
      <div className="contacts_1">
        <div className="container">
          <div className="contacts_2">
            <div className="contacts_2_up">
              <h1 className="contacts_2_up_h1">Контакты</h1>
              <div className="contacts_2_up_right_and_left">
                <div className="contacts_2_up_left">
                  <div className="contacts_2_up_left_number">
                    <p className="contacts_2_up_left_number_p">Номер телефона</p>
                    <p className="contacts_2_up_left_number_number">+996 999 999</p>
                  </div>
                  <div className="contacts_2_up_left_email">
                    <p className="contacts_2_up_left_email_p">E-mail</p>
                    <p className="contacts_2_up_left_email_email">info@bikerental.ae</p>
                  </div>
                  <div className="contacts_2_up_left_adres">
                    <p className="contacts_2_up_left_adres_p">Адрес шоурума</p>
                    <p className="contacts_2_up_left_adres_adres">Страна А, город Б, ул. АААА</p>
                  </div>
                </div>
                <div className="contacts_2_up_right">
                  <div className="contacts_2_up_right_text">
                    <p className="contacts_2_up_right_text_p">Оставить заявку</p>
                    <h2 className="contacts_2_up_right_text_h2">Остались вопросы? Свяжитесь с нами</h2>
                  </div>


                  <form className='form2' onSubmit={handleSubmit(submitForm)}>
                    <label>Username
                      <div className='div'>
                        <input type="text"
                          placeholder='Enter your User name'
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
                    <label>Phone
                      <div className='div'>
                        <input type="tel"
                          placeholder='Enter your Phone'
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
                              message: "Правильно укажите тел номер",
                              // value:/^(0|+996)[0-9]{9,12}$/
                            }
                          })}
                        />
                      </div>
                      <p style={{ color: "red" }}>{errors.number && errors.number?.message}</p>
                    </label>
                    <div className="soglacia_for">
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
                     <button className='form_button'>
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="contacts_2_botton">
              {/* <SimpleMap /> */}
              <div className="map">
            <iframe style={{ width: "100%", height: "500px" }} className="gmap_iframe" src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=osh&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

