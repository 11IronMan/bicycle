import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './arend.scss'
import img1 from './..//..//assets/IMG/img1.png'
import img2 from './..//..//assets/IMG/img2.png'
import img3 from './..//..//assets/IMG/img3.png'
import { Link } from 'react-router-dom';
import Product from './Product';



const Arend = () => {

    const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [products, setProducts] = useState([]);
    const [cards, setCards] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isAdditionalVisible, setAdditionalVisible] = useState(false);
    const [isSelected, setIsSelected] = useState({});
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const handleProductClicks = (productId) => {
        // Если товар уже выбран, снимаем его выбор
        if (isSelected[productId]) {
            setIsSelected((prevState) => ({
                ...prevState,
                [productId]: false,
            }));
        } else {
            // В противном случае выбираем товар
            setIsSelected((prevState) => ({
                ...prevState,
                [productId]: true,
            }));
        }
    };

    // const [selectedOption, setSelectedOption] = useState('days');
    // const [isStartDateEditable, setIsStartDateEditable] = useState(false);
    // const [isEndDateEditable, setIsEndDateEditable] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cards');
                setCards(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getCards();
    }, []);

    useEffect(() => {
        // Function to format the date and time as required
        const formatDate = (date) => {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            };
            return date.toLocaleString('en-US', options);
        };

        const now = new Date();

        const nextDay = new Date(now);
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(nextDay.getDate() + 5);

        setStartDate(formatDate(now));
        setEndDate(formatDate(nextDay))
    }, []);

    // const handleOptionClick = (option) => {
    //     setSelectedOption(option);
    // };

    // const handleStartDateClick = () => {
    //     setIsStartDateEditable(true);
    // };

    // const handleEndDateClick = () => {
    //     setIsEndDateEditable(true);
    // };

    // const handleStartDateChange = (event) => {
    //     setStartDate(event.target.value);
    // };

    // const handleEndDateChange = (event) => {
    //     setEndDate(event.target.value);
    // };


    const handleAdditionalClick = () => {
        setAdditionalVisible(!isAdditionalVisible);
    };

    const showModal = () => {
        setModalVisible(true);
        document.body.style.overflow = 'hidden';
    };

    const hideModal = () => {
        setModalVisible(false);
        document.body.style.overflow = 'auto';
    };

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (productId) => {
        // ... (existing logic)

        const selectedProductInfo = products.find((item) => item.id === productId);
        setSelectedProduct(selectedProductInfo);
    };
    // const handleProductClick = (productId) => {
    //     // Если товар уже выбран, снимаем его выбор
    //     if (isSelected[productId]) {
    //         setIsSelected((prevState) => ({
    //             ...prevState,
    //             [productId]: false,
    //         }));
    //     } else {
    //         // В противном случае выбираем товар
    //         setIsSelected((prevState) => ({
    //             ...prevState,
    //             [productId]: true,
    //         }));
    //     }

    //     setProductDetailsVisible(false); // Hide the Product component
    // };

    const hideProductDetails = () => {
        setProductDetailsVisible(false);
    };

    return (
        <div className='arend'>
            <div className="container">
                <div className="arend_main">
                    <div className="arend_main_up1">
                        <div className="arend_main_up">
                            <div className="arend_main_up_right">
                                <h1 className='arend_main_up_right_h1'>Аренда велосипедов c доставкой</h1>
                            </div>
                            <div className="arend_main_up_lef">
                                <div className="arend_main_up_left">
                                    <svg width="320" height="207" viewBox="0 0 136 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 13.3679C0 5.985 5.985 0 13.3679 0H136V89H13.3679C5.985 89 0 83.015 0 75.6321V13.3679Z" fill="#D7E6FF" />
                                    </svg>

                                    <img className='one_span_img' src={img1} alt="" />
                                    <div className="one_span_text">
                                        <h2 className='one_span_text_h2'>Шлем</h2>
                                        <h1 className='one_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='two_span'><svg width="304" height="207" viewBox="0 0 304 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H304V207H20.5438C5.63204 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#B9D5FF" />
                                    </svg>
                                    </span>
                                    <img className='two_span_img' src={img2} alt="" />
                                    <div className="two_span_text">
                                        <h2 className='two_span_text_h2'>Фонарик</h2>
                                        <h1 className='two_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='three_span'><svg width="260" height="207" viewBox="0 0 260 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H240C251.046 0 260 8.9543 260 20V207H20.5438C5.63205 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#A5C7FA" />
                                    </svg>
                                    </span>
                                    <img className='three_span_img' src={img3} alt="" />
                                    <div className="three_span_text">
                                        <h2 className='three_span_text_h2'>Замок</h2>
                                        <h1 className='three_span_text_h1'>Бесплатно</h1>
                                    </div>
                                </div>

                                <div className="arend_main_up_left1">
                                    <svg width="208" height="134.55" viewBox="0 0 136 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 13.3679C0 5.985 5.985 0 13.3679 0H136V89H13.3679C5.985 89 0 83.015 0 75.6321V13.3679Z" fill="#D7E6FF" />
                                    </svg>

                                    <img className='one_span_img' src={img1} alt="" />
                                    <div className="one_span_text">
                                        <h2 className='one_span_text_h2'>Шлем</h2>
                                        <h1 className='one_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='two_span'><svg width="197.6" height="134.55" viewBox="0 0 304 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H304V207H20.5438C5.63204 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#B9D5FF" />
                                    </svg>
                                    </span>
                                    <img className='two_span_img' src={img2} alt="" />
                                    <div className="two_span_text">
                                        <h2 className='two_span_text_h2'>Фонарик</h2>
                                        <h1 className='two_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='three_span'><svg width="169" height="134.55" viewBox="0 0 260 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H240C251.046 0 260 8.9543 260 20V207H20.5438C5.63205 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#A5C7FA" />
                                    </svg>
                                    </span>
                                    <img className='three_span_img' src={img3} alt="" />
                                    <div className="three_span_text">
                                        <h2 className='three_span_text_h2'>Замок</h2>
                                        <h1 className='three_span_text_h1'>Бесплатно</h1>
                                    </div>
                                </div>

                                <div className="arend_main_up_left2">
                                    <svg width="104" height="67.3" viewBox="0 0 136 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 13.3679C0 5.985 5.985 0 13.3679 0H136V89H13.3679C5.985 89 0 83.015 0 75.6321V13.3679Z" fill="#D7E6FF" />
                                    </svg>

                                    <img className='one_span_img' src={img1} alt="" />
                                    <div className="one_span_text">
                                        <h2 className='one_span_text_h2'>Шлем</h2>
                                        <h1 className='one_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='two_span'><svg width="98.8" height="67.3" viewBox="0 0 304 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H304V207H20.5438C5.63204 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#B9D5FF" />
                                    </svg>
                                    </span>
                                    <img className='two_span_img' src={img2} alt="" />
                                    <div className="two_span_text">
                                        <h2 className='two_span_text_h2'>Фонарик</h2>
                                        <h1 className='two_span_text_h1'>Бесплатно</h1>
                                    </div>
                                    <span className='three_span'><svg width="84.5" height="67.3" viewBox="0 0 260 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M87.2552 10.9657C90.6608 4.23955 97.5593 0 105.098 0H240C251.046 0 260 8.9543 260 20V207H20.5438C5.63205 207 -4.03533 191.269 2.70053 177.966L87.2552 10.9657Z" fill="#A5C7FA" />
                                    </svg>
                                    </span>
                                    <img className='three_span_img' src={img3} alt="" />
                                    <div className="three_span_text">
                                        <h2 className='three_span_text_h2'>Замок</h2>
                                        <h1 className='three_span_text_h1'>Бесплатно</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arend_main_bottom">
                        <div className="arend_main_bottom_four">
                            <p className='arend_main_bottom_four_p'>Тип аренды</p>
                            <div
                                className='arend_main_bottom_four_data'
                            >
                                <div
                                    className={`arend_main_bottom_four_data_one ${activeTab === 1 ? 'active' : ''
                                        }`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    По дням
                                </div>
                                <div
                                    className={`arend_main_bottom_four_data_two ${activeTab === 2 ? 'active' : ''
                                        }`}
                                    onClick={() => handleTabClick(2)}
                                >
                                    2 часа
                                </div>
                            </div>
                        </div>
                        {/* <div className="kal"> */}
                        <div className="arend_main_bottom_four1">
                            <p className='arend_main_bottom_four_p'>Дата и время начала</p>
                            <div className="arend_main_bottom_four_data">
                                <div className="arend_main_bottom_four_data_one">
                                    {startDate}
                                </div>
                                <div className="arend_main_bottom_four_data_two"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99944 8L9.99944 13L14.9994 8" stroke="#14233D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        {/* <div className="tire">
                        -
                        </div> */}
                        <div className="arend_main_bottom_four1">
                            <p className='arend_main_bottom_four_p'>Дата и время конца</p>
                            <div className="arend_main_bottom_four_data">
                                <div className="arend_main_bottom_four_data_one">
                                    {endDate}</div>
                                <div className="arend_main_bottom_four_data_two"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99944 8L9.99944 13L14.9994 8" stroke="#14233D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>                            </div>
                        </div>

                        <div className="arend_main_bottom_four">
                            <p className='arend_main_bottom_four_p'>Доставка</p>
                            <div className="arend_main_bottom_four_data">
                                <div className="arend_main_bottom_four_data_one">По адресу</div>
                                <div className="arend_main_bottom_four_data_two"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99944 8L9.99944 13L14.9994 8" stroke="#14233D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>                            </div>
                        </div>

                        <div className="arend_main_bottom_four2">
                            <p className='arend_main_bottom_four_p'>Дата и время начала</p>
                            <div className="arend_main_bottom_four_data">
                                <div className="arend_main_bottom_four_data_one">
                                    {startDate}
                                </div>
                                <div className="arend_main_bottom_four_data_two"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99944 8L9.99944 13L14.9994 8" stroke="#14233D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                            </div>
                        </div>

                        <div className="arend_main_bottom_four2">
                            <p className='arend_main_bottom_four_p'>Дата и время конца</p>
                            <div className="arend_main_bottom_four_data">
                                <div className="arend_main_bottom_four_data_one">
                                    {endDate}</div>
                                <div className="arend_main_bottom_four_data_two"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99944 8L9.99944 13L14.9994 8" stroke="#14233D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
                <span className='second'><svg width="74" height="34" viewBox="0 0 74 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C64.6112 0 57 7.61116 57 17C57 26.3888 64.6112 34 74 34H0C9.38884 34 17 26.3888 17 17C17 7.61116 9.38884 0 0 0Z" fill="#F2F4F7" />
                </svg>
                </span>
                {isProductDetailsVisible && (
                <Product selectedProduct={selectedProduct} hideProductDetails={hideProductDetails} />
            )}
                <div className="arend_main_two">
                    <p className='arend_main_two_p'>Тип велосипеда</p>
                    <div className="product__cards">
                        {products.map((item) => (
                            <div className="product__card" key={item.id}>
                                <img className='product__card_img' src={item.img} alt="" />
                                <div className="text_product">
                                    <p className="product__card_memory">{item.matarial}</p>
                                    <p className="product__card_price">
                                        {item.price}AED</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arend_main_two_button_div">
                        <button className='arend_main_two_button' onClick={handleAdditionalClick}>Найти</button>
                    </div>
                </div>
                {isAdditionalVisible && (
                    <div className="arend_main_dop">
                        <span className='second'><svg width="74" height="34" viewBox="0 0 74 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H74C64.6112 0 57 7.61116 57 17C57 26.3888 64.6112 34 74 34H0C9.38884 34 17 26.3888 17 17C17 7.61116 9.38884 0 0 0Z" fill="#F2F4F7" />
                        </svg>
                        </span>
                        <div className="arend_main_two">
                            <div className="arend_main_two_ps">
                                <div className="arend_main_two_ps1">
                                    <p className='arend_main_two_p'>Бренд</p>
                                </div>
                                <div className="arend_main_two_ps2">
                                    <p className='arend_main_two_p'>Размер рамы</p>
                                </div>

                            </div>

                            <div className="product__cards">
                                {cards.map((item) => (
                                    <div className="product__card1" key={item.id}>
                                        <Link className='Link' onClick={() => setProductDetailsVisible(!isProductDetailsVisible)}>
                                            <div className="product__card_up1">
                                                <div className='product__card_up_left1'>{item.size}</div>



                                                <div className='product__card_up_right1'>{item.name}</div>
                                            </div>
                                            <img className='product__card_img1' src={item.img} alt="" />
                                            <div className="text_product1">
                                                <p className="product__card_memory1">{item.type} <br /> {item.name} Traveler {item.size}</p>
                                                <p className="product__card_price1">
                                                    {item.price} AED/день</p>
                                            </div>
                                        </Link>
                                        {isSelected[item.id] ? (
                                            <button className='product_choose_selected' onClick={() => handleProductClicks(item.id)}>
                                                <p className='p1'>
                                                    Выбрано
                                                </p>
                                                <p className='p2'>
                                                    Отменить выбор
                                                </p>
                                            </button>
                                        ) : (
                                            <button className="product_choose" onClick={() => handleProductClicks(item.id)}>
                                                Выбрать
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="arend_main_two_button_div">
                                <Link to={'arendtwo'}>
                                    <button className='arend_main_two_button'>Далее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Arend;
