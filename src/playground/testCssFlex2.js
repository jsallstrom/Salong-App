import React from 'react';
import './testCssFlex2.css';

import defaultPicture from '../img/image.jpg';

import arrow_white from '../img/arrow-white.png';
import star from '../img/star.png';
import star_empty from '../img/star-empty.png';
import heart from '../img/heart.png';

import pin from '../img/pin.png';
import clock from '../img/clock.png';
import globe from '../img/globe.png';
import phone from '../img/phone.png';
import arrow from '../img/arrow@2x.png';

const testCssFlex2 = () => (

    <div className="wrapper">

        
            <div className="image-item" >

                <img className="background-image" src={defaultPicture}></img>
                <div className="image-item-first-box">
                    <img className="arrow-left" src={arrow_white}></img>
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

            <div className="info-schema-item">
                    <button className="info">Info</button>
                    <button className="schema">Schema</button>
            </div>


            <div className="bottom-rectangle">
                <div className="bottom-rectangle-item">
                    <img className="address-pin" src={pin}></img>
                    <div className="address-text">Rådmansgatan 46, 113 57 Stockholm</div>
                    
                </div>

                <div className="bottom-rectangle-item">
                    <img className="time-clock" src={clock}></img>
                    
                    <div className="time-text">Öppet till 19:00 idag</div>
                    <img className="arrow-down" src={arrow}></img>

                </div>

                <div className="bottom-rectangle-item">
                    <img className="phone-symbol" src={phone}></img>
                    <div className="phone-text">08-522 389 20</div>
                    
                </div>
                
                <div className="bottom-rectangle-item">
                    <img className="web-symbol" src={globe}></img>
                    <div className="web-text">www.salongweb.se</div>
                    
                </div>

                <div className="bottom-rectangle-item">
                    <div className="info-text">
                        Lorem ipsum dolor sit amet, vulputate nunc. 
                        Auctor viverra. Ridiculus feugiat nunc porttitor
                        volut pat, acu quis torquent iaculis ultricies
                        massa, duis nun quis que amet.

                    </div>
                
                </div>

                



            </div>
        

        

   </div>

    

)


export default testCssFlex2;