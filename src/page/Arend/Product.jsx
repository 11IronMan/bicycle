import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.scss';
import img1 from './../../assets/IMG/image45.png'
import img2 from './../../assets/IMG/image46.png'
import img3 from './../../assets/IMG/image47.png'
import img4 from './../../assets/IMG/image48.png'

const Product = ({ selectedProduct, hideProductDetails }) => {


  return (
    <div className='product'>
      <div className="containers">
        <span className='span_x' onClick={hideProductDetails}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5706_9054)">
<path d="M20.6377 1.54594L1.54585 20.6378M1.54585 1.54594L20.6377 20.6378" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5706_9054">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
       <div className="product_images">
        <div className="product_images_up">
          <img className='img1' src={img1} alt="" />
        </div>
        <div className="product_images_botton">
          <img className='imgs' src={img1} alt="" />
          <img className='imgs' src={img2} alt="" />
          <img className='imgs' src={img3} alt="" />
          <img className='imgs' src={img4} alt="" />
        </div>
       </div>
       <div className="product_information">
       <h1 className="product_information_h1">City bike Schwinn Traveler CI003M/L</h1>
       <div className="inf">
        <p className="inf_l">Размер:</p>
        <p className="inf_r">L</p>
       </div>
       <div className="inf">
        <p className="inf_l">Тип:</p>
        <p className="inf_r">Городской</p>
       </div>
       <div className="inf">
        <p className="inf_l">Материал рамы:</p>
        <p className="inf_r">Сталь</p>
       </div>
       <div className="inf">
        <p className="inf_l">Вес велосипеда:</p>
        <p className="inf_r">15.9 kg / 33 lb</p>
       </div>
       <div className="inf">
        <p className="inf_l">Диаметр колес:</p>
        <p className="inf_r">28”</p>
       </div>
       <div className="inf">
        <p className="inf_l">Кол-во скоростей:</p>
        <p className="inf_r">7</p>
       </div>
       <div className="inf">
        <p className="inf_l">Амортизация:</p>
        <p className="inf_r">Отсутствует</p>
       </div>
       </div>
      </div>
    </div>
  );
}

export default Product;