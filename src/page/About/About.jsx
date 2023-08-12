import React from 'react';
import img1 from './..//..//assets/IMG/img1.svg'
import img2 from './..//..//assets/IMG/img2.svg'
import img3 from './..//..//assets/IMG/img3.svg'
import './about.scss'

const About = () => {
    return (
        <div className='about'>
            <div className="about_1">
                <div className="container">
                    <div className="about_first">
                        <h1 className='about_h1'>О нас</h1>
                        <div className="about_first_inf">
                            <div className="about_first_inf_text">
                                <p className='about_first_inf_text_p'>
                                    Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br />
                                    <br />
                                    Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении.
                                </p>
                            </div>
                            <div className="about_first_inf_img">
                                <img className='about_first_inf_img_1' src={img1} alt="" />
                                <img className='about_first_inf_img_2' src={img2} alt="" />
                                <img className='about_first_inf_img_3'
                                src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
