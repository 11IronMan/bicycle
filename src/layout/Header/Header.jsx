import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './header.scss';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentLang, setCurrentLang] = useState('RU');
    const [isLich1Visible, setLich1Visible] = useState(true);
    const [isThreeLineVisible, setThreeLineVisible] = useState(true);
    const [isCrestikVisible, setCrestikVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLanguageToggle = () => {
        setCurrentLang(currentLang === 'RU' ? 'EN' : 'RU');
    };

    const handleLichToggle = () => {
        setLich1Visible(!isLich1Visible);
    };


    const handleThreeLineToggle = () => {
        setThreeLineVisible(!isThreeLineVisible);
        setCrestikVisible(!isCrestikVisible);
      };
    
      const handleCrestikToggle = () => {
        setThreeLineVisible(!isThreeLineVisible);
        setCrestikVisible(!isCrestikVisible);
      };


    return (
        <div className='header'>
            <div className="container">
                <div className="right_and_left">
                    <div className="right">
                        <div className="Logo">
                            <span className='logo'><svg width="66" height="43" viewBox="0 0 66 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.28137 34.6686C8.8241 34.8464 9.25455 35.1458 9.5727 35.5669C9.89086 35.9786 10.0499 36.4933 10.0499 37.1109C10.0499 37.9624 9.72242 38.6221 9.0674 39.09C8.41238 39.5485 7.45791 39.7778 6.20401 39.7778H1.3194V29.9524H5.92329C7.08361 29.9524 7.97725 30.1817 8.6042 30.6402C9.23116 31.0893 9.54463 31.7116 9.54463 32.507C9.54463 32.9936 9.43234 33.424 9.20776 33.7983C8.98318 34.1726 8.67439 34.4627 8.28137 34.6686ZM3.14411 31.3841V34.0931H5.72678C6.36309 34.0931 6.84968 33.9808 7.18655 33.7562C7.53277 33.5223 7.70589 33.1854 7.70589 32.7456C7.70589 32.2965 7.53277 31.9596 7.18655 31.735C6.84968 31.5011 6.36309 31.3841 5.72678 31.3841H3.14411ZM6.09172 38.3461C7.5047 38.3461 8.21119 37.8735 8.21119 36.9284C8.21119 35.9833 7.5047 35.5108 6.09172 35.5108H3.14411V38.3461H6.09172ZM11.8289 32.2824H13.5834V39.7778H11.8289V32.2824ZM12.7132 31.0472C12.395 31.0472 12.1284 30.949 11.9131 30.7525C11.6979 30.5466 11.5903 30.294 11.5903 29.9945C11.5903 29.6951 11.6979 29.4471 11.9131 29.2506C12.1284 29.0447 12.395 28.9418 12.7132 28.9418C13.0314 28.9418 13.298 29.0401 13.5133 29.2366C13.7285 29.4237 13.8361 29.6623 13.8361 29.9524C13.8361 30.2612 13.7285 30.5232 13.5133 30.7384C13.3074 30.9443 13.0407 31.0472 12.7132 31.0472ZM18.9462 36.5635L17.6408 37.7987V39.7778H15.8863V29.3629H17.6408V35.6511L21.2762 32.2824H23.3816L20.2515 35.4265L23.6764 39.7778H21.5429L18.9462 36.5635ZM31.5406 36.0722C31.5406 36.1939 31.5312 36.367 31.5125 36.5915H25.6313C25.7343 37.1436 26.001 37.5834 26.4314 37.911C26.8712 38.2291 27.4139 38.3882 28.0596 38.3882C28.8831 38.3882 29.5615 38.1168 30.0949 37.5741L31.0353 38.6549C30.6984 39.0572 30.2727 39.3614 29.758 39.5672C29.2433 39.7731 28.6632 39.876 28.0175 39.876C27.194 39.876 26.4688 39.7123 25.8419 39.3848C25.2149 39.0572 24.7284 38.6034 24.3821 38.0232C24.0453 37.4337 23.8768 36.7693 23.8768 36.0301C23.8768 35.3002 24.0406 34.6452 24.3681 34.065C24.705 33.4755 25.1682 33.017 25.7577 32.6895C26.3472 32.362 27.0116 32.1982 27.7508 32.1982C28.4807 32.1982 29.131 32.362 29.7019 32.6895C30.282 33.0076 30.7312 33.4615 31.0493 34.051C31.3768 34.6312 31.5406 35.3049 31.5406 36.0722ZM27.7508 33.6018C27.1894 33.6018 26.7121 33.7703 26.3191 34.1071C25.9355 34.4346 25.7015 34.8745 25.6173 35.4265H29.8703C29.7954 34.8838 29.5662 34.444 29.1825 34.1071C28.7989 33.7703 28.3216 33.6018 27.7508 33.6018ZM37.4368 29.9524C38.2883 29.9524 39.0276 30.0928 39.6545 30.3735C40.2908 30.6542 40.7774 31.0566 41.1143 31.5806C41.4512 32.1046 41.6196 32.7269 41.6196 33.4474C41.6196 34.1586 41.4512 34.7809 41.1143 35.3143C40.7774 35.8383 40.2908 36.2406 39.6545 36.5214C39.0276 36.8021 38.2883 36.9425 37.4368 36.9425H35.2191V39.7778H33.3944V29.9524H37.4368ZM37.3526 35.3985C38.148 35.3985 38.7515 35.23 39.1633 34.8932C39.575 34.5563 39.7808 34.0744 39.7808 33.4474C39.7808 32.8205 39.575 32.3386 39.1633 32.0017C38.7515 31.6648 38.148 31.4964 37.3526 31.4964H35.2191V35.3985H37.3526ZM46.0682 32.1982C47.1724 32.1982 48.0146 32.4649 48.5947 32.9983C49.1842 33.5223 49.479 34.3177 49.479 35.3844V39.7778H47.8227V38.8654C47.6075 39.1929 47.2987 39.4456 46.8963 39.6234C46.5033 39.7918 46.0261 39.876 45.4646 39.876C44.9032 39.876 44.4119 39.7824 43.9908 39.5953C43.5697 39.3988 43.2422 39.1321 43.0083 38.7952C42.7837 38.449 42.6714 38.0607 42.6714 37.6302C42.6714 36.9565 42.9194 36.4184 43.4154 36.0161C43.9207 35.6043 44.7114 35.3985 45.7875 35.3985H47.7245V35.2862C47.7245 34.7622 47.5654 34.3598 47.2472 34.0791C46.9384 33.7983 46.4752 33.658 45.8577 33.658C45.4366 33.658 45.0202 33.7235 44.6084 33.8545C44.2061 33.9855 43.8645 34.168 43.5838 34.4019L42.896 33.1246C43.289 32.8252 43.7616 32.5959 44.3137 32.4368C44.8658 32.2777 45.4506 32.1982 46.0682 32.1982ZM45.8296 38.5987C46.2694 38.5987 46.6577 38.5005 46.9946 38.304C47.3408 38.0981 47.5841 37.808 47.7245 37.4337V36.5635H45.9138C44.9032 36.5635 44.3979 36.8957 44.3979 37.56C44.3979 37.8782 44.5242 38.1309 44.7769 38.318C45.0295 38.5052 45.3804 38.5987 45.8296 38.5987ZM53.401 33.3773C53.9063 32.5912 54.7953 32.1982 56.0679 32.1982V33.8685C55.9182 33.8404 55.7825 33.8264 55.6609 33.8264C54.9778 33.8264 54.4444 34.0276 54.0607 34.43C53.6771 34.823 53.4852 35.3938 53.4852 36.1424V39.7778H51.7307V32.2824H53.401V33.3773ZM60.6162 36.5635L59.3108 37.7987V39.7778H57.5563V29.3629H59.3108V35.6511L62.9462 32.2824H65.0516L61.9216 35.4265L65.3464 39.7778H63.2129L60.6162 36.5635Z" fill="#297FFF" />
                                <path d="M36.6747 10.3653H32.8799" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M42.3668 20.7158L32.8799 10.3653" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M36.751 20.7159C36.751 23.4357 39.2555 25.7023 42.3673 25.7023C45.479 25.7023 47.9835 23.4357 47.9835 20.7159C47.9835 17.9961 45.479 15.7296 42.3673 15.7296C40.3181 15.7296 38.4966 16.7117 37.5099 18.2227" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M23.9999 17.0895C23.6964 17.0139 23.3169 17.0139 22.9374 17.0139C20.2811 17.0139 18.0801 18.9782 18.0801 21.3959C18.0801 23.8135 20.2811 25.7778 22.9374 25.7778C25.5938 25.7778 27.7947 23.8135 27.7947 21.3959" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M32.4395 5.42101C33.5921 5.0367 34.2459 3.89126 33.8998 2.86259C33.5536 1.83392 32.3387 1.31156 31.1861 1.69587C30.0335 2.08018 29.3797 3.22562 29.7258 4.25429C30.072 5.28296 31.2869 5.80532 32.4395 5.42101Z" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M29.6164 7.19226C27.6431 9.30768 26.1251 12.1786 25.8975 13.3119" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                                <path d="M29.4646 16.6361C27.2636 17.3161 25.0627 21.3203 22.5581 20.867L29.4646 16.6361Z" fill="#297FFF" />
                                <path d="M29.4646 16.6361C27.2636 17.3161 25.0627 21.3203 22.5581 20.867" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.9731 13.3873C27.7946 13.1607 30.8305 14.2184 31.8171 15.5783C33.1073 17.3915 31.8171 19.8092 30.451 21.3957" stroke="#297FFF" stroke-width="1.94118" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M34.0947 16.1074C34.4719 16.1074 34.7777 15.8029 34.7777 15.4274C34.7777 15.0519 34.4719 14.7474 34.0947 14.7474C33.7174 14.7474 33.4116 15.0519 33.4116 15.4274C33.4116 15.8029 33.7174 16.1074 34.0947 16.1074Z" fill="#297FFF" />
                            </svg>
                            </span></div>
                        <ul className='right__ul'>
                            <Link className='link' to={'/about'}>
                                <li className='right__ul__li'>О нас</li>
                            </Link>
                            <Link className='link' to={''}>
                                <li className='right__ul__li'>Аренда</li>
                            </Link>
                            <Link className='link' to={'/dost'}>
                                <li className='right__ul__li'>Доставка</li>
                            </Link>
                            <Link className='link' to={'/where'}>
                                <li className='right__ul__li'>Где кататься</li>
                            </Link>
                            <Link className='link' to={'contacts'}>
                                <li className='right__ul__li'>Контакты</li>
                            </Link>
                        </ul>
                        {isCrestikVisible && (
                        <ul className='right__ul_two'>
                            <Link className='link_two' to={''}>
                                <li className='right__ul__li_two'>Аренда</li>
                            </Link>
                            <Link className='link_two' to={'/dost'}>
                                <li className='right__ul__li_two'>Доставка</li>
                            </Link>
                        </ul>
                        )}
                    </div>
                    <div className="left">
                        {isLich1Visible && (
                            <Link className='Lich1' to={'/forms'}>
                                <span onClick={handleLichToggle}>
                                    <svg className='svg2' width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="38" height="38" rx="9" stroke="#297FFF" stroke-width="2" />
                                        <circle cx="20" cy="13.75" r="3.75" stroke="#297FFF" stroke-width="2" />
                                        <path d="M10.25 28.6875C10.25 24.718 13.468 21.5 17.4375 21.5H22.5625C26.532 21.5 29.75 24.718 29.75 28.6875V28.6875C29.75 28.8601 29.6101 29 29.4375 29H10.5625C10.3899 29 10.25 28.8601 10.25 28.6875V28.6875Z" stroke="#297FFF" stroke-width="2" />
                                    </svg>

                                    <svg className='svg1' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="38" height="38" rx="9" stroke="#297FFF" stroke-width="2" />
                                        <circle cx="20" cy="13.75" r="3.75" stroke="#297FFF" stroke-width="2" />
                                        <path d="M10.25 28.6875C10.25 24.718 13.468 21.5 17.4375 21.5H22.5625C26.532 21.5 29.75 24.718 29.75 28.6875V28.6875C29.75 28.8601 29.6101 29 29.4375 29H10.5625C10.3899 29 10.25 28.8601 10.25 28.6875V28.6875Z" stroke="#297FFF" stroke-width="2" />
                                    </svg>
                                </span></Link>
                        )}
                        {!isLich1Visible && (
                            <Link className='Lich2' to={'/'}>
                                <span onClick={handleLichToggle}>
                                    <svg className='svg1' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="38" height="38" rx="9" fill="#297FFF" stroke="#297FFF" stroke-width="2" />
                                        <circle cx="20" cy="13.75" r="3.75" stroke="white" stroke-width="2" />
                                        <path d="M10.25 28.6875C10.25 24.718 13.468 21.5 17.4375 21.5H22.5625C26.532 21.5 29.75 24.718 29.75 28.6875V28.6875C29.75 28.8601 29.6101 29 29.4375 29H10.5625C10.3899 29 10.25 28.8601 10.25 28.6875V28.6875Z" stroke="white" stroke-width="2" />
                                    </svg>

                                    <svg className='svg2' width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="38" height="38" rx="9" fill="#297FFF" stroke="#297FFF" stroke-width="2" />
                                        <circle cx="20" cy="13.75" r="3.75" stroke="white" stroke-width="2" />
                                        <path d="M10.25 28.6875C10.25 24.718 13.468 21.5 17.4375 21.5H22.5625C26.532 21.5 29.75 24.718 29.75 28.6875V28.6875C29.75 28.8601 29.6101 29 29.4375 29H10.5625C10.3899 29 10.25 28.8601 10.25 28.6875V28.6875Z" stroke="white" stroke-width="2" />
                                    </svg>
                                </span>
                            </Link>
                        )}
                        <button className='feedback1'><a  className='feedback2' href="tel:'+971 52 563 4064">
                        FEEDBACK
                        </a>
                            </button>
                        <div className="chess"> <span className='time__osh'>{currentTime.toLocaleTimeString()}</span> <br />
                            <p className='chesss'>
                                Time in Osh
                            </p>
                        </div>
                        <div className="lang" onClick={handleLanguageToggle}>
                            {currentLang}
                            <span className='lang_img'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9L5.26795 6L8.73205 6L7 9Z" fill="#14233D" />
                                </svg>
                            </span>
                        </div>
                        {isCrestikVisible && (
                        <span className="three_line" onClick={handleThreeLineToggle}><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="1" x2="19" y2="1" stroke="black" stroke-width="2" stroke-linecap="round" />
                            <line x1="1" y1="9" x2="19" y2="9" stroke="black" stroke-width="2" stroke-linecap="round" />
                            <line x1="1" y1="17" x2="19" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        </span>
                        )}
                        { isThreeLineVisible && (
                        <span className='crestik'   onClick={handleCrestikToggle} >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_873_189)">
                                    <path d="M18.7616 1.40518L1.4053 18.7614M1.40531 1.40518L18.7616 18.7614" stroke="#14233D" stroke-width="1.81818" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_873_189">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                         )}
                    </div>
                </div>
                {isThreeLineVisible && (
                <div className="right__ul_three">
                    <ul className='right__ul'>
                        <Link className='link' to={'/about'}>
                            <li className='right__ul__li'>О нас</li>
                        </Link>
                        <Link className='link' to={''}>
                            <li className='right__ul__li'>Аренда</li>
                        </Link>
                        <Link className='link' to={'/dost'}>
                            <li className='right__ul__li'>Доставка</li>
                        </Link>
                        <Link className='link' to={'/where'}>
                            <li className='right__ul__li'>Где кататься</li>
                        </Link>
                        <Link className='link' to={'contacts'}>
                            <li className='right__ul__li'>Контакты</li>
                        </Link>
                    </ul>
                    <div className="lich_and_feedback">
                    <Link className='lich_and_feedback_p' to={'/forms'}>
                        <p className="lich_and_feedback_p">Личный кабинет</p>
                        </Link>
                        <button className="lich_and_feedback_button"><a  className='lich_and_feedback_button1' href="tel:'+971 52 563 4064">
                        FEEDBACK
                        </a></button>
                    </div>
                </div>
                 )}

            </div>
        </div>
    );
}

export default Header;