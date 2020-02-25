import React from 'react';
import './testCssFlex2.css';

import defaultPicture from '../img/image.jpg';

import arrow from '../img/arrow-white.png';
import star from '../img/star.png';
import star_empty from '../img/star-empty.png';
import heart from '../img/heart.png';




const testCssFlex2 = () => (

    <div className="wrapper">

        
            <div className="image-item" >

                <img className="background-image" src={defaultPicture}></img>
                <div className="image-item-first-box">
                    <img className="arrow-left" src={arrow}></img>
                    <img className="heart" src={heart}></img>
                    
                </div>

                <div className="image-item-second-box">
                    <div className="title">Salong Namn</div>
                    <div className="rating">
                        <img className="star" src={star}></img>
                        <img className="star" src={star}></img>
                        <img className="star" src={star}></img>
                        <img className="star" src={star}></img>
                        <img className="star" src={star_empty}></img>
                        <div className="rating-text">(32)</div>

                    </div>
                </div>
            </div>

        
        

        

   </div>

    

)


export default testCssFlex2;